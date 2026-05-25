<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# [https://www.reddit.com/r/ClaudeCode/comments/1qm1l9o/remotion_threejs_is_genuinely_insane_and_i_cant/](https://www.reddit.com/r/ClaudeCode/comments/1qm1l9o/remotion_threejs_is_genuinely_insane_and_i_cant/)

I stumble upon this article. I am a developer and I don't understand why this guy think remotion is something extraordinary and what three js can add to that

Great, I have enough to give a solid technical breakdown. Here's the full picture:

## What is Remotion?

Remotion is a framework that lets you **create videos using React** — instead of editing in a timeline (like Premiere or After Effects), you write JSX components and programmatically control what appears at each frame via a `useCurrentFrame()` hook. The output is a real `.mp4` rendered frame-by-frame through a headless Chromium browser. As a developer, you get full React + TypeScript, version control, loops, conditionals, and data-driven video generation — things no traditional video editor offers.[^1_1]

## What Three.js Adds

Three.js (used via **React Three Fiber**, its React wrapper) brings a full WebGL-based 3D engine into the equation. On its own, Remotion is limited to 2D DOM/CSS animations. Three.js unlocks:

- **Real 3D geometry** — meshes, cameras, lights, materials, shaders
- **Physics-based motion** — simulations, particle systems, procedural animations
- **3D scenes** rendered as video frames — rotating objects, 3D charts, product visualizations

The `@remotion/three` package bridges the two with a `<ThreeCanvas>` component that syncs Three.js rendering to Remotion's `useCurrentFrame()` instead of Three.js's own animation loop. This is critical: it means you can **scrub back and forth** on the timeline like a normal video, which Three.js alone cannot do since it's built around a continuous `requestAnimationFrame` loop.[^1_2][^1_1]

## Why the Reddit Guy Is Excited

The excitement comes from combining **three paradigm shifts at once**:[^1_3]

- **No After Effects / No Blender timeline** — everything is code
- **Scalability** — need 500 product videos with different colors and text? Write a loop
- **3D without being a 3D artist** — React Three Fiber abstracts the hard parts of WebGL
- **Git-friendly** — your entire video is source code, diffable and version-controlled
- **AI-assisted** — tools like Claude Code can generate both Remotion and Three.js code from a description

For someone who has never programmed videos before, the realization that you can produce a **3D animated data visualization video entirely in code** — and generate 100 variants of it from a spreadsheet — is genuinely surprising.

## The Developer's Perspective

As a developer yourself, you'd likely find the setup familiar rather than magical. The technical architecture is straightforward: React components → headless Chromium screenshots each frame → ffmpeg stitches them into a video. The `<ThreeCanvas>` overrides Three.js's `frameloop` to `'never'` and advances rendering on demand per Remotion frame. The novelty is mostly **workflow novelty** for people coming from creative tools, not a breakthrough in the underlying tech.[^1_2]

Where it becomes genuinely interesting for you as a **course creator** is the potential for **programmatic course visuals** — think animated architecture diagrams, 3D infrastructure visualizations, or data-driven explainer videos generated directly from code for your Udemy courses, with no manual video editing.
<span style="display:none">[^1_10][^1_11][^1_12][^1_13][^1_4][^1_5][^1_6][^1_7][^1_8][^1_9]</span>

<div align="center">⁂</div>

[^1_1]: https://www.remotion.dev/docs/three

[^1_2]: https://www.remotion.dev/docs/three-canvas

[^1_3]: https://www.reddit.com/r/ClaudeCode/comments/1qm1l9o/remotion_threejs_is_genuinely_insane_and_i_cant/

[^1_4]: https://www.remotion.dev/docs/videos/as-threejs-texture

[^1_5]: https://github.com/remotion-dev/template-three

[^1_6]: https://www.remotion.dev/prompts/threejs-top-20-games-sold-ranking-1

[^1_7]: https://www.remotion.dev/docs/use-video-texture

[^1_8]: https://threejs3d.com/threejs-projects/projects/remotion-dev-template-three

[^1_9]: https://www.zo.computer/skills/remotion-best-practices

[^1_10]: https://github.com/remotion-dev/skills/blob/main/skills/remotion/rules/3d.md

[^1_11]: https://www.reddit.com/r/threejs/comments/1fgoije/this_video_was_made_with_threejs_and_remotion/

[^1_12]: https://www.remotion.dev/templates/three

[^1_13]: https://www.youtube.com/playlist?list=PL-rh08IuC0WRHmyC6IdJPSBiFRNBplC4g


---

# Can you make a demonstration ?

Here's a fully interactive demo that runs live in your browser — no install needed .

## What the Demo Shows

The demo simulates **exactly how Remotion + Three.js works** with three scenes you can switch between:

- **Cube** — a metallic 3D cube with an orbiting satellite, driven entirely by frame number
- **Particles** — 800 particles in a pulsing sphere, rotated and scaled from frame math
- **Wave** — a 40×40 vertex grid where every vertex height is a pure function of `(x, z, frame)`


## How to Use It

- **Press Play** to watch the animation run at 30fps over 150 frames
- **Scrub the timeline bar** — drag it to any position. This is the key insight: the 3D scene jumps perfectly to any frame instantly, because everything is computed from `frame`, not from a running clock
- **"Live Values" tab** — watch every parameter update in real-time as you scrub. You'll see `t`, `angle`, `eased progress`, and scene-specific values change
- **"Why It Matters" tab** — explains the concept in context of your work as a course creator


## The Core Insight (Highlighted in Code)

Every code snippet highlights this line in purple:

```js
const frame = useCurrentFrame(); // 👈 THE magic
```

Traditional Three.js uses `requestAnimationFrame` — a continuous clock you can't scrub back through. Remotion replaces that loop with a single frame number. This makes frame 42 **always identical** whether you're previewing, scrubbing, or rendering frame 42 out of 500 total renders running in parallel on a server.

That determinism is exactly why you can render a 500-video batch job — each worker independently renders its assigned frame range, and they all agree on what each frame looks like.

