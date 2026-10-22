# Pronova Web — 現在の確認済み状態

## 調査情報

- 調査日: 2026-10-22（Asia/Tokyo）。AGENTS.md、Pronova Skill、history.md、従来のcurrent-state.mdを読み、実ファイルを調査した。履歴資料は現状の根拠としていない。
- ホスティング情報更新: 2026-10-22。ユーザー確認により本番ホスティングはGitHub Pages、Vercelホスティングは利用していないと確定。管理画面をこちらで検証したものではない。HEADは下記のまま。
- ローカル: `/Users/yoshihara/work/pronova-web`
- HEAD: `31bd67618d3cf5a21bae328123f96a2ed864ed3a`
- ブランチ: main。ローカルのorigin/mainと差なし。fetch未実施、リモート最新状態は未確認。
- origin: `git@github-pronova:Pronova-git/pronova-git.github.io.git`（SSHホスト別名）。
- 開始時の変更: app/expertise/page.tsxのSEOタイトル、global.d.tsのWindow.gtag型。未追跡: .agents/、AGENTS.md、START-HERE.md。
- 初回調査の変更は本記録のみ。今回のホスティング情報更新ではAGENTS.md、START-HERE.md、Pronova Skill、history.mdも修正。ソース変更、送信テスト、コミット、push、デプロイ、外部設定変更なし。環境変数値・キー・検証トークンは記録しない。

## 技術構成と確認結果

Next.js App Router、React、TypeScript strict、Tailwind CSS、pnpm。package.jsonの名前はmy-v0-project、バージョン0.1.0。

| 項目 | package.json指定 | ローカル実体 |
| --- | --- | --- |
| Next.js | 16.0.0 | 16.0.0 |
| React / React DOM | 19.2.0 | 19.2.0 |
| TypeScript | ^5 | 5.9.3 |
| Tailwind CSS / @tailwindcss/postcss | ^4.1.9 | 4.1.18 |
| @vercel/analytics | 1.3.1 | 1.3.1 |

- ローカルNode v22.21.1、pnpm 10.27.0。CIはNode 22、pnpm 9。packageManager/engines指定なし。pnpm-lock.yamlあり。
- UI関連: Radix UI各種、lucide-react ^0.454.0、class-variance-authority ^0.7.1、clsx ^2.1.1、tailwind-merge ^3.3.1、tw-animate-css 1.3.3、tailwindcss-animate ^1.0.7。
- その他の宣言済み依存: react-hook-form ^7.60.0、@hookform/resolvers ^3.10.0、zod 3.25.76、recharts 2.15.4、date-fns 4.1.0、react-day-picker 9.8.0、embla-carousel-react 8.5.1、next-themes ^0.4.6、sonner ^1.7.4、vaul ^0.9.9、cmdk 1.0.4、input-otp 1.4.1、react-resizable-panels ^2.1.7、autoprefixer ^10.4.20。依存宣言は主要ページでの使用を意味しない。
- scripts: dev=next dev、build=next build、start=next start、lint=eslint .。
- TypeScript確認（pnpm exec tsc --noEmit --incremental false）: 成功。
- pnpm lint: 失敗、eslint: command not found。ESLint直接依存・設定なし。
- testスクリプト・自動テストファイルは見つからない。
- ビルドは未実施。読み取り中心の調査として生成物の再作成を避けた。既存.next/outの存在は現在のビルド成功を証明しない。ブラウザ表示も未検証。

## 実ファイル構成

```text
app/
  layout.tsx, globals.css, page.tsx
  services/, expertise/, about/, experience/, contact/, privacy/
  diensten/, over-ons/, projecten/, offerte/ （各page.tsx）
components/
  navigation.tsx, footer.tsx, hero.tsx, theme-provider.tsx
  ui/ （56個のtsxと補助hook）
hooks/ use-mobile.ts, use-toast.ts
lib/ utils.ts
public/
  images/ （Pronovaロゴ・各ページ画像）
  favicon/ （favicon・Appleアイコン・manifest・PWA画像）
  sitemap.xml, CNAME, 旧テンプレート画像・placeholder・旧アイコン
styles/globals.css
.github/workflows/deploy.yml
next.config.mjs, postcss.config.mjs, tsconfig.json, components.json
global.d.ts, next-env.d.ts, package.json, pnpm-lock.yaml
AGENTS.md, START-HERE.md, README.md, .agents/skills/pronova-web/
```

