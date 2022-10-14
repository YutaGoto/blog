import React from "react"
import { AppProps } from "next/app"

// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// custom CSS styles
import "../style.scss"

// Highlighting for code blocks
import "prism-themes/themes/prism-atom-dark.css"

export default function BlogApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
