<p align="center"><img src="logo.svg" width="112" alt="Horse Video 标志：夕阳圆盘前奔跑的马剪影"></p>
<h1 align="center">Horse Video</h1>
<p align="center"><strong>十五秒电影感奔马，逐帧用 TypeScript 画出来。</strong></p>
<p align="center"><sub>React · SVG · Three.js · Remotion —— 不用时间线编辑器，不导入角色绑定。</sub></p>
<p align="center">简体中文 · <a href="README.md">English</a></p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-AGPL--3.0--only-8b5cf6" alt="许可证：AGPL-3.0-only"></a>
  <a href="docs/project-status.md"><img src="https://img.shields.io/badge/status-finished%20experiment-d88945" alt="状态：已完成实验"></a>
</p>

夕阳下，一匹马跑过被风吹动的草地。每一根草、每一粒尘、步态、镜头推进与调色都由代码生成，同样的输入永远得到同一部片子，而整个场景仍然是一份可读、可改的 TypeScript 源码。

## ▶ 先看成品

仓库里已附渲染结果：**[render/horse-run-remotion.mp4](render/horse-run-remotion.mp4)**
（1280×720，30 fps，15 秒，H.264）。直接打开或下载即可，它就是下面命令的原始输出。

## ⚡ 快速开始

需要 Node.js 18+ 与 npm，依赖版本由 `package-lock.json` 锁定。

```bash
npm ci
npm run studio
```

Remotion Studio 会在本地打开，`HorseRun` 合成可直接拖动预览。要生成 MP4：

```bash
npm run render   # 输出到 render/horse-run-remotion.mp4
```

## ✨ 目前能做什么

- **一条命令，一部短片。** 450 帧、1280×720、30 fps，导出为 H.264 / YUV 4:2:0。
- **程序化场景。** 900 根远景草、620 根近景草、170 粒尘土，加上速度线与被风吹动的层次，全部带固定随机种子，多次渲染结果一致。
- **手工搭建的马匹绑定。** 分层的 SVG 躯干与四肢，配合动态模糊、轮廓光、接地阴影，以及跟随镜头的四拍奔跑。
- **三维景深。** 一层 Three.js 几何与氛围垫在 SVG 前景之下。
- **可编程的摄影。** 镜头插值、抖动、光线起伏、调色与音量，都是普通常量与缓动曲线。
- **自带声音。** 渲染时混入 `public/audio/horse-run-remotion-audio.wav`。

## 🧭 结构

| 路径 | 作用 |
| --- | --- |
| `src/index.ts` | 注册 Remotion 根节点。 |
| `src/Root.tsx` | 声明 `HorseRun` 合成：450 帧、30 fps、1280×720。 |
| `src/HorseRun.tsx` | 场景本体：带种子的景物、马匹绑定、镜头、Three.js 层、调色、音频，以及实验性的 `HuaqiangMelon` 合成。 |
| `public/audio/` | 音轨，以及瓜摊场景暂未启用的音频素材。 |
| `render/` | `npm run render` 的已提交输出。 |
| `remotion.config.ts` | JPEG 帧、覆盖输出、H.264、`yuv420p`。 |
| `logo.svg` | 上方使用的标志。 |

`HuaqiangMelon` 写在 `src/HorseRun.tsx` 里，但没有注册进 `src/Root.tsx`；要把它当作正式输出，需要先接入。

## 🛠 开发

| 命令 | 作用 |
| --- | --- |
| `npm ci` | 安装锁定后的依赖。 |
| `npm run studio` | 在 Remotion Studio 中预览、逐帧拖动。 |
| `npm run render` | 将 `HorseRun` 渲染到 `render/horse-run-remotion.mp4`。 |
| `npm run typecheck` | 用 `tsc --noEmit` 检查 `src/`。 |

调参就是改 `src/HorseRun.tsx` 里的常量与 `interpolate` 区间：步态速度、镜头路径、草地密度、氛围、调色。替换音轨时保持 `staticFile` 路径不变；要剪新片，就在 `src/Root.tsx` 再加一个 `<Composition>`。渲染比较吃 CPU；仓库里的 MP4 是参考输出，不是读懂代码前必须先重建的产物。

## 🤝 参与贡献

见 [CONTRIBUTING.md](CONTRIBUTING.md)。欢迎聚焦的视觉改进、性能修复和文档修正。提交时请不要带上缓存或无关媒体，并在 PR 里说明画面上的变化。

## 🗺 路线图

**已完成**

- `HorseRun`：15 秒奔跑场景，包含程序化草地、尘土、速度线、Three.js 景深、镜头、调色与音频。
- 带种子的确定性生成，重复渲染结果一致。
- 已提交的 1280×720 / 30 fps MP4，以及可复现的 `npm run render` 路径。
- 项目文档：[状态](docs/project-status.md)、[更新日志](CHANGELOG.md)、[贡献指南](CONTRIBUTING.md)、[安全说明](SECURITY.md)。

**计划中（暂缓，不作承诺）**

- 为实验性的 `HuaqiangMelon` 合成做一个小的选择器，把它注册进 `src/Root.tsx`。
- 增加一张静帧或一段短 GIF，让人不下载也能在 README 里看到画面。
- 抽出可复用的场景参数，但只在第二个动画确实需要时才做。

这个项目有意只做一个已完成的艺术实验，而不是框架。若继续生长，最自然的方向是一小组共享同一套程序化景物手法的电影感短片：每部自成一体，每部都能作为源码逐行读懂，也都不依赖时间线编辑器。

## 许可证

源代码采用 [AGPL-3.0-only](LICENSE) 授权。重新分发渲染成品前，请先确认媒体与字体的来源与授权。
