import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {List} from 'immutable'
import PropTypes from 'prop-types'
import {connect, useDispatch} from 'react-redux'
import MoonLoader from 'react-spinners/MoonLoader'
import SearchCriteria from './Consultant/SearchCriteria/index'
import SearchResults from './Consultant/SearchResult/index'
import {generateQuery} from 'helpers/util'
import {searchConsultants} from 'api'
import {setLoadingStatus} from 'duck/actions/process'
import {setConsultantToDisplay} from 'duck/actions/consultant'
import ConsultantSearch from './Consultant/ConsultantSearch'
import {Card} from 'reactstrap'
import ScrollingMenu from './ConsultantNotes/components/ScrollingMenu'

export const ConsultantCenter = ({user, process}) => {
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
      searchConsultants(payload)
        .then((res) => {
          if (!res?.hasError) {
            setSeatchResults(res.hits['hits'])
            if (res.hits?.hits) {
              dispatch(setConsultantToDisplay(res.hits['hits'][0]._source.id))
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
          <ConsultantSearch />
          <Card className="mt-5 mb-5">
            <ScrollingMenu />
          </Card>
        </>
      )}
    </div>
  )
}

ConsultantCenter.propTypes = {
  user: PropTypes.object,
  process: PropTypes.object,
  setLoadingStatus: PropTypes.func,
}

const mapStateToProps = (state) => ({
  user: state.user,
  process: state.process,
})

const mapDispatchToProps = {setLoadingStatus}

export default connect(mapStateToProps, mapDispatchToProps)(ConsultantCenter)
