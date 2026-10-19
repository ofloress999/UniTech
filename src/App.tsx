import { FormEvent, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Camera,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Printer,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';
import { faqs, metrics, solutions } from './data';
import unitechSymbol from './assets/unitech-symbol.png';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const WHATSAPP = 'https://wa.me/5535999390890';
const TEAM_PHOTO =
  'https://images.unsplash.com/photo-1580894899378-92e56886cd4d?auto=format&fit=crop&w=1600&q=85';

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`logo ${light ? 'logo--light' : ''}`} href="#inicio" aria-label="UniTech — início">
      <img src={unitechSymbol} alt="" width="48" height="48" />
      <span>Uni<strong>Tech</strong></span>
    </a>
  );
}

function WhatsAppLink({
  children,
  className = 'btn btn--primary',
  message,
}: {
  children: React.ReactNode;
  className?: string;
  message?: string;
}) {
  const href = message ? `${WHATSAPP}?text=${encodeURIComponent(message)}` : WHATSAPP;
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ['Início', '#inicio'],
    ['Soluções', '#solucoes'],
    ['Diferenciais', '#diferenciais'],
    ['Como funciona', '#como-funciona'],
    ['Sobre nós', '#sobre'],
  ];

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Logo light />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <WhatsAppLink className="btn btn--small btn--light">
          Solicitar proposta <ArrowRight size={15} />
        </WhatsAppLink>
        <button
          className="menu-button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`mobile-panel ${open ? 'is-open' : ''}`}>
        <nav aria-label="Navegação mobile">
          {links.map(([label, href], index) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{label}
            </a>
          ))}
        </nav>
        <WhatsAppLink>Solicitar proposta <ArrowRight size={17} /></WhatsAppLink>
      </div>
    </header>
  );
}

function DeviceComposition({ variant = 'hero' }: { variant?: string }) {
  return (
    <div className={`device-composition device-composition--${variant}`} aria-label="Composição de equipamentos corporativos">
      <div className="device-orbit orbit-a" />
      <div className="device-orbit orbit-b" />
      <div className="device device--laptop">
        <div className="laptop-screen">
          <div className="screen-logo"><img src={unitechSymbol} alt="" /></div>
          <span>Operação conectada</span>
        </div>
        <div className="laptop-base" />
      </div>
      <div className="device device--phone"><div className="phone-ui" /></div>
      <div className="device device--tablet"><div className="tablet-ui" /></div>
      <div className="device device--printer">
        <div className="paper">UNIT<br /><strong>READY</strong></div>
        <Printer size={30} />
      </div>
      <div className="connection connection-a" />
      <div className="connection connection-b" />
      <div className="status-pill"><span /> Sistemas em operação</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span /> Tecnologia para empresas desde 2000</div>
          <h1>Sua empresa cresce.<br />A <em>tecnologia</em> acompanha.</h1>
          <p className="hero-lead">
            Locação de equipamentos, gestão de TI e suporte técnico especializado para manter sua operação eficiente, conectada e preparada para evoluir.
          </p>
          <div className="hero-actions">
            <WhatsAppLink>Solicitar uma proposta <ArrowRight size={18} /></WhatsAppLink>
            <a className="btn btn--ghost" href="#solucoes">Explorar soluções <ChevronDown size={18} /></a>
          </div>
          <div className="hero-tags">
            <span>Outsourcing de TI</span><i /> <span>Locação corporativa</span><i /> <span>Suporte especializado</span>
          </div>
        </div>
        <div className="hero-visual"><DeviceComposition /></div>
      </div>
      <div className="scroll-cue"><span>Role para explorar</span><i /></div>
    </section>
  );
}

function TrustMetrics() {
  return (
    <section className="metrics-section section-dark">
      <div className="container">
        <div className="section-intro metrics-intro reveal">
          <div><span className="kicker">Confiança construída no tempo</span><h2>Experiência que sustenta a evolução tecnológica.</h2></div>
          <p>Desde 2000, a UniTech evolui junto com o mercado, conectando tecnologia, gestão e eficiência para empresas de diferentes segmentos.</p>
        </div>
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <div className="metric reveal" key={metric.label}>
              <strong><span data-count={metric.value}>0</span>{metric.suffix}</strong>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>
        <p className="data-note">Indicadores institucionais divulgados pela empresa, sujeitos à confirmação.</p>
      </div>
    </section>
  );
}

