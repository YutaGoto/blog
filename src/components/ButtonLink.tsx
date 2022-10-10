import Link from "next/link"
import React from "react"
import "./fontawesome"

interface ButtonLinkProps {
  text: string
  linkTo: string
  iconName: string
  rel: string
  isLeft?: boolean
}

export const ButtonLink = ({
  text,
  linkTo,
  iconName,
  rel,
  isLeft = true,
}: ButtonLinkProps) => (
  <Link
    className="mb-1 box-border border border-blue-400 p-2 text-blue-400 hover:bg-blue-400 hover:text-gray-900 dark:border-blue-700 dark:text-gray-100 dark:hover:bg-blue-700 dark:hover:text-gray-100 lg:mb-0"
    href={linkTo}
    rel={rel}
  >
    {isLeft && <i className={`fas fa-${iconName}`} aria-hidden="true" />}
    <span>{text}</span>
    {!isLeft && <i className={`fas fa-${iconName}`} aria-hidden="true" />}
  </Link>
)
