import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./fontawesome"

export const PureBio = ({ data }) => {
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="px-4 py-10 bg-card dark:bg-card-dark shadow-lg sm:rounded-xl sm:p-5">
      <div className="flex space-x-4">
        <div className="flex-none">
          <StaticImage
            className="bio-avatar"
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/profile-pic.png"
            width={180}
            height={180}
            quality={95}
            alt="Profile picture"
          />
        </div>

        <div className="flex-1 flex flex-col space-y-3">
          <div>
            <p className="text-3xl mb-2">{author.name}</p>
            <p className="text-xl">{author.summary}</p>
          </div>
          <div className="flex-1 flex space-x-6">
            {social.map(s => (
              <a
                key={s.name}
                href={s.url}
                className="object-bottom"
                area-label={s.name}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="icon">
                  <i
                    className={`fab fa-${s.name} fa-lg`}
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

export const Bio = () => (
  <StaticQuery
    query={graphql`
      query BioQuery {
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
    `}
    render={data => <PureBio data={data} />}
  />
)
