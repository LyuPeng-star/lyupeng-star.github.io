// components/WorldClock.js

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- 全新的、更酷的SVG图标 ---
// 这是一个更具科技感的“全球网络”图标
const TechGlobeIcon = (props) => (
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <motion.path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 100-18 9 9 0 000 18z"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
    <motion.path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3a9 9 0 010 18V3z"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8, ease: "backOut" }}
    />
    <motion.path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 14.25a9.01 9.01 0 010-4.5m17 4.5a9.01 9.01 0 000-4.5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    />
  </svg>
);


const WorldClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timerId);
  }, []);

  const getFormattedTime = (timeZone) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(currentTime);
  };

  return (
    // 'group' 用于控制悬停效果
    <div className="relative group z-20">
      
      {/* --- 让图标动起来 --- */}
      <motion.div
        className="w-11 h-11 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer border border-white/20"
        whileHover={{ scale: 1.2, rotate: 90 }} // 悬停时放大并旋转
        transition={{ type: 'spring', stiffness: 300, damping: 15 }} // 使用弹簧动画，效果更自然
      >
        <TechGlobeIcon className="w-6 h-6 text-white" />
      </motion.div>

      {/* --- 更炫酷的悬停卡片 --- */}
      <div 
        className="absolute left-0 mt-3 w-56 p-4
                   bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-2xl 
                   border border-white/20
                   opacity-0 group-hover:opacity-100 
                   transform -translate-x-4 group-hover:translate-x-0 
                   transition-all duration-300 ease-in-out
                   pointer-events-none group-hover:pointer-events-auto"
      >
        {/* 卡片辉光效果 */}
        <div className="absolute top-0 left-0 -z-10 w-full h-full bg-blue-500/20 blur-2xl"></div>

        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/20">
          <h4 className="font-bold text-white text-lg">Global Times</h4>
        </div>
        
        <ul className="text-sm text-gray-200 space-y-3">
          {/* --- 调整后的时间顺序：美、中、韩 --- */}
          <li className="flex justify-between items-center transition-colors hover:text-white">
            <span className="flex items-center"><span className="text-lg mr-2">🇺🇸</span> USA (ET)</span>
            <span className="font-mono text-base bg-white/10 px-2.5 py-1 rounded-md tracking-wider">{getFormattedTime('America/New_York')}</span>
          </li>
          <li className="flex justify-between items-center transition-colors hover:text-white">
            <span className="flex items-center"><span className="text-lg mr-2">🇨🇳</span> China</span>
            <span className="font-mono text-base bg-white/10 px-2.5 py-1 rounded-md tracking-wider">{getFormattedTime('Asia/Shanghai')}</span>
          </li>
          <li className="flex justify-between items-center transition-colors hover:text-white">
            <span className="flex items-center"><span className="text-lg mr-2">🇰🇷</span> S. Korea</span>
            <span className="font-mono text-base bg-white/10 px-2.5 py-1 rounded-md tracking-wider">{getFormattedTime('Asia/Seoul')}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorldClock;