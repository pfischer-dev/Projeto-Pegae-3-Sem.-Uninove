import cantinaCentralImg from "../assets/lanchoneteBorges.png";
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
    options: ['Salgados', 'Bebidas', 'Pratos Rápidos']
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
    options: ["Lanches", "Sorvetes", "Doces"],
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
    options: ["Café Especial", "Bolos", "Pães de Queijo"],
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
    options: ["Pratos Feitos", "Salgados", "Sucos Naturais"],
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
    options: ["Açaí", "Sucos Naturais", "Lanches Natural"],
  },   
]