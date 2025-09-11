// src/components/EnhancedBioSection.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Building, MapPin, Users, FileText, TrendingUp, BarChart3, 
  Download, MessageCircle, Lightbulb, Medal, Rocket, ChevronDown,
  Star, Activity
} from 'lucide-react';
import Image from 'next/image';
import { BioData } from '@/types';


interface Props {
  bio: BioData;
}

export default function EnhancedBioSection({ bio }: Props) {
  const [currentMetric, setCurrentMetric] = useState(0);
  
  // 学术指标数据
  const metrics = [
    { 
      label: 'Publications', 
      value: bio.publications_count ? `${bio.publications_count}+` : '3+', 
      icon: <FileText className="w-6 h-6" />, 
      color: 'blue' 
    },
    { 
      label: 'Citations', 
      value: bio.citations ? `${bio.citations}+` : '45+', 
      icon: <TrendingUp className="w-6 h-6" />, 
      color: 'green' 
    },
    { 
      label: 'h-index', 
      value: bio.hindex ? `${bio.hindex}` : '23', 
      icon: <BarChart3 className="w-6 h-6" />, 
      color: 'purple' 
    },
    { 
      label: 'Students', 
      value: bio.students ? `${bio.students}` : '156', 
      icon: <Users className="w-6 h-6" />, 
      color: 'orange' 
    },
  ];

  // 指标轮播效果
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [metrics.length]);

  return (
    <section id="bio" className="min-h-screen flex items-center justify-center px-6 pt-24 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* 左侧：增强的内容区域 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* 状态指示器 */}
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex items-center space-x-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-800 dark:text-green-300 font-medium text-sm">
                  Available for Collaboration
                </span>
              </div>
              
              {/* 学术声誉指标 */}
              <div className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-blue-800 dark:text-blue-300 font-medium text-sm">
                  Top Researcher
                </span>
              </div>
            </motion.div>

            {/* 增强的标题区域 */}
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl lg:text-5xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  {bio.name}
                </span>
              </motion.h1>
              
              {(bio.chineseName || bio.koreanName) && (
                <motion.div 
                  className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {bio.chineseName} {bio.koreanName && `• ${bio.koreanName}`}
                </motion.div>
              )}
            </div>

            {/* 专业身份 */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3">
                <Brain className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {bio.title}
                </h2>
              </div>
              
              <div className="flex items-center space-x-3 text-lg text-gray-600 dark:text-gray-400">
                <Building className="w-5 h-5" />
                <span>{bio.department || bio.university}</span>
              </div>
              
              <div className="flex items-center space-x-3 text-lg text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>{bio.university}, {bio.location}</span>
              </div>
            </motion.div>

            {/* 动态学术指标展示 */}
            <motion.div
              className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Academic Impact
                </h3>
                <Activity className="w-5 h-5 text-blue-600" />
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMetric}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`p-3 bg-gradient-to-r ${
                    metrics[currentMetric].color === 'blue' ? 'from-blue-500 to-blue-600' :
                    metrics[currentMetric].color === 'green' ? 'from-green-500 to-green-600' :
                    metrics[currentMetric].color === 'purple' ? 'from-purple-500 to-purple-600' :
                    'from-orange-500 to-orange-600'
                  } text-white rounded-xl shadow-lg`}>
                    {metrics[currentMetric].icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      {metrics[currentMetric].value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {metrics[currentMetric].label}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* 指示器点 */}
              <div className="flex space-x-2 mt-4 justify-center">
                {metrics.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentMetric ? 'bg-blue-600 w-8' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* 个人简介 */}
            <motion.div
              className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="leading-relaxed text-xl">
                {bio.bio}
              </p>
            </motion.div>

            {/* 研究兴趣标签 */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <Lightbulb className="w-6 h-6 mr-3 text-yellow-500" />
                Research Focus
              </h3>
              <div className="flex flex-wrap gap-3">
                {bio.interests?.map((interest: string, index: number) => (
                  <motion.span
                    key={interest}
                    className="group px-4 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-xl text-sm font-medium border border-blue-200/50 dark:border-blue-700/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <span className="group-hover:text-purple-600 transition-colors">
                      {interest}
                    </span>
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* 行动按钮 */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href={bio.cvPath || "/cv/Bong_CV.pdf"}
                download={bio.cvFileName || "BONG_SAKALAKA.pdf"}
                className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download CV</span>
              </motion.a>
              
              <motion.button
                onClick={() => {
                  const subject = bio.collaborationEmailSubject || "Research Collaboration Inquiry";
                  const body = bio.collaborationEmailBody || `Dear ${bio.name},

                  I found your research very interesting and would like to explore potential collaboration opportunities.

                  Best regards,`;
                  
                  window.location.href = `mailto:${bio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
                className="flex items-center space-x-3 px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-2xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start Collaboration</span>
              </motion.button>
            </motion.div>
          </motion.div>
          {/* 右侧：革命性头像展示 */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* 主头像容器 */}
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-[380px] h-[380px] rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 p-3 shadow-2xl">
                  <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden relative">
                    {bio.avatar ? (
                      <Image
                        src={bio.avatar}
                        alt={`${bio.name} - ${bio.title}`}
                        fill
                        className="object-cover"
                        priority
                        sizes="380px"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-teal-500 flex items-center justify-center text-white text-8xl font-bold">
                        {bio.name.split(' ').map((n: string) => n[0]).join('')}
                      </div>
                    )}
                    
                    {/* 在线状态指示器 */}
                    <div className="absolute bottom-4 right-4">
                      <motion.div
                        className="w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* 浮动成就徽章 */}
              <motion.div
                className="absolute -top-6 -right-6 z-20"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Medal className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 z-20"
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-xl">
                  <Rocket className="w-12 h-12 text-white" />
                </div>
              </motion.div>
              
              {/* 动态光效 */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* 滚动指示器 */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Explore Research</span>
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}