const schemaName = 'navigation'
const params = [
  {
    name: 'hierarchy',
    displayName: 'Jerarquía',
    type: 'text',
  },
]

const resolve = ({ hierarchy, 'arc-site': arcSite }) => {
  const queryParams = []
  queryParams.push(`hierarchy=${hierarchy || 'default'}`)
  queryParams.push(`website=${arcSite}`)

  return `/site/v3/navigation/${arcSite}/?${queryParams.join('&')}`
}

const source = {
  resolve,
  params,
  schemaName,
  ttl: 500,
}

export default source
