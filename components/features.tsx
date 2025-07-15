import { Lightbulb, Users, Rocket } from 'lucide-react'

const features = [
  {
    icon: Lightbulb,
    title: 'Innovative Workshops',
    description: 'Participate in cutting-edge workshops led by industry experts.'
  },
  {
    icon: Users,
    title: 'Collaborative Projects',
    description: 'Work on real-world projects with like-minded innovators.'
  },
  {
    icon: Rocket,
    title: 'Launch Your Ideas',
    description: 'Get support to turn your product concepts into prototypes.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Join ProdInno?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <feature.icon className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

