export const products = [
  // Бумажная продукция - Бланки
  {
    id: 101,
    name: "Офисные бланки А4",
    description: "Набор офисных бланков для документов",
    price: "15 000 so'm",
    images: [
      "https://picsum.photos/seed/blanki1/200/200",
      "https://picsum.photos/seed/blanki1-2/200/200",
      "https://picsum.photos/seed/blanki1-3/200/200"
    ],
    category: "Бланки",
    rating: 4.5,
    reviews: 45,
    seller: "Канцелярский мир",
    trending: true,
    inStock: true
  },
  {
    id: 102,
    name: "Бланки для заявлений",
    description: "Стандартные бланки для официальных заявлений",
    price: "12 500 so'm",
    images: [
      "https://picsum.photos/seed/blanki2/200/200",
      "https://picsum.photos/seed/blanki2-2/200/200",
      "https://picsum.photos/seed/blanki2-3/200/200"
    ],
    category: "Бланки",
    rating: 4.2,
    reviews: 32,
    seller: "ОфисМаркет",
    trending: false,
    inStock: true
  },
  // ... (continues for other products in Бланки)
  
  // Бумажная продукция - Бумага для черчения
  {
    id: 401,
    name: "Бумага для черчения А3",
    description: "Плотная бумага для чертежных работ",
    price: "25 000 so'm",
    images: [
      "https://picsum.photos/seed/cherchenie1/200/200",
      "https://picsum.photos/seed/cherchenie1-2/200/200",
      "https://picsum.photos/seed/cherchenie1-3/200/200"
    ],
    category: "Бумага для черчения",
    rating: 4.7,
    reviews: 38,
    seller: "Творческая мастерская",
    trending: false,
    inStock: true
  },
  // ... (continues for other products)

  // For the additional items at the end
  {
    id: 1,
    name: "A4 Blanks",
    category: "blanks",
    price: 10,
    images: [
   "/images/pen.jpg",
      "/images/blank-2.jpg",
      "/images/blank-3.jpg"
    ]
  },
  {
    id: 2,
    name: "Blue Pen",
    category: "pens",
    price: 2,
    images: [
      "/images/pen.jpg",
      "/images/pen-2.jpg",
      "/images/pen-3.jpg"
    ]
  }
  // ... (continues for all products)
];