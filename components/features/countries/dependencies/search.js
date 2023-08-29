import { useState } from 'react'

export const useCountrySearch = () => {
  const [countryData, setCountryData] = useState(null)
  const [loading, setLoading] = useState(false)

  const searchCountry = (searchInput) => {
    setLoading(true)
    const apiUrl = `https://restcountries.com/v2/name/${searchInput}`

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error de red - ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        setCountryData(data)
      })
      .catch((error) => {
        console.error('Hubo un error:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { countryData, loading, searchCountry }
}
