import { useEffect, useRef, useState } from "react";
import {
  Code,
  Database,
  Cloud,
  Palette,
  Calendar,
  Zap,
  ExternalLink,
} from "lucide-react";
import zoomCars from "./assets/zoom-cars.png";
import foodies from "./assets/foodies.png";
import oyc from "./assets/oyc.png";
import wanderLand from "./assets/wanderLand.png";
import cafeDelight from "./assets/cafeDelight.png";
import rodaBI from "./assets/rodaBI.png";

function AnimatedBar({ level, color, inView }) {
  return (
    <div
      style={{
        width: "100%",
        height: 8,
        borderRadius: 999,
        background: "rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: inView ? `${level}%` : "0%",
          borderRadius: 999,
          background: color,
          transition: "width 1.2s ease",
        }}
      />
    </div>
  );
}

const skills = [
  { name: "React", level: 95, color: "#61DAFB" },
  { name: "TypeScript", level: 85, color: "#3178C6" },
  { name: "Next.js", level: 80, color: "#68A063" },
  { name: "Tailwind CSS", level: 90, color: "#38BDF8" },
  { name: "Node.js", level: 88, color: "#68A063" },
  { name: "Nest.js", level: 85, color: "#E0234E" },
  { name: "PostgreSQL", level: 80, color: "#336791" },
  { name: "AWS AI Services", level: 75, color: "#FF9900" },

  { name: "Express.js", level: 82, color: "#61DAFB" },
  { name: "Git/GitHub", level: 90, color: "#3178C6" },
  { name: "RESTful APIs", level: 95, color: "#68A063" },
  { name: "Redux", level: 85, color: "#FF9900" },
];

const skillsOverview = [
  {
    title: "Frontend",
    icon: <Code className="h-8 w-8 text-blue-500" />,
    iconBg: "bg-blue-500/10",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Backend",
    icon: <Database className="h-8 w-8 text-green-500" />,
    iconBg: "bg-green-500/10",
    items: ["Node.js", "Nest.js", "Express", "PostgreSQL"],
  },
  {
    title: "Cloud & AI",
    icon: <Cloud className="h-8 w-8 text-purple-500" />,
    iconBg: "bg-purple-500/10",
    items: ["AWS AI", "Bedrock", "EC2", "S3"],
  },
  {
    title: "Tools",
    icon: <Palette className="h-8 w-8 text-orange-500" />,
    iconBg: "bg-orange-500/10",
    items: ["Git", "GitHub", "Vercel", "AWS"],
  },
];

