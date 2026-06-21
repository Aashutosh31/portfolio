Aashutosh Bairagi | Engineering Portfolio

A production-grade, SaaS-inspired personal portfolio designed to showcase complex system architectures, full-stack software engineering projects, and a continuous learning journey.

Built to feel like the homepage of a modern startup, replacing traditional "student portfolio" aesthetics with a high-performance, developer-centric interface.

🚀 Tech Stack

Core Framework: React  + Vite

Styling: Tailwind CSS

Animations: Framer Motion

Icons: Lucide React

Architecture: Component-driven, headless data abstraction

✨ Key Features

Modular Architecture: Clean separation of concerns across Data, UI Primitives, Page Sections, and Views.

Deep-Dive Case Studies: Dedicated architecture breakdowns with native HTML5 video player support.

Command Palette (Pro UX): Global Ctrl + K navigation menu for rapid routing.

Headless Data Layer: All project metrics, skills, and timelines are abstracted into a single /src/data/portfolioData.jsx file for zero-friction updates.

Responsive & Fluid: Mobile-first design with premium Framer Motion scroll and hover micro-interactions.

📂 Project Structure

/public
  /Images           # Static image assets (e.g., /Images/webchat-hero.png)
  /Videos           # Local video demos (e.g., /Videos/arc-ai-demo.mp4)
/src
  /components
    /sections       # Large, distinct layout blocks (Hero, Timeline, Projects)
    /ui             # Reusable atomic design primitives (Button, Card, Badge)
  /data
    portfolioData.jsx # Single source of truth for all text/project content
  /pages
    CaseStudy.jsx   # Dynamic deep-dive project template
    Contact.jsx     # Dedicated contact route
    Home.jsx        # Landing page assembler
  App.jsx           # Entry point, global layout, and routing controller
  main.jsx


🛠️ Local Development Setup

Clone the repository:

git clone [https://github.com/Aashutosh31/portfolio.git](https://github.com/Aashutosh31/portfolio.git)
cd portfolio


Install dependencies:

npm install
# or
yarn install


Add Media Assets:

Create an Images folder inside /public and drop in your project screenshots.

Create a Videos folder inside /public and drop in your .mp4 demo videos.

Start the development server:

npm run dev


Build for production:

npm run build


👨‍💻 Architect

Aashutosh Bairagi

GitHub

LinkedIn

X / Twitter
