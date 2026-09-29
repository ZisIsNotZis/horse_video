<p align="center"><img src="logo.svg" width="112" alt="Horse Video logo"></p>
<h1 align="center">Horse Video</h1>
<p align="center"><strong>A cinematic horse-running animation built entirely with React, SVG, Three.js, and Remotion.</strong></p>
<p align="center"><a href="README.zh-CN.md">简体中文</a> · English</p>

<p align="center">
  <a href="https://github.com/zisisnotzis/horse_video"><img src="https://img.shields.io/badge/status-experiment-d88945" alt="Status: experiment"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-AGPL--3.0--only-8b5cf6" alt="AGPL-3.0-only"></a>
  <a href="package.json"><img src="https://img.shields.io/badge/Remotion-4.0.490-0b7285" alt="Remotion 4.0.490"></a>
</p>

> **Status: closed (milestone, 2026-09-29).** A finished code-authored art
> experiment with a checked-in render. No further development is planned unless
> the project's inputs or goals change.

## ⚡ What it is

Horse Video is a compact motion-design playground for rendering a stylized horse galloping through a grass field. It uses **deterministic procedural motion**, layered SVG scenery, camera movement, dust, speed streaks, Three.js geometry, and a WAV soundtrack to produce a finished **1280×720 / 30 fps / 15-second** MP4.

The goal is to explore how far a small, code-driven scene can go without a traditional timeline editor or imported character rig. It is an **art experiment**, not a general animation framework.

🎬 [Watch the rendered preview](render/horse-run-remotion.mp4)

## ✨ Why this approach

- **Reproducible:** seeded vegetation and dust keep renders stable between runs.
- **Programmable:** gait, parallax, lighting, camera shake, and composition timing live in TypeScript.
- **Self-contained:** the active scene is drawn from SVG/Three.js primitives and one local audio track.
- **Fast to iterate:** preview in Remotion Studio, then render a standard H.264 export.

## 🚀 Quick start

Requirements: Node.js 18+ and npm. The checked-in `package-lock.json` pins the dependency graph.

```bash
npm ci
npm run studio
```

Open the local Remotion Studio URL and select `HorseRun`. To render the current composition:

```bash
npm run render
```

The output is written to `render/horse-run-remotion.mp4` and is configured as H.264, YUV 4:2:0, **1280×720**, 30 fps.

## 🧭 How it works

- `src/Root.tsx` registers the `HorseRun` composition and its **450 frames**.
- `src/HorseRun.tsx` combines procedural SVG layers, a hand-built horse rig, camera interpolation, grading, and audio.
- `public/audio/horse-run-remotion-audio.wav` supplies the soundtrack.
- `remotion.config.ts` sets JPEG frames, overwrite behavior, H.264, and pixel format.

`src/HorseRun.tsx` also contains an experimental `HuaqiangMelon` composition and related audio assets. It is not part of the current Studio registry; wire it into `Root.tsx` before treating it as a supported output.

## 🛠 Advanced customization

Edit the constants and interpolation ranges in `src/HorseRun.tsx` to tune gait speed, camera path, grass density, atmosphere, or grading. Replace the audio file while keeping the `staticFile` path, or add another `Composition` in `src/Root.tsx` for a new cut.

## 🎯 Goals and non-goals

Goals: learn expressive procedural animation, keep the scene inspectable in code, and produce attractive repeatable renders.

Non-goals: a reusable horse-animation library, physically accurate biomechanics, a web app, or a production render farm.

## 🗺 Roadmap (deferred)

These were considered but are not required for the closed milestone:

- Add a small composition selector for the existing melon scene.
- Capture a lightweight preview GIF or still frame for the README.
- Extract reusable scene parameters if a second animation makes that worthwhile.

Today it remains intentionally a single, finished art experiment.

## Versioning and agent help

`package.json` is the canonical version source (`0.1.0`); compatible fixes use patch versions and new supported compositions use minor versions. Release notes live in [`CHANGELOG.md`](CHANGELOG.md). Before editing, agents should inspect `src/Root.tsx`, the existing render, and media provenance; they may help triage, test, document, and implement accepted issues, while maintainers review and merge.

## ⚠️ Caveats

- Rendering requires the installed Remotion toolchain and can be CPU-intensive.
- Visual output depends on the exact font/dependency versions in the lockfile.
- The included MP4 is a generated preview and may be replaced by a fresh render.
- Audio and visual timing are hand-authored; there is no automated lip-sync or physics simulation.

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Focused visual improvements, performance fixes, and documentation corrections are welcome. Please keep generated caches and unrelated media out of commits.

Open issues with a reproducible command or visual example. Pull requests should include the smallest relevant render or validation evidence. No Bilibili upload or arXiv submission is planned; the checked-in MP4 is the existing render artifact.

## License

Source code is available under the [GNU AGPL v3.0-only](LICENSE). Review the repository contents and media provenance before redistributing rendered assets.
