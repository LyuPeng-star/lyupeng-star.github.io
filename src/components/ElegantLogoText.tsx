'use client';

import { motion } from 'framer-motion';

const ElegantLogoText = () => {
  return (
    <motion.div 
      className="group relative"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      {/* 背景装饰 */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-amber-500/8 via-orange-500/8 to-red-500/8 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.03, 0.1, 0.03],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* 主文字容器 - 左对齐 */}
      <div className="relative text-left">
        {/* 上层：朝聞道 - 调整为更协调的大小 */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-0.5"
        >
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent tracking-wide">
            朝聞道
          </span>
        </motion.div>
        
        {/* 下层：夕可眠矣 - 调整为更平衡的大小 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <span className="text-base md:text-lg font-medium text-gray-600 dark:text-gray-400 tracking-wider opacity-75">
            夕可眠矣
          </span>
        </motion.div>
      </div>
      
      {/* 微妙装饰点 - 位置调整 */}
      <div className="absolute top-0 right-2">
        <div className="w-1 h-1 bg-amber-500 rounded-full opacity-50 animate-pulse"></div>
      </div>
    </motion.div>
  );
};

export default ElegantLogoText;