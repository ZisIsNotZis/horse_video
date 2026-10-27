**English** | [简体中文](README.zh-CN.md)

<p align="center"><img src="logo.svg" width="112" alt="Horse Video logo: a horse silhouette galloping across a sunset disk"></p>
<h1 align="center">Horse Video</h1>
<p align="center"><strong>A 15-second cinematic horse gallop, drawn frame by frame in TypeScript.</strong></p>
<p align="center"><sub>A low-poly horse and its straw-hat rider at sunset — React · Three.js · SVG · Remotion, no timeline editor, no imported character rig.</sub></p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-AGPL--3.0--only-8b5cf6" alt="License: AGPL-3.0-only"></a>
  <a href="docs/project-status.md"><img src="https://img.shields.io/badge/status-finished%20experiment-d88945" alt="Status: finished experiment"></a>
</p>

<p align="center"><a href="render/horse-run-remotion.mp4"><img src="assets/horse-run-still.jpg" width="760" alt="A frame from the render: a low-poly horse with a rider in a conical hat, mid-gallop in front of a low sun over green hills"></a></p>
<p align="center"><sub>One frame of the film, taken from the checked-in MP4 — click it to watch.</sub></p>

A rider in a conical straw hat gallops across a wind-blown field at sunset. Every blade of grass, every dust particle, the gait, the camera push and the grade are generated from code, so the same input always produces the same film — and the whole scene stays readable and editable as a single TypeScript file.

## ▶ Watch it

The finished render is checked in: **[render/horse-run-remotion.mp4](render/horse-run-remotion.mp4)**
(1280×720, 30 fps, 15 s, H.264 / YUV 4:2:0, stereo AAC). Open or download it from
the repository; it was produced by the commands below. The still above is a frame
grabbed from that file.

## ⚡ Quick start

Requires Node.js 18+ and npm. `package-lock.json` pins the dependency graph.

```bash
npm ci
npm run studio
```

`remotion studio --no-open` starts the local Studio and prints its URL — open it
to scrub the `HorseRun` composition. To produce the MP4:

```bash
npm run render   # writes render/horse-run-remotion.mp4
```

## ✨ What it can do now

- **One command, one film.** A 450-frame, 1280×720, 30 fps composition exported as H.264 / YUV 4:2:0.
- **A low-poly horse and rider, built from primitives.** Ellipsoid body, neck and head, cone ears, a conical hat, four jointed legs on a four-beat gallop, rein lines and a contact shadow — all Three.js geometry inside a Remotion `<ThreeCanvas>`.
- **Procedural scenery.** 900 distant and 620 near grass blades, 170 dust motes, wind sway and speed streaks, generated from fixed seeds so renders stay stable.
- **Programmable cinematography.** Camera orbit, tracking pan, hoofbeat shake, roll, focus blooms, sun flare and colour grade are ordinary constants and easing curves.
- **Sound included.** `public/audio/horse-run-remotion-audio.wav` is mixed in at render time.
- **A second, much longer scene lives in the same file.** `HuaqiangMelon` — a 2,100-frame (≈70 s) market melodrama with a street set, characters, Chinese dialogue captions, 21 voice lines and its own SFX timeline. It is *not* registered in `src/Root.tsx`, so it cannot be rendered until it is wired in.

## 🧭 Architecture

| Path | Role |
| --- | --- |
| `src/index.ts` | Registers the Remotion root. |
| `src/Root.tsx` | Declares the `HorseRun` composition: 450 frames, 30 fps, 1280×720. |
| `src/HorseRun.tsx` | The scene: seeded scenery, the 3D horse rig, camera, grading, audio — plus the unregistered `HuaqiangMelon` scene. |
| `public/audio/` | Soundtrack, and the voice/SFX assets used only by `HuaqiangMelon`. |
| `render/` | The checked-in output of `npm run render`. |
| `assets/` | The still frame used at the top of this README. |
| `remotion.config.ts` | JPEG frames, overwrite, H.264, `yuv420p`. |
| `logo.svg` | The mark shown above. |

Layering, front to back: `Background` (sky gradient, sun glow, three parallax hill
paths) → `GrassField` → `ThreeHorseRig` (the hero) → `HeroDustAndWind` →
`ForegroundGrass` → `CameraAndFx` (streaks, flare, vignette). One camera
transform — scale, translate and roll computed from the frame number — wraps the
whole stack so every layer moves together.

Two leftovers are worth knowing about. `HorseRig` and `DustSystem` in
`src/HorseRun.tsx` are an earlier, purely SVG horse that the current cut no
longer mounts; and `HuaqiangMelon` exists but has no `<Composition>` entry. Both
are kept deliberately rather than deleted, and both are listed in the roadmap.

## 🛠 Develop

| Command | What it does |
| --- | --- |
| `npm ci` | Install the locked dependency graph. |
| `npm run studio` | Start Remotion Studio and print its local URL. |
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

- `HorseRun` — 15 s galloping scene with procedural grass, dust, streaks, a 3D horse and rider, camera work, grade and audio.
- `HuaqiangMelon` — a full 2,100-frame market scene with captions and sound, written but not yet registered.
- Deterministic seeded generation, so repeated renders match.
- A checked-in 1280×720 / 30 fps MP4, a still frame, and a reproducible `npm run render` path.
- Project docs: [status](docs/project-status.md), [changelog](CHANGELOG.md), [contributing](CONTRIBUTING.md), [security](SECURITY.md).

**Planned (deferred, not promised)**

- Register `HuaqiangMelon` in `src/Root.tsx` behind a small composition selector, so both scenes render from one entry point.
- Either revive the SVG `HorseRig`/`DustSystem` layers or retire them, once it is clear which horse the project wants.
- Extract reusable scene parameters, but only if a third animation makes it worthwhile.

This is deliberately a finished art experiment, not a framework. If it grows,
the natural next step is a small set of code-authored cinematic shorts sharing
the same seeded-scenery approach — each self-contained, each inspectable as
source, none depending on a timeline editor.

## License

Copyright (C) 2026 ZisIsNotZis. Source code is licensed under
[AGPL-3.0-only](LICENSE). Review media and font provenance before
redistributing rendered output.
