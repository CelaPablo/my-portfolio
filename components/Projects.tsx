
import { projectData } from '@/lib/data'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Work</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Selected work demonstrating real-world solutions, technical depth, and product-focused execution.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
            <ProjectCard
                key={index}
                image={project.image.src}
                title={project.title}
                subtitle={project.subtitle}
                link={project.ref}
                shortDescription={project.shortDescription}
            />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
