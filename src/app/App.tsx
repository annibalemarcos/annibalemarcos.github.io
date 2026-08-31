import { useState } from 'react';
import { Mail, MessageCircle, Send, Github, Linkedin, Download, ArrowDown } from 'lucide-react';

type Language = 'pt' | 'en';

const content = {
  pt: {
    available: 'Disponível',
    hero: {
      eyebrow: '✦ Perfil Profissional',
      name: 'Marcos',
      nameHighlight: 'Annibale',
      description: 'Líder de Operações e Suporte ao Cliente com mais de 10 anos de experiência em empresas globais de tecnologia e Web3.',
      cta: 'Ver currículos',
    },
    skills: {
      title: 'Competências',
      subtitle: 'Principais áreas de atuação',
      items: [
        'Liderança de Equipe',
        'Suporte ao Cliente',
        'Operações',
        'Web3 & Blockchain',
        'CRM & Zendesk',
        'Gestão de Processos',
        'Customer Success',
        'Análise de Dados'
      ]
    },
    resume: {
      title: 'Currículos',
      ptLabel: 'Visualização: PT-BR',
      enLabel: 'Visualização: EN',
      downloadPT: 'Baixar PT-BR',
      downloadEN: 'Baixar EN',
    },
    footer: {
      updated: 'Atualizado em',
    }
  },
  en: {
    available: 'Available',
    hero: {
      eyebrow: '✦ Professional Profile',
      name: 'Marcos',
      nameHighlight: 'Annibale',
      description: 'Customer Support & Operations Leader with 10+ years of experience in global technology and Web3 companies.',
      cta: 'View resumes',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Main areas of expertise',
      items: [
        'Team Leadership',
        'Customer Support',
        'Operations',
        'Web3 & Blockchain',
        'CRM & Zendesk',
        'Process Management',
        'Customer Success',
        'Data Analysis'
      ]
    },
    resume: {
      title: 'Resumes',
      ptLabel: 'Preview: PT-BR',
      enLabel: 'Preview: EN',
      downloadPT: 'Download PT-BR',
      downloadEN: 'Download EN',
    },
    footer: {
      updated: 'Updated on',
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [activeResume, setActiveResume] = useState<Language>('pt');
  const t = content[lang];

  const resumes = {
    pt: '/Marcos_Annibale_CV_PT.pdf',
    en: '/Marcos_Annibale_CV_EN.pdf',
  };

  const scrollToResumes = () => {
    document.getElementById('curriculos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f4f2ee]">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[#f4f2ee]/95 backdrop-blur-xl border-b border-[#e0ddd5]">
        <div className="max-w-[1140px] mx-auto px-6 min-h-16 flex items-center justify-between gap-3 flex-wrap">
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-[#16140f] grid place-items-center text-white font-bold text-xs">
              MA
            </div>
            <div>
              <div className="font-semibold text-sm">Marcos Annibale</div>
              <div className="text-[11.5px] text-[#6b6760]">annibale.com.br</div>
            </div>
          </a>

          <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#dcfce7] text-[#14532d] text-xs font-medium border border-[#bbf7d0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
              <span>{t.available}</span>
            </div>

            <div className="flex items-center gap-0.5 p-0.5 rounded-full bg-white border border-[#e0ddd5]">
              <button
                onClick={() => setLang('pt')}
                className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-all min-w-[42px] ${
                  lang === 'pt' ? 'bg-[#eae7e0] text-[#16140f] shadow-sm' : 'text-[#6b6760]'
                }`}
              >
                🇧🇷
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-all min-w-[42px] ${
                  lang === 'en' ? 'bg-[#eae7e0] text-[#16140f] shadow-sm' : 'text-[#6b6760]'
                }`}
              >
                🇺🇸
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-14 pb-6 px-6">
        <div className="max-w-[1140px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_300px] gap-5 items-stretch">
            {/* Main Content */}
            <div className="bg-white border border-[#e0ddd5] rounded-[20px] p-11 shadow-sm animate-[fadeUp_0.5s_ease_forwards]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#dde1ff] text-[#2030bb] text-[11px] font-semibold uppercase mb-5">
                {t.hero.eyebrow}
              </div>

              <h1 className="text-6xl font-bold leading-[1.02] tracking-tight">
                {t.hero.name}<br />
                <em className="not-italic bg-gradient-to-br from-[#2040f0] to-[#6d28d9] bg-clip-text text-transparent">
                  {t.hero.nameHighlight}
                </em>
              </h1>

              <p className="mt-5 max-w-[54ch] text-[#6b6760] text-[15.5px] leading-relaxed">
                {t.hero.description}
              </p>

              <div className="flex gap-2.5 flex-wrap mt-7">
                <button
                  onClick={scrollToResumes}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#16140f] text-white text-[13.5px] font-medium hover:opacity-90 transition-opacity"
                >
                  {t.hero.cta}
                  <ArrowDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-3 lg:order-none order-first lg:h-full justify-between">
              {/* Profile Card */}
              <div className="bg-white border border-[#e0ddd5] rounded-[20px] p-5 shadow-sm animate-[fadeUp_0.5s_ease_forwards]">
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    className="w-[54px] h-[54px] rounded-[14px] object-cover border-[1.5px] border-[#e0ddd5]"
                    src="https://avatars.githubusercontent.com/u/121165949?v=4"
                    alt="Marcos"
                  />
                  <div>
                    <h3 className="font-semibold text-sm">Marcos Annibale</h3>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-[#dde1ff] text-[#2030bb] text-[11px] font-semibold">
                      Ops & Support
                    </span>
                  </div>
                </div>

                {/* Contact Icons */}
                <div className="flex items-center justify-center gap-2 flex-wrap pt-3 border-t border-[#e0ddd5]">
                  <a
                    href="mailto:memanibi@gmail.com"
                    title="Email"
                    className="w-11 h-11 rounded-xl inline-flex items-center justify-center bg-[#f4f2ee] border border-[#e0ddd5] hover:bg-[#eff6ff] hover:border-[#bfdbfe] hover:text-[#2563eb] transition-all"
                  >
                    <Mail className="w-[18px] h-[18px]" />
                  </a>
                  <a
                    href="https://wa.me/5519996496586"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp"
                    className="w-11 h-11 rounded-xl inline-flex items-center justify-center bg-[#f4f2ee] border border-[#e0ddd5] hover:bg-[#f0fdf4] hover:border-[#bbf7d0] hover:text-[#25D366] transition-all"
                  >
                    <MessageCircle className="w-[18px] h-[18px]" />
                  </a>
                  <a
                    href="https://t.me/Memanibi"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Telegram"
                    className="w-11 h-11 rounded-xl inline-flex items-center justify-center bg-[#f4f2ee] border border-[#e0ddd5] hover:bg-[#f0f9ff] hover:border-[#bae6fd] hover:text-[#229ED9] transition-all"
                  >
                    <Send className="w-[18px] h-[18px]" />
                  </a>
                  <a
                    href="https://github.com/annibalemarcos"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="w-11 h-11 rounded-xl inline-flex items-center justify-center bg-[#f4f2ee] border border-[#e0ddd5] hover:bg-[#f6f8fa] hover:border-[#d1d5db] hover:text-[#24292f] transition-all"
                  >
                    <Github className="w-[18px] h-[18px]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/marcosannibale/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="w-11 h-11 rounded-xl inline-flex items-center justify-center bg-[#f4f2ee] border border-[#e0ddd5] hover:bg-[#eff6ff] hover:border-[#bfdbfe] hover:text-[#0A66C2] transition-all"
                  >
                    <Linkedin className="w-[18px] h-[18px]" />
                  </a>
                </div>
              </div>

              {/* Skills Card */}
              <div className="bg-white border border-[#e0ddd5] rounded-[20px] p-5 shadow-sm animate-[fadeUp_0.5s_ease_forwards_0.1s] opacity-0 lg:flex-1 flex flex-col">
                <h3 className="font-semibold text-sm mb-1">{t.skills.title}</h3>
                <p className="text-xs text-[#6b6760] mb-3.5">{t.skills.subtitle}</p>
                <div className="grid grid-cols-2 gap-2 lg:flex-1 content-start">
                  {t.skills.items.map((skill, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 rounded-lg bg-[#f4f2ee] border border-[#e0ddd5] text-[12.5px] font-medium text-center hover:bg-white hover:border-[#c2bdb3] hover:-translate-y-0.5 hover:shadow-sm transition-all"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="curriculos" className="py-2 pb-2.5 px-6">
        <div className="max-w-[1140px] mx-auto">
          <div className="grid lg:grid-cols-[320px_1fr] gap-5">
            {/* Sidebar */}
            <aside className="bg-white border border-[#e0ddd5] rounded-[20px] overflow-hidden animate-[fadeUp_0.5s_ease_forwards]">
              <div className="p-6">
                <h2 className="font-semibold text-lg mb-1">{t.resume.title}</h2>
                <p className="text-xs text-[#6b6760] mb-4">Selecione o idioma</p>

                <div className="space-y-3">
                  <button
                    onClick={() => setActiveResume('pt')}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                      activeResume === 'pt'
                        ? 'bg-[#f4f2ee] border-[#c2bdb3]'
                        : 'bg-white border-[#e0ddd5] hover:bg-[#f4f2ee]'
                    }`}
                  >
                    <span className="font-medium text-sm">🇧🇷 PT-BR</span>
                    <span className="text-xs text-[#6b6760]">Abrir</span>
                  </button>

                  <button
                    onClick={() => setActiveResume('en')}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                      activeResume === 'en'
                        ? 'bg-[#f4f2ee] border-[#c2bdb3]'
                        : 'bg-white border-[#e0ddd5] hover:bg-[#f4f2ee]'
                    }`}
                  >
                    <span className="font-medium text-sm">🇺🇸 EN</span>
                    <span className="text-xs text-[#6b6760]">Abrir</span>
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-[#e0ddd5] space-y-2">
                  <a
                    href={resumes.pt}
                    download
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#16140f] text-white text-xs font-medium hover:-translate-y-0.5 hover:shadow-md transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    {t.resume.downloadPT}
                  </a>
                  <a
                    href={resumes.en}
                    download
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#16140f] text-white text-xs font-medium hover:-translate-y-0.5 hover:shadow-md transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    {t.resume.downloadEN}
                  </a>
                </div>
              </div>
            </aside>

            {/* Preview */}
            <div className="bg-white border border-[#e0ddd5] rounded-[20px] overflow-hidden animate-[fadeUp_0.5s_ease_forwards]">
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#e0ddd5] bg-[#f4f2ee]">
                <strong className="text-sm">
                  {activeResume === 'pt' ? t.resume.ptLabel : t.resume.enLabel}
                </strong>
                <div className="flex gap-1">
                  <button
                    onClick={() => setActiveResume('pt')}
                    className={`px-3 py-1.5 rounded-full text-xs border transition-all ${
                      activeResume === 'pt'
                        ? 'bg-[#dde1ff] text-[#2030bb] border-[#c4caff]'
                        : 'bg-white text-[#6b6760] border-[#e0ddd5]'
                    }`}
                  >
                    PT
                  </button>
                  <button
                    onClick={() => setActiveResume('en')}
                    className={`px-3 py-1.5 rounded-full text-xs border transition-all ${
                      activeResume === 'en'
                        ? 'bg-[#dde1ff] text-[#2030bb] border-[#c4caff]'
                        : 'bg-white text-[#6b6760] border-[#e0ddd5]'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <div className="p-4 bg-[#eae7e0]">
                <iframe
                  src={resumes[activeResume]}
                  className="w-full h-[700px] lg:h-[800px] rounded-lg border border-[#e0ddd5] bg-white"
                  title={`Resume ${activeResume.toUpperCase()}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-2.5 pb-6 px-6 text-xs text-[#6b6760]">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex justify-between items-center px-5 py-3.5 bg-white border border-[#e0ddd5] rounded-[20px] flex-wrap gap-2">
            <span>© {new Date().getFullYear()} Marcos Annibale</span>
            <span>
              {t.footer.updated} {new Date().toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US')}
            </span>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
