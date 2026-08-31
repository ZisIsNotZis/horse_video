<p align="center"><img src="logo.svg" width="112" alt="Horse Video 标志"></p>
<h1 align="center">Horse Video · 奔马动画实验</h1>
<p align="center"><strong>用 React、SVG、Three.js 与 Remotion 完全以代码制作的电影感奔马动画。</strong></p>
<p align="center">简体中文 · <a href="README.md">English</a></p>

<p align="center">
  <a href="https://github.com/zisisnotzis/horse_video"><img src="https://img.shields.io/badge/status-experiment-d88945" alt="实验状态"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-AGPL--3.0--only-8b5cf6" alt="AGPL-3.0-only"></a>
  <a href="package.json"><img src="https://img.shields.io/badge/Remotion-4.0.490-0b7285" alt="Remotion 4.0.490"></a>
</p>

## ⚡ 这是什么

Horse Video 是一个小型动态图形实验：让一匹风格化的马在草地中奔跑。项目通过 **可复现的程序化运动**、分层 SVG 场景、镜头运动、尘土、速度线、Three.js 几何体和 WAV 音轨，渲染出一段 **1280×720、30 fps、15 秒**的 MP4。

它想探索：不使用传统时间线编辑器或导入角色绑定，仅靠代码驱动的场景能做到什么程度。它是一个**艺术实验**，不是通用动画框架。

🎬 [观看已渲染预览](render/horse-run-remotion.mp4)

## ✨ 这种方式的优势

- **可复现：**植被和尘土使用固定随机种子，多次渲染结果稳定。
- **可编程：**步态、视差、灯光、镜头抖动和时间安排都在 TypeScript 中。
- **自包含：**当前场景由 SVG/Three.js 基元和一条本地音轨构成。
- **迭代快：**用 Remotion Studio 预览，再导出标准 H.264 视频。

## 🚀 快速开始

需要 Node.js 18+ 和 npm。`package-lock.json` 已锁定依赖版本。

```bash
npm ci
npm run studio
```

打开终端显示的 Remotion Studio 地址，选择 `HorseRun`。渲染当前合成：

```bash
npm run render
```

输出位于 `render/horse-run-remotion.mp4`，格式为 H.264、YUV 4:2:0，**1280×720**，30 fps。

## 🧭 工作原理

- `src/Root.tsx` 注册 `HorseRun` 合成及其 **450 帧**时长。
- `src/HorseRun.tsx` 组合程序化 SVG 图层、手工制作的马匹绑定、镜头插值、调色和音频。
- `public/audio/horse-run-remotion-audio.wav` 提供音轨。
- `remotion.config.ts` 设置 JPEG 帧、覆盖输出、H.264 和像素格式。

`src/HorseRun.tsx` 还包含实验性的 `HuaqiangMelon` 合成及相关音频资源。目前它没有注册到 Studio 中；在把它当作受支持输出前，需要先在 `Root.tsx` 接入。

## 🛠 高级定制

修改 `src/HorseRun.tsx` 中的常量和插值区间即可调节步态速度、镜头路径、草地密度、氛围或调色。替换音频时保持 `staticFile` 路径不变；也可以在 `src/Root.tsx` 增加 `Composition` 来制作新的剪辑。

## 🎯 目标与非目标

目标：学习有表现力的程序化动画，让场景保持代码可读可查，并产出好看且可重复的渲染结果。

非目标：可复用的马匹动画库、符合物理的生物力学、Web 应用或生产级渲染集群。

## 🗺 路线图

- 为现有瓜摊场景增加小型合成选择器。
- 制作轻量预览 GIF 或静帧，方便在 README 中展示。
- 如果出现第二个动画，再提取真正有价值的通用场景参数。

最终它可以成为一组由代码创作的电影感短片；目前仍有意保持实验性质。

## 版本与代理协作

`package.json` 是 `0.1.0` 的版本来源；兼容修复使用补丁版本，新的受支持合成使用次版本。发布记录见 [`CHANGELOG.md`](CHANGELOG.md)。修改前，代理应检查 `src/Root.tsx`、现有渲染结果和媒体来源；代理可协助分流、测试、文档和已接受问题的实现，但由维护者审核和合并。

## ⚠️ 注意事项

- 渲染需要完整的 Remotion 工具链，可能占用较多 CPU。
- 精确的字体和依赖版本会影响视觉结果，建议使用锁定文件。
- 仓库内 MP4 是生成的预览，可能被新的渲染结果替换。
- 音画时间点为手工编排，没有自动口型同步或物理模拟。

## 🤝 参与贡献

请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。欢迎聚焦视觉改进、性能修复和文档修正；请勿提交缓存或无关媒体。

提交 issue 时请附可复现命令或视觉示例；PR 应附最小相关渲染或验证证据。不计划上传 Bilibili 或提交 arXiv；仓库中的 MP4 是现有渲染成品。

## 许可证

源代码采用 [GNU AGPL v3.0-only](LICENSE) 授权。重新分发渲染成品前，请确认仓库内媒体的来源和授权情况。
