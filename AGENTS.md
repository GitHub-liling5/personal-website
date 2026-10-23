<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Git 提交信息

本仓库 PR / commit 使用 [Conventional Commits](https://www.conventionalcommits.org/)：

- **类型前缀**用英文小写：`feat:`、`fix:`、`chore:`、`docs:`、`refactor:`、`style:`、`test:` 等。
- **冒号后的标题与正文用简体中文**，一句话说清「做了什么」，例如：
  - `fix: 为小屏顶栏添加移动菜单以支持章节导航`
  - `feat: 添加摄影师作品集定价与联系区块`
  - `chore: 初始化 shadcn Next 模板`
- 多 commit 时每条都遵循上述格式；需要补充细节时用正文（空一行后写中文说明）。
- PR 标题可与首条 commit 一致，或保留 `KR-x:` 前缀 + 中文简述。
