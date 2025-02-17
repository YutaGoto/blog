import TagList from "./TagList.astro"
import "remixicon/fonts/remixicon.css"

export default {
  component: TagList,
}

export const Default = {
  args: {
    tags: ["デフォルト", "デフォルト2"],
  },
}

export const Active = {
  args: {
    tags: ["デフォルト", "デフォルト2"],
    activeTag: "デフォルト",
  },
}
