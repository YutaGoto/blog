declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"posts": {
"20140123-卒業研究の報告/index.md": {
  id: "20140123-卒業研究の報告/index.md",
  slug: "20140123-卒業研究の報告",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20140315-firefoxosハッカソンで作ったもの/index.md": {
  id: "20140315-firefoxosハッカソンで作ったもの/index.md",
  slug: "20140315-firefoxosハッカソンで作ったもの",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20140503-スケッチサイクリング2014spring/index.md": {
  id: "20140503-スケッチサイクリング2014spring/index.md",
  slug: "20140503-スケッチサイクリング2014spring",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20140518-scratchday-hakodate-2014-を手伝っていた/index.md": {
  id: "20140518-scratchday-hakodate-2014-を手伝っていた/index.md",
  slug: "20140518-scratchday-hakodate-2014-を手伝っていた",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20140626-arduino勉強会-in-ハコダテ-vol-3-に参加した/index.md": {
  id: "20140626-arduino勉強会-in-ハコダテ-vol-3-に参加した/index.md",
  slug: "20140626-arduino勉強会-in-ハコダテ-vol-3-に参加した",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20140714-奥尻の旅/index.md": {
  id: "20140714-奥尻の旅/index.md",
  slug: "20140714-奥尻の旅",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20140802-一人scratchワークショップ/index.md": {
  id: "20140802-一人scratchワークショップ/index.md",
  slug: "20140802-一人scratchワークショップ",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20140830-女子中高生のための情報-メディア工房2014を訪ねてみて/index.md": {
  id: "20140830-女子中高生のための情報-メディア工房2014を訪ねてみて/index.md",
  slug: "20140830-女子中高生のための情報-メディア工房2014を訪ねてみて",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20140920-卒業研究の進捗/index.md": {
  id: "20140920-卒業研究の進捗/index.md",
  slug: "20140920-卒業研究の進捗",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20141106-超重要参考文献/index.md": {
  id: "20141106-超重要参考文献/index.md",
  slug: "20141106-超重要参考文献",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20141116-そういえば-アカデミックリンク/index.md": {
  id: "20141116-そういえば-アカデミックリンク/index.md",
  slug: "20141116-そういえば-アカデミックリンク",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20141202-singapore-trip-day1/index.md": {
  id: "20141202-singapore-trip-day1/index.md",
  slug: "20141202-singapore-trip-day1",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20141202-singapore-trip-day2/index.md": {
  id: "20141202-singapore-trip-day2/index.md",
  slug: "20141202-singapore-trip-day2",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20141204-singapore-trip-day3/index.md": {
  id: "20141204-singapore-trip-day3/index.md",
  slug: "20141204-singapore-trip-day3",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20141205-singapore-trip-day4-and-more/index.md": {
  id: "20141205-singapore-trip-day4-and-more/index.md",
  slug: "20141205-singapore-trip-day4-and-more",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20141206-singapore-trip-α/index.md": {
  id: "20141206-singapore-trip-α/index.md",
  slug: "20141206-singapore-trip-α",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20150102-2014を振り返る-振り返らない/index.md": {
  id: "20150102-2014を振り返る-振り返らない/index.md",
  slug: "20150102-2014を振り返る-振り返らない",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20150106-高校時代を振り返る/index.md": {
  id: "20150106-高校時代を振り返る/index.md",
  slug: "20150106-高校時代を振り返る",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20150112-大学1年を振り返る/index.md": {
  id: "20150112-大学1年を振り返る/index.md",
  slug: "20150112-大学1年を振り返る",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20150121-大学2年を振り返る/index.md": {
  id: "20150121-大学2年を振り返る/index.md",
  slug: "20150121-大学2年を振り返る",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20150211-大学3年前期を振り返る/index.md": {
  id: "20150211-大学3年前期を振り返る/index.md",
  slug: "20150211-大学3年前期を振り返る",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20150222-大学3年後期を振り返る/index.md": {
  id: "20150222-大学3年後期を振り返る/index.md",
  slug: "20150222-大学3年後期を振り返る",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20150307-大学4年前期を振り返る/index.md": {
  id: "20150307-大学4年前期を振り返る/index.md",
  slug: "20150307-大学4年前期を振り返る",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20150326-大学4年後期を振り返る/index.md": {
  id: "20150326-大学4年後期を振り返る/index.md",
  slug: "20150326-大学4年後期を振り返る",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20150327-引越旅行-仙台-宇都宮/index.md": {
  id: "20150327-引越旅行-仙台-宇都宮/index.md",
  slug: "20150327-引越旅行-仙台-宇都宮",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20151121-surface-pro-4-発売記念-アンバサダーキックオフイベント-に参加してきた/index.md": {
  id: "20151121-surface-pro-4-発売記念-アンバサダーキックオフイベント-に参加してきた/index.md",
  slug: "20151121-surface-pro-4-発売記念-アンバサダーキックオフイベント-に参加してきた",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20151230-2015年をすごく簡単に振り返る/index.md": {
  id: "20151230-2015年をすごく簡単に振り返る/index.md",
  slug: "20151230-2015年をすごく簡単に振り返る",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20161204-podcasts/index.md": {
  id: "20161204-podcasts/index.md",
  slug: "20161204-podcasts",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20161218-botkitを使って社内slackで遊んでいるおはなし/index.md": {
  id: "20161218-botkitを使って社内slackで遊んでいるおはなし/index.md",
  slug: "20161218-botkitを使って社内slackで遊んでいるおはなし",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20161226-2016年の振り返り/index.md": {
  id: "20161226-2016年の振り返り/index.md",
  slug: "20161226-2016年の振り返り",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20170107-mediumに移行/index.md": {
  id: "20170107-mediumに移行/index.md",
  slug: "20170107-mediumに移行",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20170123-b型インフルエンザ/index.md": {
  id: "20170123-b型インフルエンザ/index.md",
  slug: "20170123-b型インフルエンザ",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20170501-mastodonをraspberrypiで立ち上げようとしたお話-失敗/index.md": {
  id: "20170501-mastodonをraspberrypiで立ち上げようとしたお話-失敗/index.md",
  slug: "20170501-mastodonをraspberrypiで立ち上げようとしたお話-失敗",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20170511-windowsでmastodonを動かしてみようとした話-微妙に失敗/index.md": {
  id: "20170511-windowsでmastodonを動かしてみようとした話-微妙に失敗/index.md",
  slug: "20170511-windowsでmastodonを動かしてみようとした話-微妙に失敗",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20170512-dockerでrailsプロジェクトを作ってみた/index.md": {
  id: "20170512-dockerでrailsプロジェクトを作ってみた/index.md",
  slug: "20170512-dockerでrailsプロジェクトを作ってみた",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20170516-docker-composeでphp7を動かしてみる/index.md": {
  id: "20170516-docker-composeでphp7を動かしてみる/index.md",
  slug: "20170516-docker-composeでphp7を動かしてみる",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20170519-docker-compose-で-django-プロジェクトを作ってみる/index.md": {
  id: "20170519-docker-compose-で-django-プロジェクトを作ってみる/index.md",
  slug: "20170519-docker-compose-で-django-プロジェクトを作ってみる",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20170521-docker-compose-で-python-を動かすの巻/index.md": {
  id: "20170521-docker-compose-で-python-を動かすの巻/index.md",
  slug: "20170521-docker-compose-で-python-を動かすの巻",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20170531-django-を使って作っていく-その1/index.md": {
  id: "20170531-django-を使って作っていく-その1/index.md",
  slug: "20170531-django-を使って作っていく-その1",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20170602-django-を使って作っていく-その2/index.md": {
  id: "20170602-django-を使って作っていく-その2/index.md",
  slug: "20170602-django-を使って作っていく-その2",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20170606-django-を使って作っていく-その3/index.md": {
  id: "20170606-django-を使って作っていく-その3/index.md",
  slug: "20170606-django-を使って作っていく-その3",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20170612-django-を使って作っていく-その4/index.md": {
  id: "20170612-django-を使って作っていく-その4/index.md",
  slug: "20170612-django-を使って作っていく-その4",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20170616-django-を使って作っていく-その5/index.md": {
  id: "20170616-django-を使って作っていく-その5/index.md",
  slug: "20170616-django-を使って作っていく-その5",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20170905-25-years-old/index.md": {
  id: "20170905-25-years-old/index.md",
  slug: "20170905-25-years-old",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20171009-hanami-frameworks/index.md": {
  id: "20171009-hanami-frameworks/index.md",
  slug: "20171009-hanami-frameworks",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20171205-長年使用しているusbメモリ/index.md": {
  id: "20171205-長年使用しているusbメモリ/index.md",
  slug: "20171205-長年使用しているusbメモリ",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20171227-2017年振り返り/index.md": {
  id: "20171227-2017年振り返り/index.md",
  slug: "20171227-2017年振り返り",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20180216-ひさびさscratchやってみた/index.md": {
  id: "20180216-ひさびさscratchやってみた/index.md",
  slug: "20180216-ひさびさscratchやってみた",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20180905-26-years-old/index.md": {
  id: "20180905-26-years-old/index.md",
  slug: "20180905-26-years-old",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20181111-スライドテンプレを作ってみた/index.md": {
  id: "20181111-スライドテンプレを作ってみた/index.md",
  slug: "20181111-スライドテンプレを作ってみた",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20181117-こいつを動かしてみた/index.md": {
  id: "20181117-こいつを動かしてみた/index.md",
  slug: "20181117-こいつを動かしてみた",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20181206-アイマスハッカソン2018in京都を振り返り/index.md": {
  id: "20181206-アイマスハッカソン2018in京都を振り返り/index.md",
  slug: "20181206-アイマスハッカソン2018in京都を振り返り",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20181206-チャンネルがいっぱい/index.md": {
  id: "20181206-チャンネルがいっぱい/index.md",
  slug: "20181206-チャンネルがいっぱい",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20181216-circleci-orbs-ミニハッカソンに行ってきた/index.md": {
  id: "20181216-circleci-orbs-ミニハッカソンに行ってきた/index.md",
  slug: "20181216-circleci-orbs-ミニハッカソンに行ってきた",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20181225-今日誕生日のアイドルを出力するcircleci-orbをつくったお話/index.md": {
  id: "20181225-今日誕生日のアイドルを出力するcircleci-orbをつくったお話/index.md",
  slug: "20181225-今日誕生日のアイドルを出力するcircleci-orbをつくったお話",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20183027-2018年振り返り/index.md": {
  id: "20183027-2018年振り返り/index.md",
  slug: "20183027-2018年振り返り",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190101-2019でやりたいこととか/index.md": {
  id: "20190101-2019でやりたいこととか/index.md",
  slug: "20190101-2019でやりたいこととか",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190104-今日誕生日のアイドルを取得するcircleci-orbに-slack通知機能を追加したお話/index.md": {
  id: "20190104-今日誕生日のアイドルを取得するcircleci-orbに-slack通知機能を追加したお話/index.md",
  slug: "20190104-今日誕生日のアイドルを取得するcircleci-orbに-slack通知機能を追加したお話",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190112-splatoon2のステージ情報を取得するコマンドを作っている/index.md": {
  id: "20190112-splatoon2のステージ情報を取得するコマンドを作っている/index.md",
  slug: "20190112-splatoon2のステージ情報を取得するコマンドを作っている",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190113-reactnativeのハンズオンに参加してきました/index.md": {
  id: "20190113-reactnativeのハンズオンに参加してきました/index.md",
  slug: "20190113-reactnativeのハンズオンに参加してきました",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190201-おひとりesaとおひとりslackを運用して/index.md": {
  id: "20190201-おひとりesaとおひとりslackを運用して/index.md",
  slug: "20190201-おひとりesaとおひとりslackを運用して",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190203-todays-idol-travis-ciを作ってみた/index.md": {
  id: "20190203-todays-idol-travis-ciを作ってみた/index.md",
  slug: "20190203-todays-idol-travis-ciを作ってみた",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190212-im-sparqlをtypescriptでたたいてみる/index.md": {
  id: "20190212-im-sparqlをtypescriptでたたいてみる/index.md",
  slug: "20190212-im-sparqlをtypescriptでたたいてみる",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190217-wakatimeで自分のコーディングを数値化してみた/index.md": {
  id: "20190217-wakatimeで自分のコーディングを数値化してみた/index.md",
  slug: "20190217-wakatimeで自分のコーディングを数値化してみた",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190225-gitlab-ciを触ってみる/index.md": {
  id: "20190225-gitlab-ciを触ってみる/index.md",
  slug: "20190225-gitlab-ciを触ってみる",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190226-お世話になってるツール-サービス紹介記事/index.md": {
  id: "20190226-お世話になってるツール-サービス紹介記事/index.md",
  slug: "20190226-お世話になってるツール-サービス紹介記事",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190330-lineスタンプつくりました/index.md": {
  id: "20190330-lineスタンプつくりました/index.md",
  slug: "20190330-lineスタンプつくりました",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190408-技術書典6に寄稿しました/index.md": {
  id: "20190408-技術書典6に寄稿しました/index.md",
  slug: "20190408-技術書典6に寄稿しました",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190419-yougoto-rubykaigi-2019-day1/index.md": {
  id: "20190419-yougoto-rubykaigi-2019-day1/index.md",
  slug: "20190419-yougoto-rubykaigi-2019-day1",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190420-yougoto-rubykaigi-2019-day2/index.md": {
  id: "20190420-yougoto-rubykaigi-2019-day2/index.md",
  slug: "20190420-yougoto-rubykaigi-2019-day2",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190421-yougoto-rubykaigi-2019-day3/index.md": {
  id: "20190421-yougoto-rubykaigi-2019-day3/index.md",
  slug: "20190421-yougoto-rubykaigi-2019-day3",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190501-faker-rubimasを作ってみた/index.md": {
  id: "20190501-faker-rubimasを作ってみた/index.md",
  slug: "20190501-faker-rubimasを作ってみた",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190510-splatoon2のステージ情報を取得するコマンドを作っている-続き/index.md": {
  id: "20190510-splatoon2のステージ情報を取得するコマンドを作っている-続き/index.md",
  slug: "20190510-splatoon2のステージ情報を取得するコマンドを作っている-続き",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190514-esaで日記をつけている/index.md": {
  id: "20190514-esaで日記をつけている/index.md",
  slug: "20190514-esaで日記をつけている",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190601-ruby-pythonクイズ/index.md": {
  id: "20190601-ruby-pythonクイズ/index.md",
  slug: "20190601-ruby-pythonクイズ",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190601-rubykaigi-に来ている-day1/index.md": {
  id: "20190601-rubykaigi-に来ている-day1/index.md",
  slug: "20190601-rubykaigi-に来ている-day1",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190601-rubykaigi-に来ている-day2/index.md": {
  id: "20190601-rubykaigi-に来ている-day2/index.md",
  slug: "20190601-rubykaigi-に来ている-day2",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190602-rubykaigi-に来ている-day3/index.md": {
  id: "20190602-rubykaigi-に来ている-day3/index.md",
  slug: "20190602-rubykaigi-に来ている-day3",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190617-shinjuku-mokumokuでgrpcチュートリアルをやった/index.md": {
  id: "20190617-shinjuku-mokumokuでgrpcチュートリアルをやった/index.md",
  slug: "20190617-shinjuku-mokumokuでgrpcチュートリアルをやった",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20190819-hello-world-ktor/index.md": {
  id: "20190819-hello-world-ktor/index.md",
  slug: "20190819-hello-world-ktor",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20191019-im-sparqlをslackのコマンドで叩くやつを作る/index.md": {
  id: "20191019-im-sparqlをslackのコマンドで叩くやつを作る/index.md",
  slug: "20191019-im-sparqlをslackのコマンドで叩くやつを作る",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20191208-アイマスハッカソンでミリシタのuiを作ったお話/index.md": {
  id: "20191208-アイマスハッカソンでミリシタのuiを作ったお話/index.md",
  slug: "20191208-アイマスハッカソンでミリシタのuiを作ったお話",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20191219-青春18きっぷ東北北海道の陣-その1/index.md": {
  id: "20191219-青春18きっぷ東北北海道の陣-その1/index.md",
  slug: "20191219-青春18きっぷ東北北海道の陣-その1",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20191220-青春18きっぷ東北北海道の陣-その2/index.md": {
  id: "20191220-青春18きっぷ東北北海道の陣-その2/index.md",
  slug: "20191220-青春18きっぷ東北北海道の陣-その2",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20191221-青春18きっぷ東北北海道の陣おまけ/index.md": {
  id: "20191221-青春18きっぷ東北北海道の陣おまけ/index.md",
  slug: "20191221-青春18きっぷ東北北海道の陣おまけ",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20200117-ミリシタの封筒をwebで再現している話/index.md": {
  id: "20200117-ミリシタの封筒をwebで再現している話/index.md",
  slug: "20200117-ミリシタの封筒をwebで再現している話",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20200120-cieclecijp-オンライン-最強circleci利用術編-circleci-ユーザーコミュニティミートアップ-に参加した/index.md": {
  id: "20200120-cieclecijp-オンライン-最強circleci利用術編-circleci-ユーザーコミュニティミートアップ-に参加した/index.md",
  slug: "20200120-cieclecijp-オンライン-最強circleci利用術編-circleci-ユーザーコミュニティミートアップ-に参加した",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20200511-esa-6th-anniversary-とのこと/index.md": {
  id: "20200511-esa-6th-anniversary-とのこと/index.md",
  slug: "20200511-esa-6th-anniversary-とのこと",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20200528-はこだて未来大学の特別講義を見て/index.md": {
  id: "20200528-はこだて未来大学の特別講義を見て/index.md",
  slug: "20200528-はこだて未来大学の特別講義を見て",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20200620-リングフィットアドベンチャー-any-完走したので感想/index.md": {
  id: "20200620-リングフィットアドベンチャー-any-完走したので感想/index.md",
  slug: "20200620-リングフィットアドベンチャー-any-完走したので感想",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20200726-あつまれどうぶつの森の写真をまとめてみる/index.md": {
  id: "20200726-あつまれどうぶつの森の写真をまとめてみる/index.md",
  slug: "20200726-あつまれどうぶつの森の写真をまとめてみる",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20200808-ほぼ毎日atcoderの問題を解いている/index.md": {
  id: "20200808-ほぼ毎日atcoderの問題を解いている/index.md",
  slug: "20200808-ほぼ毎日atcoderの問題を解いている",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20200905-誰も得しないrubygemsを作る/index.md": {
  id: "20200905-誰も得しないrubygemsを作る/index.md",
  slug: "20200905-誰も得しないrubygemsを作る",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20200927-im-s-engineers-on-ir-2020で発表した/index.md": {
  id: "20200927-im-s-engineers-on-ir-2020で発表した/index.md",
  slug: "20200927-im-s-engineers-on-ir-2020で発表した",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20201015-jump-rope-challenge-100日やった/index.md": {
  id: "20201015-jump-rope-challenge-100日やった/index.md",
  slug: "20201015-jump-rope-challenge-100日やった",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20201223-what3idolsなるものを作った/index.md": {
  id: "20201223-what3idolsなるものを作った/index.md",
  slug: "20201223-what3idolsなるものを作った",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20201227-大阪1か月生活を経て/index.md": {
  id: "20201227-大阪1か月生活を経て/index.md",
  slug: "20201227-大阪1か月生活を経て",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20201231-2020年にやったこと/index.md": {
  id: "20201231-2020年にやったこと/index.md",
  slug: "20201231-2020年にやったこと",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20210315-ahc001参加雑記/index.md": {
  id: "20210315-ahc001参加雑記/index.md",
  slug: "20210315-ahc001参加雑記",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20210319-変なホテルとアイドルマスターに泊まってきた/index.md": {
  id: "20210319-変なホテルとアイドルマスターに泊まってきた/index.md",
  slug: "20210319-変なホテルとアイドルマスターに泊まってきた",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20210429-リングフィットアドベンチャー-2周目完走したので感想/index.md": {
  id: "20210429-リングフィットアドベンチャー-2周目完走したので感想/index.md",
  slug: "20210429-リングフィットアドベンチャー-2周目完走したので感想",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20210510-move-blog-service/index.md": {
  id: "20210510-move-blog-service/index.md",
  slug: "20210510-move-blog-service",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20210511-esa7th-tonokoto/index.md": {
  id: "20210511-esa7th-tonokoto/index.md",
  slug: "20210511-esa7th-tonokoto",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20210627-minecraft-server-admin/index.md": {
  id: "20210627-minecraft-server-admin/index.md",
  slug: "20210627-minecraft-server-admin",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20211009-ringfitadv-round3/index.md": {
  id: "20211009-ringfitadv-round3/index.md",
  slug: "20211009-ringfitadv-round3",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20211203-emoji-gacha/index.md": {
  id: "20211203-emoji-gacha/index.md",
  slug: "20211203-emoji-gacha",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20211221-kagawa-okayama-trip/index.md": {
  id: "20211221-kagawa-okayama-trip/index.md",
  slug: "20211221-kagawa-okayama-trip",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20211223-imas-mokumoku/index.md": {
  id: "20211223-imas-mokumoku/index.md",
  slug: "20211223-imas-mokumoku",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20220115-difficult-game-p/index.md": {
  id: "20220115-difficult-game-p/index.md",
  slug: "20220115-difficult-game-p",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20220210-what3idols-yarn3/index.md": {
  id: "20220210-what3idols-yarn3/index.md",
  slug: "20220210-what3idols-yarn3",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20220301-agrienta-plastic-hot-house/index.md": {
  id: "20220301-agrienta-plastic-hot-house/index.md",
  slug: "20220301-agrienta-plastic-hot-house",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20220514-gha-badge/index.md": {
  id: "20220514-gha-badge/index.md",
  slug: "20220514-gha-badge",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20220604-bicycle-saddle/index.md": {
  id: "20220604-bicycle-saddle/index.md",
  slug: "20220604-bicycle-saddle",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20220627-ringfitadv-tied-up/index.md": {
  id: "20220627-ringfitadv-tied-up/index.md",
  slug: "20220627-ringfitadv-tied-up",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20220808-blog-nodejs-v18/index.md": {
  id: "20220808-blog-nodejs-v18/index.md",
  slug: "20220808-blog-nodejs-v18",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221120-yarn3-dependabot/index.md": {
  id: "20221120-yarn3-dependabot/index.md",
  slug: "20221120-yarn3-dependabot",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221201-bike-content/index.md": {
  id: "20221201-bike-content/index.md",
  slug: "20221201-bike-content",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221202-splatoon2-result/index.md": {
  id: "20221202-splatoon2-result/index.md",
  slug: "20221202-splatoon2-result",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221203-google-one/index.md": {
  id: "20221203-google-one/index.md",
  slug: "20221203-google-one",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221204-dr-mario-speedrun/index.md": {
  id: "20221204-dr-mario-speedrun/index.md",
  slug: "20221204-dr-mario-speedrun",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221205-screeps-arena-alpha/index.md": {
  id: "20221205-screeps-arena-alpha/index.md",
  slug: "20221205-screeps-arena-alpha",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221206-personal-slack/index.md": {
  id: "20221206-personal-slack/index.md",
  slug: "20221206-personal-slack",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221207-went-to-museums/index.md": {
  id: "20221207-went-to-museums/index.md",
  slug: "20221207-went-to-museums",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221208-kirby-discovery/index.md": {
  id: "20221208-kirby-discovery/index.md",
  slug: "20221208-kirby-discovery",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221209-this-year-nextjs-product/index.md": {
  id: "20221209-this-year-nextjs-product/index.md",
  slug: "20221209-this-year-nextjs-product",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221210-circleci-review/index.md": {
  id: "20221210-circleci-review/index.md",
  slug: "20221210-circleci-review",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221211-climbing-mountains/index.md": {
  id: "20221211-climbing-mountains/index.md",
  slug: "20221211-climbing-mountains",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221212-my-health/index.md": {
  id: "20221212-my-health/index.md",
  slug: "20221212-my-health",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221213-ringfitadv-all-titles/index.md": {
  id: "20221213-ringfitadv-all-titles/index.md",
  slug: "20221213-ringfitadv-all-titles",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221214-playing-minecraft/index.md": {
  id: "20221214-playing-minecraft/index.md",
  slug: "20221214-playing-minecraft",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221215-minecraft-architecture/index.md": {
  id: "20221215-minecraft-architecture/index.md",
  slug: "20221215-minecraft-architecture",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221216-imas-mokumoku/index.md": {
  id: "20221216-imas-mokumoku/index.md",
  slug: "20221216-imas-mokumoku",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221217-studying-rust/index.md": {
  id: "20221217-studying-rust/index.md",
  slug: "20221217-studying-rust",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221218-playing-splatoon3/index.md": {
  id: "20221218-playing-splatoon3/index.md",
  slug: "20221218-playing-splatoon3",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221219-drawings/index.md": {
  id: "20221219-drawings/index.md",
  slug: "20221219-drawings",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221220-hometown-trip/index.md": {
  id: "20221220-hometown-trip/index.md",
  slug: "20221220-hometown-trip",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221221-jumpking-maps/index.md": {
  id: "20221221-jumpking-maps/index.md",
  slug: "20221221-jumpking-maps",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221222-steam-game-playlist/index.md": {
  id: "20221222-steam-game-playlist/index.md",
  slug: "20221222-steam-game-playlist",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221224-pixel-watch/index.md": {
  id: "20221224-pixel-watch/index.md",
  slug: "20221224-pixel-watch",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20221225-agriculture-experience/index.md": {
  id: "20221225-agriculture-experience/index.md",
  slug: "20221225-agriculture-experience",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20230109-replace-to-astro/index.md": {
  id: "20230109-replace-to-astro/index.md",
  slug: "20230109-replace-to-astro",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
"20230116-pogostuck-map3/index.md": {
  id: "20230116-pogostuck-map3/index.md",
  slug: "20230116-pogostuck-map3",
  body: string,
  collection: "posts",
  data: InferEntrySchema<"posts">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
