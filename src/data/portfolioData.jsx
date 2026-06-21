import React from 'react';
import { Zap, Activity, Layers, Wrench } from 'lucide-react';

export const DATA = {
  personal: {
    name: "Ashutosh Bairagi",
    role: "Software Engineer & Product Builder",
    tagline: "Building AI-powered products, modern web applications, and scalable software systems.",
    about: "I engineer production-grade distributed architectures and autonomous AI environments. Focused on solving real problems with robust, scalable code.",
    socials: {
      github: "https://github.com/Aashutosh31",
      linkedin: "https://www.linkedin.com/in/aashutosh-bairagi-559aa530b",
      twitter: "https://x.com/Aashutosh_dev31",
      email: "aashutosh.bairagi05@gmail.com"
    }
  },
  currently: {
    building: "WebChat (Distributed Real-time Platform)",
    learning: ["System Design", "Cybersecurity", "Linux Internals"],
    exploring: ["Autonomous AI Agents", "Product Engineering", "Open Source Routing"],
    focus: "Shipping reliable, low-latency communication infrastructure."
  },
  principles: [
    { title: "Build first, optimize later", icon: <Zap className="w-5 h-5"/>, desc: "Momentum is critical. Ship the core functionality, profile the bottlenecks, then optimize." },
    { title: "Solve real problems", icon: <Activity className="w-5 h-5"/>, desc: "Technology is just a tool. The goal is always to deliver tangible value and smooth user experiences." },
    { title: "Simplicity over complexity", icon: <Layers className="w-5 h-5"/>, desc: "Avoid over-engineering. The best architectures are the easiest to reason about." },
    { title: "Keep systems maintainable", icon: <Wrench className="w-5 h-5"/>, desc: "Write code for the next engineer. Clear boundaries, modularity, and comprehensive documentation." }
  ],
  skills: {
    frontend: ["React 19", "JavaScript (ES6+)", "Vite", "Tailwind CSS", "Zustand", "Framer Motion"],
    backend: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Socket.IO", "LiveKit (WebRTC)"],
    database: ["MongoDB Atlas", "Redis", "Pinecone (Vector)", "Mongoose"],
    tools: ["Git & GitHub", "Linux (Arch)", "Docker", "Postman", "Vercel", "Render"]
  },
  timeline: [
    { year: "2026", title: "Architected WebChat", desc: "Designed and deployed a distributed monolithic cluster for real-time social networking using Redis and MongoDB." },
    { year: "2026", title: "Launched ARC-AI v0.13.0", desc: "Evolved a chatbot into a multi-workspace autonomous runtime environment with Pinecone RAG memory." },
    { year: "2025", title: "Started Learning Backend Scaling", desc: "Deep dive into WebSockets, caching layers, and microservice communication patterns." },
    { year: "2024", title: "Full Stack Foundation", desc: "Built complex React applications and established a strong grasp of modern web technologies." },
    { year: "2024", title: "Started Coding", desc: "Began the journey with C++, algorithms, and basic web development." }
  ],
  metrics: [
    { label: "Major Production Projects", value: "2+" },
    { label: "Tech Stack", value: "Full Stack" },
    { label: "Engineering Focus", value: "AI & Systems" },
    { label: "Open Source", value: "Active Contributor" }
  ],
  projects: [
    {
      id: "webchat",
      title: "WebChat",
      shortDesc: "A multi-paradigm real-time communication platform built on a distributed monolithic cluster.",
      image: "/images/webchat-hero.png",
      tags: ["React", "Node.js", "Socket.IO", "Redis", "MongoDB", "LiveKit"],
      links: { demo: "https://webchat.qzz.io", github: "https://github.com/Aashutosh31/webchat-system-design" },
      metrics: { time: "6 Months", complexity: "High", status: "Production", architecture: "Distributed Monolith" },
      video: "/videos/webchat-demo.mp4",
      overview: "WebChat is a production-focused social hub that converges low-latency persistent messaging, multi-channel structural communities, voice routing matrices, and ephemeral social media loops into a unified ecosystem.",
      problem: "Traditional chat applications either focus solely on text, or require massive overhead to support voice and community features. Building a system that handles 1-to-1 messaging, Discord-style communities, and WebRTC voice rooms simultaneously requires deep architectural planning to prevent state synchronization failures.",
      solution: "Engineered a distributed monolithic cluster utilizing Redis as a central coordination layer. Implemented LiveKit for WebRTC voice bypassing server bottlenecks, and utilized Socket.IO for low-latency event emission after persistent MongoDB writes to guarantee message durability.",
      architecture: [
        { layer: "Frontend", tech: "React, Zustand, Tailwind, Vite", desc: "Domain-based state management, Axios security interceptors." },
        { layer: "Backend", tech: "Node.js, Express, Socket.IO", desc: "REST pipeline, Redis sync adapters, dual-token JWT lifecycle." },
        { layer: "Persistence", tech: "MongoDB Atlas, Redis, Cloudinary", desc: "Mongoose models, TTL indexes for ephemeral stories, Redis presence tracking." }
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
      shortDesc: "Autonomous multi-workspace AI agent with RAG memory, live vision, and background execution.",
      image: "/images/Pasted image.png",
      tags: ["AI Agent", "RAG", "Pinecone", "Socket.IO", "Mistral", "GPT-4o"],
      links: { demo: "https://arcaiproject.qzz.io/", github: "https://github.com/Aashutosh31/arc-ai-project" },
      metrics: { time: "8 Months", complexity: "Extreme", status: "v0.13.0-beta", architecture: "Event-Driven Microservices" },
      video: "/videos/arc-ai-v13.mp4",
      overview: "ARC-AI evolved from a reactive chatbot into a proactive, multi-workspace autonomous runtime environment. It features isolated execution buckets, semantic vector memory, live web research, and direct UI actuation.",
      problem: "Standard LLM wrappers lose context quickly and cannot execute background tasks. They lack the architecture to isolate different engineering workflows, leading to context contamination and 'stale' memory.",
      solution: "Built a provider-agnostic runtime orchestrating Gemini and Mistral. Implemented Pinecone vector databases for a scoped RAG memory pipeline. Developed a 'WorkspaceRuntimeManager' to isolate conversation state, semantic indexing, and tool execution securely.",
      architecture: [
        { layer: "Intelligence", tech: "Mistral, GPT-4o, Pinecone", desc: "Vector embeddings, semantic lookup, fallback generation routing." },
        { layer: "Runtime", tech: "Node.js, TaskExecutor", desc: "Isolated execution buckets, workspace-aware retrieval, Socket.IO streaming." },
        { layer: "Actuation", tech: "Cheerio, Cron, Puppeteer", desc: "Live scraping, proactive routine engine, WhatsApp automation." }
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
