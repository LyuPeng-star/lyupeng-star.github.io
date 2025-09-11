// src/components/ThemeToggle.tsx
'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="w-14 h-8 bg-gray-200 rounded-full flex items-center justify-center">
        <div className="w-6 h-6 bg-white rounded-full" />
      </div>
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${isDark ? 'bg-blue-600' : 'bg-gray-300'}
      `}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`
          w-6 h-6 rounded-full shadow-md transition-all duration-300 flex items-center justify-center
          ${isDark ? 'bg-gray-900 text-yellow-300' : 'bg-white text-yellow-500'}
        `}
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30
        }}
      >
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : 180,
            opacity: isDark ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <Moon size={14} />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? 180 : 0,
            opacity: isDark ? 0 : 1
          }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <Sun size={14} />
        </motion.div>
      </motion.div>
      
      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <motion.div
          animate={{
            opacity: isDark ? 0.3 : 0,
            scale: isDark ? 1 : 0.8
          }}
          className="text-white"
        >
          <Moon size={12} />
        </motion.div>
        <motion.div
          animate={{
            opacity: isDark ? 0 : 0.5,
            scale: isDark ? 0.8 : 1
          }}
          className="text-gray-600"
        >
          <Sun size={12} />
        </motion.div>
      </div>
    </motion.button>
  )
}