import React, { FC } from "react"
import { graphql, Link, PageProps } from "gatsby"

import { Layout } from "../components"
import Seo from "../components/seo"

const NotFoundPage: FC<PageProps<GatsbyTypes.NotFoundQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site?.siteMetadata?.title || ""

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <div className="h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl mb-2">404: Not Found</h1>
          <Link to="/" className="underline">
            Go To Home
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFound {
    site {
      siteMetadata {
        title
      }
    }
  }
`
