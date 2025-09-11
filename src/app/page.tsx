// src/app/page.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const publications = [
    {
      title: "Advanced AI Techniques in Industrial Design",
      authors: "Peng Lyu, John Smith, Jane Doe",
      venue: "International Conference on AI & Design 2024",
      year: "2024",
      link: "#"
    },
    {
      title: "Neural Architecture Search for Smart Manufacturing",
      authors: "Peng Lyu, Alice Johnson, Bob Wilson",
      venue: "Journal of Machine Learning Research",
      year: "2023",
      link: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Peng Lyu
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'Research', 'Publications', 'Experience', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Peng Lyu
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-4"
              >
                PhD in Artificial Intelligence
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
              >
                Advancing AI through innovative solutions and interdisciplinary applications 
                between artificial intelligence and industrial design. Committed to making 
                AI more interpretable and accessible.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Download CV
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  View Research
                </motion.button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex gap-6 justify-center lg:justify-start mt-8"
              >
                {[
                  { Icon: Github, href: '#' },
                  { Icon: Linkedin, href: '#' },
                  { Icon: Mail, href: 'mailto:peng@example.com' }
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold">
                    PL
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Research Interests */}
      <section id="research" className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Research Interests
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Interpretability",
                description: "Making AI systems more transparent and understandable",
                icon: "🤖",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Intelligent Sensing",
                description: "Developing smart perception systems for real-world applications",
                icon: "🧠",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Neural Architecture Design",
                description: "Creating efficient and effective neural network architectures",
                icon: "🏗️",
                color: "from-green-500 to-teal-500"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className={`text-4xl mb-4 p-4 rounded-xl bg-gradient-to-r ${item.color} text-white inline-block`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Recent Publications
          </motion.h2>
          
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {pub.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {pub.authors}
                </p>
                <p className="text-gray-500 dark:text-gray-500 mb-4">
                  {pub.venue} • {pub.year}
                </p>
                <motion.a
                  href={pub.link}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  View Paper <ExternalLink size={16} />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Let&apos;s Connect
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-12"
          >
            Interested in collaboration or have questions about my research? 
            I&apos;d love to hear from you!
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Peng Lyu. Built with Next.js, passion, and lots of coffee ☕
          </p>
        </div>
      </footer>
    </div>
  )
}