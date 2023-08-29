import React from 'react'
import { useContent } from 'fusion:content'
import { useAppContext } from 'fusion:context'
import { filterLinks } from './_dependencies/schema-filter'
import { customFields } from './_dependencies/custom-fields'
import './style.css'

const AboutMe = (props) => {
  const { globalContent } = useAppContext()
  const { customFields: { hierarChyLinks } = {} } = props

  console.log('123==========================')
  console.log(hierarChyLinks)
  console.log('456==========================')

  const {
    contentService: serviceLinks = '',
    contentConfigValues: valuesLinks = {},
  } = hierarChyLinks || {}

  const dataLinks =
    useContent({
      source: serviceLinks,
      query: valuesLinks,
      filter: filterLinks,
    }) || {}

  const { children: navLinks = [] } = dataLinks

  // const response = useContent({
  //   source: 'about-me',
  //   query: {
  //     website_url:
  //       '/learning-rp/about-me/a-medida-que-aprendia-lenguajes-como-java-y-python-descubri-mi-pasion-por-crear-software-rp/',
  //   },
  // })

  console.log(globalContent)

  return (
    <div className="wrapper">
      <div className="name">{globalContent?.headlines?.meta_title}</div>
      <img
        className="section-image"
        src={globalContent?.content_elements[1]?.url}
        alt=""
      />
      <div className="content">
        <h2>{globalContent?.headlines?.basic}</h2>
        <p>{globalContent?.content_elements[0]?.content}</p>
        <p>{globalContent?.content_elements[2]?.content}</p>
        <ul className="social">
          {navLinks.map((navItem) => (
            <li key={navItem._id}>
              <a
                itemProp="url"
                href={navItem.url}
                target="_blank"
                rel="noopener">
                {navItem.display_name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

AboutMe.label = 'About-me'

AboutMe.propTypes = {
  customFields,
}

export default AboutMe
