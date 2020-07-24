import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `viewport`,
          content: `minimum-scale=1, initial-scale=1, width=device-width`,
        },
      ].concat(meta)}
    >
      <link
        rel="preload"
        as="style"
        onload="this.onload=null;this.rel='preload"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      {/* <noscript>
        {" "}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </noscript> */}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: `Gatsby Stripe eCommerce`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
