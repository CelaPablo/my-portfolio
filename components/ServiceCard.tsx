import Image from 'next/image'

interface ServiceCardTypes {
  icons: string[]
  title: string
  shortDescription: string
}

const ServiceCard: React.FC<ServiceCardTypes> = ({ title, shortDescription, icons }) => {
  return (
    <div className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-1">
      <div className="w-fit h-14 mb-4 flex items-center justify-center transition-colors duration-300">
        {
          icons.map((icon, index) => (
            <Image key={index} src={icon} alt={title} width={28} height={28} className="w-10 h-10 m-1" />
          ))
        }
      </div>
      <h5 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h5>
      <p className="text-slate-600 leading-relaxed">{shortDescription}</p>
    </div>
  )
}

export default ServiceCard
