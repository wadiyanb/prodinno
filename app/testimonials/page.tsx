import Header from '@/components/header'
import Footer from '@/components/footer'
import Testimonials from '@/components/testimonials'
import CursorEffect from '@/components/cursor-effect'

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-black">
      <CursorEffect />
      <Header />
      <main className="pt-20">
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

