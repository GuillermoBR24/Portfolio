import React from 'react';

const About: React.FC = () => {
  const education = [
    {
      title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
      institution: 'Centro de Formación Profesional Gregorio Fernández',
      period: '2023 - 2025',
      description: 'Formación especializada en desarrollo de aplicaciones web, móviles y de escritorio utilizando múltiples tecnologías y plataformas. Proyecto final destacado (TFG).',
      type: 'formal'
    },
    {
      title: 'Técnico Básico en Prevención de Riesgos Laborales',
      institution: 'Centro de Formación Profesional Gregorio Fernández',
      period: '2023-2024',
      description: 'Formación obtenida mediante la asignatura de Formacion y Orientacion labolar || 50 horas.',
      type: 'formal'
    },
    {
      title: 'Monitor de Ocio y Tiempo Libre',
      institution: 'Escuela Municipal de Formación y Animación Juvenil || Valladolid',
      period: '2023',
      description: 'Formación para planificar, organizar y dinamizar actividades educativas y recreativas dirigidas a niños, jóvenes y otros colectivos en entornos no formales || 310 horas.',
      type: 'course'
    }
  ];

  const experience = [
    {
      title: 'Front End Developer',
      company: 'Getronics',
      period: 'FEB 2025 - DIC 2025',
      description: 'Desarrollo de aplicaciones web modernas con Angular y Node.js. Implementación de arquitecturas escalables y optimización de rendimiento. Participación en metodología ágiles.',
      achievements: [
        'Desarrollo de la interfaz de usuario (UI).',
        'Integración con el Backend.',
        'Gestión del estado y lógica del lado cliente.',
        'Mantenimiento, calidad y buenas prácticas.'
      ],
      type: 'professional'
    },
    {
      title: 'Monitor de Ocio y Tiempo Libre',
      company: 'Diseño de Tiempo Libre S.L.',
      period: 'AGOS 2023 - SEPT 2023',
      description: 'Monitor de tiempo libre en un campamento de verano para niños y jóvenes.',
      achievements: [
        'Organización y planificación de actividades.',
        'Realizacion de actividades educativas y recreativas.',
        'Trabajo en equipo.',
      ],
      type: 'professional'
    }
  ];

  const softSkills = [
    { name: 'Trabajo en Equipo', level: 95, icon: '🤝' },
    { name: 'Comunicación', level: 90, icon: '💬' },
    { name: 'Resolución de Problemas', level: 95, icon: '🧩' },
    { name: 'Creatividad', level: 85, icon: '💡' },
    { name: 'Adaptabilidad', level: 90, icon: '🔄' },
    { name: 'Liderazgo', level: 60, icon: '👥' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Mí</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Desarrollador apasionado por el aprendizaje autodidacta desde pequeño.
            Mi formación en DAM y mi experiencia profesional me han proporcionado una base sólida para 
            abordar proyectos complejos con enfoques modernos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Formación Reglada</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.type === 'formal' ? 'bg-green-100 text-green-700' :
                      item.type === 'course' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {item.type === 'formal' ? 'Formal' :
                       item.type === 'course' ? 'Curso' : 'Certificación'}
                    </span>
                  </div>
                  <p className="text-primary-600 font-medium mb-2">{item.institution}</p>
                  <p className="text-gray-500 text-sm mb-3">{item.period}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Experiencia Laboral</h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.type === 'professional' ? 'bg-blue-100 text-blue-700' :
                      item.type === 'internship' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {item.type === 'professional' ? 'Profesional' :
                       item.type === 'internship' ? 'Prácticas' : 'Otro'}
                    </span>
                  </div>
                  <p className="text-primary-600 font-medium mb-2">{item.company}</p>
                  <p className="text-gray-500 text-sm mb-3">{item.period}</p>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  {item.achievements && (
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-gray-700 mb-2">Logros destacados:</p>
                      {item.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center text-xs text-gray-600">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Habilidades Blandas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{skill.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{skill.name}</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
