import type { ComponentProps } from "astro/types"
import TagList from "./TagList.astro"
import "remixicon/fonts/remixicon.css"

type TagListProps = ComponentProps<typeof TagList>

export default {
  component: TagList,
}

export const Default = {
  args: {
    tags: ["デフォルト", "デフォルト2"],
  } satisfies TagListProps,
}

export const Active = {
  args: {
    tags: ["デフォルト", "デフォルト2"],
    activeTag: "デフォルト",
  } satisfies TagListProps,
}
