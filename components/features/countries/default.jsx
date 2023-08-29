import React from 'react'
import PropTypes from 'prop-types'
import { useAppContext } from 'fusion:context'
import { useContent } from 'fusion:content'
import Search from './children/search'
import './countries.css'

const classes = {
  off: 'off',
}

const Countries = ({ customFields }) => {
  const { globalContent } = useAppContext()

  const { isNameContry, isActiveSearch } = customFields
  const response = useContent({
    source: 'countries',
    query: {
      nameCountry: isNameContry,
    },
  })

  if ((!response || !response[0]) && (!globalContent || !globalContent[0])) {
    return <h1>No hay datos</h1>
  }

  const countryData = globalContent[0] || response[0] || {}

  return (
    <div className="country-details">
      <h1>Paises</h1>
      {isActiveSearch && <Search />}

      <div className={isActiveSearch ? classes.off : ''}>
        {countryData && (
          <>
            <p>
              País: <strong>{countryData?.name || ''}</strong>
            </p>
            <p>
              Capital: <strong>{countryData?.capital || ''}</strong>
            </p>
            <p>
              Denominación: <strong>{countryData?.demonym || ''}</strong>
            </p>
            <p>
              Población: <strong>{countryData?.population || ''}</strong>
            </p>
            <p>
              Región: <strong>{countryData?.region || ''}</strong>
            </p>
            <p>
              Subregión: <strong>{countryData?.subregion || ''}</strong>
            </p>
            <p>
              Área: <strong>{countryData?.area || ''}</strong>
            </p>
            <p>
              Código Numérico: <strong>{countryData?.numericCode || ''}</strong>
            </p>
            <p>
              Gini: <strong>{countryData?.gini || ''}</strong>
            </p>
            <p>
              Independiente?:{' '}
              <strong>{countryData?.independent ? 'Sí' : 'No'}</strong>
            </p>
            <h2>Bandera</h2>
            <img
              src={countryData?.flags?.png || ''}
              alt={`Bandera de ${countryData?.name}`}
            />
          </>
        )}
      </div>
    </div>
  )
}

Countries.label = {
  en: 'Countries',
  es: 'Paises',
}

Countries.propTypes = {
  customFields: PropTypes.shape({
    isNameContry: PropTypes.string.tag({
      name: 'Contry',
      group: 'Configuración',
      description: 'Buscar país',
    }),
    isActiveSearch: PropTypes.boolean.tag({
      name: 'Search',
      group: 'Configuración',
      description: 'Activar el Buscador ',
      defaultValue: false,
    }),
  }),
}

export default Countries
