// src/components/AnimatedSection.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  id?: string
  className?: string
  delay?: number
}

export default function AnimatedSection({ 
  children, 
  id, 
  className = '', 
  delay = 0 
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
    >
      {children}
    </motion.section>
  )
}