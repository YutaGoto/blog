import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ImageFormat, StaticImage } from "gatsby-plugin-image"
import "./fontawesome"

export const PureBio: FC<{ data: GatsbyTypes.BioQuery }> = ({ data }) => {
  const author = data.site?.siteMetadata?.author
  const social = data.site?.siteMetadata?.social
  const formats: ImageFormat[] = ["auto", "webp", "avif"]

  return (
    <div className="mb-2 bg-gray-50 p-5 shadow-lg dark:bg-gray-800 sm:rounded-xl ">
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

        <div className="flex flex-1 flex-col space-y-3">
          <div>
            <p className="mb-2 text-3xl">{author?.name}</p>
            <p className="text-xl">{author?.summary}</p>
          </div>
          <div className="flex flex-1 space-x-6">
            {social?.map(s => (
              <a
                key={s?.name}
                href={s?.url}
                className="object-bottom"
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

export const Bio = () => {
  const data: GatsbyTypes.BioQuery = useStaticQuery<GatsbyTypes.BioQuery>(
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

  return <PureBio data={data} />
}

export default Bio
