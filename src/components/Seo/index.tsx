/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type MetaData = {
  [key: string]: string | number
}

interface SeoProps {
  title: string
  description?: string
  lang?: string
  meta?: MetaData[]
}

interface Data {
  site: {
    siteMetadata: {
      title: string
      description?: string
      author?: string
    }
  }
}

const SEO: React.FC<SeoProps> = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery<Data>(
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

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const metaDescription: string = description || site.siteMetadata.description!

  const defaultMeta: MetaData[] = [
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
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      content: site.siteMetadata.author!,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  const [metaData, setMetaData] = useState<MetaData[]>(defaultMeta)

  useEffect(() => {
    if (meta !== undefined) {
      setMetaData(prev => [...prev, ...meta])
    }
  }, [meta])

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metaData}
    />
  )
}

SEO.defaultProps = {
  lang: `ru`,
  meta: [],
  description: ``,
}

export default SEO
