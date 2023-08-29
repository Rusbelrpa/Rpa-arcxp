import React, { useState } from 'react'
import { useCountrySearch } from '../dependencies/search'

const Search = () => {
  const { countryData, loading, searchCountry } = useCountrySearch()
  const [searchInput, setSearchInput] = useState('')

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSearchButtonClick = () => {
    searchCountry(searchInput)
  }

  return (
    <div>
      <div className="country-details">
        <input
          type="text"
          placeholder="Buscar país"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSearchButtonClick}>Buscar</button>
      </div>

      {loading && <p>Cargando...</p>}

      {countryData && (
        <div>
          <p>
            País: <strong>{countryData[0].name || ''}</strong>
          </p>
          <p>
            Capital: <strong>{countryData[0].capital || ''}</strong>
          </p>
          <p>
            Denominación: <strong>{countryData[0].demonym || ''}</strong>
          </p>
          <p>
            Población: <strong>{countryData[0].population || ''}</strong>
          </p>
          <p>
            Región: <strong>{countryData[0].region || ''}</strong>
          </p>
          <p>
            Subregión: <strong>{countryData[0].subregion || ''}</strong>
          </p>
          <p>
            Área: <strong>{countryData[0].area || ''}</strong>
          </p>
          <p>
            Código Numérico: <strong>{countryData[0].numericCode || ''}</strong>
          </p>
          <p>
            Gini: <strong>{countryData[0].gini || ''}</strong>
          </p>
          <p>
            Independiente?:{' '}
            <strong>{countryData[0].independent ? 'Sí' : 'No'}</strong>
          </p>
          <h2>Bandera</h2>
          <img
            src={countryData[0].flags?.png || ''}
            alt={`Bandera de ${countryData[0].name}`}
          />
        </div>
      )}
    </div>
  )
}

export default Search
