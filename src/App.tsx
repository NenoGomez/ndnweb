import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, Phone, Mail, MapPin, 
  Globe, MonitorSmartphone, PenTool, LayoutTemplate,
  MessageCircle, ArrowUpRight, ShieldCheck, Zap,
  Layers, ExternalLink, CheckCircle2
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop", // Developer code
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop", // Business analytics
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop", // Advanced setup
  ];

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Sobre Nós', id: 'sobre' },
    { name: 'Serviços & Pacotes', id: 'servicos' },
    { name: 'Portfólio', id: 'portfolio' },
    { name: 'Contactos', id: 'contactos' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-yellow-500/30 selection:text-yellow-200">
      
      {/* Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="w-8 h-8 bg-yellow-500 rounded-sm flex items-center justify-center text-black font-bold text-xl">N</div>
            <span className="font-semibold tracking-wider uppercase text-sm">NDN - Prestação de Serviços</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollTo(link.id)}
                className="text-xs uppercase tracking-[0.15em] hover:text-yellow-500 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a 
              href="#contactos" 
              className="border border-white/20 hover:border-yellow-500 hover:text-yellow-500 rounded-full px-6 py-2 text-xs uppercase tracking-widest transition-all"
            >
              Pedir Orçamento
            </a>
          </div>

          <button 
            className="md:hidden text-zinc-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 flex flex-col p-6 space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollTo(link.id)}
                className="text-sm uppercase tracking-[0.1em] text-left text-zinc-300 active:text-yellow-500"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[#020202]">
            {/* Dynamic Image Carousel */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentHeroImage}
                src={heroImages[currentHeroImage]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.35, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity contrast-125"
                alt="Technology Background"
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-transparent to-[#050505]/90" />
            
            {/* Subtle atmospheric gradients */}
            <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-yellow-500/15 rounded-full blur-[130px] mix-blend-screen" />
            <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-zinc-700/40 rounded-full blur-[100px] mix-blend-screen" />
          </div>

          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-yellow-500/30 rounded-full bg-yellow-500/10 text-yellow-500 mb-8">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                <span className="text-xs uppercase tracking-widest font-medium">Líderes no Mercado Angolano</span>
              </div>
              
              <h1 className="text-5xl sm:text-7xl md:text-[7vw] font-light leading-[0.9] tracking-tighter mb-8 text-white">
                Transformar marcas.<br /> 
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">
                  Dominar o mercado.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mb-10">
                A NDN - Prestação de Serviços eleva a sua empresa com impressão de grande formato, sinalética premium e a derradeira presença digital 360º em Luanda.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-l border-white/20 pl-6">
                <button onClick={() => scrollTo('servicos')} className="bg-white text-black px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-yellow-500 transition-colors flex items-center gap-2">
                  Ver Pacotes <ArrowUpRight className="w-4 h-4" />
                </button>
                <a href="#contactos" className="text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors py-4">
                  Falar Consultor
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sobre Nós */}
        <section id="sobre" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
          {/* Fundo dinâmico subtil */}
          <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 relative group shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                    alt="Corporate Business Angola" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                  
                  {/* Floating Element - Tech Context */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute top-10 -right-4 bg-black/60 backdrop-blur-md border border-white/10 p-5 rounded-2xl items-center gap-4 hidden lg:flex shadow-2xl"
                  >
                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <MonitorSmartphone className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-zinc-400">Desenvolvimento</p>
                      <p className="text-sm font-bold text-white">Web & App</p>
                    </div>
                  </motion.div>

                  <div className="absolute bottom-10 left-10 z-10">
                    <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                       <Layers className="w-8 h-8 text-black" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] text-yellow-500 mb-2 font-semibold">Fundador & CEO</p>
                    <p className="text-3xl font-light text-white">Eng.º Nino Ferreira</p>
                  </div>
                </div>

                {/* Decorative background border for depth */}
                <div className="absolute -inset-4 border border-white/5 rounded-[2.5rem] -z-10 hidden md:block" />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 }
                  }
                }}
              >
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <p className="text-xs uppercase tracking-[0.2em] text-yellow-500 mb-4 font-semibold flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-yellow-500"></span>
                    Sobre a Empresa
                  </p>
                  <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 leading-[1.1]">
                    A ponte entre a sua <br />
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">estrutura física</span> e o <br />
                    <span className="italic font-serif text-yellow-500">domínio digital</span>.
                  </h2>
                </motion.div>
                
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-6 text-zinc-400 font-light leading-relaxed text-lg">
                  <p>
                    Com bases operacionais consolidadas na Mutamba e no Zango 3, a <strong>NDN - Prestação de Serviços</strong> construiu um legado invejável na produção de sinalética premium e impressão gráfica em Luanda.
                  </p>
                  <p>
                    Mas o mercado exigiu mais, e nós evoluímos. Especializámo-nos no desenvolvimento de software e soluções digitais avançadas para oferecer um <span className="text-white font-medium">Ecossistema 360º de Branding</span>: desde a vitrine iluminada da sua loja física até à fluidez do seu website.
                  </p>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-2 gap-8 mt-12 pt-10 border-t border-white/10">
                  <div className="group cursor-default">
                    <h4 className="text-4xl font-light text-white mb-2 group-hover:text-yellow-500 transition-colors">15+</h4>
                    <p className="text-sm text-zinc-400 font-medium tracking-wide">Marcas Elevadas</p>
                  </div>
                  <div className="group cursor-default">
                    <h4 className="text-4xl font-light text-white mb-2 group-hover:text-yellow-500 transition-colors">360º</h4>
                    <p className="text-sm text-zinc-400 font-medium tracking-wide">Solução Física & Tech</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Funções do Site */}
        <section className="py-24 border-y border-white/5 bg-[#080808]">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">Eficiência Máxima</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">O que a sua nova presença digital pode fazer?</h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <MonitorSmartphone className="w-8 h-8" />, title: "Agendamentos Automáticos", desc: "Permita que clientes marquem serviços online 24/7 sem intervenção manual." },
                { icon: <Layers className="w-8 h-8" />, title: "Catálogos Interativos", desc: "Apresente os seus serviços e produtos numa montra digital moderna, acessível em qualquer dispositivo." },
                { icon: <MessageCircle className="w-8 h-8" />, title: "Integração WhatsApp", desc: "Acelere negócios gerados pelo site encaminhando leads diretamente para a sua equipa." }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 * idx, ease: "easeOut" }}
                  className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-yellow-500/30 transition-colors"
                >
                  <div className="text-yellow-500 mb-6">{feature.icon}</div>
                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços e Pacotes */}
        <section id="servicos" className="py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">Investimento</p>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight">Pacotes <span className="font-semibold text-yellow-500">Digitais</span>.</h2>
              </div>
              <p className="text-zinc-500 text-sm max-w-md">Soluções feitas à medida do empresário focado em resultados rápidos e posicionamento premium no mercado.</p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Pacote 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] flex flex-col"
              >
                <div className="mb-8">
                  <div className="flex items-center gap-3 text-zinc-400 mb-4">
                    <LayoutTemplate className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-widest">Para Iniciantes</span>
                  </div>
                  <h3 className="text-2xl mb-2">Pacote Digital Start</h3>
                  <p className="text-zinc-500 text-sm min-h-[40px]">Aterragem rápida e eficaz, ideal para impulsionar restauração e pequenos negócios.</p>
                </div>
                
                <div className="mb-8">
                  <p className="text-3xl font-light">150.000 <span className="text-lg text-zinc-500">Kz</span></p>
                  <p className="text-xs text-zinc-600 mt-1">A partir de</p>
                </div>

                <ul className="space-y-4 text-sm text-zinc-400 mb-10 flex-grow">
                  <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-yellow-500" /> Website Landing Page</li>
                  <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-yellow-500" /> Menu / Catálogo Digital</li>
                  <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-yellow-500" /> Integração WhatsApp</li>
                  <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-yellow-500" /> Design Responsivo</li>
                </ul>

                <button className="w-full py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors text-sm uppercase tracking-wider">
                  Selecionar Start
                </button>
              </motion.div>

              {/* Pacote 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="p-8 rounded-3xl border border-yellow-500/50 bg-gradient-to-b from-[#111] to-[#050505] relative flex flex-col"
              >
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Designado + Popular
                </div>
                <div className="mb-8">
                  <div className="flex items-center gap-3 text-yellow-500 mb-4">
                    <Globe className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-widest text-zinc-300">PME & Corporativo</span>
                  </div>
                  <h3 className="text-2xl mb-2">Pacote Business Pro</h3>
                  <p className="text-zinc-400 text-sm min-h-[40px]">O portal definitivo para empresas que procuram validação, credibilidade e gestão constante.</p>
                </div>
                
                <div className="mb-8">
                  <p className="text-3xl font-semibold">450.000 <span className="text-lg text-zinc-500">Kz</span></p>
                  <p className="text-xs text-yellow-500/70 mt-1">A partir de</p>
                </div>

                <ul className="space-y-4 text-sm text-zinc-300 mb-10 flex-grow">
                  <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-yellow-500" /> Site Corporativo Multi-Páginas</li>
                  <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-yellow-500" /> Gestão de Presença Digital Mensal</li>
                  <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-yellow-500" /> SEO Básico Avançado</li>
                  <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-yellow-500" /> Agendamentos Integrados</li>
                  <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-yellow-500" /> Emails Corporativos</li>
                </ul>

                <button className="w-full py-3 rounded-full bg-yellow-500 text-black font-medium hover:bg-white hover:text-black transition-colors text-sm uppercase tracking-wider">
                  Elevar Negócio
                </button>
              </motion.div>

              {/* Pacote 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] flex flex-col"
              >
                <div className="mb-8">
                  <div className="flex items-center gap-3 text-zinc-400 mb-4">
                    <PenTool className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-widest">360º Completo</span>
                  </div>
                  <h3 className="text-2xl mb-2">Branding Total</h3>
                  <p className="text-zinc-500 text-sm min-h-[40px]">Unificação massiva. Desde a fachada do seu edifício até ao último clique no website.</p>
                </div>
                
                <div className="mb-8">
                  <p className="text-3xl font-light">Orçamento</p>
                  <p className="text-xs text-zinc-600 mt-1">Personalizado à escala do projeto</p>
                </div>

                <ul className="space-y-4 text-sm text-zinc-400 mb-10 flex-grow">
                  <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-yellow-500" /> Tudo no Business Pro</li>
                  <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-yellow-500" /> Sinalética Física & Luminosos</li>
                  <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-yellow-500" /> Identidade Visual (Logos & Estacionário)</li>
                  <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-yellow-500" /> Impressão Grande Formato</li>
                </ul>

                <button className="w-full py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors text-sm uppercase tracking-wider">
                  Falar Projetos Livres
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfólio / Casos de Sucesso Visuais */}
        <section id="portfolio" className="py-32 border-y border-white/5 bg-[#020202]">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">Projetos de Excelência</p>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight">O nosso <span className="font-semibold text-yellow-500">Showcase</span>.</h2>
              </div>
              <p className="text-zinc-500 text-sm max-w-md">Uma amostra do que somos capazes de criar em Luanda. Tecnologias robustas, design imersivo e conversão garantida.</p>
            </motion.div>

            {/* Showcase Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {[
                { 
                  title: "Banco Nacional Corp", 
                  category: "Portal Corporativo Desktop", 
                  desc: "Design Premium & Acessibilidade Total", 
                  img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" 
                },
                { 
                  title: "KwanzaShop Angola", 
                  category: "E-Commerce Escalonável", 
                  desc: "Aumento de Vendas de 150%", 
                  img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop" 
                },
                { 
                  title: "Bistro Luanda", 
                  category: "Website de Restauração", 
                  desc: "Menu Digital & Reservas Rápidas", 
                  img: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop" 
                },
                { 
                  title: "AngoStartups Hub", 
                  category: "Landing Page Conversão", 
                  desc: "10k+ Leads Capturados no Lançamento", 
                  img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" 
                },
                { 
                  title: "Gestor360 ERP", 
                  category: "Plataforma SaaS / Sistema PME", 
                  desc: "Sistema Financeiro Completo Interno", 
                  img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                },
                { 
                  title: "Muthiana Fashion", 
                  category: "UX/UI & Mobile App iOS", 
                  desc: "Design Atraente de Alta Resolução", 
                  img: "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=800&auto=format&fit=crop" 
                }
              ].map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.1, duration: 0.7, ease: "easeOut" }}
                  className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer block hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-yellow-500/10 flex flex-col h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden relative border-b border-white/10">
                    <img 
                      src={project.img} 
                      alt={`Mockup projeto ${project.title}`}
                      loading="lazy"
                      decoding="async" 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-700" />
                    
                    {/* Hover Overlay Detail */}
                    <div className="absolute top-5 right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 relative z-10 bg-[#0a0a0a] group-hover:bg-[#0f0f0f] transition-colors duration-500 flex-grow flex flex-col">
                    <p className="text-yellow-500 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-3">{project.category}</p>
                    <h3 className="text-xl sm:text-2xl font-light text-white mb-5">{project.title}</h3>
                    <div className="mt-auto">
                      <p className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-zinc-300 text-xs shadow-sm font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-yellow-500 mr-2" />
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Marcas Clientela Antiga & Recente Logo Rail */}
            <div className="pt-16 border-t border-white/5">
              <p className="text-xs text-center uppercase tracking-[0.2em] text-zinc-600 mb-8">Marcas corporativas que atestam a nossa excelência</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 hover:opacity-70 transition-all duration-700 text-sm md:text-xl">
                <span className="font-serif tracking-widest"><Zap className="inline-block mb-1 w-4 h-4 mr-1 text-yellow-500"/>SONANGOL</span>
                <span className="font-semibold tracking-tighter"><div className="w-4 h-4 rounded-full bg-yellow-600 inline-block align-middle mr-2"/>BANCO SOL</span>
                <span className="font-bold tracking-tight">UNITEL<span className="text-orange-500">.</span></span>
                <span className="font-extrabold tracking-normal"><Globe className="inline-block mb-1 w-4 h-4 mr-1 text-orange-600"/>BFA</span>
                <span className="font-medium tracking-widest"><ShieldCheck className="inline-block mb-1 w-4 h-4 mr-1 text-blue-500"/>ENSA</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contactos */}
        <section id="contactos" className="py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900/30 blur-3xl z-0" />
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            {/* Interactive Google Map */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-24 rounded-3xl overflow-hidden border border-white/10 h-[400px] w-full relative grayscale hover:grayscale-0 transition-all duration-700 isolate group"
            >
              {/* Optional overlay to keep it strictly dark until hovered */}
              <div className="absolute inset-0 bg-[#0a0a0a] pointer-events-none mix-blend-color z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-yellow-500/5 pointer-events-none z-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
              <iframe 
                src="https://maps.google.com/maps?q=Mutamba,%20Luanda,%20Angola&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização NDN - Mutamba Luanda"
                className="w-full h-full relative z-0"
              />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">Iniciar Projeto</p>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
                  Pronto para <br /><span className="font-semibold text-yellow-500">dominar a sua categoria?</span>
                </h2>
                
                <p className="text-zinc-400 mb-12 max-w-md">
                  Preencha o formulário ou contacte-nos pelo WhatsApp para uma resposta imediata. O crescimento da sua marca em Angola começa aqui.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Mutamba & Zango 3</p>
                      <p className="text-xs text-zinc-500">Luanda, Angola</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">+244 9XX XXX XXX</p>
                      <p className="text-xs text-zinc-500">Segunda - Sábado, 08h às 18h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">geral@ndnservicos.co.ao</p>
                      <p className="text-xs text-zinc-500">Apoio Corporativo</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-10"
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500">Nome</label>
                      <input type="text" className="w-full bg-zinc-900 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500">Empresa</label>
                      <input type="text" className="w-full bg-zinc-900 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="Sua marca" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500">Telefone / WhatsApp</label>
                    <input type="tel" className="w-full bg-zinc-900 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="+244" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500">Serviço Pretendido</label>
                    <select className="w-full bg-zinc-900 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-yellow-500 transition-colors appearance-none">
                      <option>Pacote Digital Start (150.000 Kz)</option>
                      <option>Pacote Business Pro (450.000 Kz)</option>
                      <option>Branding Total (Sob Consulta)</option>
                      <option>Apenas Sinalética Física</option>
                      <option>Outro</option>
                    </select>
                  </div>

                  <button type="button" className="w-full bg-white text-black font-semibold py-4 rounded-lg uppercase tracking-widest text-sm hover:bg-yellow-500 transition-colors mt-4">
                    Enviar Pedido
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center">
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} NDN - PRESTAÇÃO DE SERVIÇOS. Todos os direitos reservados. Feito com rigor em Luanda, Angola.
        </p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/244900000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 transition-all z-50"
        aria-label="Fale connosco no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
