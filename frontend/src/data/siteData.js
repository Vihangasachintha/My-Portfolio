export const navLinks = [
  { id: "home", label: "Home" },
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "journal", label: "Journal" },
  { id: "contact", label: "Contact" },
];

export const portfolioItems = [
  {
    title: "Pythagorean Calculator",
    image: "/resources/pythogarus.jpg",
    description:
      "A mathematical calculator for computing Pythagorean theorem with an intuitive interface and accurate calculations.",
    technologies: ["JavaScript", "HTML", "CSS"],
    codeLink: "#",
    demoLink: "#",
  },
  {
    title: "ChatTranz",
    image: "/resources/chattranz_portfolio_banner.png",
    description:
      "Real-time chat application with translation features. Supports multiple languages and instant messaging.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    codeLink: "#",
    demoLink: "#",
  },
  {
    title: "Car Parking System",
    image: "/resources/CarParkingManagement.png",
    description:
      "Smart parking management system with real-time availability tracking and automated payment processing.",
    technologies: ["Java", "MySQL", "JavaFX"],
    codeLink: "#",
    demoLink: "#",
  },
  {
    title: "E-Commerce Platform",
    image: "https://placehold.co/600x400/1a1a1a/FFFFFF?text=E-Commerce",
    description:
      "Full-stack e-commerce solution built with Next.js and Node.js. Features include user authentication, payment processing, and admin dashboard.",
    technologies: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
    codeLink: "#",
    demoLink: "#",
  },
  {
    title: "DevOps Automation Suite",
    image: "https://placehold.co/600x400/333333/FFFFFF?text=DevOps",
    description:
      "Comprehensive CI/CD pipeline automation using Jenkins, Docker, and Kubernetes. Reduced deployment time by 70% and improved system reliability.",
    technologies: ["Jenkins", "Docker", "Kubernetes", "Terraform", "AWS"],
    codeLink: "#",
    demoLink: "#",
  },
  {
    title: "Real-time Analytics Dashboard",
    image: "https://placehold.co/600x400/2a2a2a/FFFFFF?text=Analytics",
    description:
      "Interactive dashboard for real-time data visualization using React and Firebase. Handles thousands of concurrent users with live updates.",
    technologies: ["React", "Firebase", "Chart.js", "WebSocket", "TypeScript"],
    codeLink: "#",
    demoLink: "#",
  },
];

export const services = [
  {
    title: "Back-end",
    iconPath:
      "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    description:
      "Build robust, scalable server-side solutions that power your digital infrastructure. From API development to database architecture, I create the foundation that keeps your applications running smoothly and securely.",
  },
  {
    title: "Web Design",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    description:
      "Transform your vision into stunning visual experiences that captivate audiences and drive engagement. My designs blend aesthetic excellence with strategic thinking to create memorable brand impressions.",
  },
  {
    title: "User Experience",
    iconPath: "M5 12h14M12 5l7 7-7 7",
    description:
      "Craft intuitive, user-centered interfaces that delight and convert. Through research-driven design and iterative testing, I create seamless digital journeys that keep users coming back.",
  },
  {
    title: "Web Development",
    iconPath:
      "M12 6V4m0 16v-2m8-8h2M4 12H2m15.364 6.364l1.414 1.414M4.222 4.222l1.414 1.414m12.728 0l-1.414 1.414M5.636 18.364l-1.414 1.414M12 16a4 4 0 110-8 4 4 0 010 8z",
    description:
      "Bring ideas to life with clean, efficient code and cutting-edge technologies. I build responsive, high-performance websites and applications that deliver exceptional results across all devices.",
  },
  {
    title: "Mobile Applications",
    iconPath:
      "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    description:
      "Develop native and cross-platform mobile solutions that users love. From concept to launch, I create feature-rich apps that combine sleek design with flawless functionality.",
  },
  {
    title: "Web Hosting",
    iconPath:
      "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    description:
      "Ensure your digital presence stays fast, secure, and always available. I provide reliable hosting solutions that deliver the performance and support your business needs to thrive online.",
  },
];

export const defaultSkills = {
  languages: [
    {
      label: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "JavaScript logo",
    },
    {
      label: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      alt: "TypeScript logo",
    },
    {
      label: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      alt: "Python logo",
    },
    {
      label: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      alt: "Java logo",
    },
    {
      label: "C",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
      alt: "C logo",
    },
    {
      label: "C#",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      alt: "C# logo",
    },
    {
      label: "Go",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
      alt: "Go logo",
    },
    {
      label: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "HTML logo",
    },
    {
      label: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      alt: "CSS logo",
    },
  ],
  frameworks: [
    {
      label: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      alt: "React logo",
    },
    {
      label: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      alt: "Node.js logo",
    },
    {
      label: "Express",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      alt: "Express logo",
    },
    {
      label: ".NET",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",
      alt: " .NET logo",
    },
    {
      label: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      alt: "Bootstrap logo",
    },
  ],
  libraries: [
    {
      label: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      alt: "Tailwind CSS logo",
    },
    {
      label: "Material UI",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
      alt: "Material UI logo",
    }
  ],
  databases: [
    {
      label: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      alt: "MySQL logo",
    },
    {
      label: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      alt: "PostgreSQL logo",
    },
    {
      label: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB logo",
    },
    {
      label: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      alt: "Firebase logo",
    },
  ],
};

export const journalPosts = [
  {
    title: "Why Cloud Backups Are Your Business's Safety Net",
    meta: "By Vihanga - 5 mins read",
    image: "../blogs/backups.jpg",
    url: "https://medium.com/@vihangasachintha/why-cloud-backups-are-your-businesss-safety-net-3888a4e85780",
  },
  {
    title: "The Essential Guide to Networking: How the World Stays Connected",
    meta: "By Vihanga - 5 mins read",
    image: "../blogs/networking.jpg",
    url: "https://medium.com/@vihangasachintha/the-essential-guide-to-networking-how-the-world-stays-connected-548c6c9a3db2",
  },
  {
    title:
      "How Face Lock and Fingerprint Authentication Work in Your Handheld Device",
    meta: "By Vihanga - 5 mins read",
    image: "../blogs/faceLock.jpg",
    url: "https://medium.com/@vihangasachintha/how-face-lock-and-fingerprint-authentication-work-in-your-handheld-device-41a92c8c7f90",
  },
];
