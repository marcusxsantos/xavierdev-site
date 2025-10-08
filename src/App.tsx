import { useState } from 'react';
import { Code, Server, Database, Globe, Mail, Phone, MapPin, Menu, X, CheckCircle } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: Server,
      title: 'Hospedagem Web',
      description: 'Serviços confiáveis de hospedagem com alta disponibilidade e performance otimizada para seu negócio.'
    },
    {
      icon: Database,
      title: 'Tratamento de Dados',
      description: 'Processamento e gerenciamento profissional de dados com segurança e eficiência garantidas.'
    },
    {
      icon: Code,
      title: 'Desenvolvimento',
      description: 'Soluções personalizadas em desenvolvimento de software para atender suas necessidades específicas.'
    },
    {
      icon: Globe,
      title: 'Provedores de Aplicação',
      description: 'Serviços especializados em aplicações web e sistemas integrados para otimizar seus processos.'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">Xavier Dev</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Soluções Inteligentes em TI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transformamos tecnologia em resultados para o seu negócio com serviços especializados em infraestrutura e desenvolvimento.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Entre em Contato
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Sobre a Xavier Dev</h2>
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A <strong>Xavier Dev Serviços em Informática</strong> é uma empresa especializada em soluções tecnológicas,
                oferecendo serviços de tratamento de dados, hospedagem web e desenvolvimento de aplicações.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Estabelecida em 2017 no Rio de Janeiro, temos o compromisso de entregar excelência em cada projeto,
                combinando expertise técnica com atendimento personalizado.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Experiência</h3>
                    <p className="text-gray-600">Desde 2017 no mercado de TI</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Qualidade</h3>
                    <p className="text-gray-600">Soluções confiáveis e eficientes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Inovação</h3>
                    <p className="text-gray-600">Tecnologias modernas e atualizadas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Suporte</h3>
                    <p className="text-gray-600">Atendimento dedicado e ágil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Nossos Serviços</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Oferecemos soluções completas em tecnologia da informação para impulsionar seu negócio
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Entre em Contato</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Estamos prontos para atender suas necessidades em tecnologia
          </p>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                  <p className="text-gray-600">(21) 91243-3246</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">[email protected]</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                  <p className="text-gray-600">
                    Rua Piauí, 77 - Apt 406, Bloco 2<br />
                    Todos Os Santos<br />
                    Rio de Janeiro - RJ<br />
                    CEP: 20.770-130
                  </p>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Informações da Empresa</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Razão Social</p>
                  <p className="font-semibold text-gray-900">Xavier Dev Serviços em Informática EIRELI - ME</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">CNPJ</p>
                  <p className="font-semibold text-gray-900">28.651.037/0001-07</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Atividade Principal</p>
                  <p className="font-semibold text-gray-900">Tratamento de dados, provedores de serviços de aplicação e hospedagem na Internet</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Desde</p>
                  <p className="font-semibold text-gray-900">13/09/2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold text-white">Xavier Dev</span>
          </div>
          <p className="text-sm">
            {new Date().getFullYear()} Xavier Dev Serviços em Informática EIRELI - ME. Todos os direitos reservados.
          </p>
          <p className="text-sm mt-2">
            CNPJ: 28.651.037/0001-07
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
