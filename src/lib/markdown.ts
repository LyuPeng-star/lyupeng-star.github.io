// src/lib/markdown.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { 
  ContentData, 
  BioData, 
  ResearchItem, 
  Publication, 
  Project,
  Course, 
  Seminar, 
  Experience,
  TeachingData,
  SeminarsData,
  ExperienceData,
  ResearchData,
  PublicationsData,
  ProjectsData
} from '@/types';

/**
 * 读取并解析markdown文件
 * @param filename - markdown文件名
 * @returns 解析后的内容和数据
 */
export async function getContentData(filename: string): Promise<ContentData> {
  const fullPath = path.join(process.cwd(), 'content', filename);
  
  try {
    if (!fs.existsSync(fullPath)) {
      console.warn(`Content file not found: ${filename}`);
      return { content: '', data: {} };
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    return {
      content: matterResult.content,
      data: matterResult.data
    };
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return { content: '', data: {} };
  }
}

/**
 * 获取个人简介数据
 * @returns 个人简介数据对象
 */
export async function getBioData(): Promise<BioData> {
  const { data } = (await getContentData('bio.md')) as { data: Partial<BioData> };
  
  return {
    name: data.name || 'Peng Lyu',
    chineseName: data.chineseName || '吕鹏',
    koreanName: data.koreanName || '여봉',
    title: data.title || 'PhD Student in Artificial Intelligence',
    university: data.university || 'Jeonju University',
    department: data.department || 'Department of Computer Science and Engineering',
    location: data.location || 'Jeonju, South Korea',
    avatar: data.avatar || '',
    tagline: data.tagline || 'Advancing AI through interpretability and innovation',
    bio: data.bio || 'Passionate about AI interpretability, intelligent sensing, and neural architecture design.',
    interests: Array.isArray(data.interests) ? data.interests : [
      'AI Interpretability', 'Neural Architecture Search', 'Intelligent Sensing',
      'Computer Vision', 'Machine Learning', 'Deep Learning'
    ],
    citations: data.citations,
    hindex: data.hindex,
    publications_count: data.publications_count,
    students: data.students,
    email: data.email || 'penglyu@jj.ac.kr',
    phone: data.phone,
    office: data.office,
    github: data.github || 'https://github.com/LyuPeng-star',
    linkedin: data.linkedin || 'https://linkedin.com/in/penglyu',
    kakao: data.kakao,
    twitter: data.twitter,
    instagram: data.instagram,
    orcid: data.orcid,
    googleScholar: data.googleScholar,
    cvPath: data.cvPath || '/cv/CV_PengLyu.pdf',
    cvFileName: data.cvFileName || 'Peng_Lyu_CV.pdf',
    collaborationEmailSubject: data.collaborationEmailSubject || 'Research Collaboration Inquiry',
    collaborationEmailBody: data.collaborationEmailBody || `Dear ${data.name || 'Dr. Lyu'},\n\nI found your research very interesting and would like to explore potential collaboration opportunities.\n\nBest regards,`
  };
}

/**
 * 获取研究兴趣数据
 * @returns 研究兴趣数组
 */
export async function getResearchData(): Promise<ResearchItem[]> {
  const { data } = await getContentData('research.md');
  const defaultResearch: ResearchItem[] = [
    { title: "AI Interpretability", description: "Developing methods to understand and explain AI decision-making processes, making black-box models more transparent and trustworthy.", icon: "🧠", color: "from-blue-500 to-cyan-500", keywords: ["Explainable AI", "Model Interpretation", "Transparency"] },
    { title: "Intelligent Sensing", description: "Creating adaptive sensing systems that can intelligently perceive and interpret environmental data for autonomous systems.", icon: "👁️", color: "from-purple-500 to-pink-500", keywords: ["Sensor Fusion", "Adaptive Systems", "Robotics"] },
    { title: "Neural Architecture Design", description: "Designing efficient neural network architectures that balance performance, interpretability, and computational efficiency.", icon: "🏗️", color: "from-green-500 to-teal-500", keywords: ["AutoML", "Architecture Search", "Efficiency"] }
  ];
  // ✅ 已修复: 确保只在 data.items 是有效数组时使用它
  return Array.isArray(data.items) && data.items.length > 0 ? data.items : defaultResearch;
}

/**
 * 获取论文发表数据
 * @returns 论文发表数组
 */
export async function getPublications(): Promise<Publication[]> {
  const { data } = await getContentData('publications.md');
  // ✅ 已修复: 使用 Array.isArray 进行安全检查
  return Array.isArray(data.publications) ? data.publications : [];
}

/**
 * 获取项目数据
 * @returns 项目数组
 */
export async function getProjects(): Promise<Project[]> {
  const { data } = await getContentData('projects.md');
  return Array.isArray(data.projects) ? data.projects : [];
}

/**
 * 获取完整项目数据
 * @returns 项目数据对象
 */
export async function getProjectsData(): Promise<ProjectsData> {
  const { data } = await getContentData('projects.md')as { data: Partial<ProjectsData> };
  
  return {
    title: data.title || 'Projects',
    subtitle: data.subtitle,
    projects: data.projects || []
  };
}

/**
 * 获取教学课程数据
 * @returns 课程数组
 */
export async function getTeaching(): Promise<Course[]> {
  const { data } = await getContentData('teaching.md');
  // ✅ 已修复: 使用 Array.isArray 进行安全检查
  return Array.isArray(data.courses) ? data.courses : [];
}

/**
 * 获取完整教学数据
 * @returns 教学数据对象
 */
export async function getTeachingData(): Promise<TeachingData> {
  // ✅ 修复: 使用类型断言来安全地处理所有字段
  const { data } = (await getContentData('teaching.md')) as { data: Partial<TeachingData> };
  
  return {
    title: data.title || 'Teaching',
    subtitle: data.subtitle,
    philosophy: data.philosophy,
    // ✅ 修复: 对所有数组字段使用 Array.isArray 进行安全检查
    courses: Array.isArray(data.courses) ? data.courses : [],
    achievements: Array.isArray(data.achievements) ? data.achievements : []
  };
}

/**
 * 获取研讨会活动数据
 * @returns 研讨会数组（合并即将到来和过往的）
 */
export async function getSeminars(): Promise<Seminar[]> {
  const { data } = await getContentData('seminars.md');
  // ✅ 修复: 对可能不是数组的字段进行安全检查，防止扩展运算符(...)出错
  const upcoming = Array.isArray(data.upcoming) ? data.upcoming : [];
  const past = Array.isArray(data.past) ? data.past : [];
  return [...upcoming, ...past];
}

/**
 * 获取完整研讨会数据
 * @returns 研讨会数据对象
 */
export async function getSeminarsData(): Promise<SeminarsData> {
  // ✅ 修复: 使用类型断言来安全地处理所有字段
  const { data } = (await getContentData('seminars.md')) as { data: Partial<SeminarsData> };
  
  return {
    title: data.title || 'Seminars & Events',
    subtitle: data.subtitle,
    // ✅ 修复: 对所有数组字段使用 Array.isArray 进行安全检查
    upcoming: Array.isArray(data.upcoming) ? data.upcoming : [],
    past: Array.isArray(data.past) ? data.past : [],
    regular_seminars: Array.isArray(data.regular_seminars) ? data.regular_seminars : []
  };
}

/**
 * 获取经历背景数据
 * @returns 包含教育和工作经历的对象
 */
export async function getExperience(): Promise<{ education: Experience[], work: Experience[] }> {
  const { data } = await getContentData('experience.md');
  
  return {
    // ✅ 修复: 对所有数组字段使用 Array.isArray 进行安全检查
    education: Array.isArray(data.education) ? data.education : [],
    work: Array.isArray(data.work) ? data.work : []
  };
}

/**
 * 获取完整经历数据
 * @returns 经历数据对象
 */
export async function getExperienceData(): Promise<ExperienceData> {
  // ✅ 修复: 使用类型断言来安全地处理所有字段
  const { data } = (await getContentData('experience.md')) as { data: Partial<ExperienceData> };
  
  return {
    title: data.title || 'Experience & Education',
    subtitle: data.subtitle,
    // ✅ 修复: 对所有数组字段使用 Array.isArray 进行安全检查
    education: Array.isArray(data.education) ? data.education : [],
    work: Array.isArray(data.work) ? data.work : []
  };
}

/**
 * 获取完整研究数据
 * @returns 研究数据对象
 */
export async function getResearchDataComplete(): Promise<ResearchData> {
  // ✅ 修复: 使用类型断言来安全地处理 title 和 subtitle
  const { data } = (await getContentData('research.md')) as { data: Partial<ResearchData> };
  const items = await getResearchData();
  
  return {
    title: data.title || 'Research Interests',
    subtitle: data.subtitle,
    items: items
  };
}

/**
 * 获取完整论文数据
 * @returns 论文数据对象
 */
export async function getPublicationsData(): Promise<PublicationsData> {
  // ✅ 修复: 使用类型断言来安全地处理 title 和 subtitle
  const { data } = (await getContentData('publications.md')) as { data: Partial<PublicationsData> };
  const publications = await getPublications();
  
  return {
    title: data.title || 'Publications',
    subtitle: data.subtitle,
    publications: publications
  };
}

/**
 * 获取所有页面数据（用于主页面）
 * @returns 包含所有页面数据的对象
 */
export async function getAllPageData() {
  try {
    const [bio, research, publications, projects, teaching, seminars, experience] = await Promise.all([
      getBioData(),
      getResearchData(),
      getPublications(),
      getProjects(),
      getTeaching(),
      getSeminars(),
      getExperience()
    ]);

    return { bio, research, publications, teaching, seminars, experience, projects};
  } catch (error) {
    console.error('Error loading page data:', error);
    
    const defaultBio = await getBioData();
    const defaultResearch = await getResearchData();
    
    return {
      bio: defaultBio,
      research: defaultResearch,
      publications: [],
      teaching: [],
      seminars: [],
      experience: { education: [], work: [] },
      projects: []
    };
  }
}

// ... 辅助函数 ...
export function contentFileExists(filename: string): boolean {
    const fullPath = path.join(process.cwd(), 'content', filename);
    return fs.existsSync(fullPath);
}

export function getAllContentFiles(): string[] {
    const contentDir = path.join(process.cwd(), 'content');
    if (!fs.existsSync(contentDir)) {
        return [];
    }
    return fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));
}

