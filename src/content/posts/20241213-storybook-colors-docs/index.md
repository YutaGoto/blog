---
title: Storybookで色のドキュメントを作る
date: "2024-12-13T00:01:00.000Z"
tags: ["Storybook", "React", "アドベントカレンダー"]
---

これは [.ごっ！のアドベントカレンダー](https://adventar.org/calendars/10323) の13日目の記事です。

StorybookのColorPaletteを使用すると色の情報も併せてStorybookにまとめることができます。

Storybookの導入などについてはGet Startedを参照してください。

- https://storybook.js.org/docs/get-started/install

色のドキュメントは `.mdx` ファイルで管理します。以下のコードのように `<ColorPalette>`で`<ColorItem>`をラップします。

```mdx
{/* Colors.mdx */}

import { Meta, ColorPalette, ColorItem } from "@storybook/blocks";

<Meta title="Colors" />

<ColorPalette>
  <ColorItem
    title="theme.color.greyscale"
    subtitle="Some of the greys"
    colors={{ White: "#FFFFFF", Alabaster: "#F8F8F8", Concrete: "#F3F3F3" }}
  />
  <ColorItem
    title="theme.color.primary"
    subtitle="Coral"
    colors={{ WildWatermelon: "#FF4785" }}
  />
  <ColorItem
    title="theme.color.secondary"
    subtitle="Ocean"
    colors={{ DodgerBlue: "#1EA7FD" }}
  />
  <ColorItem
    title="theme.color.positive"
    subtitle="Green"
    colors={{
      Apple: "rgba(102,191,60,1)",
      Apple80: "rgba(102,191,60,.8)",
      Apple60: "rgba(102,191,60,.6)",
      Apple30: "rgba(102,191,60,.3)",
    }}
  />
  <ColorItem
    title="gradient"
    subtitle="Grayscale"
    colors={{
      Gradient: "linear-gradient(to right,white,black)",
    }}
  />
  <ColorItem
    title="gradient"
    subtitle="Grayscale"
    colors={["linear-gradient(65deg,white,black)"]}
  />
</ColorPalette>
```

この状態でStorybookを起動しアクセスすると、以下のようなページが表示されます。

<img width="720" alt="storybookのプレビュー" src="/assets/images/posts/20241213-storybook-colors-docs/storybookImage.png">

### Tailwind config のカラーテーマを使用する場合

単純にファイルのインポートで解決するはずです。Configの展開は Tailwindcssが用意している `resolveConfig` を使用すると簡単に呼び出すことができます。

```mdx
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

export const fullConfig = resolveConfig(tailwindConfig);
export const colors = fullConfig.theme.accentColor;

<ColorPalette>
  <ColorItem
    title="Background"
    subtitle="zinc-900"
    colors={{ base: colors.zinc[900] }}
  />
</ColorPalette>
```

## 参考

- Docs | Storybook: https://storybook.js.org/docs/api/doc-blocks/doc-block-colorpalette
- Configuration - Tailwind CSS: https://tailwindcss.com/docs/configuration#referencing-in-java-script
