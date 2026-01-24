# Project Context: YutaGoto / blog

このファイルは、AIアシスタント（Gemini）にプロジェクトの文脈、ルール、好みを共有するためのドキュメントです。

## 1. プロジェクト概要

エンジニア「.ごっち」の個人日記・ブログシステム。
シンプルでパフォーマンスが高く、メンテナンスしやすい構成を目指しています。

## 2. 技術スタック

- Runtime: Bun
- Framework: Astro
- Rendering: SSR (Server Side Rendering) <!-- または SSG (Static Site Generation) -->
- Language: TypeScript / JavaScript
- Styling: UnoCSS
- Testing: Playwright (E2E)
- Deployment: Google Cloud Run

## 3. コーディング規約 & 設計思想

- 型安全性: TypeScriptの型定義を厳格に行う（`any` は原則禁止）。
- コンポーネント: 関数コンポーネントを使用。ロジックと表示の分離を意識する。
- スタイリング: Tailwind CSSのユーティリティクラスを優先する。

## 4. ディレクトリ構造のルール

- `/src/pages`: ページルーティング
- `/src/layouts`: 共通レイアウトコンポーネント
- `/src/components`: 再利用可能なUIコンポーネント
- `/src/utils`: ユーティリティ関数や定数
- `/src/content`: 記事のMarkdownファイル（もしファイル管理なら）

## 5. AIアシスタントへの指示 (Meta Instructions)

- 言語: 日本語で回答してください。
- コード: 変更が必要な場合は、ファイルパスを含めたUnified Diff形式、またはコピーしやすいコードブロックで提示してください。
- アプローチ: 既存のコードスタイルを尊重しつつ、モダンで可読性の高い実装を提案してください。
- 安全性: セキュリティリスク（XSSなど）がないか常に考慮してください。