export function validateContentFile(filename: string): { valid: boolean; error?: string } {
    try {
        const fullPath = path.join(process.cwd(), 'content', filename);
        if (!fs.existsSync(fullPath)) {
            return { valid: false, error: 'File does not exist' };
        }
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        matter(fileContents);
        return { valid: true };
    } catch (error) {
        return { 
            valid: false, 
            error: error instanceof Error ? error.message : 'Unknown error' 
        };
    }
}

export function getContentStats(): {
    totalFiles: number;
    validFiles: number;
    invalidFiles: string[];
} {
    const files = getAllContentFiles();
    const invalidFiles: string[] = [];
    let validFiles = 0;

    files.forEach(file => {
        const validation = validateContentFile(file);
        if (validation.valid) {
            validFiles++;
        } else {
            invalidFiles.push(file);
        }
    });

    return {
        totalFiles: files.length,
        validFiles,
        invalidFiles
    };
}

export async function searchContent(query: string): Promise<{
    bio: boolean;
    research: ResearchItem[];
    publications: Publication[];
}> {
    const [bio, research, publications] = await Promise.all([
        getBioData(),
        getResearchData(),
        getPublications()
    ]);

    const lowerQuery = query.toLowerCase();

    const bioMatch = 
        bio.name.toLowerCase().includes(lowerQuery) ||
        bio.bio.toLowerCase().includes(lowerQuery) ||
        bio.interests.some(interest => interest.toLowerCase().includes(lowerQuery));

    const researchMatches = research.filter(item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        (Array.isArray(item.keywords) && item.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery)))
    );

    const publicationMatches = publications.filter(pub =>
        pub.title.toLowerCase().includes(lowerQuery) ||
        (Array.isArray(pub.authors) && pub.authors.some(author => author.toLowerCase().includes(lowerQuery))) ||
        (pub.venue && pub.venue.toLowerCase().includes(lowerQuery)) ||
        (pub.description && pub.description.toLowerCase().includes(lowerQuery))
    );

    return {
        bio: bioMatch,
        research: researchMatches,
        publications: publicationMatches
    };
}