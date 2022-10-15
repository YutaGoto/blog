import React, { FC } from "react"
import { Helmet } from "react-helmet-async"
import { siteMetadata } from "../constants/siteMetaData"

type Props = {
  description?: string
  lang?: string
  meta?: (
    | { name: string; content: string }
    | { property: string; content: string }
  )[]
  title?: string
}

const Seo: FC<Props> = ({
  description = ``,
  lang = `ja`,
  meta = [],
  title = "",
}) => {
  const metaDescription = description || siteMetadata.description
  const defaultTitle = siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ""}
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
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.social[0].name || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default Seo
