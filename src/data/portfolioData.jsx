import React from 'react';
import { Zap, Activity, Layers, Wrench, Server, Cpu, Database } from 'lucide-react';

export const DATA = {
  personal: {
    name: "Aashutosh Bairagi",
    role: "Software Engineer & AI Builder",
    headline: "Building AI Systems &\nFull Stack Products.",
    subhead: "Computer science student building real-time products, AI systems, and privacy-first tools — from architecture to production.",
    about: "I'm a computer science student who learns by shipping. I build full-stack products and spend most of my time on the difficult parts — real-time synchronization, AI streaming and memory, and the engineering decisions that keep a system reliable under load and failure. Lately I've been shipping across the stack: a real-time social platform, an autonomous AI runtime, a local-first Flutter app, a role-based attendance system, and a privacy-first browser extension. I run Arch Linux, live in the terminal, and care about systems that hold up after the demo.",
    quickFacts: {
      location: "Ratlam, India",
      degree: "B.Tech Computer Science (3rd Year)",
      primaryStack: "React, Node.js, Flutter, MongoDB",
      focus: "Real-Time Systems & AI Agents",
      yearsBuilding: "3+ Years"
    },
    socials: {
      github: "https://github.com/Aashutosh31",
      linkedin: "https://www.linkedin.com/in/aashutosh-bairagi-559aa530b",
      twitter: "https://x.com/Aashutosh_dev31",
      email: "aashutosh.bairagi05@gmail.com"
    }
  },
  currently: {
    building: ["WebChat (Real-Time Platform)", "ARC-AI (Agent Runtime)", "Bulk Delete for ChatGPT (Extension)"],
    learning: ["System Design", "DSA in C++", "Python", "Technical Communication"],
    exploring: ["Autonomous AI Agents", "Browser Extensions", "Local-First Apps"],
    focus: "Real-time systems, AI agents, and privacy-first product engineering."
  },
  stats: [
    { label: "Projects Shipped", value: "6+", suffix: "" },
    { label: "Lines of Code", value: "40,000+", suffix: "" },
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
    { title: "Shipping a Tool With No Backend", date: "Engineering Log", readTime: "Privacy", desc: "Bulk Delete for ChatGPT runs entirely in the browser — no account, no telemetry, no server. Every feature had to earn its place inside that constraint.", tag: "PRIVACY" },
    { title: "What Redis Taught Me About Scaling", date: "Engineering Log", readTime: "Architecture", desc: "Moving from local state to a distributed Redis pub/sub model was the key to making WebChat horizontally scalable. It fundamentally changed how I view stateless architecture.", tag: "ARCH" },
    { title: "The Nightmare of State Synchronization", date: "Engineering Log", readTime: "Frontend", desc: "Phantom messages and UI desyncs are the hardest part of real-time apps. I solved this by strictly chaining MongoDB writes before acknowledging Socket.IO emits.", tag: "FRONTEND" },
    { title: "Taming the AI Context Window", date: "Engineering Log", readTime: "AI Systems", desc: "Naive LLM wrappers fail at scale. Building ARC-AI required a dedicated retrieval pipeline with Pinecone to separate working context from long-term memory.", tag: "AI" }
  ],
  roadmap: [
    { topic: "System Design", target: "Advanced", current: "Intermediate", progress: 55, reason: "To architect systems capable of handling millions of concurrent users." },
    { topic: "Docker & CI/CD", target: "Proficient", current: "Beginner", progress: 20, reason: "To standardize deployment pipelines and containerize distributed services." },
    { topic: "Cybersecurity", target: "Intermediate", current: "Beginner", progress: 15, reason: "To build robust applications that protect user data from Day 1." },
    { topic: "Git and GitHub", target: "Advanced", current: "Intermediate", progress: 60, reason: "To manage version control and collaborate effectively with other developers." }
  ],
  buildingInPublic: [
    { date: "Nov 2026", title: "Bulk Delete for ChatGPT v1.0.0", type: "Release", desc: "Shipped a privacy-first browser extension that selects and permanently deletes ChatGPT conversations in bulk. No telemetry, no servers, MIT licensed.", color: "blue" },
    { date: "Nov 2026", title: "XERJ Corpus Hub contributor", type: "Recognition", desc: "Listed as a contributor on the XERJ Corpus Hub.", color: "blue" },
    { date: "Oct 2026", title: "Receipts v1.0.0", type: "Release", desc: "Released a local-first Flutter accountability app with Drift storage, Supabase sync, and timezone-aware reminders.", color: "blue" },
    { date: "Sep 2026", title: "SIH Intelligence", type: "Release", desc: "Shipped a Smart India Hackathon problem-statement analyzer that combines Gemini extraction with deterministic scoring and task allocation.", color: "blue" },
    { date: "Jul 2026", title: "AttendTrack", type: "Release", desc: "Built a role-based attendance platform with separate admin, HOD, faculty, coordinator, and student dashboards, plus face-recognition check-in.", color: "blue" },
    { date: "July 2026", title: "ARC-AI v1.0.0 Release", type: "Release", desc: "Released the first stable version of ARC-AI with multi-workspace isolation, RAG memory, and live web research capabilities.", color: "blue" },
    { date: "May 2026", title: "Launched ARC-AI v0.13.0", type: "Release", desc: "Successfully shipped true multi-workspace isolated environments. Complete rewrite of the runtime layer.", color: "blue" },
    { date: "Apr 2026", title: "WebChat Redis Migration", type: "Architecture", desc: "Moved presence tracking and socket coordination entirely to Redis, reducing server memory load by 40%.", color: "violet" },
    { date: "Jan 2026", title: "LiveKit WebRTC Integration", type: "Feature", desc: "Bypassed standard server routing to implement Discord-style voice rooms in WebChat.", color: "blue" },
    { date: "Nov 2025", title: "First Pinecone RAG Implementation", type: "Experiment", desc: "Successfully indexed a 50-page PDF and retrieved exact semantic matches using Mistral embeddings.", color: "violet" }
  ],
  skills: {
    frontend: ["React", "TypeScript", "JavaScript (ES6+)", "Vite", "Tailwind CSS", "Framer Motion", "Zustand", "Flutter"],
    backend: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Socket.IO", "LiveKit (WebRTC)", "Supabase", "JWT"],
    database: ["MongoDB Atlas", "Redis", "Pinecone (Vector)", "PostgreSQL", "Supabase", "Drift (SQLite)"],
    tools: ["Git & GitHub", "Linux (Arch)", "Docker", "Nginx", "Postman", "Vercel", "Render", "Capacitor", "TensorFlow.js"]
  },
  timeline: [
    { year: "2026", title: "Shipped Bulk Delete for ChatGPT", desc: "Released an open-source, privacy-first browser extension that deletes ChatGPT conversations in bulk — no telemetry, no servers." },
    { year: "2026", title: "Contributed to XERJ Corpus Hub", desc: "Listed as a contributor on the XERJ Corpus Hub." },
    { year: "2026", title: "Built SIH Intelligence & Sahaay", desc: "Built a hackathon problem-statement analyzer and a voice-first, multilingual triage prototype for Smart India Hackathon." },
    { year: "2026", title: "Shipped Receipts & AttendTrack", desc: "Released a local-first Flutter accountability app and a role-based attendance platform with face-recognition check-in." },
    { year: "2026", title: "Architected WebChat", desc: "Designed and deployed a distributed monolithic cluster for real-time social networking using Redis and MongoDB." },
    { year: "2026", title: "ARC-AI v1.0.0 Release", desc: "Planned and executed the roadmap for ARC-AI, including multi-workspace isolation, RAG memory, and live web research capabilities." },
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
      shortDesc: "A real-time social platform with messaging, communities, voice/video, stories, and an embedded AI assistant — built on a distributed cluster.",
      image: "/images/webchat-hero.png",
      tags: ["React", "TypeScript", "Node.js", "Socket.IO", "Redis", "MongoDB", "LiveKit", "Docker"],
      links: { demo: "https://webchat.qzz.io", github: "https://github.com/Aashutosh31/webchat-system-design" },
      metrics: { time: "6 Months", complexity: "High", status: "Production", architecture: "Distributed Monolith", loc: "15,000+", endpoints: "45+", collections: "12+" },
      video: "/videos/webchat-demo.mp4",
      overview: "WebChat is a production-focused social hub that converges low-latency persistent messaging, multi-channel structural communities, voice routing matrices, ephemeral social media loops, and an embedded AI assistant into a unified ecosystem.",
      problem: "Traditional chat applications either focus solely on text, or require massive overhead to support voice and community features. Building a system that handles 1-to-1 messaging, Discord-style communities, and WebRTC voice rooms simultaneously requires deep architectural planning to prevent state synchronization failures.",
      solution: "Engineered a distributed monolithic cluster utilizing Redis as a central coordination layer. Implemented LiveKit for WebRTC voice bypassing server bottlenecks, and utilized Socket.IO for low-latency event emission after persistent MongoDB writes to guarantee message durability.",
      architectureNodes: [
        { id: "client", label: "React Client", tech: "TypeScript, Zustand, Tailwind", icon: <Cpu/>, type: "frontend" },
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
      shortDesc: "A streaming AI agent runtime with multi-step tool execution, conversational voice, live vision, and retrieval-based memory.",
      image: "/images/Pasted image.png",
      tags: ["AI Agent", "RAG", "Groq", "Gemini", "Pinecone", "Socket.IO"],
      links: { demo: "https://arc-ai-project.vercel.app/", github: "https://github.com/Aashutosh31/arc-ai-project" },
      metrics: { time: "8 Months", complexity: "Extreme", status: "v1.0.0", architecture: "Event-Driven", loc: "22,000+", endpoints: "30+", collections: "8+" },
      video: "/videos/arc-ai-v13.mp4",
      overview: "ARC-AI is an AI workspace built around progressive streaming, multi-step tool execution, conversational voice, live vision, and retrieval-based memory — with a provider-agnostic model router.",
      problem: "Standard LLM wrappers lose context quickly and cannot execute background tasks. They lack the architecture to isolate different engineering workflows, leading to context contamination and 'stale' memory.",
      solution: "Built a provider-agnostic runtime with a capability-aware router across Groq and Gemini. Implemented Pinecone-backed retrieval memory and a WorkspaceRuntimeManager that isolates conversation state, semantic indexing, and tool execution.",
      architectureNodes: [
        { id: "client", label: "React UI", tech: "Voice & Text Input", icon: <Cpu/>, type: "frontend" },
        { id: "orchestrator", label: "Workspace Manager", tech: "Node.js Runtime", icon: <Server/>, type: "backend" },
        { id: "llm", label: "LLM Router", tech: "Groq / Gemini", icon: <Activity/>, type: "external" },
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
  ],
  latestBuild: {
    id: "bulk-delete-for-chatgpt",
    title: "Bulk Delete for ChatGPT",
    shortDesc: "Select and permanently delete your own ChatGPT conversations in bulk — open source, no telemetry, no servers.",
    tags: ["JavaScript", "WebExtension", "Firefox", "Chrome"],
    meta: "MIT License · v1.0.0 · manual install",
    links: { github: "https://github.com/Aashutosh31/bulk-delete-for-chatgpt" }
  },
  otherProjects: [
    {
      id: "sih-intelligence",
      title: "SIH Intelligence",
      category: "Hackathon build",
      accent: "blue",
      icon: "brain",
      shortDesc: "Paste a Smart India Hackathon problem statement and get a structured execution plan — interpretation, difficulty scorecard, recommended stack, team-fit, and task allocation.",
      tags: ["React", "Node.js", "Gemini", "MongoDB"],
      links: { demo: "https://sih-intelligent-problem-analyzer.vercel.app", github: "https://github.com/Aashutosh31/SIH-Intelligent-Problem-Analyzer" },
      status: "Live",
      meta: "AI + deterministic scoring"
    },
    {
      id: "attendtrack",
      title: "AttendTrack",
      category: "Full-stack platform",
      accent: "violet",
      icon: "scan",
      shortDesc: "Role-based college attendance with separate dashboards for admins, HODs, faculty, coordinators, and students — plus face-recognition check-in.",
      tags: ["React", "Express", "MongoDB", "TensorFlow.js"],
      links: { demo: "https://smart-attendance-frontend-seven.vercel.app", github: "https://github.com/Aashutosh31/smart-attendance-backend" },
      status: "Live",
      meta: "Role-based access"
    },
    {
      id: "receipts",
      title: "Receipts",
      category: "Mobile app",
      accent: "amber",
      icon: "calendar",
      shortDesc: "A local-first Flutter app for keeping an honest 90-day record of daily progress, with offline storage and Supabase sync.",
      tags: ["Flutter", "Dart", "Supabase", "Drift"],
      links: { demo: "https://aashutosh31.github.io/receipts/", github: "https://github.com/Aashutosh31/receipts-app" },
      status: "v1.0.0",
      meta: "Android APK"
    },
    {
      id: "sahaay",
      title: "Sahaay",
      category: "Hackathon prototype",
      accent: "emerald",
      icon: "mic",
      shortDesc: "A voice-first, multilingual triage prototype for a public helpline — AI extracts evidence-backed signals while a fixed-weight engine computes the Stress & Vulnerability Index, keeping humans in the loop.",
      tags: ["AI", "Voice", "Multilingual", "Human-in-the-loop"],
      links: {},
      status: "Private",
      meta: "SIH26093"
    }
  ],
  recognition: [
    {
      id: "xerj",
      title: "XERJ Corpus Hub",
      label: "Contributor",
      desc: "Listed as a contributor on the XERJ Corpus Hub.",
      href: "https://hub.xerj.org/contributors/Aashutosh31",
      badge: "https://hub.xerj.org/contributors/Aashutosh31/badge.svg",
      icon: "badge",
      accent: "blue",
      meta: "Open source"
    },
    {
      id: "sih",
      title: "Smart India Hackathon",
      label: "Hackathon builder",
      desc: "Built SIH Intelligence and Sahaay (SIH26093) — a problem-statement analyzer and a voice-first, multilingual triage prototype.",
      href: "https://sahaay-india.vercel.app/",
      icon: "trophy",
      accent: "violet",
      meta: "SIH26093"
    }
  ]
};
