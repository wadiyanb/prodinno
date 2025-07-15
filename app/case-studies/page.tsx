import Header from '@/components/header'
import Footer from '@/components/footer'
import CaseStudy from '@/components/case-study'
import CursorEffect from '@/components/cursor-effect'

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black">
      <CursorEffect />
      <Header />
      <main className="pt-20">
        <CaseStudy />
      </main>
      <Footer />
    </div>
  )
}

