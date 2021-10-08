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
      <main className="p-2 has-background-white-ter">
        <div className="container" data-is-root-path={isRootPath}>
          {children}
        </div>
      </main>
      <footer className="footer has-background-grey-dark">
        <div className="content columns">
          <div className="column">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </div>
          <div className="column has-text-right has-text-grey-light">
            <a href="https://bulma.io">
              <img
                src="https://bulma.io/images/made-with-bulma.png"
                alt="Made with Bulma"
                width="128"
                height="24"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
