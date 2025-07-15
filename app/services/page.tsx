import Header from '@/components/header'
import Footer from '@/components/footer'
import Services from '@/components/services'
import CursorEffect from '@/components/cursor-effect'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <CursorEffect />
      <Header />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  )
}

