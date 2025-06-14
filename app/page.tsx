"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Code,
  Database,
  Server,
  Monitor,
  Coffee,
  Music,
  Camera,
  Gamepad2,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "PHP", level: 88 },
    { name: "Laravel", level: 85 },
    { name: "CodeIgniter", level: 82 },
    { name: "Vue.js", level: 80 },
    { name: "MySQL", level: 90 },
    { name: "SQL Server", level: 75 },
  ]

  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Lead development of web applications using Laravel and Vue.js",
    },
    {
      company: "Digital Innovations Ltd.",
      position: "PHP Developer",
      period: "2020 - 2022",
      description: "Developed and maintained PHP applications with MySQL databases",
    },
    {
      company: "WebCraft Agency",
      position: "Junior Developer",
      period: "2019 - 2020",
      description: "Built responsive websites using HTML, CSS, and JavaScript",
    },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      tech: ["Laravel", "Vue.js", "MySQL"],
      description: "Full-featured online shopping platform with admin panel",
    },
    {
      title: "Task Management System",
      tech: ["PHP", "CodeIgniter", "SQL Server"],
      description: "Project management tool for team collaboration",
    },
    {
      title: "Restaurant Management",
      tech: ["Laravel", "JavaScript", "MySQL"],
      description: "Complete restaurant ordering and management system",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-cyan-400">Kundan</div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Resume", "Portfolio"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`hover:text-cyan-400 transition-colors ${
                    activeSection === item.toLowerCase() ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Phone className="w-4 h-4" />
              <span>+91-XXX-XXX-XXXX</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === "home" && (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-4">
                KUNDAN
                <br />
                <span className="text-cyan-400">MISHRA</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">Full Stack Developer</p>
              <div className="flex space-x-4 mb-8">
                <Button
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                >
                  Resume
                </Button>
                <Button className="bg-cyan-400 text-gray-900 hover:bg-cyan-500">Portfolio</Button>
              </div>
              <div className="flex space-x-4">
                <Github className="w-6 h-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                <Mail className="w-6 h-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                <Globe className="w-6 h-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Monitor className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                  <Code className="w-16 h-16 text-gray-400 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-4">ABOUT</h2>
              <p className="text-cyan-400 mb-6">kundanmishra.793@gmail.com</p>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Full Stack Developer with expertise in modern web technologies and database management. Specialized in
                  PHP frameworks like Laravel and CodeIgniter, with strong frontend skills in JavaScript and Vue.js.
                </p>
                <p>
                  My experience spans across both frontend and backend development, creating scalable web applications
                  and robust database solutions. I have hands-on experience with MySQL and SQL Server, ensuring optimal
                  data management and performance.
                </p>
                <p>
                  Passionate about clean code, modern development practices, and delivering high-quality solutions that
                  meet business requirements and user expectations.
                </p>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>Based in India</p>
                <p>Available for freelance projects</p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Code className="w-16 h-16 text-cyan-400" />
                  </div>
                  <p className="text-gray-400">Professional Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Resume Section */}
      {activeSection === "resume" && (
        <section className="min-h-screen py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Skills Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">TECHNICAL SKILLS</h3>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">LANGUAGES</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">English</span>
                        <span className="text-sm text-gray-400">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Hindi</span>
                        <span className="text-sm text-gray-400">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">PERSONAL SKILLS</h3>
                  <div className="space-y-2 text-sm">
                    <p>• Problem Solving</p>
                    <p>• Team Collaboration</p>
                    <p>• Project Management</p>
                    <p>• Code Review</p>
                  </div>
                </div>
              </div>

              {/* Experience Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">EXPERIENCE</h3>
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <Card key={index} className="bg-gray-800 border-gray-700 p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <Server className="w-5 h-5 text-gray-900" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-cyan-400">{exp.company}</h4>
                            <p className="text-sm text-gray-300">{exp.position}</p>
                            <p className="text-xs text-gray-400 mb-2">{exp.period}</p>
                            <p className="text-sm text-gray-300">{exp.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">EDUCATION</h3>
                  <Card className="bg-gray-800 border-gray-700 p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Monitor className="w-5 h-5 text-gray-900" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-cyan-400">Bachelor in Computer Science</h4>
                        <p className="text-sm text-gray-400">University Name</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Additional Skills Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">WHAT CAN I DO?</h3>
                  <div className="space-y-3 text-sm">
                    <p>• Full Stack Web Development</p>
                    <p>• Database Design & Optimization</p>
                    <p>• API Development & Integration</p>
                    <p>• Responsive Web Design</p>
                    <p>• Performance Optimization</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">DEVELOPMENT SKILLS</h3>
                  <div className="space-y-3 text-sm">
                    <p>• Frontend Development</p>
                    <p>• Backend Architecture</p>
                    <p>• Database Management</p>
                    <p>• Version Control (Git)</p>
                    <p>• Testing & Debugging</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">HOBBIES & INTERESTS</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <Coffee className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <p className="text-xs">Coffee</p>
                    </div>
                    <div className="text-center">
                      <Music className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <p className="text-xs">Music</p>
                    </div>
                    <div className="text-center">
                      <Camera className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <p className="text-xs">Photography</p>
                    </div>
                    <div className="text-center">
                      <Gamepad2 className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <p className="text-xs">Gaming</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Section */}
      {activeSection === "portfolio" && (
        <section className="min-h-screen py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-bold mb-12 text-center">PORTFOLIO</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 overflow-hidden hover:border-cyan-400 transition-colors"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center">
                    <Database className="w-16 h-16 text-cyan-400" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-gray-700 text-cyan-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Kundan Mishra. All rights reserved.</p>
          <p className="text-cyan-400 mt-2">kundanmishra.793@gmail.com</p>
        </div>
      </footer>
    </div>
  )
}
