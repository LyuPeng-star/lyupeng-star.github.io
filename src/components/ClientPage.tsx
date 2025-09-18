// src/components/ClientPage.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Bio from './Bio';
import ElegantLogoText from './ElegantLogoText';
import ThemeToggle from './ThemeToggle';
import ProjectsSection from './ProjectsSection';
import { 
  Github, 
  // Linkedin, 
  Mail, 
  MapPin, 
  GraduationCap, 
  BookOpen,
  Users,
  Award, 
  FileText, 
  ExternalLink, 
  Moon, 
  Sun,
  Brain,
  Calendar,
  Download,
  // Globe,
  MessageCircle,
  // Instagram,
  // Twitter,
  // Phone,
  Building,
  Clock,
  Presentation,
  FolderOpen
} from 'lucide-react';

// import Image from 'next/image';

import { 
  Project
} from '@/types';

// 接口定义
interface BioData {
  name: string;
  chineseName?: string;
  koreanName?: string;
  title: string;
  university: string;
  department: string;
  location: string;
  avatar: string;
  tagline: string;
  bio: string;
  interests: string[];
  email: string;
  phone?: string;
  office?: string;
  github: string;
  linkedin: string;
  kakao?: string;
  twitter?: string;
  instagram?: string;
  orcid?: string;
  googleScholar?: string;
}

interface ResearchItem {
  title: string;
  description: string;
  icon: string;
  color: string;
  keywords: string[];
}

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: 'Published' | 'Under Review' | 'In Preparation';
  description?: string;
  link?: string;
  pdf?: string;
  doi?: string;
  citations?: number;
}

interface Course {
  code: string;
  title: string;
  semester: string;
  year: string;
  description: string;
  level: 'Undergraduate' | 'Graduate';
  students?: number;
  materials?: string;
}

interface Seminar {
  title: string;
  date: string;
  time: string;
  location: string;
  speaker?: string;
  topic: string;
  description: string;
  type: 'Upcoming' | 'Past';
  registration?: string;
}

interface Experience {
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  type: 'work' | 'education';
  achievements?: string[];
}

interface Props {
  bio: BioData;
  research: ResearchItem[];
  publications: Publication[];
  projects: Project[];
  teaching: Course[];
  seminars: Seminar[];
  experience: { education: Experience[], work: Experience[] };
}

// 粒子背景系统 - 升级版
const EnhancedParticleSystem = () => {
  const [particles, setParticles] = useState<Array<{ 
    id: number; 
    x: number; 
    y: number; 
    size: number; 
    opacity: number;
    speed: number;
    direction: number;
  }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 80; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.6 + 0.1,
          speed: Math.random() * 2 + 0.5,
          direction: Math.random() * Math.PI * 2,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, Math.cos(particle.direction) * 50, 0],
            y: [0, Math.sin(particle.direction) * 30, 0],
            opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.speed * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* 网格背景 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      {/* 渐变光晕 */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>
  );
};

