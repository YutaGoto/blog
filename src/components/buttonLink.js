import { Link } from "gatsby"
import * as React from "react"
import "./fontawesome"

export const ButtonLink = ({ text, linkTo, iconName, isLeft = true }) => (
  <Link
    className="box-border p-2 lg:mb-0 mb-1 border text-button dark:text-button-dark border-button dark:border-blue-700 hover:bg-button hover:text-main dark:hover:bg-button-dark dark:hover:text-main-dark"
    to={linkTo}
  >
    {isLeft && <i className={`fas fa-${iconName}`} aria-hidden="true" />}
    <span>{text}</span>
    {!isLeft && <i className={`fas fa-${iconName}`} aria-hidden="true" />}
  </Link>
)
