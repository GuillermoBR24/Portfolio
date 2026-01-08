import React from 'react';

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
    icon?: string;
  }[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '📘' },
        { name: 'JavaScript', level: 95, icon: '🟨' },
        { name: 'HTML5/CSS3', level: 90, icon: '🎨' },
        { name: 'Tailwind CSS', level: 85, icon: '🌊' },
        { name: 'Vue.js', level: 75, icon: '💚' },
        { name: 'Next.js', level: 80, icon: '▲' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 80, icon: '🚂' },
        { name: 'MongoDB', level: 75, icon: '🍃' },
        { name: 'PostgreSQL', level: 70, icon: '🐘' },
        { name: 'REST APIs', level: 85, icon: '🔌' },
        { name: 'GraphQL', level: 65, icon: '◈' },
        { name: 'Prisma', level: 70, icon: '🔷' },
      ]
    },
    {
      title: 'Mobile',
      skills: [
        { name: 'React Native', level: 80, icon: '📱' },
        { name: 'Flutter', level: 70, icon: '🦋' },
        { name: 'iOS (Swift)', level: 60, icon: '🍎' },
        { name: 'Android (Kotlin)', level: 65, icon: '🤖' },
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 90, icon: '📦' },
        { name: 'Docker', level: 70, icon: '🐳' },
        { name: 'AWS', level: 65, icon: '☁️' },
        { name: 'Vercel', level: 85, icon: '▲' },
        { name: 'Figma', level: 75, icon: '🎯' },
        { name: 'Jest', level: 75, icon: '🧪' },
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return 'bg-primary-600';
    if (level >= 70) return 'bg-primary-500';
    return 'bg-primary-400';
  };

  const getSkillText = (level: number) => {
    if (level >= 85) return 'Avanzado';
    if (level >= 70) return 'Intermedio';
    return 'Básico';
  };

  const learning = [
    { name: 'Rust', description: 'Aprendiendo para sistemas de alto rendimiento', icon: '🦀' },
    { name: 'Kubernetes', description: 'Orquestación de contenedores a escala', icon: '☸️' },
    { name: 'WebAssembly', description: 'Rendimiento near-native en web', icon: '🌐' },
    { name: 'AI/ML', description: 'Integración de inteligencia artificial', icon: '🤖' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Habilidades <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Técnicas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tecnologías y herramientas con las que trabajo diariamente para crear soluciones 
            digitales modernas y eficientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-800 text-sm">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${getSkillColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-gray-500 font-medium">
                        {getSkillText(skill.level)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Certificaciones y Formación Continua
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Grado Superior DAM</h4>
              <p className="text-gray-600 text-sm">Desarrollo de Aplicaciones Multiplataforma</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📜</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AWS Cloud Practitioner</h4>
              <p className="text-gray-600 text-sm">Fundamentos de cloud computing</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Aprendizaje Continuo</h4>
              <p className="text-gray-600 text-sm">Cursos online y workshops especializados</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ¿Qué estoy aprendiendo actualmente?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learning.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3 text-center">{item.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2 text-center">{item.name}</h4>
                <p className="text-gray-600 text-sm text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
