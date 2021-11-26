import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="bg-main dark:bg-main-dark text-main dark:text-main-dark">
      <nav
        className="sticky top-0 h-10 bg-nav dark:bg-nav-dark flex z-50"
        role="navigation"
      >
        <div>
          <Link className="text-main dark:text-main-dark text-3xl pl-2" to="/">
            {title}
          </Link>
        </div>
      </nav>
      <main className="container mt-1 mx-auto w-full">
        <div data-is-root-path={isRootPath}>{children}</div>
      </main>
      <footer className="h-10 bg-footer dark:bg-footer-dark flex">
        <div className="flex-1 text-main dark:text-main-dark">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