function ValueProposition() {
  const items = [
    ['01', 'Menos preocupações com infraestrutura', 'Sua equipe concentra esforços no negócio enquanto a UniTech apoia a gestão dos equipamentos.', ShieldCheck],
    ['02', 'Tecnologia alinhada à operação', 'Soluções de locação para dimensionar recursos de acordo com as demandas empresariais.', Zap],
    ['03', 'Suporte para manter tudo funcionando', 'Instalação, manutenção e acompanhamento técnico para dar mais previsibilidade à operação.', ServerCog],
  ] as const;
  return (
    <section className="value-section section-light">
      <div className="container value-layout">
        <div className="sticky-heading reveal">
          <span className="kicker">Complexidade, simplificada</span>
          <h2>Sua empresa precisa de tecnologia. <em>Não de mais complexidade.</em></h2>
          <p>Uma estrutura tecnológica eficiente deve trabalhar silenciosamente a favor do seu negócio.</p>
          <div className="mini-network"><Monitor /><span /><Printer /><span /><Smartphone /></div>
        </div>
        <div className="value-list">
          {items.map(([number, title, text, Icon]) => (
            <article className="value-item reveal" key={number}>
              <div className="value-number">{number}</div>
              <Icon />
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsShowcase() {
  const [active, setActive] = useState(0);
  const solution = solutions[active];
  const Icon = solution.Icon;
  return (
    <section className={`solutions-section solution-tone-${active}`} id="solucoes">
      <div className="container">
        <div className="section-intro reveal">
          <div><span className="kicker">Ecossistema UniTech</span><h2>Uma operação mais inteligente começa com a tecnologia certa.</h2></div>
          <p>Conheça as soluções da UniTech para equipar, conectar e acompanhar sua empresa.</p>
        </div>
        <div className="solutions-tabs" role="tablist" aria-label="Soluções UniTech">
          {solutions.map((item, index) => (
            <button
              role="tab"
              aria-selected={active === index}
              className={active === index ? 'is-active' : ''}
              onClick={() => setActive(index)}
              key={item.id}
            >
              <span>0{index + 1}</span>{item.name}
            </button>
          ))}
        </div>
        <div className="solution-stage" key={solution.id}>
          <div className="solution-art">
            <div className="solution-halo" />
            <div className="solution-icon"><Icon strokeWidth={1.2} /></div>
            <span>{solution.name}</span>
          </div>
          <div className="solution-copy">
            <span className="kicker">{solution.eyebrow}</span>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            <ul>{solution.items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
            <WhatsAppLink
              className="text-link"
              message={`Olá! Gostaria de conhecer melhor a solução ${solution.name} para minha empresa.`}
            >
              Conhecer {solution.name} <ArrowRight size={17} />
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ['01', 'Entendemos sua necessidade', 'Conhecemos o cenário, os objetivos e as necessidades de equipamentos da empresa.'],
    ['02', 'Estruturamos a solução', 'Propomos equipamentos e serviços adequados à realidade da operação.'],
    ['03', 'Implantamos a tecnologia', 'Organizamos entrega e instalação conforme a solução contratada.'],
    ['04', 'Acompanhamos sua operação', 'Manutenção, suporte e gestão para apoiar a continuidade das atividades.'],
  ];
  return (
    <section className="process-section section-light" id="como-funciona">
      <div className="container">
        <div className="center-heading reveal"><span className="kicker">Da estratégia ao suporte</span><h2>Tecnologia sob medida.<br />Do planejamento ao suporte.</h2></div>
        <div className="process-grid">
          <div className="process-line" aria-hidden="true"><span /></div>
          {steps.map(([number, title, text]) => (
            <article className="process-step" key={number}>
              <strong>{number}</strong><i /><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  const items = [
    'Experiência consolidada desde 2000',
    'Soluções personalizadas para empresas',
    'Instalação e suporte técnico',
    'Portfólio diversificado de equipamentos',
    'Acompanhamento próximo dos clientes',
    'Atuação em mais de sete estados',
  ];
  return (
    <section className="differentials section-dark" id="diferenciais">
      <div className="container diff-layout">
        <figure className="team-photo reveal">
          <img src={TEAM_PHOTO} alt="Profissionais de tecnologia colaborando em um ambiente de trabalho" loading="lazy" width="800" height="1000" />
          <figcaption><span>25+</span> anos evoluindo com nossos clientes</figcaption>
        </figure>
        <div className="diff-content">
          <span className="kicker">Por que UniTech</span>
          <h2>Sua operação merece mais do que equipamentos.</h2>
          <p>Entregamos estrutura, conhecimento e acompanhamento para a tecnologia apoiar o crescimento do negócio.</p>
          <ol>{items.map((item, index) => <li className="reveal" key={item}><span>0{index + 1}</span>{item}</li>)}</ol>
        </div>
      </div>
    </section>
  );
}

function Healthcare() {
  return (
    <section className="health-section section-light">
      <div className="container health-layout">
        <div className="health-copy reveal">
          <span className="kicker">Tecnologia aplicada à saúde</span>
          <h2>Impressão especializada para ambientes de saúde.</h2>
          <p>Soluções de impressão de exames e equipamentos especializados para apoiar instituições de saúde com qualidade, precisão e suporte técnico.</p>
          <div className="health-stat"><strong>+1 milhão</strong><span>de páginas de exames impressas por ano*</span></div>
          <WhatsAppLink message="Olá! Gostaria de falar sobre as soluções de impressão para o setor hospitalar.">
            Falar sobre soluções hospitalares <ArrowRight size={17} />
          </WhatsAppLink>
          <small>* Indicador institucional sujeito à confirmação.</small>
        </div>
        <div className="medical-visual reveal">
          <div className="medical-printer"><Printer /><div className="scan-sheet"><span /><i /></div></div>
          <div className="medical-chips"><span>Tomografia</span><span>Ultrassom</span><span>Raio X</span><span>Imagens médicas</span></div>
        </div>
      </div>
    </section>
  );
}

function Brands() {
  const brands = ['HP', 'DELL', 'Apple', 'SAMSUNG', 'motorola', 'OKI', 'RICOH', 'Canon', 'KONICA MINOLTA'];
  return (
    <section className="brands-section">
      <div className="container">
        <div className="brands-heading"><h2>Tecnologia de grandes marcas, alinhada à sua operação.</h2><p>Marcas presentes no portfólio divulgado pela UniTech. A exibição não implica parceria ou certificação oficial.</p></div>
      </div>
      <div className="marquee" aria-label="Marcas de equipamentos">
        <div>{[...brands, ...brands].map((brand, i) => <span key={`${brand}-${i}`}>{brand}</span>)}</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section-dark" id="sobre">
      <div className="container">
        <div className="about-top reveal">
          <span className="kicker">Nossa trajetória</span>
          <h2>Nascemos como Unicópia.<br />Evoluímos para <em>UniTech.</em></h2>
          <p>Fundada em 2000, a empresa acompanhou a evolução da tecnologia e cresceu de soluções de impressão para um portfólio de outsourcing de TI, locação, automação e serviços especializados.</p>
        </div>
        <div className="timeline">
          <article><strong>2000</strong><span>Origem</span><h3>Fundação da Unicópia</h3></article>
          <article><strong>→</strong><span>Evolução</span><h3>Expansão do portfólio tecnológico</h3></article>
          <article><strong>Hoje</strong><span>UniTech</span><h3>Outsourcing e gestão tecnológica</h3></article>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq-section section-light">
      <div className="container faq-layout">
        <div className="sticky-heading"><span className="kicker">Perguntas frequentes</span><h2>Dúvidas sobre nossas soluções.</h2><p>Não encontrou sua resposta? Nossa equipe comercial pode ajudar.</p><WhatsAppLink className="text-link">Falar com a equipe <ArrowRight size={17} /></WhatsAppLink></div>
        <div className="accordion">
          {faqs.map((item, index) => (
            <div className={`faq-item ${open === index ? 'is-open' : ''}`} key={item.question}>
              <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
                <span>{item.question}</span><ChevronDown />
              </button>
              <div className="faq-answer"><p>{item.answer}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  const [solution, setSolution] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const message = `Olá! Gostaria de conversar sobre uma solução UniTech.\n\nSolução: ${solution}\nEmpresa: ${company}\nCidade: ${city}`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };
  return (
    <section className="contact-section" id="contato">
      <div className="contact-grid" />
      <div className="container contact-layout">
        <div className="contact-copy reveal">
          <span className="kicker">Vamos evoluir juntos</span>
          <h2>Sua próxima evolução tecnológica começa aqui.</h2>
          <p>Converse com nossos especialistas e descubra quais soluções podem fazer sentido para sua empresa.</p>
          <div className="contact-actions">
            <WhatsAppLink>Falar com um especialista <MessageCircle size={18} /></WhatsAppLink>
            <a className="btn btn--ghost" href="mailto:comercial@unitechbr.com.br">Enviar um e-mail <Mail size={18} /></a>
          </div>
        </div>
        <form className="lead-form reveal" onSubmit={handleSubmit}>
          <div className="form-heading"><Sparkles /><div><strong>Encontre a solução ideal</strong><span>Leva menos de um minuto.</span></div></div>
          <label>Qual solução você procura?
            <select required value={solution} onChange={(e) => setSolution(e.target.value)}>
              <option value="" disabled>Selecione uma opção</option>
              <option>Computadores</option><option>Impressão</option><option>Automação</option>
              <option>Gestão Documental</option><option>Dispositivos Móveis</option><option>Hospitalar</option><option>Ainda não sei</option>
            </select>
          </label>
          <label>Nome da empresa<input required value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Sua empresa" /></label>
          <label>Cidade<input required value={city} onChange={(e) => setCity(e.target.value)} placeholder="Cidade / UF" /></label>
          <button className="btn btn--primary" type="submit">Conversar pelo WhatsApp <ArrowRight size={18} /></button>
          <small>Seus dados não são armazenados. A conversa é aberta diretamente no WhatsApp.</small>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand"><Logo light /><p>Tecnologia, equipamentos e suporte para empresas que querem avançar com eficiência.</p><WhatsAppLink className="text-link">WhatsApp <ArrowRight size={16} /></WhatsAppLink></div>
        <div><strong>Navegação</strong><a href="#inicio">Início</a><a href="#solucoes">Soluções</a><a href="#diferenciais">Diferenciais</a><a href="#sobre">Sobre nós</a></div>
        <div><strong>Soluções</strong>{solutions.map((s) => <a href="#solucoes" key={s.id}>{s.name}</a>)}</div>
        <div className="footer-contact"><strong>Contato</strong><a href="mailto:comercial@unitechbr.com.br"><Mail /> comercial@unitechbr.com.br</a><a href="https://www.instagram.com/unitech.pa/" target="_blank" rel="noreferrer"><Camera /> @unitech.pa</a><p><MapPin /> Rua Cel. Alfredo Custódio de Paula, 675, Medicina, Pouso Alegre — MG</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} UniTech. Todos os direitos reservados.</span><a href="https://www.unitechbr.com.br/" target="_blank" rel="noreferrer">unitechbr.com.br</a></div>
    </footer>
  );
}

export default function App() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
    intro
      .from('.site-header', { y: -28, opacity: 0, duration: 0.7 })
      .from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.6 }, '-=.3')
      .from('.hero h1', { y: 70, opacity: 0, duration: 1 }, '-=.35')
      .from('.hero-lead, .hero-actions, .hero-tags', { y: 28, opacity: 0, duration: 0.7, stagger: 0.12 }, '-=.5')
      .from('.device', { y: 60, opacity: 0, rotate: 5, duration: 0.9, stagger: 0.12 }, '-=.9')
      .from('.connection, .status-pill', { scale: 0, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=.45');

    gsap.to('.device-composition--hero', {
      y: 80, scale: 0.88, rotate: -2, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.2 },
    });

    gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
      gsap.from(element, {
        y: 42, opacity: 0, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: element, start: 'top 88%', once: true },
      });
    });

    document.querySelectorAll<HTMLElement>('[data-count]').forEach((element) => {
      const end = Number(element.dataset.count);
      const counter = { value: 0 };
      gsap.to(counter, {
        value: end, duration: 1.8, ease: 'power2.out',
        scrollTrigger: { trigger: element, start: 'top 90%', once: true },
        onUpdate: () => { element.textContent = Math.round(counter.value).toLocaleString('pt-BR'); },
      });
    });

    gsap.fromTo('.process-line span', { scaleX: 0 }, {
      scaleX: 1, ease: 'none',
      scrollTrigger: {
        trigger: '.process-line',
        start: 'top 75%',
        end: 'top 25%',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    gsap.to('.team-photo img', {
      yPercent: 8, ease: 'none',
      scrollTrigger: { trigger: '.differentials', start: 'top bottom', end: 'bottom top', scrub: 1 },
    });
  }, { scope: root });

  return <div ref={root}><Header /><main><Hero /><TrustMetrics /><ValueProposition /><SolutionsShowcase /><HowItWorks /><Differentials /><Healthcare /><Brands /><About /><FAQ /><ContactCTA /></main><Footer /></div>;
}

