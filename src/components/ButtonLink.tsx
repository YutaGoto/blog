import { Link } from "gatsby"
import * as React from "react"
import "./fontawesome"

export const ButtonLink = ({ text, linkTo, iconName, rel, isLeft = true }) => (
  <Link
    className="box-border p-2 lg:mb-0 mb-1 border text-blue-400 dark:text-gray-100 border-blue-400 dark:border-blue-700 hover:bg-blue-400 hover:text-gray-900 dark:hover:bg-blue-700 dark:hover:text-gray-100"
    to={linkTo}
    rel={rel}
  >
    {isLeft && <i className={`fas fa-${iconName}`} aria-hidden="true" />}
    <span>{text}</span>
    {!isLeft && <i className={`fas fa-${iconName}`} aria-hidden="true" />}
  </Link>
)
