import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section id="join" className="py-20 bg-yellow-400 text-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Innovate?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join ProdInno today and be part of a community that&apos;s shaping the future of product design.
        </p>
        <Button className="bg-gray-900 text-yellow-400 hover:bg-gray-800">
          Join ProdInno
        </Button>
      </div>
    </section>
  )
}

