// src/types/index.ts

// 个人简介数据类型
export interface BioData {
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
  
  // 学术指标
  citations?: number;
  hindex?: number;
  publications_count?: number;
  students?: number;
  
  // 联系方式
  email: string;
  phone?: string;
  office?: string;
  
  // 社交媒体
  github: string;
  linkedin: string;
  kakao?: string;
  twitter?: string;
  instagram?: string;
  orcid?: string;
  googleScholar?: string;
  
  // CV相关
  cvPath?: string;
  cvFileName?: string;
  
  // 邮件模板相关
  collaborationEmailSubject?: string;
  collaborationEmailBody?: string;
}

// 研究兴趣数据类型
export interface ResearchItem {
  title: string;
  description: string;
  icon: string;
  color: string;
  keywords: string[];
}

// 论文发表数据类型
export interface Publication {
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

// 课程教学数据类型
export interface Course {
  code: string;
  title: string;
  semester: string;
  year: string;
  description: string;
  level: 'Undergraduate' | 'Graduate';
  students?: number;
  materials?: string;
}

// 研讨会活动数据类型
export interface Seminar {
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

// 经历背景数据类型
export interface Experience {
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  type: 'work' | 'education';
  achievements?: string[];
}

// 内容数据通用类型
export interface ContentData {
  content: string;
  data: Record<string, unknown>;
}

// 教学相关数据类型
export interface TeachingData {
  title: string;
  subtitle?: string;
  philosophy?: string;
  courses: Course[];
  achievements?: string[];
}

// 研讨会相关数据类型
export interface SeminarsData {
  title: string;
  subtitle?: string;
  upcoming: Seminar[];
  past: Seminar[];
  regular_seminars?: RegularSeminar[];
}

// 定期研讨会类型
export interface RegularSeminar {
  title: string;
  schedule: string;
  location: string;
  description: string;
}

// 经历数据类型
export interface ExperienceData {
  title: string;
  subtitle?: string;
  education: Experience[];
  work: Experience[];
}

// 研究数据类型
export interface ResearchData {
  title: string;
  subtitle?: string;
  items: ResearchItem[];
}

// 论文数据类型
export interface PublicationsData {
  title: string;
  subtitle?: string;
  publications: Publication[];
}

// 页面组件Props类型
export interface ClientPageProps {
  bio: BioData;
  research: ResearchItem[];
  publications: Publication[];
  teaching: Course[];
  seminars: Seminar[];
  experience: { education: Experience[], work: Experience[] };
}

// 增强版学术网站Props类型
export interface EnhancedAcademicSiteProps {
  bio: BioData;
  research: ResearchItem[];
  publications: Publication[];
  teaching: Course[];
  seminars: Seminar[];
  experience: { education: Experience[], work: Experience[] };
}

// 导航菜单项类型
export interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  color?: string;
  chinese?: string;
}

// 学术指标类型
export interface AcademicMetric {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

// 社交链接类型
export interface SocialLink {
  platform: string;
  href: string;
  label: string;
  color?: string;
}

// 联系方式类型
export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  color?: string;
}

// 25.09.19 添加这些接口
// 项目数据类型
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  status: 'Active' | 'Completed' | 'On Hold';
  startDate: string;
  endDate?: string;
  technologies: string[];
  image?: string;
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
    documentation?: string;
  };
  collaborators?: string[];
  funding?: string;
  highlights?: string[];
}

// 项目数据结构
export interface ProjectsData {
  title: string;
  subtitle?: string;
  projects: Project[];
}