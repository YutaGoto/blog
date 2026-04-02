import type { ComponentProps } from "astro/types"
import Tag from "./Tag.astro"

type TagProps = ComponentProps<typeof Tag>

export default {
  component: Tag,
}

export const Default = {
  args: {
    tag: "デフォルト",
  } satisfies TagProps,
}

export const Active = {
  args: {
    tag: "デフォルト",
    active: true,
  } satisfies TagProps,
}
