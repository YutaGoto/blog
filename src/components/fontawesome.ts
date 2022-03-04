import { dom, library } from "@fortawesome/fontawesome-svg-core"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

library.add(faGithub, faTwitter, faAngleRight, faAngleLeft)
dom.watch()
