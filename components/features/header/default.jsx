import getProperties from 'fusion:properties'
import PropTypes from 'prop-types'
import { useAppContext } from 'fusion:context'
import './header.css'

const classes = {
  section: 'section',
  userDetails: 'userDetails',
  userName: 'userName',
  userLastName: 'userLastName',
  userAge: 'userAge',
  userBirthYear: 'userBirthYear',
  userPhoto: 'userPhoto',
}

const Header = ({ customFields }) => {
  const { isName, isLastName } = customFields

  const { arcSite } = useAppContext()
  const { name, lastName, years, photo, yearOfBirth } = getProperties(arcSite)

  console.log(photo)
  return (
    <section className={classes.section}>
      <img src={photo} alt="User Photo" id="userPhoto" />
      <div className={classes.userDetails}>
        <strong>{isName || name}</strong>
        <strong>{isLastName || lastName}</strong>
        <span>{years} Años</span>
        <span>Nacimiento {yearOfBirth}</span>
      </div>
    </section>
  )
}

Header.label = 'Header'

Header.propTypes = {
  customFields: PropTypes.shape({
    isName: PropTypes.string.tag({
      name: 'Nombres',
      description: 'Cambiar el nombre',
    }),
    isLastName: PropTypes.string.tag({
      name: 'Apellidos',
      description: 'cambiar el apellido',
    }),
  }),
}

export default Header