API Route Handler、ブログルート、MDX記事、CMS連携は見つからない。READMEはUnder Constructionのみ。START-HEREは引き継ぎ資料の導入手順。

## ページ一覧

ソースはホームがapp/page.tsx、その他はapp/<ルート>/page.tsx。実装状況はコード上の確認。

| ルート | 内容 | SEO title・metadata |
| --- | --- | --- |
| / | 市場参入支援・開発、選ばれる理由、Contact CTA | Japan Market Entry & Technology Consulting \| Pronova、個別descriptionあり |
| /services | 市場参入コンサル4分野・開発4分野 | Services - Pronova、個別descriptionあり |
| /expertise | Telecom/RF・Multimedia・AI/ML・Embedded・Blockchain | Expertise \| Technical & Business Expertise for Japan - Pronova、個別descriptionあり。タイトルは未コミット変更 |
| /about | 概要・事業情報・税務パートナー | About - Pronova、個別descriptionあり |
| /experience | 取引経験企業15社 | Experience - Pronova、個別descriptionあり |
| /contact | 問い合わせフォーム・所在地等 | 独自metadataなし、共通layout継承。Client Component |
| /privacy | ポリシー、更新表示January 2026 | Privacy Policy - Pronova、個別descriptionあり |
| /diensten | BeautifulRimsのホイール修理サービス | 独自metadataなし、共通layout継承 |
| /over-ons | BeautifulRims会社紹介 | 同上 |
| /projecten | ホイール修理事例 | 同上 |
| /offerte | ホイール修理見積もりフォーム・写真選択 | 同上。Client Component。submitはconsole.logのみ |

後半4ルートは旧テンプレート由来と考えられる内容が残る。主要ナビからは未リンクだがApp Routerのルートとして存在する。各ページ内のNavigationが共通layoutと重複。前3ページには独自footerやMarktplaats外部リンクも残る。

## コンポーネント・デザイン

- layout: html lang=en、単一body、Navigation、children、Footer、GA4、Vercel Analytics。app/globals.cssを読み込む。
- Navigation: ロゴ→ホーム、Services/Expertise/About/Experience/Contact、Talk to Us CTA。スクロール背景変更とモバイルメニュー。
- Footer: 上記主要5リンク、Privacyリンク、横須賀所在地、年表示。
- Hero: h1・説明・画像またはグラデーション・overlay・任意のCTA2つ。next/image、next/linkを使用。
- UI: shadcn設定new-york、neutral、CSS variables、Lucide。Radix系カード・フォーム・ダイアログ・ナビ等。
- lib/utils.ts: clsxとtailwind-mergeをまとめたcn。hooksはモバイル判定とtoast。
- ThemeProviderはnext-themesラッパーだがlayoutには未配置。
- 濃紺・紫、白文字、半透明カード、レスポンシブgrid、Heroアニメーション。reduced-motion対応あり。
- next/font/googleでGeist/Geist Monoを宣言するが生成オブジェクトのclassName/variableはbodyに未適用。実表示フォントは未検証。
- styles/globals.cssも残るがlayoutの参照先はapp/globals.css。

## 外部サービス・環境変数

| サービス | 確認済み事実・コード・設定 | 未確認 |
| --- | --- | --- |
| GitHub Pages | 正式な本番ホスティング（2026-10-22ユーザー確認）。deploy.yml、public/CNAMEあり | 最新Actions実行結果、Pages管理画面の詳細、DNS詳細、現在の応答状態は本調査で未検証 |
| Vercel（ホスティング） | 利用していない（2026-10-22ユーザー確認） | — |
| Vercel Analytics | @vercel/analytics依存と@vercel/analytics/nextのAnalyticsをlayoutに1回配置 | 実際の計測稼働・送信通信・データ受信・管理画面設定は未確認。コード組み込みだけでは計測成功を判断しない |
| GA4 | next/script afterInteractiveでタグ読込・初期化、dataLayer、configのanonymize_ip。ソース上の初期化はlayoutの1箇所 | 実通信、重複発火、キーイベント登録、実績 |
| Search Console | metadata.verification.google設定 | 所有権確認成功・sitemap送信・インデックス |
| Web3Forms | Contactからsubmit APIにPOST | キー有効性・受信先・配信・サービス設定 |
| Google Fonts | next/font/google | 本番取得・描画 |

