export interface Project {
  id: string;
  title: string;
  
  thumbnail?: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string; 
  category: 'Web' | 'Mobile' | 'Fullstack';
}

export const projects: Project[] = [
  {
    id: "chargex-ev",
    title: "ChargeX - EV Battery Marketplace",

    thumbnail: "/images/chargex.png",
    description: "Nền tảng mua bán và đấu giá pin xe điện cũ, tích hợp hệ thống thanh toán ví điện tử và đấu giá thời gian thực[cite: 50, 55].",
    technologies: ["ReactJS", "TypeScript", "NestJS", "PostgreSQL", "PayOS", "GitHub Actions"],
    githubUrl: "https://github.com/nvmthoai/ChargeX_FE.git", 
    demoUrl: "https://chargex-kappa.vercel.app", 
    category: "Fullstack"
  },
  {
    id: "health-care",
    title: "Health Care System",
    thumbnail: "/images/placeholder.png",
    description: "Nền tảng chăm sóc sức khỏe sinh sản phụ nữ, hỗ trợ theo dõi chu kỳ và quản lý dữ liệu y tế cá nhân bảo mật[cite: 30, 34].",
    technologies: ["ReactJS", "TypeScript", "React Native", "RESTful API", "TailwindCSS"],
    githubUrl: "https://github.com/nvmthoai",
    category: "Mobile"
  },
  {
    id: "closetshare-ai",
    title: "ClosetShare - AI Fashion",
    thumbnail: "/images/projec_closet_share.png",
    description: "Mạng xã hội thời trang bền vững, tích hợp AI gợi ý phối đồ thông minh dựa trên tủ đồ ảo của người dùng[cite: 41, 42].",
    technologies: ["NextJS", "React Native", "AI Logic", "REST APIs"],
    githubUrl: "https://github.com/nvmthoai",
    demoUrl: "https://closetshare.vercel.app",
    category: "Web"
  },
  {
    id: "koi-care",
    title: "Koi Care System",
    thumbnail: "/images/koicare.png",
    description: "Hệ thống quản lý hồ cá Koi, theo dõi các thông số nước và cập nhật dữ liệu thời gian thực qua WebSocket[cite: 19, 20, 24].",
    technologies: ["ReactJS", "TailwindCSS", "Spring Boot", "MySQL", "WebSocket"],
    githubUrl: "https://github.com/nvmthoai/Koi_Care_System", 
    demoUrl: "https://koi-care-system.vercel.app", 
    category: "Web"
  }
];


export function getProjectThumbnail(p: Project) {
  
  const t = p.thumbnail?.trim()
  return t && t.length > 0 ? t : '/images/placeholder.png'
}

// Returns true when a project has a non-empty demoUrl
export function isDeployed(p: Project) {
  const d = p.demoUrl?.trim()
  return Boolean(d && d.length > 0)
}