import React from 'react';
import { Zap, Activity, Layers, Wrench, Shield, Server, Cpu, Database, Link } from 'lucide-react';

export const DATA = {
  personal: {
    name: "Aashutosh Bairagi",
    role: "Software Engineer & AI Builder",
    headline: "Building AI Systems &\nFull Stack Products.",
    subhead: "Computer Science student focused on AI-powered applications, real-time systems, scalable architectures, and production-ready software.",
    about: "I am a second-year B.Tech Computer Science student who believes in learning through shipping. While many students focus solely on academic assignments, my passion lies in engineering real, usable products. I specialize in the MERN stack, real-time WebSocket communication, and integrating autonomous AI models into deterministic software workflows. I run Arch Linux, live in the terminal, and build systems designed for scale.",
    quickFacts: {
      location: "Ratlam, India",
      degree: "B.Tech Computer Science (2nd Year)",
      primaryStack: "React, Node.js, MongoDB",
      focus: "AI Agents & Distributed Systems",
      yearsBuilding: "2+ Years"
    },
    socials: {
      github: "https://github.com/Aashutosh31",
      linkedin: "https://www.linkedin.com/in/aashutosh-bairagi-559aa530b",
      twitter: "https://x.com/Aashutosh_dev31",
      email: "aashutosh.bairagi05@gmail.com"
    }
  },
  currently: {
    building: ["WebChat (Distributed Architecture)", "ARC-AI (Multi-Workspace Agent)"],
    learning: ["System Design Principles", "Cybersecurity Fundamentals", "Linux Kernel Internals"],
    exploring: ["Autonomous AI Agents", "Product Engineering", "Event-Driven Microservices"],
    focus: "AI Systems, Distributed Architectures, and Scalable Full-Stack Applications"
  },
  stats: [
    { label: "Projects Shipped", value: "2+", suffix: "" },
    { label: "Lines of Code", value: "40,000+",suffix: "" },
    { label: "API Endpoints", value: "75+", suffix: "" },
    { label: "Uptime", value: "99.2", suffix: "%" },
  ],
  principles: [
    { title: "Build first, optimize later", icon: <Zap className="w-5 h-5"/>, desc: "Momentum is critical. Ship the core functionality, profile the bottlenecks, then optimize."},
    { title: "Solve real problems", icon: <Activity className="w-5 h-5"/>, desc: "Technology is just a tool. The goal is always to deliver tangible value and smooth user experiences." },
    { title: "Simplicity over complexity", icon: <Layers className="w-5 h-5"/>, desc: "Avoid over-engineering. The best architectures are the easiest to reason about." },
    { title: "Keep systems maintainable", icon: <Wrench className="w-5 h-5"/>, desc: "Write code for the next engineer. Clear boundaries, modularity, and comprehensive documentation." }
  ],
  insights: [
    { title: "What Redis Taught Me About Scaling", date: "Engineering Log", readTime: "Architecture", desc: "Moving from local state to a distributed Redis pub/sub model was the key to making WebChat horizontally scalable. It fundamentally changed how I view stateless architecture.", tag: "ARCH" },
    { title: "The Nightmare of State Synchronization", date: "Engineering Log", readTime: "Frontend", desc: "Phantom messages and UI desyncs are the hardest part of real-time apps. I solved this by strictly chaining MongoDB writes before acknowledging Socket.IO emits.", tag: "FRONTEND" },
    { title: "Taming the AI Context Window", date: "Engineering Log", readTime: "AI Systems", desc: "Naive LLM wrappers fail at scale. Building ARC-AI required a dedicated RAG pipeline with Pinecone to explicitly separate working context from long-term memory.", tag: "AI" }
  ],
  roadmap: [
    { topic: "System Design", target: "Advanced", current: "Intermediate", progress: 55, reason: "To architect systems capable of handling millions of concurrent users." },
    { topic: "Docker & CI/CD", target: "Proficient", current: "Beginner", progress: 20, reason: "To standardize deployment pipelines and containerize distributed services." },
    { topic: "Cybersecurity", target: "Intermediate", current: "Beginner", progress: 15, reason: "To build robust applications that protect user data from Day 1." },
    { topic: "Git and GitHub", target: "Advanced", current: "Intermediate", progress: 60, reason: "To manage version control and collaborate effectively with other developers." }
  ],
  buildingInPublic: [
    { date: "May 2026", title: "Launched ARC-AI v0.13.0", type: "Release", desc: "Successfully shipped true multi-workspace isolated environments. Complete rewrite of the runtime layer.", color: "blue" },
    { date: "Apr 2026", title: "WebChat Redis Migration", type: "Architecture", desc: "Moved presence tracking and socket coordination entirely to Redis, reducing server memory load by 40%.", color: "violet" },
    { date: "Jan 2026", title: "LiveKit WebRTC Integration", type: "Feature", desc: "Bypassed standard server routing to implement Discord-style voice rooms in WebChat.", color: "blue" },
    { date: "Nov 2025", title: "First Pinecone RAG Implementation", type: "Experiment", desc: "Successfully indexed a 50-page PDF and retrieved exact semantic matches using Mistral embeddings.", color: "violet" }
  ],
  skills: {
    frontend: ["React", "JavaScript (ES6+)", "Vite", "Tailwind CSS", "Zustand", "Framer Motion"],
    backend: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Socket.IO", "LiveKit (WebRTC)"],
    database: ["MongoDB Atlas", "Redis", "Pinecone (Vector)", "Mongoose"],
    tools: ["Git & GitHub", "Linux (Arch)", "Docker", "Postman", "Vercel", "Render"]
  },
  timeline: [
    { year: "2026", title: "Architected WebChat", desc: "Designed and deployed a distributed monolithic cluster for real-time social networking using Redis and MongoDB." },
    { year: "2026", title: "Launched ARC-AI v0.13.0", desc: "Evolved a chatbot into a multi-workspace autonomous runtime environment with Pinecone RAG memory." },
    { year: "2025", title: "Deepened Real-Time & Backend Expertise", desc: "Explored advanced patterns for handling real-time data synchronization and backend service orchestration." },
    { year: "2025", title: "Learned Socket.IO and WebSockets", desc: "Understood the fundamentals of real-time communication and implemented WebSocket solutions." },
    { year: "2025", title: "Deployed First Full-Stack App", desc: "Successfully deployed a full-stack application, integrating frontend and backend technologies." },
    { year: "2025", title: "Started Learning Full-Stack Development", desc: "Begun exploring the integration of frontend and backend technologies." },
    { year: "2024", title: "Learned Git and GitHub", desc: "Mastered version control and collaborative development practices." },
    { year: "2024", title: "Built First Personal Website", desc: "Created a simple portfolio site using HTML, CSS, and JavaScript to showcase projects." },
    { year: "2024", title: "Learned HTML, CSS and JavaScript", desc: "Built foundational knowledge of web development technologies." },
    { year: "2024", title: "Started Programming", desc: "Wrote my first lines of C++, learned algorithms, and discovered a passion for software." }
  ],
  projects: [
    {
      id: "webchat",
      title: "WebChat",
      accentColor: "#3B82F6",
      shortDesc: "A multi-paradigm real-time communication platform built on a distributed monolithic cluster.",
      image: "/images/webchat-hero.png",
      tags: ["React", "Node.js", "Socket.IO", "Redis", "MongoDB", "LiveKit"],
      links: { demo: "https://webchat.qzz.io", github: "https://github.com/Aashutosh31/webchat-system-design" },
      metrics: { time: "6 Months", complexity: "High", status: "Production", architecture: "Distributed Monolith", loc: "15,000+", endpoints: "45+", collections: "12+" },
      video: "/videos/webchat-demo.mp4",
      overview: "WebChat is a production-focused social hub that converges low-latency persistent messaging, multi-channel structural communities, voice routing matrices, and ephemeral social media loops into a unified ecosystem.",
      problem: "Traditional chat applications either focus solely on text, or require massive overhead to support voice and community features. Building a system that handles 1-to-1 messaging, Discord-style communities, and WebRTC voice rooms simultaneously requires deep architectural planning to prevent state synchronization failures.",
      solution: "Engineered a distributed monolithic cluster utilizing Redis as a central coordination layer. Implemented LiveKit for WebRTC voice bypassing server bottlenecks, and utilized Socket.IO for low-latency event emission after persistent MongoDB writes to guarantee message durability.",
      architectureNodes: [
        { id: "client", label: "React Client", tech: "Zustand, Tailwind", icon: <Cpu/>, type: "frontend" },
        { id: "api", label: "Express Backend", tech: "Node.js, REST", icon: <Server/>, type: "backend" },
        { id: "socket", label: "Socket.IO", tech: "Real-time Mesh", icon: <Activity/>, type: "backend" },
        { id: "redis", label: "Redis", tech: "Pub/Sub & Presence", icon: <Layers/>, type: "database" },
        { id: "mongo", label: "MongoDB", tech: "Persistence", icon: <Database/>, type: "database" },
        { id: "livekit", label: "LiveKit", tech: "WebRTC Voice", icon: <Zap/>, type: "external" }
      ],
      challenges: [
        { title: "Real-time State Synchronization", desc: "Ensuring messages were saved before socket emission to prevent phantom messages. Solved by chaining DB writes with Socket.IO acknowledgments." },
        { title: "WebRTC Complexity", desc: "Scaling voice channels. Integrated LiveKit infrastructure to handle multi-party audio transmission, reducing Node.js server load." },
        { title: "Security Vulnerabilities", desc: "Preventing XSS/CSRF. Implemented strict HttpOnly dual-token rotation and synchronized state tokens for all mutative operations." }
      ],
      lessons: "Learned the critical importance of decoupled state stores on the frontend, and how Redis pub/sub is absolutely essential for horizontally scaling WebSocket connections across multiple server instances."
    },
    {
      id: "arc-ai",
      title: "ARC-AI",
      accentColor: "#8B5CF6",
      shortDesc: "Autonomous multi-workspace AI agent with RAG memory, live vision, and background execution.",
      image: "/images/Pasted image.png",
      tags: ["AI Agent", "RAG", "Pinecone", "Socket.IO", "Mistral", "GPT-4o"],
      links: { demo: "https://arcaiproject.qzz.io/", github: "https://github.com/Aashutosh31/arc-ai-project" },
      metrics: { time: "8 Months", complexity: "Extreme", status: "v0.13.0-beta", architecture: "Event-Driven", loc: "22,000+", endpoints: "30+", collections: "8+" },
      video: "/videos/arc-ai-v13.mp4",
      overview: "ARC-AI evolved from a reactive chatbot into a proactive, multi-workspace autonomous runtime environment. It features isolated execution buckets, semantic vector memory, live web research, and direct UI actuation.",
      problem: "Standard LLM wrappers lose context quickly and cannot execute background tasks. They lack the architecture to isolate different engineering workflows, leading to context contamination and 'stale' memory.",
      solution: "Built a provider-agnostic runtime orchestrating Gemini and Mistral. Implemented Pinecone vector databases for a scoped RAG memory pipeline. Developed a 'WorkspaceRuntimeManager' to isolate conversation state, semantic indexing, and tool execution securely.",
      architectureNodes: [
        { id: "client", label: "React UI", tech: "Voice & Text Input", icon: <Cpu/>, type: "frontend" },
        { id: "orchestrator", label: "Workspace Manager", tech: "Node.js Runtime", icon: <Server/>, type: "backend" },
        { id: "llm", label: "LLM Router", tech: "GPT-4o / Mistral", icon: <Activity/>, type: "external" },
        { id: "rag", label: "Pinecone DB", tech: "Vector Memory", icon: <Database/>, type: "database" },
        { id: "tools", label: "Actuation Engine", tech: "Cron, Puppeteer", icon: <Wrench/>, type: "backend" }
      ],
      challenges: [
        { title: "Context Contamination", desc: "Conversations were bleeding into each other. Implemented strict Workspace IDs, isolating vector namespaces and execution ownership." },
        { title: "Multimodal Safety", desc: "Handling image uploads when an API falls back to a non-vision model. Built a capability-aware router that blocks invalid multimodal fallbacks to prevent silent crashes." },
        { title: "Realtime Interruption", desc: "Handling user interruption during a streaming response. Designed a safe cleanup protocol over Socket.IO to guarantee terminal events." }
      ],
      lessons: "Deeply understood that wrapping an API is easy, but building a reliable, stateful, and deterministic orchestration layer around non-deterministic AI models is exceptionally difficult."
    }
  ]
};