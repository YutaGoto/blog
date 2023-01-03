import { dom, library } from "@fortawesome/fontawesome-svg-core"
import { fab, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import {
  fas,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons"

library.add(fab, fas, faGithub, faTwitter, faAngleRight, faAngleLeft)
dom.watch()
