import React from 'react'
import {toast} from 'react-toastify'
import {Link} from 'react-router-dom'
import Prismic from 'prismic-javascript'
import {apiEndpoint, accessToken, lang, linkResolver} from 'prismic-configuration'
import bodybuilder from 'bodybuilder'

// Helper function to convert Prismic Rich Text links to React Link components
export const customLink = (type, element, content, children, index) => {
  const data = element.data
  return data.link_type === 'Web' ? (
    <a key={index} href={data.url} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <Link to={linkResolver(data)} key={index}>
      {content}
    </Link>
  )
}

// Client method to query documents from the Prismic repo
export const Client = Prismic.client(apiEndpoint, {accessToken})

// Prismic language
export const PrismicLang = lang

export const showInfoNotification = (message) => {
  toast(message.tag ? message.tag : `${message}`.replace(/<[^>]*>?/gm, ''), {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    hideProgressBar: true,
    className: 'bg-info text-white border-left-0',
  })
}

export const showErrorNotification = (message) => {
  toast.error(message.tag ? message.tag : `${message}`.replace(/<[^>]*>?/gm, ''), {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    hideProgressBar: true,
    className: 'bg-warning text-white border-left-0',
  })
}

const generateFilter = (filter, body) => {
  let query = {}
  if (filter.operator === 'match') {
    body.addQuery('match', filter.field, filter.value)
  } else if (filter.operator === 'wildcard') {
    body.addQuery('wildcard', filter.field, `*${filter.value}*`)
  }
  return query
}

export const generateQuery = (filters) => {
  let body = bodybuilder()
  if (filters.length <= 1) {
    const filter = filters[0]
    generateFilter(filter, body)
  } else {
    filters.forEach((filter) => {
      generateFilter(filter, body)
    })
  }
  return body.build()
}
