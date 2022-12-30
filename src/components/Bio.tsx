import React from "react"
// import "./fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {brands} from "@fortawesome/fontawesome-svg-core/import.macro"
import profile from "../../public/profile.json"

export const Bio = () => {
  return (
    <div className="mb-2 bg-gray-50 p-5 shadow-lg dark:bg-gray-800 sm:rounded-xl ">
      <div className="flex space-x-4">
        <div className="flex-none">
          <img
            className="bio-avatar h-48 w-48 object-contain"
            src="/assets/images/profile-pic.png"
            alt="ProfilePicture"
          />
        </div>

        <div className="flex flex-1 flex-col space-y-3">
          <div>
            <p className="mb-2 text-3xl">{profile.author.name}</p>
            <p className="text-xl">{profile.author.summary}</p>
          </div>
          <div className="flex flex-1 space-x-6">
            {profile.social?.map(s => (
              <a
                key={s.name}
                href={s.url}
                className="object-bottom"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="icon">
                  <FontAwesomeIcon icon="user" size="lg" />
                  <i className={`fab fa-${s?.name} fa-lg`} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