const achievements = [
  {
    icon: "🏆",
    title: "AWS Certified AI Practitioner",
    sub: "Certified in AWS AI services including SageMaker, Rekognition, and Lex",
    year: "Aug 2025",
  },
  {
    icon: "🚀",
    title: "Ride-Hailing Platform",
    sub: "Successfully developed and integrated key modules for ride management in a large-scale ride-hailing app",
    year: "2024",
  },
  {
    icon: "🥇",
    title: "1st Place – FYP Web Category",
    sub: "Developed an interior design app using Three.js",
    year: "2024",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [skillsRef, skillsInView] = useInView();
  const [copied, setCopied] = useState(false);

  const [showPhone, setShowPhone] = useState(false);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/SarahNasirResume.pdf";
    link.download = "SarahNasirResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const secs = ["home", "about", "projects", "contact"];
      for (const id of [...secs].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("sarahnasir545@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    {
      title: "RodaBI Admin Portal",
      date: "January 2026 - Present",
      status: "In-progress",
      description:
        "Contributed to the admin portal for RodaBI, a long-term project running for over 6 years. I worked on the landing page, integrated APIs, implemented free drag-and-drop functionality between different sections using the react-grid-layout library, and fixed bugs across the entire application.",
      image: rodaBI,
      linkText: "App Link",
      link: "https://rodabi.ai",

      features: [
        "RodaBI brings clarity to complex data, combining clinical, financial, and regulatory insight in one platform. With predictive analytics and clear visual tools, it helps organisations anticipate risks, evidence improvements, and make confident decisions with ease.",
      ],
      tech: ["React.js", "SCSS", "Java Springboot", "PostgreSQL", "REST APIs"],
      reverse: true,
    },
    {
      title: "Zoom Cars Admin Portal",
      date: "July 2024 - November 2024",
      status: "Completed",
      description:
        "Contributed to the admin portal for Zoom Cars, a comprehensive ride-hailing app similar to InDrive/Uber with advanced features. Implemented key modules for ride management, driver assignment, user management, tariffs, dashboards, and booking operations.",
      image: zoomCars,
      linkText: "App Link",
      link: "https://www.zoomcars.org",
      features: [
        "Real-time ride tracking and management",
        "Driver and customer management systems",
        "Dispatch operations and administrative tasks",
        "Integration with REST APIs for live updates",
      ],
      tech: ["React.js", "Tailwind CSS", "Nest.js", "PostgreSQL", "REST APIs"],
      reverse: false,
    },
    {
      title: "Foodies First",
      date: "November 2024 - January 2025",
      status: "Completed",
      description:
        "An administrative platform designed to streamline food delivery services, managing orders, menus, and locations. Built a comprehensive dashboard for restaurant operations with role-based access control and dynamic data handling.",
      image: foodies,
      linkText: "App Link",
      link: "https://www.foodies-first.com",
      features: [
        "Order management and tracking system",
        "Menu customization and product handling",
        "Role-based access control",
        "Responsive design across all devices",
      ],
      tech: ["Next.js", "Tailwind CSS", "REST APIs", "State Management"],
      reverse: true,
    },
    {
      title: "On Your Clicks",
      date: "February 2025 - November 2025",
      status: "Completed",
      description:
        "An innovative platform assisting parents in choosing baby names through interactive features. Includes family tree functionality, name polling system, multilingual support, and engaging features like rhymes and birthday tunes for each name.",
      image: oyc,
      linkText: "Live Demo",
      link: "https://onyourclicks.com",
      features: [
        "Smart name filtering and suggestions",
        "Interactive family tree feature",
        "Polling system for family feedback",
        "Multilingual name exploration",
      ],
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Django",
        "PostgreSQL",
        "Redux RTK Query",
      ],
      reverse: false,
    },
    {
      title: "Travel Agency Website",
      date: "2024",
      status: "Completed",
      description:
        "A modern, responsive travel agency website showcasing destinations, tour packages, and booking capabilities. Features an intuitive user interface with smooth animations and optimized performance.",
      image: wanderLand,
      linkText: "Frontend Link",
      link: "https://travel-agency-alpha-ruby.vercel.app",
      features: [
        "Responsive design for all devices",
        "Interactive destination showcase",
        "Smooth animations and transitions",
        "SEO optimized for better visibility",
      ],
      tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      reverse: true,
    },
    {
      title: "Restaurant / Café Website",
      date: "2024",
      status: "Completed",
      description:
        "A sophisticated restaurant website featuring menu displays, online reservations, and location information. Built with modern web technologies focusing on user experience and visual appeal.",
      image: cafeDelight,
      linkText: "Frontend Link",
      link: "https://cafe-delight-alpha.vercel.app",
      features: [
        "Interactive menu with filtering",
        "Online reservation system",
        "Location and contact integration",
        "Mobile-first responsive design",
      ],
      tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      reverse: false,
    },
  ];

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((p) => (p === "dark" ? "light" : "dark"));
  };

  const themeVars =
    theme === "dark"
      ? {
          "--accent": "#00D4AA",
          "--accent2": "#7C3AED",
          "--bg": "#080B14",
          "--surface": "#0E1422",
          "--surface2": "#141927",
          "--border": "rgba(255,255,255,0.07)",
          "--text": "#E2E8F0",
          "--muted": "#94A3B8",
        }
      : {
          "--accent": "#0EA5E9",
          "--accent2": "#7C3AED",
          "--bg": "#F8FAFC",
          "--surface": "#FFFFFF",
          "--surface2": "#F1F5F9",
          "--border": "rgba(15,23,42,0.10)",
          "--text": "#0F172A",
          "--muted": "#475569",
        };

  return (
    <div
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "var(--bg)",
        color: "var(--text)",
        minHeight: "100vh",
        ...themeVars,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); }
        .display { font-family: 'Playfair Display', serif; }
        .body { font-family: 'DM Sans', sans-serif; }
        .nav-link { font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; transition: color 0.2s; color: var(--muted); }
        .nav-link:hover, .nav-link.active { color: var(--accent); }
        .card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; transition: border-color 0.3s, transform 0.3s; }
        .card:hover { border-color: rgba(0,212,170,0.2); transform: translateY(-2px); }
        .tag { font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 500; padding: 4px 10px; border-radius: 20px; background: rgba(0,212,170,0.08); color: var(--accent); border: 1px solid rgba(0,212,170,0.2); }
        .btn-primary { font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; padding: 12px 28px; border-radius: 8px; border: none; cursor: pointer; background: var(--accent); color: var(--bg); transition: opacity 0.2s, transform 0.2s; }
        .btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
        .btn-outline { font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; padding: 11px 28px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15); cursor: pointer; background: transparent; color: var(--text); transition: border-color 0.2s, background 0.2s; }
        .btn-outline:hover { border-color: var(--accent); background: rgba(0,212,170,0.06); }
        .fade-in { opacity: 0; transform: translateY(24px); animation: fadeUp 0.7s ease forwards; }
        @keyframes fadeUp { to { opacity: 1; transform: none; } }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.22s; }
        .delay-3 { animation-delay: 0.34s; }
        .delay-4 { animation-delay: 0.46s; }
        .delay-5 { animation-delay: 0.58s; }
        .glow { box-shadow: 0 0 60px rgba(0,212,170,0.12), 0 0 120px rgba(124,58,237,0.06); }
        .noise { position: fixed; inset: 0; pointer-events: none; z-index: 0; opacity: ${theme === "dark" ? "0.03" : "0.02"}; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
        .mesh { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }
        section { position: relative; z-index: 1; }
        .skill-row { font-family: 'DM Sans', sans-serif; }
        .theme-btn { width: 44px; height: 44px; border-radius: 12px; border: 1px solid var(--border); background: rgba(255,255,255,0.04); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.2s, background 0.2s; color: var(--text); }
        .theme-btn:hover { transform: translateY(-1px); background: rgba(0,212,170,0.08); border-color: rgba(0,212,170,0.25); }
        @media (max-width: 768px) {
          .hero-name { font-size: clamp(2.4rem, 10vw, 5rem) !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .nav-links { display: none !important; }
        }
      `}</style>

      <div className="noise" />

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(0,0,0,0.08)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          transition: "all 0.4s",
          padding: "0 32px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <span
            className="display"
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "var(--text)",
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
          >
            Sara <span style={{ color: "var(--accent)" }}>Nasir</span>
          </span>

          <div className="nav-links" style={{ display: "flex", gap: 32 }}>
            {["home", "about", "projects", "contact"].map((s) => (
              <span
                key={s}
                className={`nav-link ${active === s ? "active" : ""}`}
                onClick={() => scrollTo(s)}
              >
                {s}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              className="theme-btn"
              onClick={toggleTheme}
              title="Toggle Theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <button
              className="btn-primary"
              onClick={() => scrollTo("contact")}
              style={{ padding: "8px 20px", fontSize: 12 }}
            >
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 32px 80px",
          overflow: "hidden",
        }}
      >
        <div
          className="mesh"
          style={{
            width: 500,
            height: 500,
            background:
              theme === "dark"
                ? "radial-gradient(circle, rgba(0,212,170,0.18) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(14,165,233,0.20) 0%, transparent 70%)",
            top: "10%",
            left: "-10%",
            zIndex: 0,
          }}
        />
        <div
          className="mesh"
          style={{
            width: 400,
            height: 400,
            background:
              theme === "dark"
                ? "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
            bottom: "5%",
            right: "-5%",
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: 800,
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="fade-in delay-1 mb-6">
            <span
              className="
      body
      inline-block
      text-[11px] sm:text-[12px] md:text-[13px]
      font-medium
      tracking-[0.15em]
      uppercase
      px-3 sm:px-4
      py-1.5
      rounded-full
      text-[var(--accent)]
      bg-[rgba(0,212,170,0.08)]
      border border-[rgba(0,212,170,0.2)]
      text-center
      max-w-full
      break-words
    "
            >
              ✦ Available for new opportunities
            </span>
          </div>
          <h1
            className="display fade-in delay-2 hero-name"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: 16,
            }}
          >
            Hi, I'm{" "}
            <span
              style={{
                fontStyle: "italic",
                background:
                  "linear-gradient(135deg, var(--accent), var(--accent2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sara Nasir
            </span>
          </h1>

          <h2
            className="display fade-in delay-3"
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--muted)",
              marginBottom: 24,
            }}
          >
            Full Stack Developer
          </h2>

          <p
            className="body fade-in delay-4"
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "var(--muted)",
              maxWidth: 600,
              margin: "0 auto 48px",
              fontWeight: 300,
            }}
          >
            Passionate about building scalable web applications with React,
            Next.js, Node.js, Nest.js, and AWS AI services — with a focus on
            clean code and exceptional user experiences.
          </p>

          <div
            className="fade-in delay-5"
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 56,
            }}
          >
            <button
              className="btn-primary"
              onClick={() => scrollTo("projects")}
            >
              View My Work →
            </button>
            <button className="btn-outline" onClick={downloadCV}>
              Download Resume
            </button>
          </div>

          <div
            className="fade-in delay-5"
            style={{
              display: "flex",
              gap: 20,
              justifyContent: "center",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a
              href="https://linkedin.com/in/sarah-n-610b20244"
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  theme === "dark"
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(15,23,42,0.04)",
                border: "1px solid var(--border)",
                color: "var(--muted)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 18,
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.color = "var(--bg)";
                e.currentTarget.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  theme === "dark"
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(15,23,42,0.04)";
                e.currentTarget.style.color = "var(--muted)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              in
            </a>

            <a
              href="mailto:sarahnasir545@gmail.com"
              title="Email"
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  theme === "dark"
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(15,23,42,0.04)",
                border: "1px solid var(--border)",
                color: "var(--muted)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 18,
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.color = "var(--bg)";
                e.currentTarget.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  theme === "dark"
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(15,23,42,0.04)";
                e.currentTarget.style.color = "var(--muted)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              ✉
            </a>

            <button
              type="button"
              title="Phone"
              onClick={() => setShowPhone((prev) => !prev)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "0 16px",
                height: 48,
                borderRadius: 999,
                background:
                  theme === "dark"
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(15,23,42,0.04)",
                border: "1px solid var(--border)",
                color: "var(--muted)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.color = "var(--bg)";
                e.currentTarget.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  theme === "dark"
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(15,23,42,0.04)";
                e.currentTarget.style.color = "var(--muted)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <span style={{ fontSize: 18 }}>📞</span>
              {showPhone && <span style={{ fontSize: 14 }}>03151559625</span>}
            </button>
          </div>
        </div>
      </section>

      <section
        id="about"
        style={{ padding: "30px 32px", background: "var(--surface)" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <p
              className="body"
              style={{
                fontSize: 30,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 12,
              }}
            >
              About Me
            </p>
            <p
              className="body"
              style={{ color: "var(--muted)", marginBottom: 14 }}
            >
              Get to know more about my background, experience, and the skills I
              bring to every project.
            </p>
            <h2
              className="display"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}
            >
              Background & Skills
            </h2>
          </div>

          <div
            className="card glow"
            style={{
              padding: 40,
              marginBottom: 48,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              className="body"
              style={{
                fontSize: 16,
                lineHeight: 1.9,
                color: "var(--muted)",
                fontWeight: 300,
                maxWidth: 900,
              }}
            >
              Motivated and detail-oriented full-stack developer with hands-on
              experience building web applications across ride-hailing, food
              delivery, and lifestyle tech. Proficient in{" "}
              <span style={{ color: "var(--text)", fontWeight: 500 }}>
                React.js, Next.js, Node.js, and Nest.js
              </span>
              , and certified in AWS AI services with working knowledge of
              applying machine learning capabilities into real-world
              applications. Strong team player with a passion for clean code and
              continuous learning.
            </p>
          </div>

          <div
            className="about-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginBottom: 64,
            }}
          >
            <div className="card" style={{ padding: 32 }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>🎓</div>
              <h3
                className="display"
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 16,
                }}
              >
                Education
              </h3>
              <p
                className="body"
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: 4,
                }}
              >
                BS Software Engineering
              </p>
              <p
                className="body"
                style={{ fontSize: 14, color: "var(--muted)", marginBottom: 4 }}
              >
                COMSATS University Islamabad
              </p>
              <p
                className="body"
                style={{ fontSize: 13, color: "var(--muted)", marginBottom: 8 }}
              >
                Sep 2020 – Jun 2024
              </p>
              <span
                className="body"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--accent)",
                }}
              >
                CGPA: 3.6 / 4.0
              </span>
            </div>

            <div className="card" style={{ padding: 32 }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>💼</div>
              <h3
                className="display"
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 20,
                }}
              >
                Experience
              </h3>

              <div
                style={{
                  marginBottom: 20,
                  paddingLeft: 16,
                  borderLeft: "2px solid var(--accent)",
                }}
              >
                <p
                  className="body"
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--text)",
                  }}
                >
                  Associate Full Stack Developer
                </p>
                <p
                  className="body"
                  style={{ fontSize: 13, color: "var(--accent)" }}
                >
                  Netsol Technologies · Jan 2026 – Present
                </p>
                <p
                  className="body"
                  style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}
                >
                  Building responsive web interfaces using Next.js and React.js
                  with optimized rendering and improved page performance.
                  Managing application state using Redux Toolkit and RTK Query.
                </p>
              </div>

              <div
                style={{
                  marginBottom: 20,
                  paddingLeft: 16,
                  borderLeft: "2px solid var(--muted)",
                }}
              >
                <p
                  className="body"
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--text)",
                  }}
                >
                  Associate Full Stack Developer
                </p>
                <p
                  className="body"
                  style={{ fontSize: 13, color: "var(--muted)" }}
                >
                  Tekrowe · Jul 2024 – Nov 2025
                </p>
                <p
                  className="body"
                  style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}
                >
                  Developed full-stack applications using modern web
                  technologies and collaborating in team environments.
                </p>
              </div>

              <div
                style={{
                  paddingLeft: 16,
                  borderLeft: "2px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  className="body"
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--text)",
                  }}
                >
                  Full Stack Intern
                </p>
                <p
                  className="body"
                  style={{ fontSize: 13, color: "var(--muted)" }}
                >
                  Ineffable Devs · May 2022 – Jul 2022
                </p>
                <p
                  className="body"
                  style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}
                >
                  Contributed to various projects while gaining hands-on
                  experience in development and testing.
                </p>
              </div>
            </div>
          </div>

          <div ref={skillsRef}>
            <h3
              className="display"
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: 32,
                textAlign: "center",
              }}
            >
              Technical Proficiency
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {skills.map((s) => (
                <div
                  key={s.name}
                  className="skill-row"
                  style={{
                    padding: "16px 20px",
                    background:
                      theme === "dark"
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(15,23,42,0.03)",
                    borderRadius: 12,
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 10,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--text)",
                      }}
                    >
                      {s.name}
                    </span>
                    <span style={{ fontSize: 13, color: "var(--muted)" }}>
                      {s.level}%
                    </span>
                  </div>
                  <AnimatedBar
                    level={s.level}
                    color={s.color}
                    inView={skillsInView}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground my-16 text-center">
              Skills Overview
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {skillsOverview.map((skill) => (
                <div
                  key={skill.title}
                  className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border text-center"
                >
                  <div className="p-6">
                    <div
                      className={`p-3 ${skill.iconBg} rounded-lg w-fit mx-auto mb-4`}
                    >
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-card-foreground mb-2">
                      {skill.title}
                    </h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex bg-gray-600 items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 border-transparent text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 80 }}>
            <h3
              className="display"
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "var(--text)",
                textAlign: "center",
              }}
            >
              Key Achievements
            </h3>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                marginTop: 32,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                  gap: 20,
                  maxWidth: 1000,
                  width: "100%",
                }}
              >
                {achievements.map((a) => (
                  <div key={a.title} className="card" style={{ padding: 28 }}>
                    <span
                      style={{
                        fontSize: 32,
                        display: "block",
                        marginBottom: 16,
                      }}
                    >
                      {a.icon}
                    </span>
                    <p
                      className="body"
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: "var(--text)",
                        marginBottom: 6,
                      }}
                    >
                      {a.title}
                    </p>
                    <p
                      className="body"
                      style={{
                        fontSize: 13,
                        color: "var(--muted)",
                        marginBottom: 10,
                      }}
                    >
                      {a.sub}
                    </p>
                    <span
                      className="body"
                      style={{
                        fontSize: 12,
                        color: "var(--accent)",
                        fontWeight: 600,
                      }}
                    >
                      {a.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <style>{`
    .projects-section {
      padding: 30px 0;
      background: var(--bg);
    }

    .projects-container {
      max-width: 90%;
      margin: 0 auto;
    }

    .projects-heading {
      text-align: center;
      margin-bottom: 60px;
    }

    .project-card-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .reverse-grid {
      direction: rtl;
    }

    .reverse-grid > div {
      direction: ltr;
    }

    .project-image {
      position: relative;
      min-height: 280px;
    }

    .project-image img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .project-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.25), transparent);
    }

    .project-content {
      padding: 32px;
    }

    @media (max-width: 900px) {
      .projects-section {
        padding: 30px 20px;
      }

      .projects-heading {
        margin-bottom: 40px;
      }

      .project-card-grid {
        grid-template-columns: 1fr;
      }

      .project-image {
        min-height: 220px;
      }

      .project-content {
        padding: 22px;
      }
    }

    @media (max-width: 500px) {
      .projects-section {
        padding: 26px 14px;
      }

      .project-content {
        padding: 18px;
      }

      .project-image {
        min-height: 200px;
      }

      .btn-primary {
        width: 100% !important;
        justify-content: center;
      }
    }
  `}</style>

        <div className="projects-container">
          <div className="projects-heading">
            <h2
              className="display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "var(--text)",
              }}
            >
              Featured Projects
            </h2>

            <p
              className="body"
              style={{
                color: "var(--muted)",
                marginTop: 14,
                maxWidth: 750,
                marginInline: "auto",
              }}
            >
              A showcase of my recent work, demonstrating expertise in
              full-stack development, modern web technologies, and user-centered
              design.
            </p>
          </div>

          <div style={{ display: "grid", gap: 28 }}>
            {projects.map((project, index) => (
              <div key={index} className="card" style={{ overflow: "hidden" }}>
                <div
                  className={`project-card-grid ${project.reverse ? "reverse-grid" : ""}`}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay" />
                  </div>

                  <div className="project-content">
                    <h3
                      className="display"
                      style={{
                        fontSize: 24,
                        color: "var(--text)",
                        marginBottom: 10,
                      }}
                    >
                      {project.title}
                    </h3>

                    <div
                      className="body"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: "var(--muted)",
                        fontSize: 13,
                      }}
                    >
                      <Calendar size={16} />
                      {project.date}
                    </div>

                    <p
                      className="body"
                      style={{
                        textAlign: "left",
                        marginTop: 16,
                        color: "var(--muted)",
                        lineHeight: 1.8,
                        fontSize: 14,
                      }}
                    >
                      {project.description}
                    </p>

                    <div style={{ marginTop: 18 }}>
                      <h4
                        className="body"
                        style={{
                          fontWeight: 600,
                          color: "var(--text)",
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <Zap size={16} color="var(--accent)" />
                        Key Features
                      </h4>

                      <ul
                        style={{
                          textAlign: "left",
                          marginTop: 12,
                          paddingLeft: 18,
                        }}
                      >
                        {project.features.map((f, i) => (
                          <li
                            key={i}
                            className="body"
                            style={{
                              fontSize: 13,
                              color: "var(--muted)",
                              marginBottom: 6,
                            }}
                          >
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: 18 }}>
                      <h4
                        className="body"
                        style={{
                          textAlign: "left",
                          fontWeight: 600,
                          color: "var(--text)",
                          marginBottom: 10,
                        }}
                      >
                        Tech Stack
                      </h4>

                      <div
                        style={{ display: "flex", flexWrap: "wrap", gap: 10 }}
                      >
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="body"
                            style={{
                              fontSize: 12,
                              padding: "6px 10px",
                              borderRadius: 10,
                              border: "1px solid var(--border)",
                              background: "var(--surface2)",
                              color: "var(--text)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginTop: 22 }}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <button
                          className="btn-primary"
                          style={{
                            width: "fit-content",
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <ExternalLink size={16} />
                          {project.linkText}
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{ padding: "20px 32px", background: "var(--surface)" }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p
            className="body"
            style={{
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 12,
            }}
          >
            Contact
          </p>

          <h2
            className="display"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "var(--text)",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Get In Touch
          </h2>

          <p
            className="body"
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "var(--muted)",
              marginBottom: 56,
              fontWeight: 300,
            }}
          >
            Ready to start your next project? I'd love to hear from you. Send me
            a message and I'll respond as soon as possible.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginBottom: 48,
            }}
          >
            {[
              {
                icon: "✉",
                label: "Email",
                value: "sarahnasir545@gmail.com",
                href: "mailto:sarahnasir545@gmail.com",
              },
              {
                icon: "📞",
                label: "Phone",
                value: "+92 315 1559625",
                href: "tel:+923151559625",
              },
              {
                icon: "📍",
                label: "Location",
                value: "Islamabad, Pakistan",
                href: null,
              },
            ].map((c) => (
              <div
                key={c.label}
                className="card"
                style={{
                  padding: "20px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,212,170,0.1)",
                    fontSize: 20,
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </div>

                <div>
                  <p
                    className="body"
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--muted)",
                      marginBottom: 2,
                    }}
                  >
                    {c.label}
                  </p>

                  {c.href ? (
                    <a
                      href={c.href}
                      className="body"
                      style={{
                        fontSize: 15,
                        color: "var(--text)",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text)")
                      }
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p
                      className="body"
                      style={{ fontSize: 15, color: "var(--text)" }}
                    >
                      {c.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button className="btn-primary" onClick={copyEmail}>
              {copied ? "✓ Copied!" : "Copy Email"}
            </button>

            <a
              href="https://linkedin.com/in/sarah-n-610b20244"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-outline">View LinkedIn</button>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <style>{`
    .footer {
      background: var(--surface);
      border-top: 1px solid var(--border);
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 48px 32px;
    }

    .footer-top {
      display: flex;
      justify-content: space-between;
      gap: 40px;
      flex-wrap: wrap;
    }

    .footer-brand {
      max-width: 420px;
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
      align-items: center;
    }

    .footer-divider {
      margin: 36px 0;
      height: 1px;
      width: 100%;
      background: var(--border);
    }

    .footer-btn {
      display: flex;
      align-items: center;
      gap: 10px;
      border: 1px solid var(--border);
      background: transparent;
      color: var(--text);
      padding: 10px 14px;
      border-radius: 12px;
      cursor: pointer;
      transition: background 0.2s;
    }

    @media (max-width: 768px) {
      .footer-container {
        padding: 40px 20px;
      }

      .footer-top {
        flex-direction: column;
        gap: 30px;
      }

      .footer-brand {
        max-width: 100%;
      }

      .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
      }

      .footer-btn {
        width: 100%;
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      .footer-container {
        padding: 32px 16px;
      }

      .footer-btn {
        font-size: 13px;
        padding: 10px 12px;
      }
    }
  `}</style>

        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <h3
                className="display"
                style={{ fontSize: 22, fontWeight: 700, color: "var(--text)" }}
              >
                Sarah Nasir
              </h3>
              <p
                className="body"
                style={{
                  color: "var(--muted)",
                  marginTop: 12,
                  lineHeight: 1.8,
                }}
              >
                Full Stack Developer passionate about creating exceptional web
                experiences with modern technologies.
              </p>
              <p
                className="body"
                style={{ fontSize: 13, color: "var(--muted)", marginTop: 10 }}
              >
                Available for freelance projects and full-time opportunities.
              </p>
            </div>

            <div>
              <h4
                className="body"
                style={{
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 14,
                }}
              >
                Quick Links
              </h4>

              <div className="footer-links">
                {["about", "projects", "contact"].map((id) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="body"
                    style={{
                      background: "transparent",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      textAlign: "center",
                      color: "var(--muted)",
                      fontSize: 14,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--muted)")
                    }
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4
                className="body"
                style={{
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 14,
                }}
              >
                Get In Touch
              </h4>

              <div
                className="body"
                style={{ fontSize: 13, color: "var(--muted)", lineHeight: 2 }}
              >
                <div>
                  <span style={{ fontWeight: 600, color: "var(--text)" }}>
                    Email:
                  </span>{" "}
                  <a
                    href="mailto:sarahnasir545@gmail.com"
                    style={{ color: "var(--muted)", textDecoration: "none" }}
                  >
                    sarahnasir545@gmail.com
                  </a>
                </div>

                <div>
                  <span style={{ fontWeight: 600, color: "var(--text)" }}>
                    Location:
                  </span>{" "}
                  Islamabad, Pakistan
                </div>

                <div>
                  <span style={{ fontWeight: 600, color: "var(--text)" }}>
                    LinkedIn:
                  </span>{" "}
                  <a
                    href="https://linkedin.com/in/sarah-n-610b20244"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--muted)", textDecoration: "none" }}
                  >
                    sarah-n-610b20244
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <p className="body" style={{ fontSize: 13, color: "var(--muted)" }}>
              © 2026 Sarah Nasir.
            </p>

            <button
              onClick={() => scrollTo("home")}
              className="body footer-btn"
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(0,0,0,0.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
