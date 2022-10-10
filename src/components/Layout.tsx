import React, { FC } from "react"
import Link from "next/link"

interface Props {
  title: string
}

export const Layout: FC<Props> = ({ title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100">
      <nav
        className="sticky top-0 z-50 flex h-10 bg-blue-300 dark:bg-blue-900"
        role="navigation"
      >
        <div>
          <Link
            className="pl-2 text-3xl text-gray-900 dark:text-gray-100"
            href="/"
          >
            {title}
          </Link>
        </div>
      </nav>
      <main className="container mx-auto mt-1 w-11/12">
        <div data-is-root-path={isRootPath}>{children}</div>
      </main>
      <footer className="flex h-10 bg-gray-300 dark:bg-gray-400">
        <div className="flex-1 text-gray-900 dark:text-gray-100">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
      </footer>
    </div>
  )
}
