import Header from '@/components/header'
import Footer from '@/components/footer'
import FAQ from '@/components/faq'
import CursorEffect from '@/components/cursor-effect'

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black">
      <CursorEffect />
      <Header />
      <main className="pt-20">
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

