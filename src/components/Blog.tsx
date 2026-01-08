import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  url: string;
  featured?: boolean;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Cómo optimizar el rendimiento en aplicaciones React',
      excerpt: 'Explora las mejores prácticas para mejorar el rendimiento de tus aplicaciones React usando técnicas avanzadas como memoización, lazy loading y code splitting.',
      date: '15 Nov 2024',
      readTime: '8 min',
      tags: ['React', 'Performance', 'JavaScript'],
      url: 'https://blog.example.com/react-performance',
      featured: true
    },
    {
      id: 2,
      title: 'TypeScript vs JavaScript: ¿Cuándo usar cada uno?',
      excerpt: 'Análisis detallado de las ventajas y desventajas de TypeScript frente a JavaScript en diferentes tipos de proyectos y escenarios.',
      date: '2 Nov 2024',
      readTime: '6 min',
      tags: ['TypeScript', 'JavaScript', 'Best Practices'],
      url: 'https://blog.example.com/typescript-vs-javascript'
    },
    {
      id: 3,
      title: 'Guía completa de Tailwind CSS para principiantes',
      excerpt: 'Aprende a utilizar Tailwind CSS de manera efectiva para crear diseños modernos y responsive sin escribir CSS personalizado.',
      date: '20 Oct 2024',
      readTime: '10 min',
      tags: ['CSS', 'Tailwind', 'Frontend'],
      url: 'https://blog.example.com/tailwind-guide'
    },
    {
      id: 4,
      title: 'Arquitectura Microservicios con Node.js',
      excerpt: 'Cómo diseñar e implementar una arquitectura de microservicios escalable usando Node.js, Express y contenedores Docker.',
      date: '5 Oct 2024',
      readTime: '12 min',
      tags: ['Node.js', 'Architecture', 'Backend'],
      url: 'https://blog.example.com/microservices-nodejs'
    }
  ];

  const hobbies = [
    { name: 'Fotografía', description: 'Capturando momentos y explorando la composición visual', icon: '📷' },
    { name: 'Ciclismo', description: 'Rutas en montaña y exploración de nuevos lugares', icon: '🚴' },
    { name: 'Lectura', description: 'Ciencia ficción y libros de tecnología', icon: '📚' },
    { name: 'Música', description: 'Guitarra y producción musical amateur', icon: '🎸' },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Blog y <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Artículos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Compartiendo conocimiento y experiencias sobre desarrollo web, 
            tecnología y mejores prácticas en la industria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                post.featured ? 'ring-2 ring-primary-500 ring-opacity-50' : ''
              }`}
            >
              {post.featured && (
                <div className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 absolute top-4 right-4 z-10 rounded-full">
                  DESTACADO
                </div>
              )}
              
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary-100 to-primary-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-primary-600">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                >
                  Leer más
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Aficiones e Intereses
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{hobby.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{hobby.name}</h4>
                <p className="text-gray-600 text-sm">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
