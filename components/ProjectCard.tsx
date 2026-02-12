import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  image: string
  title: string
  subtitle: string
  link: string
  shortDescription: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, subtitle, link, shortDescription }) => {
  return (
    <div className="group relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full bg-slate-50 overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-sm font-medium text-blue-600 mb-2 block">{subtitle}</span>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{title}</h3>
        </div>
        
        <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{shortDescription}</p>
        
        <Link 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
        >
          View Project 
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
