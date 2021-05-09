import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <nav className="navbar has-background-info-dark" role="navigation">
        <div className="navbar-brand">
          <Link className="navbar-item has-text-primary-light" to="/">
            {title}
          </Link>
        </div>
      </nav>
      <main className="m-2 has-background-white-ter">
        <div className="container" data-is-root-path={isRootPath}>
          {children}
        </div>
      </main>
      <footer className="footer has-background-grey-light">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
