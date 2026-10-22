# Setup on your Mac

1. Extract this package.
2. Copy `AGENTS.md` and `.agents/` into the root of your existing Pronova website Git repository. Do not overwrite an existing `AGENTS.md` without merging it.
3. Open that repository in Codex.
4. Ask Codex (Japanese):

   「このリポジトリの AGENTS.md と pronova-web Skill を読み、まずコードを変更せずに現状調査してください。実際のファイル構成、各ページの実装状況、Node/pnpm/Next.jsのバージョン、GA4、Search Console、問い合わせフォーム、sitemap、GitHub Pagesでのホスティング・デプロイ、GitHub連携、Vercel Analyticsのコード組み込みと実際の計測稼働状況、環境変数名（値は表示しない）を確認し、references/current-state.md を更新してください。確認できない外部サービスの状態は未確認と記載してください。調査結果を日本語で報告してください。」

5. Review Codex's report before committing these handoff files.

The handoff notes contain historical context only; Codex must audit your real repository to establish the current state.
