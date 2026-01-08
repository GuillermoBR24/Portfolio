import React, { useState } from 'react';
import diappbetesImage from '../assets/images/diappbetes.png';
import logoImage from '../assets/images/logo.png';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  role?: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'DiAppBetes',
      description: 'Aplicacion desarrollada tanto para Android, IOS y Web, destinada a ayudar y educar a los diabeticos a gestionar su diabetes.',
      technologies: ['Angular', 'Java', 'Node.js', 'SupaBase', 'PostgreSQL', 'Spring Boot'],
      image: diappbetesImage,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/GuillermoBR24/DiAppBetes',
      category: 'all',
      role: 'Full Stack Developer',
      featured: true
    },
    {
      id: 2,
      title: 'Portfolio',
      description: 'Portfolio personal desarrollado con React y Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      image: logoImage,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/GuillermoBR24/Portfolio',
      category: 'web',
      role: 'Full Stack Developer',
      featured: true
    }
  ];

  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'featured', label: 'Destacados' },
    { value: 'web', label: 'Web' },
    { value: 'mobile', label: 'Móvil' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.category === filter || project.category === 'all');

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proyectos <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Principales</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Una selección de mis proyectos más destacados que demuestran mis habilidades y experiencia 
            en el desarrollo de aplicaciones web y móviles.
          </p>
          
          <div className="flex justify-center space-x-4 flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === category.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group ${
                project.featured ? 'ring-2 ring-primary-500 ring-opacity-50' : ''
              }`}
            >
              {project.featured && (
                <div className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 absolute top-4 right-4 z-10 rounded-full">
                  DESTACADO
                </div>
              )}
              
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary-100 to-primary-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-[200px] h-[200px] object-cover"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="text-primary-600">
                          <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-primary-600 font-medium">{project.role}</p>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
