
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/geovanny-avatar.png";

export default function GeovannyFlexSite() {
  const [lang, setLang] = useState("es");
  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('lang');
    if (saved === 'en' || saved === 'es') setLang(saved);
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('lang', lang);
  }, [lang]);

  const content = {
    es: {
      brand: "Geovanny E. Flex C.",
      nav: { services: "Servicios", projects: "Proyectos", blog: "Blog", contact: "Contactar" },
      heroTag: "Caracas, Venezuela • Ingeniería + IA",
      heroTitleA: "Transformando la industria con ",
      heroTitleB: "Inteligencia Artificial",
      heroLead:
        "Soy Geovanny E. Flex C., Ingeniero de Mantenimiento con Maestría en Gerencia Empresarial y Especialización en Inteligencia Artificial. Ayudo a organizaciones a optimizar procesos, reducir costos y elevar su eficiencia operativa mediante soluciones inteligentes.",
      ctaPrimary: "Descubre cómo puedo ayudarte",
      ctaSecondary: "Agendar reunión",
      chip1: "6+ años de experiencia",
      chip2: "Transformación digital",
      chip3: "Mantenimiento predictivo",
      chip4: "Capacitación ejecutiva",
      cardTitle: "Qué puedo aportar",
      cardBullets: [
        "Consultoría en IA aplicada a procesos industriales",
        "Estrategia y liderazgo de transformación digital",
        "Programas de formación para equipos técnicos y directivos",
      ],
      servicesTitle: "Soluciones Inteligentes para la Industria y la Empresa",
      servicesLead:
        "Diseño e implementación de iniciativas de inteligencia artificial, optimización de procesos y liderazgo de transformación digital con enfoque en resultados.",
      services: [
        { title: "Consultoría en Inteligencia Artificial", text: "Modelos predictivos, detección de anomalías, mantenimiento inteligente y automatización basada en datos." },
        { title: "Estrategia y Transformación Digital", text: "Diagnóstico de madurez digital, roadmaps de IA, gobierno de datos, gestión del cambio y liderazgo de proyectos." },
        { title: "Capacitación y Formación", text: "Programas ejecutivos a medida: fundamentos de IA aplicada, analítica de datos y liderazgo digital." },
        { title: "Optimización de Procesos Industriales", text: "Análisis de desempeño, modelado de procesos y mejora continua enfocada en productividad." },
      ],
      projectsTitle: "Proyectos y Experiencia",
      projectsLead: "Integración de IA y gestión empresarial para transformar datos en decisiones inteligentes.",
      proj1Title: "Mantenimiento Predictivo con IA",
      proj1Text: "Desarrollo de modelos de aprendizaje automático para anticipar fallas en equipos críticos, integrando señales de sensores y condiciones operativas.",
      proj1Meta: "Resultados: reducción de paradas no programadas y mejora de la disponibilidad.",
      proj2Title: "Automatización de Reportes Operativos",
      proj2Text: "Implementación de tableros de control para KPIs de mantenimiento y energía, priorizando acciones de alto impacto.",
      proj2Meta: "Beneficios: mayor visibilidad y decisiones basadas en datos.",
      blogTitle: "Ideas y Publicaciones",
      blogLead: "Conocimiento aplicado sobre IA industrial, analítica y liderazgo tecnológico.",
      posts: [
        { title: "Cómo la IA está revolucionando el mantenimiento", text: "Del enfoque reactivo al predictivo: pasos prácticos para iniciar." },
        { title: "De la planta al comité ejecutivo", text: "Traduciendo datos técnicos a decisiones estratégicas." },
        { title: "Claves de la transformación digital", text: "Gobierno de datos, cultura y adopción tecnológica efectiva." },
      ],
      contactTitle: "Hablemos de tus objetivos",
      contactLead: "Estoy disponible para consultorías, proyectos y capacitaciones en Caracas, Venezuela y de forma remota a nivel internacional.",
      directContact: "Contacto directo",
      linkedIn: "LinkedIn",
      email: "Email",
      location: "Ubicación",
      contactForm: {
        name: "Nombre completo",
        email: "Correo electrónico",
        message: "Mensaje",
        placeholderName: "Tu nombre",
        placeholderEmail: "tucorreo@empresa.com",
        placeholderMsg: "Cuéntame brevemente sobre tu proyecto",
        send: "Enviar mensaje",
        success: "✅ Tu mensaje fue enviado con éxito. ¡Gracias!",
      },
      footerQuote: "Estrategia, innovación y tecnología al servicio de la eficiencia.",
    },
    en: {
      brand: "Geovanny E. Flex C.",
      nav: { services: "Services", projects: "Projects", blog: "Insights", contact: "Contact" },
      heroTag: "Caracas, Venezuela • Engineering + AI",
      heroTitleA: "Transforming industry with ",
      heroTitleB: "Artificial Intelligence",
      heroLead: "I'm Geovanny E. Flex C., a Maintenance Engineer with a Master's in Business Management and a specialization in Artificial Intelligence. I help organizations optimize processes, reduce costs, and boost operational efficiency through intelligent solutions.",
      ctaPrimary: "See how I can help",
      ctaSecondary: "Book a meeting",
      chip1: "6+ years experience",
      chip2: "Digital transformation",
      chip3: "Predictive maintenance",
      chip4: "Executive training",
      cardTitle: "What I bring",
      cardBullets: [
        "AI consulting for industrial processes",
        "Strategy and digital transformation leadership",
        "Training programs for technical and executive teams",
      ],
      servicesTitle: "Intelligent Solutions for Industry and Business",
      servicesLead: "Design and implementation of AI initiatives, process optimization, and digital transformation leadership focused on measurable results.",
      services: [
        { title: "Artificial Intelligence Consulting", text: "Predictive models, anomaly detection, smart maintenance, and data-driven automation." },
        { title: "Strategy & Digital Transformation", text: "Digital maturity assessments, AI roadmaps, data governance, change management, and project leadership." },
        { title: "Training & Enablement", text: "Executive programs tailored to your needs: applied AI fundamentals, data analytics, and digital leadership." },
        { title: "Industrial Process Optimization", text: "Performance analysis, process modeling, and continuous improvement focused on productivity." },
      ],
      projectsTitle: "Projects & Experience",
      projectsLead: "Bringing AI and business management together to turn data into intelligent decisions.",
      proj1Title: "AI‑Driven Predictive Maintenance",
      proj1Text: "Machine‑learning models to anticipate failures in critical equipment, integrating sensor signals and operating conditions.",
      proj1Meta: "Outcomes: fewer unplanned shutdowns and greater availability.",
      proj2Title: "Operational Reporting Automation",
      proj2Text: "Executive dashboards and KPI monitoring for maintenance and energy, prioritizing high‑impact actions.",
      proj2Meta: "Benefits: better visibility and data‑driven decisions.",
      blogTitle: "Insights & Articles",
      blogLead: "Applied knowledge on industrial AI, analytics, and technology leadership.",
      posts: [
        { title: "How AI Is Transforming Maintenance", text: "From reactive to predictive: practical steps to get started." },
        { title: "From the Plant to the Boardroom", text: "Translating technical data into strategic decisions." },
        { title: "Digital Transformation Essentials", text: "Data governance, culture, and effective technology adoption." },
      ],
      contactTitle: "Let's talk about your goals",
      contactLead: "Available for consulting, projects, and training in Caracas, Venezuela, and remotely worldwide.",
      directContact: "Direct contact",
      linkedIn: "LinkedIn",
      email: "Email",
      location: "Location",
      contactForm: {
        name: "Full name",
        email: "Email",
        message: "Message",
        placeholderName: "Your name",
        placeholderEmail: "you@company.com",
        placeholderMsg: "Tell me briefly about your project",
        send: "Send message",
        success: "✅ Your message was sent successfully. Thank you!",
      },
      footerQuote: "Strategy, innovation, and technology in service of efficiency.",
    },
  };

  const c = lang === 'en' ? content.en : content.es;

  return (
    <div className="font-inter bg-[#0b1220] bg-aurora text-slate-200 min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-50 backdrop-blur bg-[#0b1220]/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-2 font-bold text-lg">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-cyan-400 via-violet-400 to-emerald-400 shadow-[0_0_18px_rgba(34,211,238,0.35)]"></div>
            {c.brand}
          </div>
          <nav className="flex items-center gap-4 text-sm font-medium">
            <a href="#services" className="hover:text-cyan-400">{c.nav.services}</a>
            <a href="#projects" className="hover:text-cyan-400">{c.nav.projects}</a>
            <a href="#blog" className="hover:text-cyan-400">{c.nav.blog}</a>
            <a href="#contact" className="bg-gradient-to-r from-cyan-400 to-violet-400 text-[#0b1220] font-bold px-3 py-1 rounded-md shadow-md">{c.nav.contact}</a>
            <div className="ml-2 flex items-center gap-2 rounded-lg border border-white/10 px-2 py-1 bg-white/5">
              <button type="button" onClick={() => setLang('es')} className={`text-xs font-bold px-2 py-1 rounded-md transition ${lang==='es' ? 'bg-cyan-400 text-[#0b1220]' : 'hover:text-cyan-300'}`} aria-label="Cambiar a español">ES 🇪🇸</button>
              <span className="text-white/30">|</span>
              <button type="button" onClick={() => setLang('en')} className={`text-xs font-bold px-2 py-1 rounded-md transition ${lang==='en' ? 'bg-violet-400 text-[#0b1220]' : 'hover:text-violet-300'}`} aria-label="Switch to English">EN 🇺🇸</button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero with avatar */}
      <section className="relative py-20 border-b border-white/10" id="home">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <motion.span initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="inline-block px-3 py-1 text-cyan-400 border border-cyan-400/50 rounded-full text-sm font-semibold mb-3">
              {c.heroTag}
            </motion.span>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
              {c.heroTitleA}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">{c.heroTitleB}</span>
            </motion.h1>
            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}} className="text-slate-400 max-w-xl mb-5">
              {c.heroLead}
            </motion.p>
            <div className="flex gap-3 flex-wrap">
              <a href="#services" className="bg-gradient-to-r from-cyan-400 to-violet-400 text-[#0b1220] font-bold px-4 py-2 rounded-md shadow-md">{c.ctaPrimary}</a>
              <a href="#contact" className="border border-white/10 px-4 py-2 rounded-md hover:border-cyan-400/60">{c.ctaSecondary}</a>
            </div>
            <div className="flex flex-wrap gap-2 mt-3 text-xs">
              <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">{c.chip1}</span>
              <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">{c.chip2}</span>
              <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">{c.chip3}</span>
              <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">{c.chip4}</span>
            </div>
          </div>
          <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{delay:0.4}} className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img src={avatar} alt="Geovanny E. Flex C." className="w-full h-full object-cover" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-cyan-400/10 via-transparent to-violet-400/10"></div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">{c.servicesTitle}</h2>
          <p className="text-slate-400 mb-8">{c.servicesLead}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {c.services.map((item,i)=>(
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.05}} className="bg-white/5 border border-white/10 p-5 rounded-xl hover:-translate-y-1 hover:shadow-lg transition-transform">
                <h3 className="font-semibold text-lg mb-1 text-cyan-400">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">{c.projectsTitle}</h2>
          <p className="text-slate-400 mb-8">{c.projectsLead}</p>
          <div className="space-y-5">
            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <h3 className="font-semibold text-lg mb-1">{c.proj1Title}</h3>
              <p className="text-slate-400 text-sm mb-1">{c.proj1Text}</p>
              <p className="text-slate-500 text-sm">{c.proj1Meta}</p>
            </motion.div>
            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <h3 className="font-semibold text-lg mb-1">{c.proj2Title}</h3>
              <p className="text-slate-400 text-sm mb-1">{c.proj2Text}</p>
              <p className="text-slate-500 text-sm">{c.proj2Meta}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">{c.blogTitle}</h2>
          <p className="text-slate-400 mb-8">{c.blogLead}</p>
        <div className="grid md:grid-cols-3 gap-6">
            {c.posts.map((p,i)=>(
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.05}} className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <h3 className="font-semibold text-cyan-400 mb-1">{p.title}</h3>
                <p className="text-slate-400 text-sm">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3">{c.directContact}</h3>
            <p className="text-slate-400 text-sm">{c.linkedIn}: <a href="#" className="text-cyan-400">linkedin.com/in/geovannyflex</a></p>
            <p className="text-slate-400 text-sm">{c.email}: <a href="mailto:contacto@geovannyflex.com" className="text-cyan-400">contacto@geovannyflex.com</a></p>
            <p className="text-slate-400 text-sm">{c.location}: Caracas, Venezuela</p>
          </div>
          <form
            className="space-y-3"
            action="https://formspree.io/f/myzbkkwo"
            method="POST"
            onSubmit={() => alert(c.contactForm.success)}
          >
            <div>
              <label className="block text-sm font-semibold mb-1">{c.contactForm.name}</label>
              <input type="text" name="name" className="w-full bg-[#0b1324] border border-white/10 rounded-md px-3 py-2 text-sm" placeholder={c.contactForm.placeholderName} required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">{c.contactForm.email}</label>
              <input type="email" name="email" className="w-full bg-[#0b1324] border border-white/10 rounded-md px-3 py-2 text-sm" placeholder={c.contactForm.placeholderEmail} required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">{c.contactForm.message}</label>
              <textarea name="message" className="w-full bg-[#0b1324] border border-white/10 rounded-md px-3 py-2 text-sm min-h-[100px]" placeholder={c.contactForm.placeholderMsg} required></textarea>
            </div>
            <button type="submit" className="bg-gradient-to-r from-cyan-400 to-violet-400 text-[#0b1220] font-bold px-4 py-2 rounded-md shadow-md">{c.contactForm.send}</button>
          </form>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-white/10 text-slate-500 text-sm">
        {c.footerQuote}<br/>© {new Date().getFullYear()} Geovanny E. Flex C.
      </footer>
    </div>
  );
}
