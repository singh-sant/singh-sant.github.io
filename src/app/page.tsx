'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Background from './components/Background'
import ThemeToggle from './components/ThemeToggle'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-accent hover:bg-light hover:text-dark p-3 rounded-full transition-colors duration-300 z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with Next.js and Framer Motion",
    github: "https://github.com/singh-sant/singh-sant.github.io",
    demo: "https://singh-sant.github.io"
  },
  {
    title: "Connect4 Game",
    description: "Interactive Connect4 game implementation",
    github: "https://github.com/singh-sant/connect4-game",
    demo: null
  }
]

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [cursorDotPos, setCursorDotPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      setCursorDotPos({ x: e.clientX - 8, y: e.clientY - 8 })
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Custom Cursor */}
      <div
        className="cursor"
        style={{
          transform: `translate3d(${cursorPos.x - 10}px, ${cursorPos.y - 10}px, 0)`,
        }}
      />
      <div
        className="cursor-dot"
        style={{
          transform: `translate3d(${cursorDotPos.x}px, ${cursorDotPos.y}px, 0)`,
        }}
      />

      {/* Animated Background */}
      <Background />

      {/* Noise Overlay */}
      <div className="noise" />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Main Content */}
      <main className="min-h-screen dot-matrix">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center">
          <div className="section-content text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-display mb-4 glitch"
              data-text="Sant Singh"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Sant Singh
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl font-mono loading-dots"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Software Engineer
            </motion.p>
          </div>
        </section>

        {/* About Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="section-content">
            <motion.h2
              className="text-2xl md:text-3xl font-display mb-8 gradient-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About
            </motion.h2>
            <motion.p
              className="text-base md:text-lg mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I craft digital experiences through clean, efficient code. With a focus on modern web technologies
              and software architecture, I build solutions that make a difference.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="border border-accent p-6">
                <h3 className="font-display text-sm mb-2">Languages</h3>
                <p className="font-mono text-xs">Python / Java / JavaScript</p>
              </div>
              <div className="border border-accent p-6">
                <h3 className="font-display text-sm mb-2">Frontend</h3>
                <p className="font-mono text-xs">React / Next.js / TypeScript</p>
              </div>
              <div className="border border-accent p-6">
                <h3 className="font-display text-sm mb-2">Backend</h3>
                <p className="font-mono text-xs">Node.js / Spring / Django</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="section-content">
            <motion.h2
              className="text-2xl md:text-3xl font-display mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <h3 className="font-display text-lg mb-4">{project.title}</h3>
                  <p className="font-mono text-sm mb-4">{project.description}</p>
                  <div className="flex gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-underline text-sm"
                    >
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-underline text-sm"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="section-content text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-display mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Contact
            </motion.h2>
            <motion.p
              className="text-base md:text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's work together
            </motion.p>
            <motion.div
              className="flex justify-center gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a
                href="mailto:santnsingh@gmail.com"
                className="hover-underline text-lg"
              >
                Email
              </a>
              <a
                href="https://github.com/singh-sant"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline text-lg"
              >
                GitHub
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 