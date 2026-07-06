export const RESTAURANT = {
  name: "Luna Bistro",
  slogan: "Alta cocina bajo la luna",
  phoneRaw: "+52 55 1234 5678",
  phoneHref: "tel:+525512345678",
  whatsappHref: "https://wa.me/525512345678?text=Hola%2C%20quisiera%20reservar%20una%20mesa%20en%20Luna%20Bistro",
  email: "reservas@lunabistro.com",
  address: {
    street: "Av. de la Luna 128, Roma Norte",
    city: "Ciudad de México",
    country: "MX",
  },
  geo: {
    lat: 19.4168,
    lng: -99.1620,
  },
  mapEmbedSrc:
    "https://www.google.com/maps?q=Roma+Norte,+Ciudad+de+M%C3%A9xico&output=embed",
  hours: [
    { days: ["Tuesday", "Wednesday", "Thursday"], label: "Martes a jueves", opens: "13:00", closes: "23:00" },
    { days: ["Friday", "Saturday"], label: "Viernes y sábado", opens: "13:00", closes: "00:30" },
    { days: ["Sunday"], label: "Domingo", opens: "13:00", closes: "18:00" },
  ],
  socials: {
    instagram: "https://instagram.com/lunabistro",
    facebook: "https://facebook.com/lunabistro",
    tiktok: "https://tiktok.com/@lunabistro",
    linkedin: "https://linkedin.com/company/lunabistro",
  },
};

export const NAV_LINKS = [
  { label: "Historia", href: "#historia" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Menú", href: "#menu" },
  { label: "Galería", href: "#galeria" },
  { label: "Chefs", href: "#chefs" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Contacto", href: "#contacto" },
];

export const SPECIALTIES = [
  {
    name: "Risotto de hongos silvestres",
    description: "Arroz carnaroli, hongos porcini, parmesano curado 24 meses y aceite de trufa negra.",
    price: "$420",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Costilla braseada 12 horas",
    description: "Costilla de res en reducción de vino tinto, puré de papa trufada y vegetales de temporada.",
    price: "$580",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Pulpo a las brasas",
    description: "Pulpo español, puré de camote ahumado, chorizo ibérico y pimentón de la Vera.",
    price: "$490",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Tarta de chocolate 70%",
    description: "Ganache de chocolate ecuatoriano, crumble de avellana y helado de vainilla de Madagascar.",
    price: "$260",
    image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=1200&auto=format&fit=crop",
  },
];

export const MENU = {
  entradas: [
    { name: "Tartar de atún", description: "Atún aleta azul, aguacate, sésamo negro y soya dulce.", price: "$310" },
    { name: "Carpaccio de res", description: "Corte fino de res, alcaparras, parmesano y rúcula silvestre.", price: "$280" },
    { name: "Crema de calabaza asada", description: "Calabaza de temporada, crème fraîche y semillas tostadas.", price: "$190" },
    { name: "Vieiras a la plancha", description: "Vieiras selladas, puré de coliflor y beurre blanc de limón.", price: "$350" },
  ],
  fuertes: [
    { name: "Costilla braseada 12 horas", description: "Reducción de vino tinto, puré trufado y vegetales de temporada.", price: "$580" },
    { name: "Salmón a la parrilla", description: "Salmón noruego, quinoa negra, espárragos y salsa beurre blanc.", price: "$460" },
    { name: "Risotto de hongos silvestres", description: "Carnaroli, porcini, parmesano curado y aceite de trufa.", price: "$420" },
    { name: "Pato confitado", description: "Pierna de pato confitada, puré de manzana y jus de naranja.", price: "$510" },
  ],
  postres: [
    { name: "Tarta de chocolate 70%", description: "Ganache de chocolate ecuatoriano y helado de vainilla.", price: "$260" },
    { name: "Crème brûlée de lavanda", description: "Crema infusionada con lavanda y caramelo crujiente.", price: "$220" },
    { name: "Soufflé de maracuyá", description: "Soufflé tibio con corazón de maracuyá y coulis de frutos rojos.", price: "$240" },
  ],
  bebidas: [
    { name: "Copa de vino tinto reserva", description: "Selección de la casa, maridaje sugerido por el sommelier.", price: "$180" },
    { name: "Coctel Luna Llena", description: "Mezcal, licor de flor de saúco, limón y espuma de albahaca.", price: "$210" },
    { name: "Agua mineral con cítricos", description: "Agua mineral, romero fresco y cítricos de temporada.", price: "$90" },
  ],
};

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1200&auto=format&fit=crop",
];

export const TESTIMONIALS = [
  {
    name: "Carolina Méndez",
    role: "Crítica gastronómica",
    quote: "Una experiencia sensorial impecable. Cada plato cuenta una historia y el servicio está a la altura de los mejores restaurantes del mundo.",
  },
  {
    name: "Roberto Salinas",
    role: "Cliente frecuente",
    quote: "Luna Bistro redefinió lo que esperaba de una cena especial. El ambiente, la comida y la atención son simplemente excepcionales.",
  },
  {
    name: "Andrea Torres",
    role: "Foodie & bloguera",
    quote: "El pulpo a las brasas es una obra de arte. Volví tres veces en un mes y cada visita superó a la anterior.",
  },
];

export const CHEFS = [
  {
    name: "Chef Mateo Beltrán",
    role: "Chef Ejecutivo",
    bio: "Formado en Le Cordon Bleu y con más de 15 años de experiencia en cocinas de autor en Europa y Latinoamérica.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Chef Valeria Ochoa",
    role: "Sous Chef",
    bio: "Especialista en repostería de autor, encargada de reinventar los postres clásicos con técnicas contemporáneas.",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Diego Farías",
    role: "Sommelier",
    bio: "Curador de la carta de vinos, apasionado por los maridajes que elevan cada plato a una nueva dimensión.",
    image: "https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=800&auto=format&fit=crop",
  },
];

export const FAQS = [
  {
    question: "¿Necesito reservar con anticipación?",
    answer: "Recomendamos reservar con al menos 48 horas de anticipación, especialmente para fines de semana y fechas especiales.",
  },
  {
    question: "¿Tienen opciones vegetarianas o veganas?",
    answer: "Sí, contamos con un menú alternativo vegetariano y opciones veganas disponibles bajo petición previa.",
  },
  {
    question: "¿Cuál es el código de vestimenta?",
    answer: "Sugerimos vestimenta formal o semi-formal para disfrutar de la experiencia completa de Luna Bistro.",
  },
  {
    question: "¿Ofrecen espacios para eventos privados?",
    answer: "Contamos con un salón privado para grupos de hasta 20 personas, ideal para celebraciones y eventos corporativos.",
  },
  {
    question: "¿Tienen estacionamiento disponible?",
    answer: "Sí, ofrecemos servicio de valet parking sin costo adicional para nuestros comensales.",
  },
];
