---
title: "Projects"
subtitle: "Research projects and software development"
projects:
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
    category: "Software"
    status: "Active"
    startDate: "2025-09"
    technologies: ["Vue.js", "Vite", "Python", "Flask", "PostgreSQL (Supabase)", "Gunicorn", "Vercel", "Render"]
    image: "/images/projects/longcheng-booster.webp"
    links:
      github: "https://github.com/LyuPeng-star/longcheng-booster-frontend"
      demo: "https://erdan.lyupaif.com/"
    collaborators: ["LCB (AI Development Assistant)"]
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