// 智能导航栏
const SmartNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('bio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // 检测当前section
      const sections = ['bio', 'research', 'publications', 'projects', 'teaching', 'seminars', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'bio', label: 'Bio', icon: <Users className="w-4 h-4" /> },
    { id: 'research', label: 'Research', icon: <Brain className="w-4 h-4" /> },
    { id: 'publications', label: 'Publications', icon: <FileText className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-4 h-4" /> },
    { id: 'teaching', label: 'Teaching', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'seminars', label: 'Seminars', icon: <Presentation className="w-4 h-4" /> },
    { id: 'experience', label: 'Background', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-700/30 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <ElegantLogoText />
          
          <div className="hidden lg:flex items-center space-x-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full p-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-gray-700/60'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// 社交媒体图标映射
// const getSocialIcon = (platform: string): React.ElementType => {
//   const iconMap: { [key: string]: React.ElementType } = {
//     github: Github,
//     linkedin: Linkedin,
//     email: Mail,
//     kakao: MessageCircle,
//     twitter: Twitter,
//     instagram: Instagram,
//     orcid: Globe,
//     scholar: Globe,
//     phone: Phone
//   };
  
//   return iconMap[platform] || Globe;
// };

export default function EnhancedAcademicSite({ bio, research, publications, projects, teaching, seminars, experience }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
      <EnhancedParticleSystem />
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <SmartNavigation />

      {/* Bio Section */}
      <Bio bio={bio} />

      {/* Research Section */}
      <section id="research" className="py-24 px-6 bg-gradient-to-br from-white/50 to-blue-50/50 dark:from-gray-800/50 dark:to-blue-900/20 relative z-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Research Interests
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Exploring cutting-edge AI technologies to advance our understanding of artificial intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {research.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200/20 dark:border-gray-700/20 group-hover:border-transparent">
                  <motion.div 
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.color} text-white mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-3xl">{item.icon}</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.keywords.map((keyword, idx) => (
                      <span key={idx} className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 px-6 relative z-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Publications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Selected publications and research contributions
            </p>
          </motion.div>

          <div className="space-y-8">
            {publications.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200/20 dark:border-gray-700/20"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg">
                      {paper.authors}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                      {paper.venue} ({paper.year})
                    </p>
                    {paper.description && (
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {paper.description}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex flex-col items-end space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        paper.status === 'Published' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : paper.status === 'Under Review'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {paper.status}
                      </span>
                      {paper.citations && (
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {paper.citations} citations
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      {paper.link && (
                        <motion.a
                          href={paper.link}
                          className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="View Paper"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                      {paper.pdf && (
                        <motion.a
                          href={paper.pdf}
                          className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Download PDF"
                        >
                          <Download className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsSection projects={projects} />

      {/* Teaching Section */}
      <section id="teaching" className="py-24 px-6 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/20 relative z-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Teaching
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Courses and educational activities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {teaching.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200/20 dark:border-gray-700/20"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                        course.level === 'Graduate' 
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {course.level}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {course.code}: {course.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {course.semester} {course.year}
                      </p>
                    </div>
                    <motion.div 
                      className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <BookOpen className="w-6 h-6" />
                    </motion.div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      {course.students && (
                        <span className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students} students</span>
                        </span>
                      )}
                    </div>
                    {course.materials && (
                      <motion.a
                        href={course.materials}
                        className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                        whileHover={{ x: 5 }}
                      >
                        <span>Course Materials</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seminars Section */}
      <section id="seminars" className="py-24 px-6 relative z-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Seminars & Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Academic seminars and workshops
            </p>
          </motion.div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Clock className="w-8 h-8 mr-3 text-green-600" />
              Upcoming Events
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {seminars.filter(s => s.type === 'Upcoming').map((seminar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-8 border-2 border-green-200/50 dark:border-green-700/50 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {seminar.title}
                      </h4>
                      <p className="text-green-600 dark:text-green-400 font-semibold mb-1">
                        {seminar.date} • {seminar.time}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {seminar.location}
                      </p>
                    </div>
                    <motion.div 
                      className="p-3 bg-green-600 text-white rounded-xl"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Calendar className="w-6 h-6" />
                    </motion.div>
                  </div>
                  
                  {seminar.speaker && (
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      <strong>Speaker:</strong> {seminar.speaker}
                    </p>
                  )}
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {seminar.description}
                  </p>
                  
                  {seminar.registration && (() => {
                    let registrationLink = seminar.registration;
                    if (registrationLink.includes('@') && !registrationLink.startsWith('mailto:')) {
                      registrationLink = `mailto:${registrationLink}?subject=Registration for seminar: ${encodeURIComponent(seminar.title)}`;
                    }

                    return (
                      <motion.a
                        href={registrationLink}
                        target={registrationLink.startsWith('http') ? '_blank' : '_self'}
                        rel={registrationLink.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Register Now</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    );
                  })()}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Award className="w-8 h-8 mr-3 text-gray-600" />
              Past Events
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seminars.filter(s => s.type === 'Past').map((seminar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {seminar.title}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                    {seminar.date}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {seminar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-gradient-to-br from-gray-50/50 to-slate-50/50 dark:from-gray-800/50 dark:to-slate-800/50 relative z-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-700 to-slate-700 bg-clip-text text-transparent mb-6">
              Background
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Education and professional experience
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center">
                <GraduationCap className="w-8 h-8 mr-3 text-blue-600" />
                Education
              </h3>
              <div className="space-y-8">
                {experience.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-4 border-blue-200 dark:border-blue-700"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-2"></div>
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/20 dark:border-gray-700/20">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                        {edu.organization}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        {edu.startDate} - {edu.endDate} • {edu.location}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>
                      {edu.achievements && (
                        <ul className="mt-4 space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Professional Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center">
                <Award className="w-8 h-8 mr-3 text-purple-600" />
                Professional Experience
              </h3>
              <div className="space-y-8">
                {experience.work.map((work, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l-4 border-purple-200 dark:border-purple-700"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full transform -translate-x-2"></div>
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/20 dark:border-gray-700/20">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {work.title}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold mb-1">
                        {work.organization}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        {work.startDate} - {work.endDate} • {work.location}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {work.description}
                      </p>
                      {work.achievements && (
                        <ul className="mt-4 space-y-1">
                          {work.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 text-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Feel free to reach out for collaborations, research discussions, or academic opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email",
                value: bio.email,
                link: `mailto:${bio.email}`,
                color: "from-red-500 to-pink-500"
              },
              {
                icon: <Github className="w-8 h-8" />,
                title: "GitHub",
                value: "Research Codes",
                link: bio.github,
                color: "from-gray-600 to-gray-800"
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "KakaoTalk",
                value: "lyupaif",
                link: bio.kakao || "#",
                color: "from-yellow-400 to-yellow-600"
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Office",
                value: bio.office || "By Appointment",
                link: "#",
                color: "from-blue-500 to-blue-700"
              }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group block p-8 bg-gradient-to-br ${contact.color} rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{contact.title}</h3>
                  <p className="text-sm opacity-90">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-4">
              © {new Date().getFullYear()} <a href="#bio" className="font-semibold text-white hover:text-blue-400 transition-colors">{bio.name}</a>. 
              Built with Next.js, passion, lots of coffee ☕, and help from <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-blue-400 transition-colors">Gemini</a>, <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-blue-400 transition-colors">Claude</a>, and <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-blue-400 transition-colors">Chat-GPT</a>.
            </p>
            <p className="text-sm text-gray-500">
              Made in South Korea 🇰🇷 • Advancing AI Research Globally 🌍
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}