- app/components/lib/config/workflowにprocess.env/import.meta.env参照は見つからない。ルート直下の.env*ファイルも見つからない。管理画面・実行環境の環境変数は未確認。
- WEB3FORMS_ACCESS_KEYは環境変数ではなくContact内定数。目的はWeb3Formsの送信先識別。値は記録しない。
- GA4測定IDとSearch Console検証値もコード内設定。値は転記しない。
- .gitignoreはnode_modules/.next/out、ログ、.DS_Store、.env/.env.local/.env.*.localを除外。すべての.env派生名を一律除外する指定ではない。

## 問い合わせ処理

- useStateでname/company/email/message、errors、isSubmitting、submitStatus管理。名前・メール・本文必須、メール形式検証。
- ブラウザからhttps://api.web3forms.com/submitへJSON送信。access_key、subject、from_nameと入力4項目。独自バックエンドなし。
- JSONのsuccessで成功/失敗表示。成功時フォーム・エラーをリセット。
- 成功時のみwindow.gtagの任意呼び出しでcontact_submit発火。event_category=engagement、event_label=contact_form。イベント引数に入力個人情報なし。
- global.d.tsにWindow.gtag型追加済み（未コミット）。Contact側ではwindow as anyが残る。
- hiddenのbotcheck入力はあるが送信JSONではコメントアウトされ、入力値もpayloadに反映しない。ハニーポットは送信処理に未接続。
- HTTP res.ok判定はなくJSONのsuccessに依存。実送信テストなし。

## SEO

- 共通titleはPronova - Your Bridge to the Japanese Market。共通description、generator=v0.app、lang=en、themeColorあり。
- 個別metadataは上記6ページ。Contactと旧4ページは共通値を継承。
- canonical、metadataBase、Open Graph、Twitterカード、構造化データ、明示的robots metadataは見つからない。
- public/sitemap.xmlは固定XML。ホーム・services・expertiseの3URLのみ。monthly、priorityはホーム1.0・その他0.8。lastmodなし。
- about/experience/contact/privacy・旧4ページは非掲載。現在の除外意図は未確認。非掲載はnoindexではない。
- robots.txt/app/robots.tsなし。trailingSlash=trueに対しsitemapのservices/expertiseは末尾スラッシュなし。配信側正規化は未検証。
- layoutが参照するfavicon.ico、favicon.svg、Appleアイコン、manifestはpublic/favicon配下に存在。
- manifestはname=MyWebSite、short_name=MySite。画像srcがルート直下/web-app-manifest-*.pngだが実ファイルはpublic/favicon配下で不一致。

## デプロイ方法

- next.config.mjs: output=export、trailingSlash=true、images.unoptimized=true。pnpm buildでoutに静的出力する構成。
- .github/workflows/deploy.yml: mainへのpush、workflow_dispatchで起動。
- checkout → pnpm 9 → Node 22 → pnpm install --frozen-lockfile → pnpm build → Pages設定 → outをartifactへupload → deploy-pages。
- permissionsはcontents read/pages write/id-token write、pagesグループのconcurrency制御。
- public/CNAMEはpronova-lab.com。正式な本番ホスティングはGitHub Pages（2026-10-22ユーザー確認）。Vercelホスティングは利用していない。上記GitHub Actionsによる静的サイトのデプロイ構成を維持する。
- pnpm startはnext startだが静的exportの配信手順としては整合しない。出力物を静的ホストで配信する構成。

## 未解決事項・次回候補（今回未修正）

1. GitHub Pagesの最新デプロイ結果・管理画面詳細を必要時に確認。本番ホスティングの選定は確認済み。Vercel Analyticsの実際の計測稼働状況は別途確認。
2. 旧4ルートとNavigation/footer重複の整理方針。
3. Web3Forms受信、botcheck接続、GA4受信・キーイベント設定の確認。
4. manifest画像参照・汎用名称、sitemap掲載方針、canonical、Contact metadataの見直し。
5. ESLint整備、ビルド・ブラウザ確認。ローカルとCIのpnpm版差を把握。
6. ExpertiseのSatellight、devicesand、Testings等の表記確認。

外部サービス管理画面・本番ページにはアクセスしていない。本番ホスティングはユーザー確認済み。現在のHTTP応答、SEO成果、問い合わせ到達、GA4実績、Vercel Analyticsの計測稼働はこの記録から推定しない。
