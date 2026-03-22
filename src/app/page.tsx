import HeroTyping from "../components/HeroTyping";
import AvatarFrame from "../components/AvatarFrame";
import HeroCTAs from "../components/HeroCTAs";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-4 sm:px-6 md:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          {/* text */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <span className="inline-block text-lg text-sky-600 dark:text-sky-300 font-medium">Software Developer</span>

            <HeroTyping
              strings={["Xin chào — Tôi là Minh Thoại", "Tôi là Front-end developer"]}
              typingSpeed={70}
              deletingSpeed={35}
              pause={1300}
              loop={false}
              className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white"
            />

            <p className="mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
              Tôi xây dựng các ứng dụng web tinh gọn, nhanh và dễ mở rộng. Tập trung vào code sạch,
              trải nghiệm người dùng mượt mà và hiệu suất thực tế.
            </p>

            <div className="mt-8">
              <HeroCTAs />
            </div>
          </div>

          {/* photo */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mb-8 lg:mb-0">
            <AvatarFrame src="/images/avatar.jpg" alt="Minh Thoai" size={220} gradientClass="from-sky-400 via-teal-400 to-rose-400" spinDuration={6} shadowClass="shadow-xl" />
          </div>
        </div>

        {/* stats row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white/60 dark:bg-slate-800/60 p-6 rounded-lg text-center shadow-md">
            <div className="text-3xl font-bold text-sky-600 dark:text-sky-300">5+</div>
            <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">Năm kinh nghiệm</div>
          </div>
          <div className="bg-white/60 dark:bg-slate-800/60 p-6 rounded-lg text-center shadow-md">
            <div className="text-3xl font-bold text-sky-600 dark:text-sky-300">20+</div>
            <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">Dự án đã hoàn thành</div>
          </div>
          <div className="bg-white/60 dark:bg-slate-800/60 p-6 rounded-lg text-center shadow-md">
            <div className="text-3xl font-bold text-sky-600 dark:text-sky-300">Open</div>
            <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">Sẵn sàng nhận việc</div>
          </div>
        </div>
      </div>
    </section>
  );
}
