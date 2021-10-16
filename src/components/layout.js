import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <nav
        className="sticky top-0 h-10 bg-blue-200 dark:bg-blue-900 flex"
        role="navigation"
      >
        <div className="flex-none">
          <Link className="text-gray-100 text-xl pl-2" to="/">
            {title}
          </Link>
        </div>
      </nav>
      <main className="container mt-1 mx-auto w-full">
        <div data-is-root-path={isRootPath}>
          {children}
        </div>
      </main>
      <footer className="h-10 bg-gray-300 dark:bg-gray-600 flex">
        <div class="flex-1 text-gray-100">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
