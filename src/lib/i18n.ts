export type Locale = "zh" | "en";

export const dictionaries = {
  zh: {
    nav: {
      explore: "探索",
      tutorials: "教程",
      projects: "作品",
    },
    hero: {
      badge: "设计工程师",
      title: "以工业级精度打造数字体验。",
      subtitle: "专注于现代 Web 架构、物理流体交互与对细节的不妥协追求。",
    },
    pillars: {
      badge: "核心探索坐标",
      title: "数字工匠的极客试验场",
      subtitle: "向下滚动探索系统底层逆向与工业级硬件协同的物理交互细节。",
      system: {
        tag: "SYSTEM TWEAKS & WORKFLOW",
        title: "系统调优与使用技巧",
        desc: "深入 macOS 与 iOS 底层守护进程及权限机制。绕过机型与地区限制强制激活端侧 AI，构建基于快捷指令的自动化效率流。",
        cmd: "sysctl -w kern.eligibility.bypass=1",
        status: "DAEMON INJECTED // ACTIVE",
        hint: "点击终端触发内核注入",
      },
      hardware: {
        tag: "HARDWARE & STUDIO EDC",
        title: "数码好物与硬件工坊",
        desc: "探寻工业设计与触觉反馈的黄金分割点。深度挖掘 Apple 全家桶多端协同潜力、紧凑影像设备与桌面极简 EDC。",
        status: "TITANIUM CHASSIS // f/1.4",
        hint: "点击光圈触发机械快门",
      },
      manifesto: {
        title: "不妥协的工程与设计追求",
        desc: "拒绝信息碎屑。每一处弹簧回弹与代码实现，都以交付可复现工业品的标准打磨。",
        badge: "DESIGNED BY ZACHARY",
      },
    },
    works: {
      title: "精选作品",
      subtitle: "追求卓越工程与工业级设计美学。",
    },
    featured: {
      badge: "精选交互工程",
      tag: "Apple Wallet 自定义工坊",
      desc: "深度复刻 iOS 拟真玻璃微曲折射与全息反光算法。集成移动端设备陀螺仪硬件响应、银联/Visa/Mastercard 矢量标识合成，以及本地持久化卡包。",
      btn: "体验在线工程",
    },
    tutorialsPage: {
      badge: "系统实战 & 极客档案",
      title: "教程与写作",
      subtitle: "底层系统调试、Apple 生态逆向、效率工作流与现代前端工程实录。",
      readTime: "分钟阅读",
      readMore: "阅读全文",
      posts: [
        {
          slug: "force-enable-apple-intelligence",
          date: "2026-10-10",
          readTime: "8",
          category: "macOS / iOS",
          title: "跨越限制：macOS 与 iOS 强开 Apple Intelligence 完整实操与避坑指南",
          summary: "绕过地区与机型限制，深入 eligibilityd 与 MobileGestalt 底层激活端侧智能套件。",
        },
      ],
    },
    projectsPage: {
      badge: "交互工程实验室",
      title: "作品与实验",
      subtitle: "融合物理动力学、工业设计直觉与现代 Web 渲染技术的实验项目集合。",
      visitProject: "访问项目",
      viewSource: "查看源码",
      statusLive: "在线运行中",
      items: [
        {
          id: "cardcraft",
          name: "CardCraft",
          category: "Web Interaction",
          status: "在线运行中",
          summary: "拟真 Apple Wallet 玻璃质感工坊。支持移动端设备陀螺仪物理反光、全息微曲折射算法与多发卡行矢量渲染。",
          techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Gyroscope API"],
          link: "https://cardcraft-iota.vercel.app",
        },
      ],
    },
    footer: {
      built: "构建自极客精神与 Apple 工业美学",
      rights: "保留所有权利。",
    },
  },
  en: {
    nav: {
      explore: "Explore",
      tutorials: "Tutorials",
      projects: "Projects",
    },
    hero: {
      badge: "Design Engineer",
      title: "Crafting digital experiences with industrial precision.",
      subtitle: "Specializing in modern web architectures, fluid physical interactions, and uncompromising attention to detail.",
    },
    pillars: {
      badge: "CORE PILLARS",
      title: "A Digital Artisan's Geek Lab",
      subtitle: "Scroll down to experience physical interactions in low-level mods and tactile EDC setups.",
      system: {
        tag: "SYSTEM TWEAKS & WORKFLOW",
        title: "System Tweaks & Workflows",
        desc: "Deep diving into macOS & iOS daemons and entitlement internals. Force-enabling edge intelligence and engineering tactile automation pipelines.",
        cmd: "sysctl -w kern.eligibility.bypass=1",
        status: "DAEMON INJECTED // ACTIVE",
        hint: "Click terminal to trigger kernel injection",
      },
      hardware: {
        tag: "HARDWARE & STUDIO EDC",
        title: "Digital Gears & Studio EDC",
        desc: "Seeking balance between industrial design and tactile feedback. Exploring Apple ecosystem workflows, compact cameras, and minimal workspace setups.",
        status: "TITANIUM CHASSIS // f/1.4",
        hint: "Click aperture to trigger shutter flash",
      },
      manifesto: {
        title: "Uncompromising Craftsmanship",
        desc: "Refusing fragmented noise. Every spring rebound and line of code is treated like handcrafted industrial hardware.",
        badge: "DESIGNED BY ZACHARY",
      },
    },
    works: {
      title: "Selected Works",
      subtitle: "Engineering excellence and industrial design aesthetics.",
    },
    featured: {
      badge: "Featured Interaction",
      tag: "Apple Wallet Studio",
      desc: "Deeply recreating iOS glass refraction and holographic reflection. Featuring mobile gyroscope hardware response, UnionPay/Visa/Mastercard vector synthesis, and local persistent wallet storage.",
      btn: "Live Demo",
    },
    tutorialsPage: {
      badge: "System Tweaks & Geek Logs",
      title: "Tutorials & Writing",
      subtitle: "Deep-dive system modifications, Apple ecosystem reverse-engineering, workflow automation, and modern frontend architecture logs.",
      readTime: "min read",
      readMore: "Read Post",
      posts: [
        {
          slug: "force-enable-apple-intelligence",
          date: "Oct 10, 2026",
          readTime: "8",
          category: "macOS / iOS",
          title: "Bypassing Limits: Complete Guide to Force-Enabling Apple Intelligence on macOS & iOS",
          summary: "Bypass regional restrictions and system constraints. Deep dive into eligibilityd and MobileGestalt to unlock on-device intelligence.",
        },
      ],
    },
    projectsPage: {
      badge: "Interaction Lab",
      title: "Projects & Lab",
      subtitle: "A collection of experimental projects blending physical spring dynamics, industrial intuition, and modern web shaders.",
      visitProject: "Live Demo",
      viewSource: "Source",
      statusLive: "Live",
      items: [
        {
          id: "cardcraft",
          name: "CardCraft",
          category: "Web Interaction",
          status: "Live",
          summary: "Apple Wallet liquid glass studio. Features gyroscope hardware reflection, holographic chromatic refraction, and multi-network vector rendering.",
          techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Gyroscope API"],
          link: "https://cardcraft-iota.vercel.app",
        },
      ],
    },
    footer: {
      built: "Crafted with hacker spirit and Apple industrial aesthetics",
      rights: "All rights reserved.",
    },
  },
};
