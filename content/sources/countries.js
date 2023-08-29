const resolve = (query) => {
  const requestUri = `https://restcountries.com/v2/name/`
  if (query.hasOwnProperty('nameCountry'))
    return `${requestUri}${query.nameCountry}`

  throw new Error('movie-find content source requires a nameCountry')
}

export default {
  resolve,
  params: {
    nameCountry: 'text',
  },
}
