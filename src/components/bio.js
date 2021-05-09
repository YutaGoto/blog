/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./fontawesome"

const Bio = () => {
  const data = useStaticQuery(graphql`
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
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
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
              エンジニアです
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

export default Bio
