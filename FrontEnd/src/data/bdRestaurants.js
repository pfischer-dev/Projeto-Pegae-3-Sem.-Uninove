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
      comidas: {
        coxinha: {
          name: "Coxinha de Frango c/ Catupiry",
          description: "Massa crocante com recheio cremoso de frango e catupiry.",
          value: 8.5,
          quantity: 0,
        },
        esfiha: {
          name: "Esfiha Assada (Carne ou Queijo)",
          description: "Esfiha assada na hora, com massa macia e recheio saboroso.",
          value: 8,
          quantity: 0,
        },
        paoDeQueijo: {
          name: "Pão de Queijo Mineiro",
          description: "Pão de queijo quentinho, com casquinha dourada e interior macio.",
          value: 5,
          quantity: 0,
        },
        mistoQuente: {
          name: "Misto Quente",
          description: "Pão tostado recheado com presunto e queijo derretido.",
          value: 9.5,
          quantity: 0,
        },
      },
      bebidas: {
        cafeExpresso: {
          name: "Café Expresso",
          description: "Café intenso, preparado na hora para dar energia entre as aulas.",
          value: 4,
          quantity: 0,
        },
        sucoLaranja: {
          name: "Suco de Laranja",
          description: "Suco cítrico e refrescante, servido gelado.",
          value: 7,
          quantity: 0,
        },
        refrigerante: {
          name: "Refrigerante Lata",
          description: "Refrigerante gelado de 350 ml, ideal para acompanhar seu lanche.",
          value: 6,
          quantity: 0,
        },
        aguaMineral: {
          name: "Água Mineral",
          description: "Água mineral sem gás, servida em garrafa de 500 ml.",
          value: 3.5,
          quantity: 0,
        },
      },
      doces: {
        brigadeiro: {
          name: "Brigadeiro Gourmet",
          description: "Brigadeiro de chocolate com textura cremosa e granulado.",
          value: 4,
          quantity: 0,
        },
        brownie: {
          name: "Brownie de Chocolate",
          description: "Brownie macio por dentro, com sabor intenso de chocolate.",
          value: 7,
          quantity: 0,
        },
        cookie: {
          name: "Cookie com Gotas de Chocolate",
          description: "Cookie artesanal com bordas crocantes e gotas de chocolate.",
          value: 6,
          quantity: 0,
        },
        pudim: {
          name: "Mini Pudim de Leite",
          description: "Pudim cremoso de leite condensado com calda de caramelo.",
          value: 6.5,
          quantity: 0,
        },
      },
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
      comidas: {
        cheeseburger: {
          name: "Cheeseburger da Praça",
          description: "Hambúrguer artesanal com queijo, alface, tomate e molho especial.",
          value: 16,
          quantity: 0,
        },
        hotDog: {
          name: "Hot Dog Completo",
          description: "Pão macio com salsicha, molho de tomate, milho e batata palha.",
          value: 12,
          quantity: 0,
        },
        bauru: {
          name: "Bauru de Presunto e Queijo",
          description: "Sanduíche prensado com presunto, queijo derretido e tomate.",
          value: 11,
          quantity: 0,
        },
        batataFrita: {
          name: "Batata Frita Individual",
          description: "Porção de batatas douradas e crocantes, perfeita para dividir.",
          value: 10,
          quantity: 0,
        },
      },
      bebidas: {
        milkshakeChocolate: {
          name: "Milk-shake de Chocolate",
          description: "Milk-shake gelado e cremoso, feito com sorvete de chocolate.",
          value: 14,
          quantity: 0,
        },
        limonada: {
          name: "Limonada Suíça",
          description: "Limonada cremosa e refrescante, preparada com limão.",
          value: 8,
          quantity: 0,
        },
        chaGelado: {
          name: "Chá Gelado de Pêssego",
          description: "Chá aromático com sabor de pêssego, servido bem gelado.",
          value: 7,
          quantity: 0,
        },
        aguaComGas: {
          name: "Água com Gás",
          description: "Água mineral gaseificada, servida em garrafa de 500 ml.",
          value: 4,
          quantity: 0,
        },
      },
      doces: {
        sorveteCasquinha: {
          name: "Sorvete de Casquinha",
          description: "Casquinha crocante com uma bola de sorvete à sua escolha.",
          value: 6,
          quantity: 0,
        },
        sundae: {
          name: "Sundae de Chocolate",
          description: "Sorvete cremoso com calda de chocolate e cobertura crocante.",
          value: 10,
          quantity: 0,
        },
        churros: {
          name: "Mini Churros",
          description: "Churros dourados recheados com doce de leite e açúcar com canela.",
          value: 8,
          quantity: 0,
        },
        tortaLimao: {
          name: "Fatia de Torta de Limão",
          description: "Torta com creme cítrico de limão e cobertura suave.",
          value: 9,
          quantity: 0,
        },
      },
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
      comidas: {
        croissant: {
          name: "Croissant de Queijo",
          description: "Croissant folhado e amanteigado, recheado com queijo derretido.",
          value: 9,
          quantity: 0,
        },
        tapioca: {
          name: "Tapioca de Frango",
          description: "Tapioca preparada na hora, com frango temperado e requeijão.",
          value: 12,
          quantity: 0,
        },
        quiche: {
          name: "Quiche de Alho-poró",
          description: "Quiche individual com massa delicada e recheio cremoso.",
          value: 10,
          quantity: 0,
        },
        paoIntegral: {
          name: "Sanduíche Integral",
          description: "Pão integral com queijo branco, peito de peru e folhas frescas.",
          value: 13,
          quantity: 0,
        },
      },
      bebidas: {
        cappuccino: {
          name: "Cappuccino Cremoso",
          description: "Café com leite vaporizado, espuma cremosa e toque de canela.",
          value: 8,
          quantity: 0,
        },
        latte: {
          name: "Café Latte",
          description: "Espresso equilibrado com leite vaporizado e uma camada suave de espuma.",
          value: 9,
          quantity: 0,
        },
        chocolateQuente: {
          name: "Chocolate Quente",
          description: "Bebida quente de chocolate, cremosa e perfeita para uma pausa.",
          value: 8.5,
          quantity: 0,
        },
        mochaGelado: {
          name: "Mocha Gelado",
          description: "Café espresso com chocolate e leite, servido com gelo.",
          value: 11,
          quantity: 0,
        },
      },
      doces: {
        boloCenoura: {
          name: "Fatia de Bolo de Cenoura",
          description: "Bolo fofinho de cenoura com cobertura generosa de chocolate.",
          value: 8,
          quantity: 0,
        },
        cheesecake: {
          name: "Mini Cheesecake de Frutas Vermelhas",
          description: "Sobremesa cremosa com base crocante e calda de frutas vermelhas.",
          value: 12,
          quantity: 0,
        },
        muffin: {
          name: "Muffin de Blueberry",
          description: "Bolinho macio com mirtilos, ideal para acompanhar o café.",
          value: 8.5,
          quantity: 0,
        },
        palhaItaliana: {
          name: "Palha Italiana",
          description: "Doce de brigadeiro com pedaços de biscoito e cobertura de açúcar.",
          value: 5,
          quantity: 0,
        },
      },
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
      comidas: {
        pratoFrango: {
          name: "Prato Feito de Frango Grelhado",
          description: "Frango grelhado com arroz, feijão e salada fresca do dia.",
          value: 22,
          quantity: 0,
        },
        strogonoff: {
          name: "Strogonoff de Frango",
          description: "Frango ao molho cremoso, acompanhado de arroz e batata palha.",
          value: 24,
          quantity: 0,
        },
        omelete: {
          name: "Omelete Completo",
          description: "Omelete recheado com queijo e tomate, servido com arroz e salada.",
          value: 18,
          quantity: 0,
        },
        parmegiana: {
          name: "Filé de Frango à Parmegiana",
          description: "Filé empanado com molho de tomate e queijo gratinado, acompanhado de arroz.",
          value: 26,
          quantity: 0,
        },
      },
      bebidas: {
        sucoAbacaxi: {
          name: "Suco de Abacaxi com Hortelã",
          description: "Suco natural de abacaxi com hortelã, leve e refrescante.",
          value: 8,
          quantity: 0,
        },
        sucoMaracuja: {
          name: "Suco Natural de Maracujá",
          description: "Suco preparado com polpa de maracujá e servido gelado.",
          value: 8,
          quantity: 0,
        },
        limonadaNatural: {
          name: "Limonada Natural",
          description: "Limão espremido na hora, com água e gelo.",
          value: 7,
          quantity: 0,
        },
        chaMate: {
          name: "Chá-Mate Gelado",
          description: "Chá-mate refrescante, ideal para acompanhar o almoço.",
          value: 6,
          quantity: 0,
        },
      },
      doces: {
        mousseMaracuja: {
          name: "Mousse de Maracujá",
          description: "Mousse aerada com sabor tropical e cobertura de calda de maracujá.",
          value: 7,
          quantity: 0,
        },
        pudimCoco: {
          name: "Pudim de Coco",
          description: "Pudim suave com coco e calda de caramelo.",
          value: 7.5,
          quantity: 0,
        },
        saladaFrutas: {
          name: "Salada de Frutas",
          description: "Mix de frutas da estação, servido fresco em porção individual.",
          value: 8,
          quantity: 0,
        },
        doceAbobora: {
          name: "Doce de Abóbora com Coco",
          description: "Doce caseiro de abóbora com coco ralado, servido em porção individual.",
          value: 6,
          quantity: 0,
        },
      },
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
      comidas: {
        bowlAcai: {
          name: "Açaí Tradicional 300 ml",
          description: "Açaí cremoso acompanhado de granola e banana fatiada.",
          value: 14,
          quantity: 0,
        },
        wrapFrango: {
          name: "Wrap de Frango",
          description: "Wrap integral com frango desfiado, cenoura e folhas frescas.",
          value: 16,
          quantity: 0,
        },
        sanduicheNatural: {
          name: "Sanduíche Natural de Atum",
          description: "Sanduíche leve com atum, cenoura, alface e creme de ricota.",
          value: 13,
          quantity: 0,
        },
        saladaGraos: {
          name: "Salada de Grãos",
          description: "Mix de grãos, tomate-cereja, cenoura e folhas com molho leve.",
          value: 15,
          quantity: 0,
        },
      },
      bebidas: {
        sucoVerde: {
          name: "Suco Verde",
          description: "Combinação refrescante de couve, limão, maçã e gengibre.",
          value: 10,
          quantity: 0,
        },
        vitaminaBanana: {
          name: "Vitamina de Banana",
          description: "Vitamina cremosa de banana preparada com leite.",
          value: 9,
          quantity: 0,
        },
        sucoMelancia: {
          name: "Suco de Melancia",
          description: "Suco leve e refrescante de melancia, servido gelado.",
          value: 8,
          quantity: 0,
        },
        aguaCoco: {
          name: "Água de Coco",
          description: "Bebida naturalmente refrescante, servida gelada.",
          value: 7,
          quantity: 0,
        },
      },
      doces: {
        bowlAcaiNutella: {
          name: "Açaí com Morango e Creme de Avelã",
          description: "Açaí cremoso com morangos frescos, granola e creme de avelã.",
          value: 20,
          quantity: 0,
        },
        overnightOats: {
          name: "Overnight Oats com Frutas",
          description: "Aveia hidratada com iogurte, banana e frutas da estação.",
          value: 12,
          quantity: 0,
        },
        iogurteGranola: {
          name: "Iogurte com Granola e Mel",
          description: "Iogurte cremoso com granola crocante e um toque de mel.",
          value: 9,
          quantity: 0,
        },
        trufaCacau: {
          name: "Trufa de Cacau",
          description: "Trufa de chocolate com cacau, ideal para matar a vontade de doce.",
          value: 5,
          quantity: 0,
        },
      },
    },
  },
];









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