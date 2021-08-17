import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./fontawesome"

export const PureBio = ({ data }) => {
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="box">
      <div className="media">
        <div className="media-left">
          <StaticImage
            className="bio-avatar"
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/profile-pic.png"
            width={50}
            height={50}
            quality={95}
            alt="Profile picture"
          />
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{author.name}</strong>
              <br />
              {author.summary}
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              {social.map(s => (
                <a
                  key={s.name}
                  href={s.url}
                  className="level-item"
                  area-label={s.name}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="icon">
                    <i className={`fab fa-${s.name}`} aria-hidden="true"></i>
                  </span>
                </a>
              ))}
            </div>
          </nav>
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
