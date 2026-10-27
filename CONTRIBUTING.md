# Contributing

Thanks for helping improve Horse Video. This is a small Remotion experiment, so
focused fixes and visual experiments are welcome.

## Setup

Requires Node.js 18+ and npm. Install the locked dependency graph and start the
preview:

```bash
npm ci
npm run studio
```

## Before opening a pull request

1. Create a branch for your change.
2. Keep source and media changes scoped to the intended composition.
3. Run `npm run typecheck`, and `npm run render` when the change affects the
   picture or the soundtrack.
4. Describe the visual or rendering impact in your pull request — a frame or a
   short clip is more useful than adjectives.

Please do not commit `node_modules`, caches, secrets, or temporary exports. For
large media, discuss the approach in an issue before adding it.

The public README is the front door: if your change alters what the project can
do, update [README.md](README.md) and [README.zh-CN.md](README.zh-CN.md) in the
same pull request. Chinese and English text are both hand-written; keep them in
sync rather than machine-translating one into the other.
