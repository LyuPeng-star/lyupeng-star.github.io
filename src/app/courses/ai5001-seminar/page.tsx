import Link from 'next/link';
import { Download, ArrowLeft } from 'lucide-react';

// 这个函数就是你的课程页面组件
export default function CourseMaterialsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* 返回主页的链接 */}
        <Link href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* 页面标题 */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          AI5001: Artificial Intelligence Seminar
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Here are all the course materials, including lecture notes, code examples, and assignments.
        </p>

        {/* 资料列表 */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Course Lectures</h2>
          <a 
            href="/materials/AI5001-seminar/seminar-lecture01.pdf" // 示例：假设你的PDF放在 public/materials/ 目录下
            download 
            className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="font-medium">Lecture 1: A seamless and straightforward interpretation of large language models like ChatGPT and Claude</span>
            <Download className="w-5 h-5 text-blue-500" />
          </a>
          {/* 在这里添加更多资料 */}
        </div>

      </div>
    </main>
  );
}