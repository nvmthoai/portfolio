// src/data/resume.ts
// Converted from JSON -> TypeScript module with explicit types and a default export

export type Education = {
  school: string;
  major: string;
  gpa?: string;
  start?: string;
  end?: string;
  details?: string[];
};

export type Experience = {
  company: string;
  role: string;
  start?: string;
  end?: string;
  bullets?: string[];
};



export type Personal = {
  fullName: string;
  dob?: string;
  gender?: string;
  address?: string;
  email?: string;
  phone?: string;
  role?: string[];
};

export type ResumeData = {
  personal: Personal;
  objective?: string;
  education?: Education[];
  experience?: Experience[];
  
};

const resumeData: ResumeData = {
  personal: {
    fullName: "Nguyễn Văn Minh Thoại",
    dob: "06-01-2004",
    gender: "Nam",
    address: "Long Bình, Thành phố Hồ Chí Minh",
    email: "nvmthoai12@gmail.com",
    phone: "+84 329097454",
    role: [
      "Front-end Developer",
      "Full-stack Developer",
      "Backend Developer",
      "Mobile Developer"
    ]
  },
  objective:
    "Phát triển sự nghiệp Front-end, xây dựng sản phẩm người dùng thân thiện và tối ưu hiệu năng. Luôn học hỏi công nghệ mới và đóng góp vào các dự án có tác động.",
  education: [
    {
      school: "Đại học FPT HCM",
      major: "Kỹ sư phần mềm (Software Engineering)",
      gpa: "3.0/4.0",
      start: "08/2022",
      end: "04/2026",
      details: [
        "Tôi hiện là sinh viên ngành Công nghệ thông tin và định hướng phát triển chuyên sâu theo mảng Frontend. Trong quá trình học, tôi đã tập trung tìm hiểu về xây dựng giao diện web, tối ưu trải nghiệm người dùng, xử lý tương tác trên ứng dụng và kết nối API với hệ thống backend. Bên cạnh đó, tôi cũng có kiến thức nền tảng về Node.js để hỗ trợ làm việc với fullstack khi cần. Tôi mong muốn tiếp tục phát triển kỹ năng Frontend trong môi trường thực tế và nâng cao khả năng xây dựng các sản phẩm web hiện đại."
      ],
    },
  ],
  experience: [
    {
      company: "FPT SOFTWARE",
      role: "Front-end Developer",
      start: "11/2024",
      end: "04/2025",
       bullets: [
    "Tham gia phát triển giao diện web bằng React, Next.js và Tailwind CSS",
    "Hỗ trợ tối ưu hiệu năng trang web, góp phần cải thiện điểm Lighthouse từ 54 lên 92",
    "Phối hợp với designer để hiện thực hóa mockup thành giao diện hoàn chỉnh theo đúng thiết kế",
  ],
    },
  ],
  
};

export default resumeData;
