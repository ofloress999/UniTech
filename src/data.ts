import {
  Archive,
  Bot,
  Laptop,
  Printer,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';

export type Solution = {
  id: string;
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  Icon: LucideIcon;
};

export const solutions: Solution[] = [
  {
    id: 'unipc',
    name: 'UniPC',
    eyebrow: 'Computação & infraestrutura',
    title: 'Produtividade começa com uma estrutura que acompanha o time.',
    description:
      'Notebooks, desktops, servidores e ativos de TI dimensionados para diferentes equipes, com gestão simplificada.',
    items: ['Notebooks corporativos', 'Desktops', 'Servidores', 'Ativos de TI'],
    Icon: Laptop,
  },
  {
    id: 'uniprinter',
    name: 'UniPrinter',
    eyebrow: 'Impressão profissional',
    title: 'Eficiência de impressão com suporte especializado.',
    description:
      'Impressoras, multifuncionais, scanners e plotters dimensionados para os volumes reais da sua operação.',
    items: ['Multifuncionais', 'Scanners', 'Plotters', 'Impressão gráfica e médica'],
    Icon: Printer,
  },
  {
    id: 'uniautomation',
    name: 'UniAutomation',
    eyebrow: 'Automação empresarial',
    title: 'Operações mais ágeis, conectadas e organizadas.',
    description:
      'Tecnologia para apoiar produtividade, organização de processos e modernização de rotinas operacionais.',
    items: ['Impressoras térmicas', 'Coletores de dados', 'Totens de atendimento', 'PDV autônomo'],
    Icon: Bot,
  },
  {
    id: 'uniged',
    name: 'UniGED',
    eyebrow: 'Gestão documental',
    title: 'Informação organizada. Decisões mais simples.',
    description:
      'Soluções de gestão eletrônica de documentos para facilitar consultas e apoiar a digitalização dos processos.',
    items: ['Gestão eletrônica', 'Arquivo morto digital', 'Consulta organizada', 'Softwares relacionados'],
    Icon: Archive,
  },
  {
    id: 'unimobile',
    name: 'UniMobile',
    eyebrow: 'Mobilidade corporativa',
    title: 'Equipes conectadas onde o trabalho acontece.',
    description:
      'Smartphones e tablets corporativos para dar flexibilidade a equipes móveis e organizar a gestão dos dispositivos.',
    items: ['Smartphones', 'Tablets', 'Dispositivos corporativos', 'Gestão organizada'],
    Icon: Smartphone,
  },
];

export const metrics = [
  { value: 25, suffix: '+', label: 'anos de mercado' },
  { value: 1200, suffix: '+', label: 'clientes atendidos' },
  { value: 5000, suffix: '+', label: 'equipamentos gerenciados' },
  { value: 50, suffix: ' mi', label: 'de páginas por ano' },
];

export const faqs = [
  {
    question: 'Quais equipamentos a UniTech oferece para locação?',
    answer:
      'Notebooks, desktops, impressoras, multifuncionais, smartphones, tablets e outras soluções tecnológicas, conforme disponibilidade e necessidade do projeto.',
  },
  {
    question: 'A locação inclui suporte técnico?',
    answer:
      'A UniTech oferece soluções com instalação, manutenção e suporte técnico. O escopo e as condições são confirmados na proposta comercial.',
  },
  {
    question: 'A UniTech atende empresas de diferentes tamanhos?',
    answer:
      'As soluções podem ser dimensionadas conforme as necessidades de cada operação. O atendimento é avaliado pela equipe comercial.',
  },
  {
    question: 'É possível contratar diferentes soluções em conjunto?',
    answer:
      'Sim. A UniTech possui um portfólio diversificado e pode avaliar uma proposta com diferentes tipos de equipamentos e serviços.',
  },
  {
    question: 'Como solicitar um orçamento?',
    answer:
      'Basta entrar em contato pelo WhatsApp e apresentar as necessidades da sua empresa. Nossa equipe dará sequência ao atendimento.',
  },
];
