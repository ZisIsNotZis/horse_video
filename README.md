<p align="center"><img src="logo.svg" width="112" alt="Horse Video logo: a horse silhouette galloping across a sunset disk"></p>
<h1 align="center">Horse Video</h1>
<p align="center"><strong>A 15-second cinematic horse gallop, drawn frame by frame in TypeScript.</strong></p>
<p align="center"><sub>React · SVG · Three.js · Remotion — no timeline editor, no imported character rig.</sub></p>
<p align="center"><a href="README.zh-CN.md">简体中文</a> · English</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-AGPL--3.0--only-8b5cf6" alt="License: AGPL-3.0-only"></a>
  <a href="docs/project-status.md"><img src="https://img.shields.io/badge/status-finished%20experiment-d88945" alt="Status: finished experiment"></a>
</p>

A horse runs across a wind-blown field at sunset. Every blade of grass, every
dust particle, the gait, the camera push and the grade are generated from code,
so the same input always produces the same film — and the whole scene stays
readable and editable as a single TypeScript file.

## ▶ Watch it

The finished render is checked in: **[render/horse-run-remotion.mp4](render/horse-run-remotion.mp4)**
(1280×720, 30 fps, 15 s, H.264). Open or download it from the repository; it is
the exact output of the commands below.

## ⚡ Quick start

Requires Node.js 18+ and npm. `package-lock.json` pins the dependency graph.

```bash
npm ci
npm run studio
```

Remotion Studio opens locally with the `HorseRun` composition ready to scrub.
To produce the MP4:

```bash
npm run render   # writes render/horse-run-remotion.mp4
```

## ✨ What it can do now

- **One command, one film.** A 450-frame, 1280×720, 30 fps composition exported as H.264 / YUV 4:2:0.
- **Procedural scenery.** 900 distant and 620 near grass blades, 170 dust motes, speed streaks and wind, all seeded so renders stay stable.
- **A hand-built horse rig.** Layered SVG body and legs with motion blur, rim light, contact shadow, and a four-beat gallop that follows the camera.
- **3D depth.** A Three.js layer adds geometry and atmosphere under the SVG foreground.
- **Programmable cinematography.** Camera interpolation, shake, lighting pulses, colour grade and audio levels are ordinary constants and easing curves.
- **Sound included.** `public/audio/horse-run-remotion-audio.wav` is mixed in at render time.

## 🧭 Architecture

| Path | Role |
| --- | --- |
| `src/index.ts` | Registers the Remotion root. |
| `src/Root.tsx` | Declares the `HorseRun` composition: 450 frames, 30 fps, 1280×720. |
| `src/HorseRun.tsx` | The scene: seeded scenery, horse rig, camera, Three.js layer, grading, audio, plus an experimental `HuaqiangMelon` composition. |
| `public/audio/` | Soundtrack and the unused-by-default melon-scene audio assets. |
| `render/` | The checked-in output of `npm run render`. |
| `remotion.config.ts` | JPEG frames, overwrite, H.264, `yuv420p`. |
| `logo.svg` | The mark shown above. |

`HuaqiangMelon` exists in `src/HorseRun.tsx` but is not registered in
`src/Root.tsx`; wire it in before treating it as a supported output.

## 🛠 Develop

| Command | What it does |
| --- | --- |
| `npm ci` | Install the locked dependency graph. |
| `npm run studio` | Preview and scrub the composition in Remotion Studio. |
| `npm run render` | Render `HorseRun` to `render/horse-run-remotion.mp4`. |
| `npm run typecheck` | Type-check `src/` with `tsc --noEmit`. |

Tuning happens by editing the constants and `interpolate` ranges in
`src/HorseRun.tsx`: gait speed, camera path, grass density, atmosphere, grade.
Swap the soundtrack while keeping the `staticFile` path, or add another
`<Composition>` in `src/Root.tsx` for a new cut. Rendering is CPU-intensive;
the checked-in MP4 is the reference output, not a build artifact you must
regenerate to read the code.

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Focused visual improvements,
performance fixes and documentation corrections are welcome. Please keep
caches and unrelated media out of commits, and say what changed visually in
your pull request.

## 🗺 Roadmap

**Implemented**

- `HorseRun` — 15 s galloping scene with procedural grass, dust, streaks, Three.js depth, camera work, grade and audio.
- Deterministic seeded generation, so repeated renders match.
- A checked-in 1280×720 / 30 fps MP4 and a reproducible `npm run render` path.
- Project docs: [status](docs/project-status.md), [changelog](CHANGELOG.md), [contributing](CONTRIBUTING.md), [security](SECURITY.md).

**Planned (deferred, not promised)**

- Register the experimental `HuaqiangMelon` composition in `src/Root.tsx` behind a small selector.
- Add a still frame or short GIF so the README shows the film without a download.
- Extract reusable scene parameters, but only if a second animation makes it worthwhile.

This is deliberately one finished art experiment, not a framework. If it grows,
the natural next step is a small set of code-authored cinematic shorts sharing
the same seeded-scenery approach — each self-contained, each inspectable as
source, none depending on a timeline editor.

## License

Source code is licensed under [AGPL-3.0-only](LICENSE). Review media and font
provenance before redistributing rendered output.
