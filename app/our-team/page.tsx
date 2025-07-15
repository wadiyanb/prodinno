import Header from '@/components/header'
import Footer from '@/components/footer'
import OurTeam from '@/components/our-team'
import CursorEffect from '@/components/cursor-effect'

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-black">
      <CursorEffect />
      <Header />
      <main className="pt-20">
        <OurTeam />
      </main>
      <Footer />
    </div>
  )
}

