import React from 'react';

const Contact: React.FC = () => {

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'barrosguillermo24@gmail.com',
      link: null
    },
    {
      icon: '📍',
      title: 'Ubicación',
      value: 'Valladolid || España',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/guillermo-barros-rodriguez-046665296/',
      color: 'bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/GuillermoBR24',
      color: 'bg-gray-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact<span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">o</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Tienes una oportunidad laboral? Me encantaría saber de ti. 
            Estoy buscando activamente empleo y abierto a nuevas oportunidades profesionales.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-xl">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-gray-600">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Redes Sociales</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 ${social.color} text-white rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center space-x-3`}
                    >
                      <span className="text-xl">{social.icon}</span>
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para colaborar?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Si tienes una oportunidad laboral o un proyecto interesante, no dudes en contactarme
                a través de mis redes sociales o correo electrónico. Estoy siempre abierto a nuevas experiencias.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:barrosguillermo24@gmail.com"
                  className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 transform hover:scale-105"
                >
                  Enviar Correo
                </a>
                <a
                  href="https://www.linkedin.com/in/guillermo-barros-rodriguez-046665296/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
