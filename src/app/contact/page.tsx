import ContactForm from "../../components/ContactForm";

export default function Contact(){
  return (
    <section className="min-h-screen container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Liên hệ</h1>
        <p className="mt-3 text-slate-400">Bạn có thể gửi email trực tiếp hoặc sử dụng form dưới đây.</p>

        {/* social buttons removed */}

        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
