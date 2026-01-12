export type MenuCategory = "Taças" | "Tortas" | "Boxes" | "Long Cakes";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  event: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
}

export const menuCategories: MenuCategory[] = ["Taças", "Tortas", "Boxes", "Long Cakes"];

export const menuItems: MenuItem[] = [
  {
    id: "taca-floresta",
    name: "Taça Floresta Negra",
    description: "Chocolate intenso com camadas de cereja e chantilly delicado.",
    price: "R$ 165,00",
    category: "Taças",
    details: [
      "Montagem artesanal em taça de vidro",
      "Finalização com raspas de chocolate",
      "Ideal para 6 a 8 pessoas"
    ]
  },
  {
    id: "taca-sopa",
    name: "Taça Sopa Inglesa",
    description: "Creme, bolo leve e frutas com um toque clássico.",
    price: "R$ 165,00",
    category: "Taças",
    details: [
      "Camadas equilibradas e sabor suave",
      "Textura cremosa com frutas frescas",
      "Perfeita para celebrações elegantes"
    ]
  },
  {
    id: "taca-morangos",
    name: "Taça Torta de Morangos",
    description: "Morangos frescos com creme de baunilha e base amanteigada.",
    price: "R$ 165,00",
    category: "Taças",
    details: [
      "Morangos selecionados",
      "Creme de baunilha artesanal",
      "Toque final de farofa crocante"
    ]
  },
  {
    id: "taca-abacaxi",
    name: "Taça Delícia de Abacaxi com Coco",
    description: "Abacaxi caramelizado com coco fresco e creme gelado.",
    price: "R$ 165,00",
    category: "Taças",
    details: [
      "Equilíbrio perfeito entre doce e ácido",
      "Finalização com coco dourado",
      "Experiência tropical sofisticada"
    ]
  },
  {
    id: "torta-lisboa",
    name: "Torta Lisboa (2kg)",
    description: "Camadas generosas de chocolate e creme aveludado.",
    price: "R$ 280,00",
    category: "Tortas",
    details: [
      "Chocolate premium",
      "Serve até 12 pessoas",
      "Decoração refinada"
    ]
  },
  {
    id: "torta-holandesa",
    name: "Torta Holandesa",
    description: "Base crocante com creme suave e ganache.",
    price: "R$ 145,00",
    category: "Tortas",
    details: [
      "Equilíbrio perfeito de texturas",
      "Ganache com toque de cacau",
      "Clássico que encanta"
    ]
  },
  {
    id: "torta-limao",
    name: "Torta de Limão",
    description: "Creme cítrico com merengue delicado e base dourada.",
    price: "R$ 145,00",
    category: "Tortas",
    details: [
      "Acidez suave",
      "Merengue queimado na medida",
      "Ideal para almoços especiais"
    ]
  },
  {
    id: "box-chocotone",
    name: "Box Pavê de Chocotone",
    description: "Pavê cremoso com chocolate e toques natalinos.",
    price: "R$ 145,00",
    category: "Boxes",
    details: [
      "Montagem em caixa presenteável",
      "Chocolate aveludado",
      "Perfeito para presentear"
    ]
  },
  {
    id: "box-camafeu",
    name: "Box Camafeu de Nozes",
    description: "Doce fino com nozes selecionadas e fondant.",
    price: "R$ 165,00",
    category: "Boxes",
    details: [
      "Nozes frescas",
      "Toque de baunilha",
      "Elegância para eventos"
    ]
  },
  {
    id: "box-coco",
    name: "Box Bolo Gelado de Coco",
    description: "Bolo gelado úmido com coco fresco e leite condensado.",
    price: "R$ 145,00",
    category: "Boxes",
    details: [
      "Textura molhadinha",
      "Embalagem pronta para servir",
      "Sabor nostálgico"
    ]
  },
  {
    id: "long-abacaxi",
    name: "Long Cake Abacaxi com Coco",
    description: "Long cake sofisticado com recheio cremoso e frutas.",
    price: "R$ 230,00",
    category: "Long Cakes",
    details: [
      "Acabamento artesanal",
      "Ideal para mesas de doces",
      "Combinação tropical elegante"
    ]
  }
];

export const events: EventItem[] = [
  {
    id: "aniversarios",
    title: "Aniversários",
    description: "Bolos e sobremesas personalizadas para celebrar com charme."
  },
  {
    id: "casamentos",
    title: "Casamentos",
    description: "Sobremesas elegantes para um grande dia inesquecível."
  },
  {
    id: "corporativos",
    title: "Eventos Corporativos",
    description: "Opções sofisticadas para encantar clientes e equipes."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "dep-1",
    name: "Marina Lopes",
    event: "Chá de bebê",
    text: "Tudo impecável: sabor, apresentação e atendimento. Foi o destaque da festa!",
    rating: 5
  },
  {
    id: "dep-2",
    name: "Carlos Menezes",
    event: "Evento corporativo",
    text: "As taças ficaram lindas e sofisticadas. Recebemos muitos elogios.",
    rating: 5
  },
  {
    id: "dep-3",
    name: "Fernanda Oliveira",
    event: "Casamento",
    text: "A torta Lisboa estava perfeita, com sabor equilibrado e visual elegante.",
    rating: 5
  },
  {
    id: "dep-4",
    name: "Juliana Ribeiro",
    event: "Aniversário",
    text: "Carinho em cada detalhe. A entrega foi pontual e o sabor maravilhoso.",
    rating: 5
  },
  {
    id: "dep-5",
    name: "Thiago Costa",
    event: "Jantar especial",
    text: "O box de camafeu surpreendeu toda a família. Tudo muito delicado.",
    rating: 5
  }
];

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "Como faço o pedido?",
    answer: "Escolha seu favorito no cardápio e envie a data e quantidade pelo WhatsApp."
  },
  {
    id: "faq-2",
    question: "Com quanta antecedência encomendar?",
    answer: "Recomendamos pelo menos 7 dias de antecedência para garantir a agenda."
  },
  {
    id: "faq-3",
    question: "Formas de pagamento?",
    answer: "Aceitamos Pix e transferência. Consulte outras opções no atendimento."
  },
  {
    id: "faq-4",
    question: "Entrega ou retirada?",
    answer: "Combinamos retirada ou entrega conforme a disponibilidade e local do evento."
  },
  {
    id: "faq-5",
    question: "Personalização?",
    answer: "Sim! Ajustamos sabores, tamanhos e decorações sob medida."
  },
  {
    id: "faq-6",
    question: "Validade dos produtos?",
    answer: "Recomendamos consumo em até 48 horas para preservar sabor e textura."
  }
];
