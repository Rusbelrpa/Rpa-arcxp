import { CONTENT_BASE } from 'fusion:environment'

const resolve = (query) => {
  console.log(query)
  const requestUri = `${CONTENT_BASE}/content/v4/`
  if (query.hasOwnProperty('website_url')) {
    const url_req = `${requestUri}?website_url=${query['website_url']}&website=${query['arc-site']}`
    console.log(url_req)
    return url_req
  }
  throw new Error('content-nota content source requires a url')
}

export default {
  resolve,
  params: {
    website_url: 'text',
  },
}
