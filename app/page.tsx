"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Github,
  Linkedin,
  Code,
  Database,
  Server,
  Monitor,
  Coffee,
  Music,
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Award,
  Briefcase,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system")
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const navRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    resume: useRef<HTMLDivElement>(null),
    portfolio: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -70% 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id")
          if (id && navRefs[id as keyof typeof navRefs]) {
            setActiveSection(id)
          }
        }
      })
    }, observerOptions)

    Object.values(navRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 20)
      setShowScrollTop(y > 300)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skillsByCategory = {
    Backend: ["PHP", "Laravel", "CodeIgniter 3/4"],
    Frontend: ["JavaScript", "jQuery", "Vue.js", "HTML5", "CSS3"],
    Database: ["MySQL", "SQL Server"],
    "UI Frameworks": ["Bootstrap", "Tailwind CSS", "Kendo UI"],
    API: ["RESTful APIs", "Laravel Sanctum"],
    Tools: ["Git", "GitHub", "Postman", "VS Code"],
  }

  const experiences = [
    {
      company: "WebReInvent",
      position: "Software Engineer",
      period: "March 2025 – Present",
      responsibilities: [
        "Developing and maintaining web applications using PHP and Laravel.",
        "Building and integrating RESTful APIs.",
        "Implementing business logic and database operations.",
        "Developing interactive interfaces using JavaScript and Vue.js.",
        "Working with MySQL and SQL Server.",
        "Debugging, optimizing and maintaining application functionality.",
      ],
    },
    {
      company: "CSSI",
      position: "Software Developer",
      period: "Earlier Experience",
      responsibilities: [
        "PHP development.",
        "CodeIgniter application development.",
        "MySQL database integration.",
        "JavaScript and jQuery functionality.",
      ],
    },
  ]

  const projects = [
    {
      title: "Rx connect",
      tech: ["PHP", "Laravel", "MySQL", "Vue.js"],
      description:
        "B2B business,Dynamic user location based product,add to cart,order flow and many more",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Payroll Management System",
      tech: ["PHP", "Laravel", "MySQL", "Vue.js"],
      description:
        "Employee salary management, attendance and shift management, payroll calculation, salary processing and reporting.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Dining Seating Management",
      tech: ["PHP", "CodeIgniter", "MySQL", "JavaScript"],
      description:
        "Restaurant seating management, table allocation, reservation-related functionality.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Stripo Email Editor Integration",
      tech: ["PHP", "JavaScript", "API Integration"],
      description:
        "Email editor integration, email template creation, editor-related functionality.",
      image: "https://images.unsplash.com/photo-1556742044-37c2346a44f8?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Release Note Management",
      tech: ["PHP", "SQL Server", "Kendo UI", "jQuery"],
      description:
        "Release note management, data management, interactive tables and UI functionality.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80",
    },
  ]

  const socialLinks = [
    { name: "Github", icon: <Github />, href: "https://github.com/Lucky725744", label: "GitHub" },
    { name: "Linkedin", icon: <Linkedin />, href: "https://www.linkedin.com/in/kundan-mishra-aa3762237", label: "LinkedIn" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <nav
        id="nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => scrollToSection("home")}
            >
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors">
                <Code className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Kundan<span className="text-accent">Mishra</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Resume", id: "resume" },
                { label: "Portfolio", id: "portfolio" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-muted-foreground hover:text-accent"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
                className="p-2 rounded-lg text-muted-foreground hover:text-accent transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="border-border hover:border-accent text-sm px-4 py-2"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
              <button
                className="md:hidden p-2 text-muted-foreground hover:text-accent"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Open menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Resume", id: "resume" },
                { label: "Portfolio", id: "portfolio" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left py-3 px-4 rounded-lg text-sm font-medium transition-colors hover:bg-accent/5 hover:text-accent"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <Button className="w-full" onClick={() => scrollToSection("contact")}>Contact Me</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background dark:from-[#050505] dark:via-background dark:to-[#050505]"></div>

        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium animate-pulse-slow">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Software Engineer | PHP & Laravel Developer
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-balance">
              Hi, I'm <span className="text-accent">Kundan Mishra</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-6">
              Hi, I'm Kundan Mishra, a Software Engineer specializing in PHP and Laravel development.
              I build scalable web applications, RESTful APIs, and database-driven solutions with a
              focus on clean code, performance, and maintainability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="outline"
                className="shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all px-8 py-3"
                onClick={() => scrollToSection("resume")}
              >
                Download Resume
              </Button>
              <Button
                size="lg"
                className="shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all px-8 py-3"
                onClick={() => scrollToSection("portfolio")}
              >
                View Projects <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3" onClick={() => scrollToSection("contact")}>
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:bg-accent hover:text-accent-foreground border border-border"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-float" style={{ animationDelay: "0.3s" }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-blue-500/20 rounded-2xl blur-xl"></div>
            <div className="relative glass-card rounded-2xl border border-border/50">
              <div className="grid grid-cols-2 gap-4 p-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold tracking-tighter uppercase">Experience</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Database className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold tracking-tighter uppercase">Databases</span>
                </div>
              </div>
              <div className="h-px bg-border/30 my-4"></div>
              <div className="grid grid-cols-2 gap-4 p-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Code className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold tracking-tighter uppercase">Languages</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center">
                    <Server className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold tracking-tighter uppercase">APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={navRefs.about} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              About <span className="text-accent">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Software Engineer at WebReInvent, experienced in backend development using PHP and
              Laravel. I specialize in building RESTful APIs, database design and optimization using
              MySQL, and working with JavaScript, Vue.js, and jQuery. I'm interested in scalable
              application architecture and solving real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card animate-slide-up lg:col-span-1" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Current Role</h3>
              </div>
              <p className="text-xl font-bold mb-2">Software Engineer</p>
              <p className="text-sm text-muted-foreground">WebReInvent</p>
            </div>

            <div className="glass-card animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Core Expertise</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Backend development with PHP & Laravel
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  RESTful API development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Database design & optimization (MySQL)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  JavaScript, Vue.js & jQuery
                </li>
              </ul>
            </div>

            <div className="glass-card lg:col-span-2 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">Focus Areas</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm">Scalable application architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm">Solving real-world problems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm">Clean code, performance & maintainability</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm">Database-driven solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={navRefs.skills} className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Skills &amp; Tools
            </h2>
            <p className="text-lg text-muted-foreground">Technologies I work with daily</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillsByCategory).map(([category, technologies], catIndex) => (
              <div
                key={category}
                className="glass-card p-6 rounded-2xl animate-slide-up"
                style={{ animationDelay: `${0.2 + catIndex * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="resume" ref={navRefs.resume} className="py-20 bg-muted/30 dark:bg-muted/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground">A journey of building great products</p>
          </div>

          <div className="relative space-y-8">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 transform -translate-x-1/2"></div>
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="absolute left-1/2 top-2.5 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background/dark"></div>

                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-accent">{exp.position}</span>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{exp.company}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-0.5 flex-shrink-0"></span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}






          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" ref={navRefs.portfolio} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Selected Works</h2>
              <p className="text-muted-foreground mt-2">A collection of projects I've built</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["All", "Laravel", "Vue.js", "PHP"].map((filter) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                    filter === "All"
                      ? "bg-accent text-accent-foreground border-accent"
                      : "border-border hover:border-accent/50 text-muted-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card group relative overflow-hidden animate-slide-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all"
                    >
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <CardContent className="p-0 pt-6 pb-8">
                  <CardHeader className="flex flex-col space-y-2 pb-4">
                    <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={navRefs.contact} className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get in Touch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Have a project in mind or want to collaborate? I'd love to hear from you.
                  Send me a message and I'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <MailIcon className="w-5 h-5" />,
                    title: "Email",
                    value: "kundanmishra.793@gmail.com",
                    href: "mailto:kundanmishra.793@gmail.com",
                  },
                  {
                    icon: <PhoneIcon className="w-5 h-5" />,
                    title: "Phone",
                    value: "+91 XXX XXX XXXX",
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    title: "Location",
                    value: "India",
                  },
                ].map((contact, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{contact.title}</h4>
                      <a
                        href={contact.href || "#"}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all border border-border hover:border-accent hover:text-accent ${
                      social.name === "Mail" ? "!text-accent hover:!text-accent-foreground hover:bg-accent" : ""
                    }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <form
              className="space-y-6 animate-slide-up glass-card p-8 rounded-2xl border border-border"
              style={{ animationDelay: "0.2s" }}
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Project inquiry..." required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={5} placeholder="Tell me about your project..." required />
              </div>
              <Button
                type="submit"
                className="w-full py-3 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all flex justify-center items-center gap-2"
              >
                Send Message <span className="w-4 h-4">→</span>
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                I'll respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center">
              <Code className="w-3 h-3 text-accent-foreground" />
            </div>
            <span className="font-semibold">
              Kundan<span className="text-accent">Mishra</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kundan Mishra. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all border border-border hover:border-accent hover:text-accent"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full flex items-center justify-center transition-all opacity-0 translate-y-20 ${showScrollTop ? "opacity-100 translate-y-0" : ""} bg-accent text-accent-foreground shadow-lg shadow-accent/40 hover:scale-110`}
        aria-label="Scroll to top"
      >
        <span className="w-4 h-4">↑</span>
      </button>
    </div>
  )
}
