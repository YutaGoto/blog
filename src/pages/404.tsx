import React, { FC } from "react"
import Link from "next/link"

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
      <div className="flex h-screen items-center justify-center text-center">
        <div>
          <h1 className="mb-2 text-4xl">404: Not Found</h1>
          <Link href="/" className="underline">
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
