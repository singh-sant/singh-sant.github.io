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
            <motion.div
              className="flex justify-center gap-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a
                href="https://x.com/sant_sinh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors duration-300"
                aria-label="X (Twitter)"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sn-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
              <a
                href="https://github.com/singh-sant"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
                </svg>
              </a>
            </motion.div>
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
              I am a Software Engineer with deep expertise in both application development and data engineering. 
              I specialize in building scalable applications and robust data pipelines that solve complex business challenges. 
              My dual focus allows me to bridge the gap between software development and data engineering, creating 
              end-to-end solutions that combine efficient data processing with powerful user experiences.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="border border-accent p-6">
                <h3 className="font-display text-sm mb-2">Languages</h3>
                <p className="font-mono text-xs">Scala / Python / Java / JavaScript</p>
              </div>
              <div className="border border-accent p-6">
                <h3 className="font-display text-sm mb-2">Frontend</h3>
                <p className="font-mono text-xs">TypeScript / React / Next.js</p>
              </div>
              <div className="border border-accent p-6">
                <h3 className="font-display text-sm mb-2">Backend</h3>
                <p className="font-mono text-xs">Node.js / Spring Boot / Express</p>
              </div>
              <div className="border border-accent p-6">
                <h3 className="font-display text-sm mb-2">DevOps</h3>
                <p className="font-mono text-xs">Docker / K8s / CI/CD</p>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="border border-accent p-6">
                <h3 className="font-display text-sm mb-2">Big Data</h3>
                <p className="font-mono text-xs">Spark / Hadoop / MapReduce</p>
              </div>
              <div className="border border-accent p-6">
                <h3 className="font-display text-sm mb-2">Data Pipeline</h3>
                <p className="font-mono text-xs">Airflow / Kafka / ETL</p>
              </div>
              <div className="border border-accent p-6">
                <h3 className="font-display text-sm mb-2">Data Storage</h3>
                <p className="font-mono text-xs">Snowflake / MongoDB / PostgreSQL</p>
              </div>
              <div className="border border-accent p-6">
                <h3 className="font-display text-sm mb-2">Cloud</h3>
                <p className="font-mono text-xs">AWS / GCP / Azure</p>
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
              Let's connect! Feel free to reach out for collaborations or just a friendly hello.
            </motion.p>
            <motion.div
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex gap-6">
                <a
                  href="mailto:santnarayansingh+work@gmail.com"
                  className="text-foreground hover:text-accent transition-colors duration-300"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/sant_sinh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors duration-300"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/sn-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
                <a
                  href="https://github.com/singh-sant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
                  </svg>
                </a>
              </div>
              <p className="text-base">Noida, India</p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 