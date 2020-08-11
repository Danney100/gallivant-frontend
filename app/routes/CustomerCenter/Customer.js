import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {List} from 'immutable'
import {useDispatch, useSelector} from 'react-redux'
import MoonLoader from 'react-spinners/MoonLoader'

import SearchCriteria from './Customers/components/SearchCriteria/index'
import SearchResults from './Customers/components/SearchResult/index'
import {generateQuery} from 'helpers/util'
import {searchCustomers} from 'api'
import {setLoadingStatus} from 'duck/actions/process'
import {setCustomerToDisplay} from 'duck/actions/customer'
import CustomerSearch from './Customers/components/CustomerSearch/index'
import Navs from './Customers/components/Navs/index'

export const CustomerCenter = () => {
  const user = useSelector(({user}) => user)
  const process = useSelector(({process}) => process)

  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()
  const [filters, setFilters] = useState(List())
  const [searchResults, setSeatchResults] = useState([])

  const handleApplyFilter = (data) => {
    setFilters(filters.push({id: Date.now(), ...data}))
  }

  const clearFilter = (id) => {
    let index = filters.findIndex((filter) => filter.id === id)
    const temp = filters.remove(index)
    setFilters(temp)
  }

  const resetFilters = () => {
    setFilters(List())
  }

  const handleSearch = () => {
    if (filters.size) {
      let query = generateQuery(filters.toJS())
      const token = user.get('token')
      const payload = {
        data: {
          query: query['query'],
        },
        token: token,
      }
      dispatch(setLoadingStatus(true))
      searchCustomers(payload)
        .then((res) => {
          if (!res?.hasError) {
            setSeatchResults(res.hits['hits'])
            if (res.hits?.hits) {
              dispatch(setCustomerToDisplay(res.hits['hits'][0]._source.id))
            }
          } else {
            setSeatchResults([])
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          dispatch(setLoadingStatus(false))
        })
    }
  }

  const isLoading = process.get('isLoading')

  return (
    <div>
      <SearchCriteria
        register={register}
        applyFilter={handleApplyFilter}
        handleSubmit={handleSubmit}
        filters={filters.toJS()}
        clearFilter={clearFilter}
        resetFilters={resetFilters}
        handleSearch={handleSearch}
      />
      <div className="d-flex justify-content-center">
        <MoonLoader size={75} color={'#de8b6d'} loading={isLoading} />
      </div>
      {!isLoading && (
        <>
          <SearchResults searchResults={searchResults} />
          <CustomerSearch />
          <Navs />
        </>
      )}
    </div>
  )
}

export default CustomerCenter
