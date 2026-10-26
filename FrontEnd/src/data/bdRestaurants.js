import cantinaCentralImg from "../assets/lanchoneteBorges.png";
import lanchoneteDaPracaImg from "../assets/lanchonete2.png";
import expressCafeImg from "../assets/lanchonete3.jpg";
import cantinaGrillImg from "../assets/lanchonete4.jpg";
import naturalJuiceAcaiImg from "../assets/lanchonete5.png";

export const bdRestaurants = [
  {
    id: "cantina_central",
    stateCantina: false,
    name: "Cantina Central Bloco A",
    image: cantinaCentralImg,
    rating: {
      stars: 5,
      rate: 4.8,
      peopleRating: 120,
    },
    options: ["Salgados ", "Bebidas ", "Pratos Rápidos "],
    menu: {
      foods: [
        {
          name: "Coxinha de Frango c/ Catupiry",
          description: "Massa crocante com recheio cremoso de frango e catupiry.",
          value: 8.5,
          quantity: 0,
        },
        {
          name: "Esfiha Assada (Carne ou Queijo)",
          description: "Esfiha assada na hora, com massa macia e recheio saboroso.",
          value: 8,
          quantity: 0,
        },
        {
          name: "Pão de Queijo Mineiro",
          description: "Pão de queijo quentinho, com casquinha dourada e interior macio.",
          value: 5,
          quantity: 0,
        },
        {
          name: "Misto Quente",
          description: "Pão tostado recheado com presunto e queijo derretido.",
          value: 9.5,
          quantity: 0,
        },
      ],
      drinks: [
        {
          name: "Café Expresso",
          description: "Café intenso, preparado na hora para dar energia entre as aulas.",
          value: 4,
          quantity: 0,
        },
        {
          name: "Suco de Laranja",
          description: "Suco cítrico e refrescante, servido gelado.",
          value: 7,
          quantity: 0,
        },
        {
          name: "Refrigerante Lata",
          description: "Refrigerante gelado de 350 ml, ideal para acompanhar seu lanche.",
          value: 6,
          quantity: 0,
        },
        {
          name: "Água Mineral",
          description: "Água mineral sem gás, servida em garrafa de 500 ml.",
          value: 3.5,
          quantity: 0,
        },
      ],
      candys: [
        {
          name: "Brigadeiro Gourmet",
          description: "Brigadeiro de chocolate com textura cremosa e granulado.",
          value: 4,
          quantity: 0,
        },
        {
          name: "Brownie de Chocolate",
          description: "Brownie macio por dentro, com sabor intenso de chocolate.",
          value: 7,
          quantity: 0,
        },
        {
          name: "Cookie com Gotas de Chocolate",
          description: "Cookie artesanal com bordas crocantes e gotas de chocolate.",
          value: 6,
          quantity: 0,
        },
        {
          name: "Mini Pudim de Leite",
          description: "Pudim cremoso de leite condensado com calda de caramelo.",
          value: 6.5,
          quantity: 0,
        },
      ],
    },
  },
  {
    id: "lanchonete_praca",
    stateCantina: true,
    name: "Lanchonete da Praça - Bloco B",
    image: lanchoneteDaPracaImg,
    rating: {
      stars: 5,
      rate: 4.5,
      peopleRating: 85,
    },
    options: ["Lanches ", "Sorvetes ", "Doces "],
    menu: {
      foods: [
        {
          name: "Cheeseburger da Praça",
          description: "Hambúrguer artesanal com queijo, alface, tomate e molho especial.",
          value: 16,
          quantity: 0,
        },
        {
          name: "Hot Dog Completo",
          description: "Pão macio com salsicha, molho de tomate, milho e batata palha.",
          value: 12,
          quantity: 0,
        },
        {
          name: "Bauru de Presunto e Queijo",
          description: "Sanduíche prensado com presunto, queijo derretido e tomate.",
          value: 11,
          quantity: 0,
        },
        {
          name: "Batata Frita Individual",
          description: "Porção de batatas douradas e crocantes, perfeita para dividir.",
          value: 10,
          quantity: 0,
        },
      ],
      drinks: [
        {
          name: "Milk-shake de Chocolate",
          description: "Milk-shake gelado e cremoso, feito com sorvete de chocolate.",
          value: 14,
          quantity: 0,
        },
        {
          name: "Limonada Suíça",
          description: "Limonada cremosa e refrescante, preparada com limão.",
          value: 8,
          quantity: 0,
        },
        {
          name: "Chá Gelado de Pêssego",
          description: "Chá aromático com sabor de pêssego, servido bem gelado.",
          value: 7,
          quantity: 0,
        },
        {
          name: "Água com Gás",
          description: "Água mineral gaseificada, servida em garrafa de 500 ml.",
          value: 4,
          quantity: 0,
        },
      ],
      candys: [
        {
          name: "Sorvete de Casquinha",
          description: "Casquinha crocante com uma bola de sorvete à sua escolha.",
          value: 6,
          quantity: 0,
        },
        {
          name: "Sundae de Chocolate",
          description: "Sorvete cremoso com calda de chocolate e cobertura crocante.",
          value: 10,
          quantity: 0,
        },
        {
          name: "Mini Churros",
          description: "Churros dourados recheados com doce de leite e açúcar com canela.",
          value: 8,
          quantity: 0,
        },
        {
          name: "Fatia de Torta de Limão",
          description: "Torta com creme cítrico de limão e cobertura suave.",
          value: 9,
          quantity: 0,
        },
      ],
    },
  },
  {
    id: "express_cafe",
    stateCantina: false,
    name: "Express Café & Bolos - Bloco C",
    image: expressCafeImg,
    rating: {
      stars: 5,
      rate: 4.7,
      peopleRating: 60,
    },
    options: ["Café Especial ", "Bolos ", "Pães de Queijo "],
    menu: {
      foods: [
        {
          name: "Croissant de Queijo",
          description: "Croissant folhado e amanteigado, recheado com queijo derretido.",
          value: 9,
          quantity: 0,
        },
        {
          name: "Tapioca de Frango",
          description: "Tapioca preparada na hora, com frango temperado e requeijão.",
          value: 12,
          quantity: 0,
        },
        {
          name: "Quiche de Alho-poró",
          description: "Quiche individual com massa delicada e recheio cremoso.",
          value: 10,
          quantity: 0,
        },
        {
          name: "Sanduíche Integral",
          description: "Pão integral com queijo branco, peito de peru e folhas frescas.",
          value: 13,
          quantity: 0,
        },
      ],
      drinks: [
        {
          name: "Cappuccino Cremoso",
          description: "Café com leite vaporizado, espuma cremosa e toque de canela.",
          value: 8,
          quantity: 0,
        },
        {
          name: "Café Latte",
          description: "Espresso equilibrado com leite vaporizado e uma camada suave de espuma.",
          value: 9,
          quantity: 0,
        },
        {
          name: "Chocolate Quente",
          description: "Bebida quente de chocolate, cremosa e perfeita para uma pausa.",
          value: 8.5,
          quantity: 0,
        },
        {
          name: "Mocha Gelado",
          description: "Café espresso com chocolate e leite, servido com gelo.",
          value: 11,
          quantity: 0,
        },
      ],
      candys: [
        {
          name: "Fatia de Bolo de Cenoura",
          description: "Bolo fofinho de cenoura com cobertura generosa de chocolate.",
          value: 8,
          quantity: 0,
        },
        {
          name: "Mini Cheesecake de Frutas Vermelhas",
          description: "Sobremesa cremosa com base crocante e calda de frutas vermelhas.",
          value: 12,
          quantity: 0,
        },
        {
          name: "Muffin de Blueberry",
          description: "Bolinho macio com mirtilos, ideal para acompanhar o café.",
          value: 8.5,
          quantity: 0,
        },
        {
          name: "Palha Italiana",
          description: "Doce de brigadeiro com pedaços de biscoito e cobertura de açúcar.",
          value: 5,
          quantity: 0,
        },
      ],
    },
  },
  {
    id: "cantina_grill",
    stateCantina: true,
    name: "Cantina Grill & Almoço - Bloco D",
    image: cantinaGrillImg,
    rating: {
      stars: 5,
      rate: 4.9,
      peopleRating: 210,
    },
    options: ["Pratos Feitos ", "Salgados ", "Sucos Naturais "],
    menu: {
      foods: [
        {
          name: "Prato Feito de Frango Grelhado",
          description: "Frango grelhado com arroz, feijão e salada fresca do dia.",
          value: 22,
          quantity: 0,
        },
        {
          name: "Strogonoff de Frango",
          description: "Frango ao molho cremoso, acompanhado de arroz e batata palha.",
          value: 24,
          quantity: 0,
        },
        {
          name: "Omelete Completo",
          description: "Omelete recheado com queijo e tomate, servido com arroz e salada.",
          value: 18,
          quantity: 0,
        },
        {
          name: "Filé de Frango à Parmegiana",
          description: "Filé empanado com molho de tomate e queijo gratinado, acompanhado de arroz.",
          value: 26,
          quantity: 0,
        },
      ],
      drinks: [
        {
          name: "Suco de Abacaxi com Hortelã",
          description: "Suco natural de abacaxi com hortelã, leve e refrescante.",
          value: 8,
          quantity: 0,
        },
        {
          name: "Suco Natural de Maracujá",
          description: "Suco preparado com polpa de maracujá e servido gelado.",
          value: 8,
          quantity: 0,
        },
        {
          name: "Limonada Natural",
          description: "Limão espremido na hora, com água e gelo.",
          value: 7,
          quantity: 0,
        },
        {
          name: "Chá-Mate Gelado",
          description: "Chá-mate refrescante, ideal para acompanhar o almoço.",
          value: 6,
          quantity: 0,
        },
      ],
      candys: [
        {
          name: "Mousse de Maracujá",
          description: "Mousse aerada com sabor tropical e cobertura de calda de maracujá.",
          value: 7,
          quantity: 0,
        },
        {
          name: "Pudim de Coco",
          description: "Pudim suave com coco e calda de caramelo.",
          value: 7.5,
          quantity: 0,
        },
        {
          name: "Salada de Frutas",
          description: "Mix de frutas da estação, servido fresco em porção individual.",
          value: 8,
          quantity: 0,
        },
        {
          name: "Doce de Abóbora com Coco",
          description: "Doce caseiro de abóbora com coco ralado, servido em porção individual.",
          value: 6,
          quantity: 0,
        },
      ],
    },
  },
  {
    id: "acai_fit",
    stateCantina: true,
    name: "Natural Juice & Açaí - Convivência",
    image: naturalJuiceAcaiImg,
    rating: {
      stars: 5,
      rate: 4.6,
      peopleRating: 94,
    },
    options: ["Açaí ", "Sucos Naturais ", "Lanches Natural "],
    menu: {
      foods: [
        {
          name: "Açaí Tradicional 300 ml",
          description: "Açaí cremoso acompanhado de granola e banana fatiada.",
          value: 14,
          quantity: 0,
        },
        {
          name: "Wrap de Frango",
          description: "Wrap integral com frango desfiado, cenoura e folhas frescas.",
          value: 16,
          quantity: 0,
        },
        {
          name: "Sanduíche Natural de Atum",
          description: "Sanduíche leve com atum, cenoura, alface e creme de ricota.",
          value: 13,
          quantity: 0,
        },
        {
          name: "Salada de Grãos",
          description: "Mix de grãos, tomate-cereja, cenoura e folhas com molho leve.",
          value: 15,
          quantity: 0,
        },
      ],
      drinks: [
        {
          name: "Suco Verde",
          description: "Combinação refrescante de couve, limão, maçã e gengibre.",
          value: 10,
          quantity: 0,
        },
        {
          name: "Vitamina de Banana",
          description: "Vitamina cremosa de banana preparada com leite.",
          value: 9,
          quantity: 0,
        },
        {
          name: "Suco de Melancia",
          description: "Suco leve e refrescante de melancia, servido gelado.",
          value: 8,
          quantity: 0,
        },
        {
          name: "Água de Coco",
          description: "Bebida naturalmente refrescante, servida gelada.",
          value: 7,
          quantity: 0,
        },
      ],
      candys: [
        {
          name: "Açaí com Morango e Creme de Avelã",
          description: "Açaí cremoso com morangos frescos, granola e creme de avelã.",
          value: 20,
          quantity: 0,
        },
        {
          name: "Overnight Oats com Frutas",
          description: "Aveia hidratada com iogurte, banana e frutas da estação.",
          value: 12,
          quantity: 0,
        },
        {
          name: "Iogurte com Granola e Mel",
          description: "Iogurte cremoso com granola crocante e um toque de mel.",
          value: 9,
          quantity: 0,
        },
        {
          name: "Trufa de Cacau",
          description: "Trufa de chocolate com cacau, ideal para matar a vontade de doce.",
          value: 5,
          quantity: 0,
        },
      ],
    },
  },
];

