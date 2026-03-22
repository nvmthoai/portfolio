# Portfolio — Minh Thoại

Website portfolio / CV cá nhân được xây dựng bằng Next.js + TypeScript + Tailwind + Framer Motion. Mục tiêu: hoàn thành bài test frontend (routing, animation, projects data-driven, contact form, responsive, accessible) và deploy.

## Demo
- Live demo: (chưa có) — deploy lên Vercel và dán link ở đây khi xong.

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (animations)
- next/image for optimized images

## Chạy project (local)
1. Cài dependencies

```bash
npm install
# hoặc pnpm install
```

2. Chạy dev server

```bash
npm run dev
# mở http://localhost:3000
```

## Các trang / route chính
- `/` — Home / Hero
- `/resume` — Resume / Profile
- `/skills` — Skills (technical / soft / languages)
- `/projects` — Projects (data-driven, search + filter, modal details)
- `/contact` — Contact (form với validation)
- 404 page: `app/not-found.tsx`

## Tính năng đã hoàn thành
- Semantic HTML, components tách rời, responsive cơ bản.
- Navbar với active state và mobile menu (keyboard accessible basic).
- ScrollToTop khi chuyển route.
- Page transition animations (Framer Motion) — có hiệu ứng enter/exit.
- Projects:
  - Dữ liệu nằm ở `src/data/projects.ts` và render bằng `.map()`.
  - Search + tag filter + pagination.
  - Card responsive + modal chi tiết (focus trap, ESC để đóng).
  - Hiển thị badge "Chưa triển khai" khi không có demo.
- Contact form:
  - Validation: required, email format, message >= 20 chars.
  - Loading state, disable button, success UI (modal), không dùng alert().
- A11y improvements: aria-labelledby, focus styles, keyboard handlers for cards and nav.

## Những việc đã làm thêm / polish
- Fix nested interactive elements trong `ProjectCard` (outer element không phải `<button>` để tránh lồng anchor).
- Added focus management for project modal and contact modal.
- Responsive adjustments for Home / Resume / Skills / Projects (grid breakpoints, image sizes).
- Basic audit/fixes for `next/image` usages (sizes, lazy/priority where appropriate).

## Checklist so với đề bài
- [x] Routes: 5 routes + 404
- [x] Navbar active state
- [x] ScrollToTop on route change
- [x] >=2 route transitions (PageTransition + per-page animations)
- [x] Projects data-driven + filter/search
- [x] Contact form validation + UX states
- [x] Responsive across mobile/tablet/desktop (final sweep recommended)
- [x] Accessibility: keyboard support, modals focus trap (basic)

## Deploy (gợi ý nhanh lên Vercel)
1. Push repo lên GitHub (public).
2. Vào https://vercel.com/new → chọn repository → Deploy.
3. Trong Settings (nếu dùng external images) thêm domain vào `next.config.js` `images.domains`.

## Tiếp theo / gợi ý hoàn thiện
- Hoàn thiện responsive sweep (kiểm tra mọi component + card/modal trên nhiều kích thước).
- Thêm screenshot demo vào README sau khi deploy.
- Cải thiện contrast / a11y audit (axe/lighthouse).

---

If you want, I can:
- Run a full scan to fix remaining `next/image` sizes and add lazy/priority (automatic),
- Generate a deploy-ready README with screenshots and a checklist for reviewers,
- Or deploy to Vercel (prepare instructions / env) if you give me permission to run the dev server and push.
