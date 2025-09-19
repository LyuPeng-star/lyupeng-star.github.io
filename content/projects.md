---
title: "Projects"
subtitle: "Research projects and software development"
projects:

  - id: "a-chen-ai-companion"
    title: "A-Chen AI Companion"
    description: "A bespoke AI chat companion developed as a WeChat Mini-program, designed to navigate platform regulations whilst delivering a polished user experience."
    longDescription: |
      The 'A-Chen AI Companion' began with a clear vision: to create an intelligent, conversational AI partner within the ubiquitous WeChat ecosystem. The project was built natively using the WeChat Mini-program framework, leveraging TypeScript for robust code structure and integrating with a third-party AI model to power its conversational core.

      However, the journey from concept to a functional application was defined by overcoming challenges that were both regulatory and deeply technical. These hurdles demanded more than just coding; they required strategic adaptation and meticulous, component-level debugging.

      1.  **Navigating Regulatory Headwinds**: The most significant initial obstacle was non-technical. We discovered that platform policies strictly prohibit individual developers from publishing applications centred on AI-Generated Content (AIGC) due to national algorithm备案 (record-filing) requirements. This forced a crucial strategic pivot. Rather than abandoning the project, we meticulously rebranded 'A-Chen', shifting its positioning from a generic 'AI Chatbot' to a 'Virtual Companion'. This involved carefully curating its name, description, and in-app text to align with platform rules, a testament to adapting product strategy in response to a rigid regulatory landscape.

      2.  **Debugging CSS Layout Conflicts**: With the strategy set, the focus shifted to creating a polished user interface. A major technical challenge emerged in the implementation of a fully custom, dynamic navigation bar. The title element stubbornly refused to align vertically and, worse, its container would overlap with the content view beneath it. The root cause was eventually traced to a subtle but critical conflict in the WXSS stylesheet: a `@supports` rule, intended for iPhone safe-area compatibility, was using `!important` to enforce a fixed height, thereby overriding the dynamically calculated dimensions passed from the TypeScript logic. Removing this declaration restored the layout's integrity.

      3.  **Architectural Refactoring: Pages vs. Components**: A further challenge surfaced when building out the tab-based interface. Content for the 'About A-Chen' section simply would not render. The issue stemmed from a foundational misunderstanding of the Mini-program framework: we were attempting to embed a 'Page' within another page, when the correct architectural pattern was to use a reusable 'Component'. This led to a necessary refactoring process where the 'About' section was rebuilt as a self-contained component, which could then be correctly imported and rendered within the main tab view.

      Through this blend of strategic repositioning and deep technical problem-solving, the 'A-Chen AI Companion' was successfully brought to life. It stands not only as a functional piece of software but as a case study in navigating the intricate, real-world constraints of modern application development.
    category: "Software/WeChat Mini Program"
    status: "Active"
    startDate: "2025-06"
    technologies: ["WeChat Mini-program", "WXML", "WXSS", "TypeScript", "AI Integration"]
    image: "/images/projects/a-chen-companion.webp"
    links:
      github: "#"
      demo: "https://mp.weixin.qq.com/wxamp/"
    collaborators: ["YGQC (AI Development Assistants)"]
    highlights:
      - "Successfully launched an AI application by strategically repositioning its core function to comply with platform policies for individual developers."
      - "Engineered a pixel-perfect, custom UI, resolving complex CSS layout conflicts related to dynamic navigation bars and device compatibility."
      - "Refactored core UI elements from monolithic pages into reusable components, enabling a sophisticated tab-based navigation system."
      - "Mastered the nuances of the WeChat Mini-program framework, from component lifecycle management to navigating its specific security policies."

  - id: "longcheng-booster"
    title: "Longcheng Revenue Booster"
    description: "An intelligent, real-time data analysis tool designed to help private hire drivers in Taiyuan optimise their fare strategies and boost earnings."
    longDescription: |
      The Longcheng Revenue Booster originated from a straightforward concept: to provide data-driven decision support for private hire drivers by leveraging real-time data streams, such as flight and train arrivals, weather forecasts, and local events. The project began as a robust local prototype, built upon a lightweight and efficient Vue.js and Python Flask stack.

      The true challenge, however, emerged during deployment. The goal was to launch this full-stack application onto a production environment using an entirely free-tier cloud infrastructure, culminating in a publicly shareable URL. This journey was fraught with obstacles, requiring us to navigate a series of typical, yet particularly stubborn, challenges inherent in modern cloud-native application deployment:

      1.  **Database Re-architecture**: The initial choice of SQLite proved unviable due to the limitations of the free-tier cloud platform. This necessitated a complete re-architecture of the data layer, migrating from a file-based database to a robust, cloud-native PostgreSQL instance provided by Supabase.

      2.  **Environment Incompatibility**: Subsequently, we grappled with a cascade of cryptic, low-level compatibility errors, from missing `gunicorn` dependencies to binary incompatibilities between the Python runtime (Python 3.13) and the `psycopg2` database driver on the cloud host. This was resolved by specifying a more stable Python version and switching to a source-compiled driver.

      3.  **Cross-Cloud Networking Faults**: Perhaps the most persistent hurdle was a recurring 'Network is unreachable' error. This was eventually traced to an IPv6 routing incompatibility between the Render (application) and Supabase (database) cloud platforms, the resolution of which involved enforcing an IPv4-specific connection string.

      4.  **Front-End Resilience**: Even with a fully functional back-end, the front-end application was plagued by race conditions and runtime errors that prevented data rendering. This required a deep-dive into the Vue component lifecycle to implement defensive coding practices, such as using `nextTick`, to ensure robust asynchronous behaviour.

      Through systematic, log-driven debugging, each of these challenges was meticulously overcome. The result is a stable, scalable, and fully functional web application, proving that a professional-grade project can be brought to life on a modern, serverless-oriented stack.
    category: "Software/Web Application"
    status: "Active"
    startDate: "2025-09"
    technologies: ["Vue.js", "Vite", "Python", "Flask", "PostgreSQL (Supabase)", "Gunicorn", "Vercel", "Render"]
    image: "/images/projects/longcheng-booster.webp"
    links:
      github: "https://github.com/LyuPeng-star/longcheng-booster-frontend"
      demo: "https://erdan.lyupaif.com/"
    collaborators: ["LCB (AI Development Assistants)"]
    highlights:
      - "Successfully deployed a full-stack Vue.js and Flask application onto an entirely free-tier cloud infrastructure."
      - "Resolved complex cross-platform networking issues, including a persistent IPv6 routing fault between cloud providers."
      - "Re-architected the data layer from file-based SQLite to a production-ready, cloud-native PostgreSQL database."
      - "Engineered a robust front-end by debugging and fixing runtime crashes caused by data race conditions and rendering timing issues."

  
---

# Research Projects

My research projects span multiple areas of artificial intelligence, with a focus on making AI systems more interpretable, efficient, and ethical. Below are some of the key projects I'm currently working on or have completed.

## Active Research Areas

### AI Interpretability
Projects focused on making AI decision-making processes transparent and understandable to humans.

### Intelligent Systems
Development of adaptive systems that can learn and respond to changing environments.

### Software Tools
Creating open-source tools and frameworks to advance AI research and education.

## Collaboration

I'm always interested in collaborating on innovative AI projects. If you see a project that aligns with your interests or have ideas for new collaborations, please don't hesitate to reach out.