export const productImageUrls = {
  // COMIDAS
  "Coxinha de Frango c/ Catupiry":
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",

  "Esfiha Assada (Carne ou Queijo)":
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",

  "Pão de Queijo Mineiro":
  "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600",

  "Misto Quente":
    "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600",

  "Cheeseburger da Praça":
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",

  "Hot Dog Completo":
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",

  "Bauru de Presunto e Queijo":
  "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600",

  "Batata Frita Individual":
    "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600",

  "Croissant de Queijo":
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600",

  "Tapioca de Frango":
    "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",

  "Quiche de Alho-poró":
    "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600",

  "Sanduíche Integral":
    "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600",

  "Prato Feito de Frango Grelhado":
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",

  "Strogonoff de Frango":
    "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",

  "Omelete Completo":
    "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600",

  "Filé de Frango à Parmegiana":
    "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600",

  "Açaí Tradicional 300 ml":
    "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600",

  "Wrap de Frango":
    "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600",

  "Sanduíche Natural de Atum":
    "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600",

  "Salada de Grãos":
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",

  // BEBIDAS
  "Café Expresso":
    "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600",

  "Suco de Laranja":
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600",

  "Refrigerante Lata":
    "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=600",

  "Água Mineral":
    "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600",

  "Milk-shake de Chocolate":
    "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600",

  "Limonada Suíça":
    "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?w=600",

  "Chá Gelado de Pêssego":
    "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600",

  "Água com Gás":
    "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600",

  "Cappuccino Cremoso":
    "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600",

  "Café Latte":
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",

  "Chocolate Quente":
    "https://images.unsplash.com/photo-1542990253-0b8be3e9dc4b?w=600",

  "Mocha Gelado":
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",

  "Suco de Abacaxi com Hortelã":
    "https://images.unsplash.com/photo-1546173159-315724a31696?w=600",

  "Suco Natural de Maracujá":
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600",

  "Limonada Natural":
    "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?w=600",

  "Chá-Mate Gelado":
    "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600",

  "Suco Verde":
    "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600",

  "Vitamina de Banana":
    "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600",

  "Suco de Melancia":
    "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=600",

  "Água de Coco":
    "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600",

  // DOCES
  "Brigadeiro Gourmet":
    "https://images.unsplash.com/photo-1548907040-4d42bfc4c5a8?w=600",

  "Brownie de Chocolate":
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600",

  "Cookie com Gotas de Chocolate":
    "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600",

  "Mini Pudim de Leite":
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600",

  "Sorvete de Casquinha":
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600",

  "Sundae de Chocolate":
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600",

  "Mini Churros":
    "https://images.unsplash.com/photo-1624371414361-e670edf4898d?w=600",

  "Fatia de Torta de Limão":
    "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600",

  "Fatia de Bolo de Cenoura":
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",

  "Mini Cheesecake de Frutas Vermelhas":
    "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600",

  "Muffin de Blueberry":
    "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600",

  "Palha Italiana":
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600",

  "Mousse de Maracujá":
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600",

  "Pudim de Coco":
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600",

  "Salada de Frutas":
    "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600",

  "Doce de Abóbora com Coco":
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600",

  "Açaí com Morango e Creme de Avelã":
    "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600",

  "Overnight Oats com Frutas":
    "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=600",

  "Iogurte com Granola e Mel":
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600",

  "Trufa de Cacau":
    "https://images.unsplash.com/photo-1548907040-4d42bfc4c5a8?w=600",
};

