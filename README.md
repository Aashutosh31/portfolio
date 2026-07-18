<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=220&color=gradient&customColorList=24,25,26,27&text=Portfolio&fontColor=c0caf5&fontSize=42&fontAlignY=38&desc=Engineered%20by%20Aashutosh%20Bairagi&descAlignY=58&descSize=18&animation=fadeIn" width="100%"/>

<a href="https://aashutoshbairagi.vercel.app">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=22&duration=2800&pause=900&color=7AA2F7&center=true&vCenter=true&width=680&lines=const+dev+%3D+new+Engineer('Aashutosh');;dev.stack+%3D+%5B'React'%2C+'Node'%2C+'AI+Agents'%5D%3B;dev.status+%3D+'Open+to+opportunities'%3B;while+(true)+%7B+ship()%3B+%7D" alt="Typing SVG" />
</a>

<br/>

[![Live](https://img.shields.io/badge/LIVE-aashutoshbairagi.vercel.app-7aa2f7?style=for-the-badge&labelColor=1a1b26&logo=vercel&logoColor=c0caf5)](https://aashutoshbairagi.vercel.app)
[![Status](https://img.shields.io/badge/STATUS-ACTIVE-bb9af7?style=for-the-badge&labelColor=1a1b26)](#)

<br/>

<img src="https://skillicons.dev/icons?i=react,tailwind,vite,vercel,vscode&theme=dark" />

</div>

<br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=1a1b26&height=2&width=100%"/>

<br/>

```
┌─[aashutosh@arch]─[~/projects/portfolio]
└──╼ $ neofetch --readme
```

<table>
<tr>
<td width="140" align="center" valign="top">
  <img src="https://skillicons.dev/icons?i=arch&theme=dark" width="72"/>
</td>
<td>

```yaml
OS:        Arch Linux (btw)
WM:        Hyprland
Editor:    VS Code
Terminal:  Ghostty + Starship
Files:     Yazi
Bar:       Waybar
Theme:     Tokyo Night — everywhere
Font:      JetBrains Mono
Uptime:    2+ years shipping code
```

</td>
</tr>
</table>

<br/>

## `// 01` &nbsp; overview

I'm a second-year Computer Science student who ships production software instead of
waiting for a diploma to call myself an engineer. Every project linked from this
portfolio is live, handling real traffic, and built to survive more than a single demo —
not a Figma mockup, not a tutorial clone.

The site itself is built the same way I build everything else — deliberately. The
terminal hero isn't decoration, it's the shell I open every morning. The command
palette isn't a gimmick, it's muscle memory from `Ctrl+K` in every tool I actually use.
Nothing here is set dressing; every choice traces back to how I work.

<br/>

<div align="center">

|  Projects shipped (Major) |  Lines of code  |  API endpoints  |  Uptime  |
|:---:|:---:|:---:|:---:|
|  **2**  |  **37k+**  |  **75+**  |  **99.2%**  |

</div>

<br/>

## `// 02` &nbsp; signature features

<table>
<tr>
<td width="50%" valign="top">

**⌘ Live terminal hero**
A typewriter-rendered `whoami`, `ls`, `cat mission.txt` sequence with realistic keystroke timing and a blinking cursor — because a static hero image doesn't say "developer," a live shell does.

**◆ Dual accent identity**
Blue (`#7aa2f7`) marks distributed-systems work, violet (`#bb9af7`) marks AI/agent work — every card, metric, and case study inherits its project's color, so the two disciplines read as distinct at a glance.

**⌘K command palette**
Full keyboard-driven navigation with live fuzzy search across every project, section, and page — built the way I actually navigate my own tools, not bolted on for show.

</td>
<td width="50%" valign="top">

**▲ Animated metrics**
LOC, endpoint counts, and uptime tick upward on scroll — pulled from the same numbers backing the projects below, not placeholder stats.

**◈ Scroll-triggered everything**
Every reveal, progress bar, and timeline entry is choreographed with `framer-motion` on a single orchestrated pass, not scattered animation for its own sake.

**♿ Accessible by default**
Full `prefers-reduced-motion` support, visible focus rings, and semantic HTML throughout — held to the same bar I'd expect from a production client codebase.

</td>
</tr>
</table>

<br/>

## `// 03` &nbsp; tech stack

<div align="center">

| Layer | Stack |
|:--|:--|
| **Framework** | React · Vite |
| **Styling** | Tailwind CSS · custom Tokyo-Night-inspired design tokens |
| **Motion** | Framer Motion — orchestrated, not scattered |
| **Icons** | Lucide React |
| **Fonts** | Inter (body) · JetBrains Mono (data / terminal) |
| **Deployment** | Vercel |

</div>

<br/>

## `// 04` &nbsp; project structure

```bash
portfolio/
├── src/
│   ├── App.jsx                    # Router, navbar, ⌘K command palette
│   ├── index.css                  # Design tokens, terminal FX, gradients
│   ├── data/
│   │   └── portfolioData.jsx      # Single source of truth — projects, skills, timeline
│   ├── components/
│   │   ├── ui/                    # Button · Card · Badge · Section (primitives)
│   │   └── sections/               # Hero · Projects · Skills · Roadmap · ...
│   └── pages/
│       ├── Home.jsx
│       ├── CaseStudy.jsx          # Accent-aware, per-project deep dive
│       └── Contact.jsx
└── README.md                      # you are here
```

<br/>

## `// 05` &nbsp; run it locally

```bash
# clone the repository
git clone https://github.com/Aashutosh31/portfolio.git

# move in
cd portfolio

# install dependencies
npm install

# fire up the dev server
npm run dev

# → open http://localhost:5173
```

<br/>

<table>
<tr><td>

```diff
+ npm run dev       start dev server (vite)
+ npm run build      production build
+ npm run preview    preview the build locally
+ npm run lint       eslint across the codebase
```

</td></tr>
</table>

<br/>

## `// 06` &nbsp; design philosophy

> Every pixel here earns its place the same way code does — through review. Section
> headers read like shell comments (`// system_architecture`, `// git_log`) because
> that's the language I actually think in, not a flourish borrowed from someone else's
> dribbble shot. The question I keep coming back to: would this hold up in a code
> review from an engineer who's never met me? If a component only looks good because
> I wrote flattering copy for it, it isn't finished.

<br/>

## `// 07` &nbsp; featured builds

<div align="center">

<table>
<tr>
<td width="50%" align="center">

**🔵 WebChat**
<br/>
<sub>A distributed real-time social platform unifying messaging, community channels, and WebRTC voice on a single Redis-coordinated cluster — engineered to survive horizontal scaling, not just a single-server demo.</sub>
<br/><br/>
<a href="https://webchat.qzz.io"><img src="https://img.shields.io/badge/LIVE_DEMO-7aa2f7?style=flat-square&labelColor=1a1b26"/></a>
<a href="https://github.com/Aashutosh31/webchat-system-design"><img src="https://img.shields.io/badge/SOURCE-1a1b26?style=flat-square&labelColor=1a1b26"/></a>

</td>
<td width="50%" align="center">

**🟣 ARC-AI**
<br/>
<sub>A multi-workspace autonomous agent with isolated RAG memory, live web research, and event-driven task execution — built to solve the context-contamination problem that breaks most LLM wrappers at scale.</sub>
<br/><br/>
<a href="https://arcaiproject.qzz.io"><img src="https://img.shields.io/badge/LIVE_DEMO-bb9af7?style=flat-square&labelColor=1a1b26"/></a>
<a href="https://github.com/Aashutosh31/arc-ai-project"><img src="https://img.shields.io/badge/SOURCE-1a1b26?style=flat-square&labelColor=1a1b26"/></a>

</td>
</tr>
</table>

</div>

<br/>

## `// 08` &nbsp; connect

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-7aa2f7?style=for-the-badge&logo=vercel&logoColor=white&labelColor=1a1b26)](https://aashutoshbairagi.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-1a1b26?style=for-the-badge&logo=github&logoColor=c0caf5&labelColor=1a1b26)](https://github.com/Aashutosh31)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-7aa2f7?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=1a1b26)](https://www.linkedin.com/in/aashutosh-bairagi-559aa530b)
[![Twitter](https://img.shields.io/badge/X-1a1b26?style=for-the-badge&logo=x&logoColor=c0caf5&labelColor=1a1b26)](https://x.com/Aashutosh_dev31)

</div>

<br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=1a1b26&height=2&width=100%"/>

<div align="center">
<sub>Built with React, Tailwind, and an unreasonable number of terminal windows.</sub>
<br/>
<sub>© 2026 Aashutosh Bairagi</sub>
</div>

<img src="https://capsule-render.vercel.app/api?type=waving&height=100&color=gradient&customColorList=24,25,26,27&section=footer" width="100%"/>
