import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ImageFormat, StaticImage } from "gatsby-plugin-image"
import "./fontawesome"

export const Bio: FC = () => {
  const data = useStaticQuery<GatsbyTypes.BioQuery>(
    graphql`
      query Bio {
        site {
          siteMetadata {
            author {
              name
              summary
            }
            social {
              name
              url
            }
          }
        }
      }
    `
  )

  const author = data.site?.siteMetadata?.author
  const social = data.site?.siteMetadata?.social
  const formats: ImageFormat[] = ["auto", "webp", "avif"]

  return (
    <div className="px-4 py-10 bg-gray-50 dark:bg-gray-800 shadow-lg sm:rounded-xl sm:p-5">
      <div className="flex space-x-4">
        <div className="flex-none">
          <StaticImage
            className="bio-avatar"
            layout="fixed"
            formats={formats}
            src="../images/profile-pic.png"
            width={180}
            height={180}
            quality={95}
            alt="Profile picture"
          />
        </div>

        <div className="flex-1 flex flex-col space-y-3">
          <div>
            <p className="text-3xl mb-2">{author?.name}</p>
            <p className="text-xl">{author?.summary}</p>
          </div>
          <div className="flex-1 flex space-x-6">
            {social?.map(s => (
              <a
                key={s?.name}
                href={s?.url}
                className="object-bottom"
                area-label={s?.name}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="icon">
                  <i
                    className={`fab fa-${s?.name} fa-lg`}
                    aria-hidden="true"
                  ></i>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
