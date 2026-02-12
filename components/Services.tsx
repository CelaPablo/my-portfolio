import { serviceData } from '@/lib/data'
import ServiceCard from './ServiceCard'

const ServiceSection = () => {
  return (
    <section id="services" className="py-20 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How I Can Help</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Practical development solutions designed to turn ideas into reliable, production-ready products.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.map((service, index) => (
            <ServiceCard
                key={index}
                icons={service.icons}
                title={service.title}
                shortDescription={service.shortDescription}
            />
            ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
