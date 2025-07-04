'use client'

import { motion } from 'framer-motion'

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background transition-colors duration-300">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-foreground/10 rounded-full"
            initial={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: 0,
            }}
            animate={{
              x: [null, Math.random() * 100 + 'vw'],
              y: [null, Math.random() * 100 + 'vh'],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </div>
  )
} 