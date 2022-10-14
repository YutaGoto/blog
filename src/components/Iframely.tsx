import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FC,
  useEffect,
  useState,
} from "react"

interface Props {
  htmlProps: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
}

interface Error {
  code: number
  message: string
}

interface HtmlText {
  __html: string
}

const KEY = "5ec56a7cc68fbfce44a071"

export const Iframely: FC<Props> = ({ htmlProps }) => {
  const [error, setError] = useState<Error | null>(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [html, setHtml] = useState<HtmlText>({
    __html: "<div />",
  })

  useEffect(() => {
    if (htmlProps && htmlProps.href) {
      fetch(
        `https://cdn.iframe.ly/api/iframely?url=${encodeURIComponent(
          htmlProps.href
        )}&key=${KEY}&iframe=1&omit_script=1`
      )
        .then(res => res.json())
        .then(
          res => {
            setIsLoaded(true)
            if (res.html) {
              setHtml({ __html: res.html })
            } else if (res.error) {
              setError({ code: res.error, message: res.message })
            }
          },
          error => {
            setIsLoaded(true)
            setError(error)
          }
        )
    } else {
      setError({ code: 400, message: "Provide url attribute for the element" })
    }
  }, [htmlProps])

  // useEffect(() => {
  //   window.iframely && window.iframely.load()
  // })

  if (error) {
    return (
      <div>
        Error: {error.code} - {error.message}
      </div>
    )
  } else if (!isLoaded) {
    return <div>Loading…</div>
  } else {
    return <div dangerouslySetInnerHTML={html} />
  }
}