// Adiciona a propriedade image aos 60 produtos.
bdRestaurants.forEach((restaurant) => {
  Object.values(restaurant.menu).forEach((products) => {
    products.forEach((product) => {
      product.image = productImageUrls[product.name];
    });
  });
});








/* import cantinaCentralImg from "../assets/lanchoneteBorges.png";
import lanchoneteDaPracaImg from "../assets/lanchonete2.png";
import expressCafeImg from "../assets/lanchonete3.jpg";
import cantinaGrillImg from "../assets/lanchonete4.jpg";
import naturalJuiceAcaiImg from "../assets/lanchonete5.png";


export const bdRestaurants = [{
    id: "cantina_central",
    stateCantina: false,
    name: "Cantina Central Bloco A",
    image: cantinaCentralImg,
    rating: {
        stars: 5,
        rate: 4.8,
        peopleRating: 120
    },
    options: ['Salgados ', 'Bebidas ', 'Pratos Rápidos '],
    menu: {
      comidas: {
        coxinha: {
          name: "Coxinha de Frango c/ Catupiry",
          description: "Massa crocante com recheio cremoso",
          value: 8.50,
          quantity: 0
        },
        esfiha: {
          name: `Esfiha Assada (Carne ou Queijo)`,
          description: `Deliciosa esfiha assada com massa crocante`,
          value: 8,
          quantity: 0
        }
        
      },
      bebidas: {

      },
      doces: {

      }
    }
    },
    {
    id: "lanchonete_praca",
    stateCantina: true,
    name: "Lanchonete da Praça - Bloco B",
    image: lanchoneteDaPracaImg,
    rating: {
      stars: 5,
      rate: 4.5,
      peopleRating: 85,
    },
    options: ["Lanches ", "Sorvetes ", "Doces "],
  },
  {
    id: "express_cafe",
    stateCantina: false,
    name: "Express Café & Bolos - Bloco C",
    image: expressCafeImg,
    rating: {
      stars: 5,
      rate: 4.7,
      peopleRating: 60,
    },
    options: ["Café Especial ", "Bolos ", "Pães de Queijo "],
  },
  {
    id: "cantina_grill",
    stateCantina: true,
    name: "Cantina Grill & Almoço - Bloco D",
    image: cantinaGrillImg,
    rating: {
      stars: 5,
      rate: 4.9,
      peopleRating: 210,
    },
    options: ["Pratos Feitos ", "Salgados ", "Sucos Naturais "],
  },
  {
    id: "acai_fit",
    stateCantina: true,
    name: "Natural Juice & Açaí - Convivência",
    image: naturalJuiceAcaiImg,
    rating: {
      stars: 5,
      rate: 4.6,
      peopleRating: 94,
    },
    options: ["Açaí ", "Sucos Naturais ", "Lanches Natural "],
  },   
] */