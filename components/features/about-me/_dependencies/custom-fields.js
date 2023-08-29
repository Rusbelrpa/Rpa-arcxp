import PropTypes from 'prop-types'

export const customFields = PropTypes.shape({
  hierarChyLinks: PropTypes.contentConfig('navigation').tag({
    name: 'Editar navegación',
    group: 'Configuración de navegacion',
  }),
})
