import Tag from "./Tag.astro"

export default {
  component: Tag,
}

export const Default = {
  args: {
    tag: "デフォルト",
  },
}

export const Active = {
  args: {
    tag: "デフォルト",
    active: true,
  },
}
