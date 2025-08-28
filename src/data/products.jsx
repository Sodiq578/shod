export const products = [
  // Бумажная продукция - Бланки
  {
    id: 101,
    name: "Офисные бланки А4",
    description: "Набор офисных бланков для документов",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/blanki1/200/200",
    category: "Бланки",
    rating: 4.5,
    reviews: 45,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 102,
    name: "Бланки для заявлений",
    description: "Стандартные бланки для официальных заявлений",
    price: "12 500 so'm",
    image: "https://picsum.photos/seed/blanki2/200/200",
    category: "Бланки",
    rating: 4.2,
    reviews: 32,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 103,
    name: "Бланки счетов-фактур",
    description: "Специализированные бланки для бухгалтерии",
    price: "18 000 so'm",
    image: "https://picsum.photos/seed/blanki3/200/200",
    category: "Бланки",
    rating: 4.4,
    reviews: 28,
    seller: "Бухгалтерские решения",
    trending: true
  },
  {
    id: 104,
    name: "Цветные бланки для писем",
    description: "Элегантные цветные бланки для деловой переписки",
    price: "22 000 so'm",
    image: "https://picsum.photos/seed/blanki4/200/200",
    category: "Бланки",
    rating: 4.6,
    reviews: 37,
    seller: "Канцелярский мир",
    trending: false
  },

  // Бумажная продукция - Блокноты
  {
    id: 201,
    name: "Блокнот А5 в твердой обложке",
    description: "Стильный блокнот для записей",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/blocknot1/200/200",
    category: "Блокноты",
    rating: 4.7,
    reviews: 78,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 202,
    name: "Блокнот на спирали",
    description: "Удобный блокнот со спиральным креплением",
    price: "18 000 so'm",
    image: "https://picsum.photos/seed/blocknot2/200/200",
    category: "Блокноты",
    rating: 4.3,
    reviews: 56,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 203,
    name: "Ежедневник датированный",
    description: "Ежедневник с разметкой по датам на год",
    price: "45 000 so'm",
    image: "https://picsum.photos/seed/blocknot3/200/200",
    category: "Блокноты",
    rating: 4.8,
    reviews: 92,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 204,
    name: "Мини-блокнот карманный",
    description: "Компактный блокнот для быстрых заметок",
    price: "9 000 so'm",
    image: "https://picsum.photos/seed/blocknot4/200/200",
    category: "Блокноты",
    rating: 4.2,
    reviews: 41,
    seller: "ОфисМаркет",
    trending: false
  },

  // Бумажная продукция - Бумага для заметок
  {
    id: 301,
    name: "Стикеры разноцветные",
    description: "Набор цветных стикеров для заметок",
    price: "12 000 so'm",
    image: "https://picsum.photos/seed/notes1/200/200",
    category: "Бумага для заметок",
    rating: 4.5,
    reviews: 67,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 302,
    name: "Блокнот для записей с клеевой полосой",
    description: "Блокнот с отрывными листами на клеевой основе",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/notes2/200/200",
    category: "Бумага для заметок",
    rating: 4.3,
    reviews: 43,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 303,
    name: "Стикеры в форме стрелок",
    description: "Стикеры специальной формы для указания важного",
    price: "8 500 so'm",
    image: "https://picsum.photos/seed/notes3/200/200",
    category: "Бумага для заметок",
    rating: 4.4,
    reviews: 29,
    seller: "Канцелярский мир",
    trending: true
  },

  // Бумажная продукция - Бумага для черчения
  {
    id: 401,
    name: "Бумага для черчения А3",
    description: "Плотная бумага для чертежных работ",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/cherchenie1/200/200",
    category: "Бумага для черчения",
    rating: 4.7,
    reviews: 38,
    seller: "Творческая мастерская",
    trending: false
  },
  {
    id: 402,
    name: "Бумага для черчения А4",
    description: "Стандартная чертежная бумага",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/cherchenie2/200/200",
    category: "Бумага для черчения",
    rating: 4.6,
    reviews: 45,
    seller: "Творческая мастерская",
    trending: true
  },
  {
    id: 403,
    name: "Ватман для черчения",
    description: "Большой лист ватмана для профессиональных чертежей",
    price: "12 000 so'm",
    image: "https://picsum.photos/seed/cherchenie3/200/200",
    category: "Бумага для черчения",
    rating: 4.5,
    reviews: 32,
    seller: "Творческая мастерская",
    trending: false
  },

  // Бумажная продукция - Бумага копировальная
  {
    id: 501,
    name: "Копировальная бумага синяя",
    description: "Копирка для создания копий документов",
    price: "8 000 so'm",
    image: "https://picsum.photos/seed/copy1/200/200",
    category: "Бумага копировальная",
    rating: 4.1,
    reviews: 21,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 502,
    name: "Копировальная бумага черная",
    description: "Набор копировальной бумаги для канцелярских нужд",
    price: "8 500 so'm",
    image: "https://picsum.photos/seed/copy2/200/200",
    category: "Бумага копировальная",
    rating: 4.2,
    reviews: 18,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 503,
    name: "Копирка самокопирующаяся",
    description: "Современная самокопирующаяся бумага для бланков",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/copy3/200/200",
    category: "Бумага копировальная",
    rating: 4.4,
    reviews: 26,
    seller: "Канцелярский мир",
    trending: true
  },

  // Бумажная продукция - Бумага самоклеящаяся
  {
    id: 601,
    name: "Самоклеящиеся этикетки А4",
    description: "Листы с самоклеящейся основой для печати этикеток",
    price: "22 000 so'm",
    image: "https://picsum.photos/seed/sticky1/200/200",
    category: "Бумага самоклеящаяся",
    rating: 4.6,
    reviews: 54,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 602,
    name: "Самоклеящаяся бумага для ценников",
    description: "Специальная бумага для печати ценников и ярлыков",
    price: "18 000 so'm",
    image: "https://picsum.photos/seed/sticky2/200/200",
    category: "Бумага самоклеящаяся",
    rating: 4.5,
    reviews: 37,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 603,
    name: "Самоклеящиеся листы для флипчарта",
    description: "Большие листы для презентаций с клеевой основой",
    price: "35 000 so'm",
    image: "https://picsum.photos/seed/sticky3/200/200",
    category: "Бумага самоклеящаяся",
    rating: 4.3,
    reviews: 29,
    seller: "Канцелярский мир",
    trending: true
  },

  // Бумажная продукция - Бумага формата
  {
    id: 701,
    name: "Бумага офисная А4 500 листов",
    description: "Стандартная офисная бумага для принтера",
    price: "45 000 so'm",
    image: "https://picsum.photos/seed/format1/200/200",
    category: "Бумага формата",
    rating: 4.8,
    reviews: 126,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 702,
    name: "Бумага офисная А3",
    description: "Бумага формата А3 для принтеров и копиров",
    price: "65 000 so'm",
    image: "https://picsum.photos/seed/format2/200/200",
    category: "Бумага формата",
    rating: 4.7,
    reviews: 78,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 703,
    name: "Бумага плотная для визиток",
    description: "Специальная плотная бумага для печати визиток",
    price: "38 000 so'm",
    image: "https://picsum.photos/seed/format3/200/200",
    category: "Бумага формата",
    rating: 4.6,
    reviews: 42,
    seller: "Канцелярский мир",
    trending: true
  },

  // Бумажная продукция - Бумага цветная для принтеров
  {
    id: 801,
    name: "Цветная бумага для принтера",
    description: "Набор цветной бумаги для творчества и офиса",
    price: "32 000 so'm",
    image: "https://picsum.photos/seed/color1/200/200",
    category: "Бумага цветная для принтеров",
    rating: 4.5,
    reviews: 63,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 802,
    name: "Бумага пастельных тонов",
    description: "Набор бумаги нежных пастельных цветов",
    price: "38 000 so'm",
    image: "https://picsum.photos/seed/color2/200/200",
    category: "Бумага цветная для принтеров",
    rating: 4.7,
    reviews: 47,
    seller: "Творческая мастерская",
    trending: false
  },
  {
    id: 803,
    name: "Бумага металлизированная",
    description: "Цветная бумага с металлическим эффектом",
    price: "45 000 so'm",
    image: "https://picsum.photos/seed/color3/200/200",
    category: "Бумага цветная для принтеров",
    rating: 4.4,
    reviews: 35,
    seller: "Творческая мастерская",
    trending: true
  },

  // Для творчества - Акварель
  {
    id: 901,
    name: "Акварельные краски 12 цветов",
    description: "Набор акварельных красок для художников",
    price: "65 000 so'm",
    image: "https://picsum.photos/seed/akvarel1/200/200",
    category: "Акварель",
    rating: 4.8,
    reviews: 124,
    seller: "Творческая мастерская",
    trending: true
  },
  {
    id: 902,
    name: "Акварель медовая 24 цвета",
    description: "Профессиональные акварельные краски",
    price: "120 000 so'm",
    image: "https://picsum.photos/seed/akvarel2/200/200",
    category: "Акварель",
    rating: 4.9,
    reviews: 89,
    seller: "Творческая мастерская",
    trending: true
  },
  {
    id: 903,
    name: "Акварельные краски 36 цветов",
    description: "Расширенный набор для профессиональных художников",
    price: "185 000 so'm",
    image: "https://picsum.photos/seed/akvarel3/200/200",
    category: "Акварель",
    rating: 4.9,
    reviews: 67,
    seller: "Творческая мастерская",
    trending: false
  },
  {
    id: 904,
    name: "Акварельные карандаши 18 шт",
    description: "Акварельные карандаши для различных техник рисования",
    price: "95 000 so'm",
    image: "https://picsum.photos/seed/akvarel4/200/200",
    category: "Акварель",
    rating: 4.7,
    reviews: 52,
    seller: "Творческая мастерская",
    trending: true
  },

  // Для творчества - Акриловые краски
  {
    id: 1001,
    name: "Акриловые краски 6 цветов",
    description: "Базовый набор акриловых красок",
    price: "45 000 so'm",
    image: "https://picsum.photos/seed/akril1/200/200",
    category: "Акриловые краски",
    rating: 4.6,
    reviews: 67,
    seller: "Творческая мастерская",
    trending: false
  },
  {
    id: 1002,
    name: "Акриловые краски 12 цветов",
    description: "Расширенный набор акриловых красок",
    price: "85 000 so'm",
    image: "https://picsum.photos/seed/akril2/200/200",
    category: "Акриловые краски",
    rating: 4.7,
    reviews: 92,
    seller: "Творческая мастерская",
    trending: true
  },
  {
    id: 1003,
    name: "Акриловые краски 24 цвета",
    description: "Профессиональный набор для художников",
    price: "160 000 so'm",
    image: "https://picsum.photos/seed/akril3/200/200",
    category: "Акриловые краски",
    rating: 4.8,
    reviews: 58,
    seller: "Творческая мастерская",
    trending: true
  },
  {
    id: 1004,
    name: "Акриловые краски металлик",
    description: "Набор акриловых красок с металлическим эффектом",
    price: "75 000 so'm",
    image: "https://picsum.photos/seed/akril4/200/200",
    category: "Акриловые краски",
    rating: 4.5,
    reviews: 43,
    seller: "Творческая мастерская",
    trending: false
  },

  // Для творчества - Аксессуары для творчества
  {
    id: 1101,
    name: "Набор кистей для рисования",
    description: "Комплект из 10 кистей разных размеров",
    price: "55 000 so'm",
    image: "https://picsum.photos/seed/accessory1/200/200",
    category: "Аксессуары для творчества",
    rating: 4.7,
    reviews: 84,
    seller: "Творческая мастерская",
    trending: true
  },
  {
    id: 1102,
    name: "Палитра для смешивания красок",
    description: "Пластиковая палитра с углублениями для красок",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/accessory2/200/200",
    category: "Аксессуары для творчества",
    rating: 4.4,
    reviews: 37,
    seller: "Творческая мастерская",
    trending: false
  },
  {
    id: 1103,
    name: "Мольберт напольный",
    description: "Деревянный мольберт для художников",
    price: "220 000 so'm",
    image: "https://picsum.photos/seed/accessory3/200/200",
    category: "Аксессуары для творчества",
    rating: 4.6,
    reviews: 46,
    seller: "Творческая мастерская",
    trending: true
  },
  {
    id: 1104,
    name: "Чехол для кистей",
    description: "Кожаный чехол для переноски кистей",
    price: "35 000 so'm",
    image: "https://picsum.photos/seed/accessory4/200/200",
    category: "Аксессуары для творчества",
    rating: 4.3,
    reviews: 29,
    seller: "Творческая мастерская",
    trending: false
  },

  // Для творчества - Восковые карандаши и мелки
  {
    id: 1201,
    name: "Восковые мелки 24 цвета",
    description: "Набор восковых мелков для детского творчества",
    price: "28 000 so'm",
    image: "https://picsum.photos/seed/wax1/200/200",
    category: "Восковые карандаши и мелки",
    rating: 4.5,
    reviews: 63,
    seller: "Творческая мастерская",
    trending: true
  },
  {
    id: 1202,
    name: "Масляная пастель 12 цветов",
    description: "Профессиональная масляная пастель для художников",
    price: "65 000 so'm",
    image: "https://picsum.photos/seed/wax2/200/200",
    category: "Восковые карандаши и мелки",
    rating: 4.7,
    reviews: 47,
    seller: "Творческая мастерская",
    trending: false
  },
  {
    id: 1203,
    name: "Восковые карандаши 18 шт",
    description: "Набор восковых карандашей для рисования",
    price: "32 000 so'm",
    image: "https://picsum.photos/seed/wax3/200/200",
    category: "Восковые карандаши и мелки",
    rating: 4.4,
    reviews: 38,
    seller: "Творческая мастерская",
    trending: true
  },

  // Для творчества - Выжигание
  {
    id: 1301,
    name: "Выжигатель по дереву",
    description: "Набор для выжигания с различными насадками",
    price: "85 000 so'm",
    image: "https://picsum.photos/seed/burn1/200/200",
    category: "Выжигание",
    rating: 4.6,
    reviews: 52,
    seller: "Творческая мастерская",
    trending: true
  },
  {
    id: 1302,
    name: "Доски для выжигания",
    description: "Набор подготовленных деревянных досок",
    price: "35 000 so'm",
    image: "https://picsum.photos/seed/burn2/200/200",
    category: "Выжигание",
    rating: 4.5,
    reviews: 41,
    seller: "Творческая мастерская",
    trending: false
  },
  {
    id: 1303,
    name: "Набор насадок для выжигателя",
    description: "Дополнительные насадки для различных техник выжигания",
    price: "28 000 so'm",
    image: "https://picsum.photos/seed/burn3/200/200",
    category: "Выжигание",
    rating: 4.4,
    reviews: 33,
    seller: "Творческая мастерская",
    trending: true
  },

  // Для творчества - Вышивка и плетение
  {
    id: 1401,
    name: "Набор для вышивания",
    description: "Комплект для начинающих с пяльцами и нитками",
    price: "75 000 so'm",
    image: "https://picsum.photos/seed/embroidery1/200/200",
    category: "Вышивка и плетение",
    rating: 4.7,
    reviews: 68,
    seller: "Творческая мастерская",
    trending: true
  },
  {
    id: 1402,
    name: "Пяльцы для вышивания",
    description: "Деревянные пяльцы разных размеров",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/embroidery2/200/200",
    category: "Вышивка и плетение",
    rating: 4.5,
    reviews: 47,
    seller: "Творческая мастерская",
    trending: false
  },
  {
    id: 1403,
    name: "Набор мулине",
    description: "Набор разноцветных ниток для вышивания",
    price: "45 000 so'm",
    image: "https://picsum.photos/seed/embroidery3/200/200",
    category: "Вышивка и плетение",
    rating: 4.6,
    reviews: 59,
    seller: "Творческая мастерская",
    trending: true
  },

  // Для творчества - Гравюра
  {
    id: 1501,
    name: "Набор для гравюры",
    description: "Комплект для создания гравюр с инструментами",
    price: "95 000 so'm",
    image: "https://picsum.photos/seed/engraving1/200/200",
    category: "Гравюра",
    rating: 4.5,
    reviews: 36,
    seller: "Творческая мастерская",
    trending: false
  },
  {
    id: 1502,
    name: "Гравюрные пластины",
    description: "Набор металлических пластин для гравировки",
    price: "55 000 so'm",
    image: "https://picsum.photos/seed/engraving2/200/200",
    category: "Гравюра",
    rating: 4.4,
    reviews: 28,
    seller: "Творческая мастерская",
    trending: true
  },
  {
    id: 1503,
    name: "Инструменты для гравировки",
    description: "Профессиональные инструменты для создания гравюр",
    price: "75 000 so'm",
    image: "https://picsum.photos/seed/engraving3/200/200",
    category: "Гравюра",
    rating: 4.6,
    reviews: 42,
    seller: "Творческая мастерская",
    trending: true
  },

  // Для творчества - Гуашь
  {
    id: 1601,
    name: "Гуашь 12 цветов",
    description: "Набор гуашевых красок для художников",
    price: "55 000 so'm",
    image: "https://picsum.photos/seed/gouache1/200/200",
    category: "Гуашь",
    rating: 4.7,
    reviews: 74,
    seller: "Творческая мастерская",
    trending: true
  },
  {
    id: 1602,
    name: "Гуашь 24 цвета",
    description: "Расширенный набор гуашевых красок",
    price: "95 000 so'm",
    image: "https://picsum.photos/seed/gouache2/200/200",
    category: "Гуашь",
    rating: 4.8,
    reviews: 58,
    seller: "Творческая мастерская",
    trending: false
  },
  {
    id: 1603,
    name: "Гуашь художественная",
    description: "Профессиональная гуашь для серьезных работ",
    price: "120 000 so'm",
    image: "https://picsum.photos/seed/gouache3/200/200",
    category: "Гуашь",
    rating: 4.9,
    reviews: 46,
    seller: "Творческая мастерская",
    trending: true
  },

  // Для творчества - Доски для лепки
  {
    id: 1701,
    name: "Доска для лепки А4",
    description: "Пластиковая доска для работы с пластилином",
    price: "18 000 so'm",
    image: "https://picsum.photos/seed/board1/200/200",
    category: "Доски для лепки",
    rating: 4.4,
    reviews: 39,
    seller: "Творческая мастерская",
    trending: false
  },
  {
    id: 1702,
    name: "Набор досок для лепки",
    description: "Комплект из 3 досок разных размеров",
    price: "45 000 so'm",
    image: "https://picsum.photos/seed/board2/200/200",
    category: "Доски для лепки",
    rating: 4.5,
    reviews: 32,
    seller: "Творческая мастерская",
    trending: true
  },
  {
    id: 1703,
    name: "Стек для лепки",
    description: "Набор инструментов для работы с пластилином",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/board3/200/200",
    category: "Доски для лепки",
    rating: 4.3,
    reviews: 27,
    seller: "Творческая мастерская",
    trending: false
  },

  // Игры - Для компьютера
  {
    id: 1801,
    name: "Игровая мышь",
    description: "Высокоточная игровая мышь",
    price: "250 000 so'm",
    image: "https://picsum.photos/seed/game1/200/200",
    category: "Для компьютера",
    rating: 4.5,
    reviews: 156,
    seller: "GameTech",
    trending: true
  },
  {
    id: 1802,
    name: "Игровая клавиатура",
    description: "Механическая клавиатура для геймеров",
    price: "380 000 so'm",
    image: "https://picsum.photos/seed/game2/200/200",
    category: "Для компьютера",
    rating: 4.6,
    reviews: 132,
    seller: "GameTech",
    trending: true
  },
  {
    id: 1803,
    name: "Игровой коврик",
    description: "Большой коврик для компьютерной мыши",
    price: "45 000 so'm",
    image: "https://picsum.photos/seed/game3/200/200",
    category: "Для компьютера",
    rating: 4.4,
    reviews: 87,
    seller: "GameTech",
    trending: false
  },
  {
    id: 1804,
    name: "Геймпад для ПК",
    description: "Беспроводной геймпад для компьютерных игр",
    price: "220 000 so'm",
    image: "https://picsum.photos/seed/game4/200/200",
    category: "Для компьютера",
    rating: 4.5,
    reviews: 94,
    seller: "GameTech",
    trending: true
  },

  // Канцелярские аксессуары - Папки
  {
    id: 1901,
    name: "Папка-скоросшиватель",
    description: "Папка с механизмом для скрепления документов",
    price: "8 000 so'm",
    image: "https://picsum.photos/seed/papka1/200/200",
    category: "Папки",
    rating: 4.2,
    reviews: 43,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 1902,
    name: "Папка с зажимом",
    description: "Папка с металлическим зажимом для документов",
    price: "12 000 so'm",
    image: "https://picsum.photos/seed/papka2/200/200",
    category: "Папки",
    rating: 4.4,
    reviews: 57,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 1903,
    name: "Папка-регистратор",
    description: "Большая папка для хранения документов",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/papka3/200/200",
    category: "Папки",
    rating: 4.5,
    reviews: 64,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 1904,
    name: "Папка на кнопке",
    description: "Папка с кнопочным механизмом закрытия",
    price: "10 000 so'm",
    image: "https://picsum.photos/seed/papka4/200/200",
    category: "Папки",
    rating: 4.3,
    reviews: 38,
    seller: "ОфисМаркет",
    trending: false
  },

  // Канцелярские аксессуары - Файлы
  {
    id: 2001,
    name: "Файлы для документов А4",
    description: "Набор прозрачных файлов для хранения документов",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/file1/200/200",
    category: "Файлы",
    rating: 4.5,
    reviews: 72,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 2002,
    name: "Файлы на кольцах",
    description: "Файлы с перфорацией для подшивки в папки",
    price: "18 000 so'm",
    image: "https://picsum.photos/seed/file2/200/200",
    category: "Файлы",
    rating: 4.4,
    reviews: 53,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 2003,
    name: "Файлы цветные",
    description: "Набор цветных файлов для сортировки документов",
    price: "20 000 so'm",
    image: "https://picsum.photos/seed/file3/200/200",
    category: "Файлы",
    rating: 4.6,
    reviews: 47,
    seller: "ОфисМаркет",
    trending: true
  },

  // Канцелярские аксессуары - Обложки для документов
  {
    id: 2101,
    name: "Обложка для паспорта",
    description: "Кожаная обложка для паспорта",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/cover1/200/200",
    category: "Обложки для документов",
    rating: 4.5,
    reviews: 58,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 2102,
    name: "Обложка для удостоверений",
    description: "Универсальная обложка для различных документов",
    price: "18 000 so'm",
    image: "https://picsum.photos/seed/cover2/200/200",
    category: "Обложки для документов",
    rating: 4.3,
    reviews: 42,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 2103,
    name: "Обложка для трудовой книжки",
    description: "Специальная обложка для трудовой книжки",
    price: "12 000 so'm",
    image: "https://picsum.photos/seed/cover3/200/200",
    category: "Обложки для документов",
    rating: 4.4,
    reviews: 36,
    seller: "ОфисМаркет",
    trending: true
  },

  // Канцелярские аксессуары - Канцелярские наборы
  {
    id: 2201,
    name: "Настольный набор руководителя",
    description: "Комплект канцелярских принадлежностей для офиса",
    price: "85 000 so'm",
    image: "https://picsum.photos/seed/set1/200/200",
    category: "Канцелярские наборы",
    rating: 4.7,
    reviews: 64,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 2202,
    name: "Письменный набор для школьника",
    description: "Набор канцелярии для ученика",
    price: "55 000 so'm",
    image: "https://picsum.photos/seed/set2/200/200",
    category: "Канцелярские наборы",
    rating: 4.6,
    reviews: 78,
    seller: "Канцелярский мир",
    trending: false
  },
  {
    id: 2203,
    name: "Мини-набор для путешествий",
    description: "Компактный набор канцелярии для командировок",
    price: "35 000 so'm",
    image: "https://picsum.photos/seed/set3/200/200",
    category: "Канцелярские наборы",
    rating: 4.4,
    reviews: 43,
    seller: "Канцелярский мир",
    trending: true
  },

  // Канцелярские аксессуары - Подставки для ручек
  {
    id: 2301,
    name: "Подставка для ручек деревянная",
    description: "Элегантная деревянная подставка для письменных принадлежностей",
    price: "28 000 so'm",
    image: "https://picsum.photos/seed/penstand1/200/200",
    category: "Подставки для ручек",
    rating: 4.5,
    reviews: 47,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 2302,
    name: "Подставка для ручек металлическая",
    description: "Стильная металлическая подставка для офиса",
    price: "35 000 so'm",
    image: "https://picsum.photos/seed/penstand2/200/200",
    category: "Подставки для ручек",
    rating: 4.6,
    reviews: 39,
    seller: "Канцелярский мир",
    trending: false
  },
  {
    id: 2303,
    name: "Подставка для ручек и канцелярии",
    description: "Многофункциональная подставка с отделениями",
    price: "45 000 so'm",
    image: "https://picsum.photos/seed/penstand3/200/200",
    category: "Подставки для ручек",
    rating: 4.4,
    reviews: 32,
    seller: "Канцелярский мир",
    trending: true
  },

  // Канцелярские аксессуары - Лотки для бумаг
  {
    id: 2401,
    name: "Лоток для бумаг вертикальный",
    description: "Вертикальный лоток для хранения документов",
    price: "22 000 so'm",
    image: "https://picsum.photos/seed/tray1/200/200",
    category: "Лотки для бумаг",
    rating: 4.3,
    reviews: 41,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 2402,
    name: "Лоток для бумаг горизонтальный",
    description: "Горизонтальный лоток для сортировки документов",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/tray2/200/200",
    category: "Лотки для бумаг",
    rating: 4.5,
    reviews: 53,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 2403,
    name: "Набор лотков для бумаг",
    description: "Комплект из 3 лотков для организации документов",
    price: "65 000 so'm",
    image: "https://picsum.photos/seed/tray3/200/200",
    category: "Лотки для бумаг",
    rating: 4.6,
    reviews: 47,
    seller: "ОфисМаркет",
    trending: true
  },

  // Офисная техника - Аксессуары для мобильного телефона
  {
    id: 2501,
    name: "Держатель для телефона",
    description: "Универсальный держатель для смартфона",
    price: "35 000 so'm",
    image: "https://picsum.photos/seed/phone1/200/200",
    category: "Аксессуары для мобильного телефона",
    rating: 4.4,
    reviews: 68,
    seller: "TechOffice",
    trending: true
  },
  {
    id: 2502,
    name: "Стилус для сенсорных экранов",
    description: "Точный стилус для планшетов и смартфонов",
    price: "28 000 so'm",
    image: "https://picsum.photos/seed/phone2/200/200",
    category: "Аксессуары для мобильного телефона",
    rating: 4.3,
    reviews: 52,
    seller: "TechOffice",
    trending: false
  },
  {
    id: 2503,
    name: "Портативное зарядное устройство",
    description: "Power bank для зарядки мобильных устройств",
    price: "85 000 so'm",
    image: "https://picsum.photos/seed/phone3/200/200",
    category: "Аксессуары для мобильного телефона",
    rating: 4.6,
    reviews: 94,
    seller: "TechOffice",
    trending: true
  },

  // Офисная техника - Батарейки
  {
    id: 2601,
    name: "Батарейки AA",
    description: "Набор щелочных батареек размера AA",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/battery1/200/200",
    category: "Батарейки",
    rating: 4.5,
    reviews: 87,
    seller: "TechOffice",
    trending: true
  },
  {
    id: 2602,
    name: "Батарейки AAA",
    description: "Набор щелочных батареек размера AAA",
    price: "22 000 so'm",
    image: "https://picsum.photos/seed/battery2/200/200",
    category: "Батарейки",
    rating: 4.4,
    reviews: 73,
    seller: "TechOffice",
    trending: false
  },
  {
    id: 2603,
    name: "Батарейки для часов",
    description: "Специализированные батарейки для часов и мелкой техники",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/battery3/200/200",
    category: "Батарейки",
    rating: 4.3,
    reviews: 48,
    seller: "TechOffice",
    trending: true
  },

  // Офисная техника - Ламинаторы
  {
    id: 2701,
    name: "Ламинатор А4",
    description: "Офисный ламинатор для документов формата А4",
    price: "450 000 so'm",
    image: "https://picsum.photos/seed/laminate1/200/200",
    category: "Ламинаторы",
    rating: 4.6,
    reviews: 42,
    seller: "TechOffice",
    trending: true
  },
  {
    id: 2702,
    name: "Пленка для ламинатора",
    description: "Набор пленок для ламинирования документов",
    price: "55 000 so'm",
    image: "https://picsum.photos/seed/laminate2/200/200",
    category: "Ламинаторы",
    rating: 4.5,
    reviews: 37,
    seller: "TechOffice",
    trending: false
  },
  {
    id: 2703,
    name: "Карманный ламинатор",
    description: "Компактный ламинатор для occasional использования",
    price: "220 000 so'm",
    image: "https://picsum.photos/seed/laminate3/200/200",
    category: "Ламинаторы",
    rating: 4.4,
    reviews: 29,
    seller: "TechOffice",
    trending: true
  },

  // Офисная техника - Мыши и клавиатуры
  {
    id: 2801,
    name: "Компьютерная мышь беспроводная",
    description: "Беспроводная мышь для офисного использования",
    price: "95 000 so'm",
    image: "https://picsum.photos/seed/mouse1/200/200",
    category: "Мыши и клавиатуры",
    rating: 4.5,
    reviews: 78,
    seller: "TechOffice",
    trending: true
  },
  {
    id: 2802,
    name: "Офисная клавиатура",
    description: "Проводная клавиатура для офиса",
    price: "85 000 so'm",
    image: "https://picsum.photos/seed/keyboard1/200/200",
    category: "Мыши и клавиатуры",
    rating: 4.4,
    reviews: 64,
    seller: "TechOffice",
    trending: false
  },
  {
    id: 2803,
    name: "Комбо мышь и клавиатура",
    description: "Набор беспроводных мыши и клавиатуры",
    price: "150 000 so'm",
    image: "https://picsum.photos/seed/combo1/200/200",
    category: "Мыши и клавиатуры",
    rating: 4.6,
    reviews: 89,
    seller: "TechOffice",
    trending: true
  },

  // Офисная техника - Настольные лампы
  {
    id: 2901,
    name: "Настольная лампа LED",
    description: "Современная светодиодная лампа для рабочего стола",
    price: "120 000 so'm",
    image: "https://picsum.photos/seed/lamp1/200/200",
    category: "Настольные лампы",
    rating: 4.7,
    reviews: 96,
    seller: "TechOffice",
    trending: true
  },
  {
    id: 2902,
    name: "Лампа с регулируемой яркостью",
    description: "Настольная лампа с функцией диммера",
    price: "145 000 so'm",
    image: "https://picsum.photos/seed/lamp2/200/200",
    category: "Настольные лампы",
    rating: 4.6,
    reviews: 73,
    seller: "TechOffice",
    trending: false
  },
  {
    id: 2903,
    name: "Лампа с USB портом",
    description: "Настольная лампа с дополнительным USB разъемом",
    price: "135 000 so'm",
    image: "https://picsum.photos/seed/lamp3/200/200",
    category: "Настольные лампы",
    rating: 4.5,
    reviews: 68,
    seller: "TechOffice",
    trending: true
  },

  // Офисная техника - Переплетная машина
  {
    id: 3001,
    name: "Переплетная машина",
    description: "Устройство для переплета документов",
    price: "850 000 so'm",
    image: "https://picsum.photos/seed/binding1/200/200",
    category: "Переплетная машина",
    rating: 4.4,
    reviews: 28,
    seller: "TechOffice",
    trending: false
  },
  {
    id: 3002,
    name: "Пластиковые пружины для переплета",
    description: "Набор пружин для переплетных машин",
    price: "45 000 so'm",
    image: "https://picsum.photos/seed/binding2/200/200",
    category: "Переплетная машина",
    rating: 4.3,
    reviews: 32,
    seller: "TechOffice",
    trending: true
  },
  {
    id: 3003,
    name: "Обложки для переплета",
    description: "Прозрачные обложки для переплетенных документов",
    price: "35 000 so'm",
    image: "https://picsum.photos/seed/binding3/200/200",
    category: "Переплетная машина",
    rating: 4.5,
    reviews: 26,
    seller: "TechOffice",
    trending: false
  },

  // Офисная техника - Принтеры и МФУ
  {
    id: 3101,
    name: "Лазерный принтер",
    description: "Монохромный лазерный принтер",
    price: "2 500 000 so'm",
    image: "https://picsum.photos/seed/printer1/200/200",
    category: "Принтеры и МФУ",
    rating: 4.7,
    reviews: 87,
    seller: "TechOffice",
    trending: true
  },
  {
    id: 3102,
    name: "МФУ струйное",
    description: "Многофункциональное устройство 3-в-1",
    price: "1 800 000 so'm",
    image: "https://picsum.photos/seed/mfu1/200/200",
    category: "Принтеры и МФУ",
    rating: 4.5,
    reviews: 64,
    seller: "TechOffice",
    trending: false
  },
  {
    id: 3103,
    name: "Цветной лазерный принтер",
    description: "Принтер для цветной печати документов",
    price: "3 200 000 so'm",
    image: "https://picsum.photos/seed/printer2/200/200",
    category: "Принтеры и МФУ",
    rating: 4.8,
    reviews: 52,
    seller: "TechOffice",
    trending: true
  },

  // Офисная техника - Резак
  {
    id: 3201,
    name: "Резак для бумаги А4",
    description: "Настольный резак для бумаги формата А4",
    price: "220 000 so'm",
    image: "https://picsum.photos/seed/cutter1/200/200",
    category: "Резак",
    rating: 4.5,
    reviews: 43,
    seller: "TechOffice",
    trending: true
  },
  {
    id: 3202,
    name: "Дисковый резак",
    description: "Резак с дисковым ножом для точной резки",
    price: "185 000 so'm",
    image: "https://picsum.photos/seed/cutter2/200/200",
    category: "Резак",
    rating: 4.4,
    reviews: 37,
    seller: "TechOffice",
    trending: false
  },
  {
    id: 3203,
    name: "Сменные лезвия для резака",
    description: "Набор запасных лезвий для бумажных резаков",
    price: "45 000 so'm",
    image: "https://picsum.photos/seed/cutter3/200/200",
    category: "Резак",
    rating: 4.3,
    reviews: 29,
    seller: "TechOffice",
    trending: true
  },

  // Офисные товары - Степлеры
  {
    id: 3301,
    name: "Степлер металлический",
    description: "Надежный степлер для офиса",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/stapler1/200/200",
    category: "Степлеры",
    rating: 4.3,
    reviews: 38,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 3302,
    name: "Степлер компактный",
    description: "Небольшой степлер для домашнего использования",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/stapler2/200/200",
    category: "Степлеры",
    rating: 4.1,
    reviews: 29,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 3303,
    name: "Степлер для большого объема бумаги",
    description: "Мощный степлер для скрепления толстых документов",
    price: "45 000 so'm",
    image: "https://picsum.photos/seed/stapler3/200/200",
    category: "Степлеры",
    rating: 4.6,
    reviews: 42,
    seller: "ОфисМаркет",
    trending: true
  },

  // Офисные товары - Дыроколы
  {
    id: 3401,
    name: "Дырокол на 2 отверстия",
    description: "Стандартный дырокол для офисных документов",
    price: "22 000 so'm",
    image: "https://picsum.photos/seed/punch1/200/200",
    category: "Дыроколы",
    rating: 4.4,
    reviews: 47,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 3402,
    name: "Дырокол на 4 отверстия",
    description: "Дырокол для специальных систем архивации",
    price: "35 000 so'm",
    image: "https://picsum.photos/seed/punch2/200/200",
    category: "Дыроколы",
    rating: 4.3,
    reviews: 32,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 3403,
    name: "Дырокол карманный",
    description: "Компактный дырокол для occasional использования",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/punch3/200/200",
    category: "Дыроколы",
    rating: 4.2,
    reviews: 28,
    seller: "ОфисМаркет",
    trending: false
  },

  // Офисные товары - Скрепки
  {
    id: 3501,
    name: "Скрепки металлические",
    description: "Набор стандартных металлических скрепок",
    price: "5 000 so'm",
    image: "https://picsum.photos/seed/clip1/200/200",
    category: "Скрепки",
    rating: 4.5,
    reviews: 63,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 3502,
    name: "Скрепки цветные",
    description: "Набор скрепок разных цветов",
    price: "7 000 so'm",
    image: "https://picsum.photos/seed/clip2/200/200",
    category: "Скрепки",
    rating: 4.4,
    reviews: 48,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 3503,
    name: "Скрепки пластиковые",
    description: "Набор пластиковых скрепок для документов",
    price: "8 500 so'm",
    image: "https://picsum.photos/seed/clip3/200/200",
    category: "Скрепки",
    rating: 4.3,
    reviews: 37,
    seller: "ОфисМаркет",
    trending: true
  },

  // Офисные товары - Корректоры
  {
    id: 3601,
    name: "Корректор-ручка",
    description: "Корректор в форме ручки для точного исправления",
    price: "8 000 so'm",
    image: "https://picsum.photos/seed/corrector1/200/200",
    category: "Корректоры",
    rating: 4.4,
    reviews: 52,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 3602,
    name: "Корректор с кисточкой",
    description: "Жидкий корректор с кисточкой для больших областей",
    price: "12 000 so'm",
    image: "https://picsum.photos/seed/corrector2/200/200",
    category: "Корректоры",
    rating: 4.3,
    reviews: 43,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 3603,
    name: "Корректор-лента",
    description: "Сухой корректор в виде ленты",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/corrector3/200/200",
    category: "Корректоры",
    rating: 4.5,
    reviews: 58,
    seller: "ОфисМаркет",
    trending: true
  },

  // Офисные товары - Клей
  {
    id: 3701,
    name: "Клей-карандаш",
    description: "Твердый клей в форме карандаша",
    price: "7 000 so'm",
    image: "https://picsum.photos/seed/glue1/200/200",
    category: "Клей",
    rating: 4.6,
    reviews: 74,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 3702,
    name: "Клей ПВА",
    description: "Жидкий клей ПВА для бумаги и картона",
    price: "10 000 so'm",
    image: "https://picsum.photos/seed/glue2/200/200",
    category: "Клей",
    rating: 4.5,
    reviews: 63,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 3703,
    name: "Клей момент",
    description: "Универсальный клей для различных поверхностей",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/glue3/200/200",
    category: "Клей",
    rating: 4.4,
    reviews: 52,
    seller: "ОфисМаркет",
    trending: true
  },

  // Офисные товары - Скотч
  {
    id: 3801,
    name: "Скотч прозрачный",
    description: "Стандартный прозрачный скотч",
    price: "5 000 so'm",
    image: "https://picsum.photos/seed/tape1/200/200",
    category: "Скотч",
    rating: 4.5,
    reviews: 68,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 3802,
    name: "Скотч двусторонний",
    description: "Двусторонний скотч для незаметного скрепления",
    price: "8 000 so'm",
    image: "https://picsum.photos/seed/tape2/200/200",
    category: "Скотч",
    rating: 4.4,
    reviews: 47,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 3803,
    name: "Скотч цветной",
    description: "Набор цветного скотча для декора и маркировки",
    price: "12 000 so'm",
    image: "https://picsum.photos/seed/tape3/200/200",
    category: "Скотч",
    rating: 4.6,
    reviews: 53,
    seller: "ОфисМаркет",
    trending: true
  },

  // Письменные принадлежности - Ручки
  {
    id: 3901,
    name: "Ручка шариковая синяя",
    description: "Набор из 10 шариковых ручек",
    price: "12 000 so'm",
    image: "https://picsum.photos/seed/pen1/200/200",
    category: "Ручки",
    rating: 4.4,
    reviews: 95,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 3902,
    name: "Ручка гелевая черная",
    description: "Гелевые ручки с тонким стержнем",
    price: "18 000 so'm",
    image: "https://picsum.photos/seed/pen2/200/200",
    category: "Ручки",
    rating: 4.6,
    reviews: 112,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 3903,
    name: "Ручка перьевая",
    description: "Классическая перьевая ручка для письма",
    price: "85 000 so'm",
    image: "https://picsum.photos/seed/pen3/200/200",
    category: "Ручки",
    rating: 4.7,
    reviews: 64,
    seller: "Канцелярский мир",
    trending: false
  },
  {
    id: 3904,
    name: "Ручка капиллярная",
    description: "Тонкая капиллярная ручка для черчения",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/pen4/200/200",
    category: "Ручки",
    rating: 4.5,
    reviews: 47,
    seller: "Канцелярский мир",
    trending: true
  },

  // Письменные принадлежности - Карандаши
  {
    id: 4001,
    name: "Карандаши чернографитные",
    description: "Набор чернографитных карандашей разной твердости",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/pencil1/200/200",
    category: "Карандаши",
    rating: 4.7,
    reviews: 88,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 4002,
    name: "Карандаши цветные",
    description: "Набор из 24 цветных карандашей",
    price: "28 000 so'm",
    image: "https://picsum.photos/seed/pencil2/200/200",
    category: "Карандаши",
    rating: 4.6,
    reviews: 74,
    seller: "Канцелярский мир",
    trending: false
  },
  {
    id: 4003,
    name: "Механический карандаш",
    description: "Карандаш со сменными грифелями",
    price: "12 000 so'm",
    image: "https://picsum.photos/seed/pencil3/200/200",
    category: "Карандаши",
    rating: 4.5,
    reviews: 63,
    seller: "Канцелярский мир",
    trending: true
  },

  // Письменные принадлежности - Маркеры
  {
    id: 4101,
    name: "Маркеры перманентные",
    description: "Набор перманентных маркеров разных цветов",
    price: "22 000 so'm",
    image: "https://picsum.photos/seed/marker1/200/200",
    category: "Маркеры",
    rating: 4.6,
    reviews: 57,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 4102,
    name: "Маркеры для белой доски",
    description: "Набор маркеров для письма на маркерных досках",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/marker2/200/200",
    category: "Маркеры",
    rating: 4.5,
    reviews: 48,
    seller: "Канцелярский мир",
    trending: false
  },
  {
    id: 4103,
    name: "Маркеры для выделения текста",
    description: "Набор текстовыделителей разных цветов",
    price: "18 000 so'm",
    image: "https://picsum.photos/seed/marker3/200/200",
    category: "Маркеры",
    rating: 4.7,
    reviews: 69,
    seller: "Канцелярский мир",
    trending: true
  },

  // Письменные принадлежности - Текстовыделители
  {
    id: 4201,
    name: "Текстовыделитель желтый",
    description: "Классический желтый текстовыделитель",
    price: "5 000 so'm",
    image: "https://picsum.photos/seed/highlighter1/200/200",
    category: "Текстовыделители",
    rating: 4.5,
    reviews: 73,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 4202,
    name: "Набор текстовыделителей",
    description: "Комплект текстовыделителей разных цветов",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/highlighter2/200/200",
    category: "Текстовыделители",
    rating: 4.6,
    reviews: 64,
    seller: "Канцелярский мир",
    trending: false
  },
  {
    id: 4203,
    name: "Текстовыделитель с клипом",
    description: "Текстовыделитель с клипом для крепления к бумаге",
    price: "7 000 so'm",
    image: "https://picsum.photos/seed/highlighter3/200/200",
    category: "Текстовыделители",
    rating: 4.4,
    reviews: 42,
    seller: "Канцелярский мир",
    trending: true
  },

  // Письменные принадлежности - Стержни для ручек
  {
    id: 4301,
    name: "Стержни для шариковых ручек",
    description: "Набор стержней синего цвета",
    price: "8 000 so'm",
    image: "https://picsum.photos/seed/refill1/200/200",
    category: "Стержни для ручек",
    rating: 4.4,
    reviews: 53,
    seller: "Канцелярский мир",
    trending: false
  },
  {
    id: 4302,
    name: "Стержни для гелевых ручек",
    description: "Набор стержней черного цвета",
    price: "12 000 so'm",
    image: "https://picsum.photos/seed/refill2/200/200",
    category: "Стержни для ручек",
    rating: 4.5,
    reviews: 47,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 4303,
    name: "Универсальные стержни",
    description: "Набор стержней разных цветов",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/refill3/200/200",
    category: "Стержни для ручек",
    rating: 4.3,
    reviews: 38,
    seller: "Канцелярский мир",
    trending: false
  },

  // Письменные принадлежности - Тушь
  {
    id: 4401,
    name: "Тушь черная для черчения",
    description: "Черная тушь для профессионального черчения",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/ink1/200/200",
    category: "Тушь",
    rating: 4.6,
    reviews: 37,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 4402,
    name: "Тушь цветная",
    description: "Набор цветной туши для художников",
    price: "45 000 so'm",
    image: "https://picsum.photos/seed/ink2/200/200",
    category: "Тушь",
    rating: 4.5,
     reviews: 37,
    seller: "Канцелярский мир",
    trending: true
  },
 
  {
    id: 4403,
    name: "Архивная коробка А4",
    description: "Прочная коробка для хранения документов формата А4",
    price: "35 000 so'm",
    image: "https://picsum.photos/seed/archivebox1/200/200",
    category: "Архивные коробки",
    rating: 4.5,
    reviews: 48,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4404,
    name: "Архивная коробка с крышкой",
    description: "Коробка с крышкой для длительного хранения документов",
    price: "45 000 so'm",
    image: "https://picsum.photos/seed/archivebox2/200/200",
    category: "Архивные коробки",
    rating: 4.6,
    reviews: 52,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 4405,
    name: "Архивная коробка усиленная",
    description: "Усиленная коробка для тяжелых документов",
    price: "55 000 so'm",
    image: "https://picsum.photos/seed/archivebox3/200/200",
    category: "Архивные коробки",
    rating: 4.4,
    reviews: 39,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4406,
    name: "Архивная коробка на завязках",
    description: "Коробка с тканевыми завязками для надежной фиксации",
    price: "40 000 so'm",
    image: "https://picsum.photos/seed/archivebox4/200/200",
    category: "Архивные коробки",
    rating: 4.3,
    reviews: 35,
    seller: "ОфисМаркет",
    trending: false
  },

  // Системы архивации - Папки с зажимом
  {
    id: 4407,
    name: "Папка с зажимом пластиковая",
    description: "Пластиковая папка с боковым зажимом для документов",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/clipfolder1/200/200",
    category: "Папки с зажимом",
    rating: 4.4,
    reviews: 46,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4408,
    name: "Папка с зажимом металлическая",
    description: "Прочная папка с металлическим зажимом",
    price: "20 000 so'm",
    image: "https://picsum.photos/seed/clipfolder2/200/200",
    category: "Папки с зажимом",
    rating: 4.5,
    reviews: 51,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 4409,
    name: "Папка с зажимом А5",
    description: "Компактная папка с зажимом для документов А5",
    price: "12 000 so'm",
    image: "https://picsum.photos/seed/clipfolder3/200/200",
    category: "Папки с зажимом",
    rating: 4.3,
    reviews: 38,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4410,
    name: "Папка с двойным зажимом",
    description: "Папка с двумя зажимами для надежного крепления",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/clipfolder4/200/200",
    category: "Папки с зажимом",
    rating: 4.6,
    reviews: 44,
    seller: "ОфисМаркет",
    trending: false
  },

  // Системы архивации - Регистраторы
  {
    id: 4411,
    name: "Регистратор А4 с арочным механизмом",
    description: "Папка-регистратор для большого объема документов",
    price: "30 000 so'm",
    image: "https://picsum.photos/seed/register1/200/200",
    category: "Регистраторы",
    rating: 4.7,
    reviews: 62,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4412,
    name: "Регистратор цветной",
    description: "Яркая папка-регистратор для сортировки документов",
    price: "35 000 so'm",
    image: "https://picsum.photos/seed/register2/200/200",
    category: "Регистраторы",
    rating: 4.5,
    reviews: 49,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 4413,
    name: "Регистратор узкий",
    description: "Компактный регистратор для небольших объемов",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/register3/200/200",
    category: "Регистраторы",
    rating: 4.4,
    reviews: 41,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4414,
    name: "Регистратор с покрытием",
    description: "Папка-регистратор с ламинированным покрытием",
    price: "40 000 so'm",
    image: "https://picsum.photos/seed/register4/200/200",
    category: "Регистраторы",
    rating: 4.6,
    reviews: 53,
    seller: "ОфисМаркет",
    trending: false
  },

  // Системы архивации - Разделители
  {
    id: 4415,
    name: "Разделители картонные А4",
    description: "Набор картонных разделителей для папок",
    price: "12 000 so'm",
    image: "https://picsum.photos/seed/divider1/200/200",
    category: "Разделители",
    rating: 4.3,
    reviews: 36,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4416,
    name: "Разделители пластиковые",
    description: "Набор пластиковых разделителей с ярлыками",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/divider2/200/200",
    category: "Разделители",
    rating: 4.4,
    reviews: 42,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 4417,
    name: "Разделители с индексами",
    description: "Разделители с пронумерованными вкладками",
    price: "18 000 so'm",
    image: "https://picsum.photos/seed/divider3/200/200",
    category: "Разделители",
    rating: 4.5,
    reviews: 47,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4418,
    name: "Разделители цветные",
    description: "Набор цветных разделителей для удобной сортировки",
    price: "20 000 so'm",
    image: "https://picsum.photos/seed/divider4/200/200",
    category: "Разделители",
    rating: 4.6,
    reviews: 39,
    seller: "ОфисМаркет",
    trending: false
  },

  // Системы архивации - Индексные карточки
  {
    id: 4419,
    name: "Индексные карточки А6",
    description: "Набор карточек для каталогов и записей",
    price: "10 000 so'm",
    image: "https://picsum.photos/seed/indexcard1/200/200",
    category: "Индексные карточки",
    rating: 4.3,
    reviews: 34,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4420,
    name: "Индексные карточки с разделителями",
    description: "Карточки с разделителями для организации записей",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/indexcard2/200/200",
    category: "Индексные карточки",
    rating: 4.4,
    reviews: 38,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 4421,
    name: "Индексные карточки цветные",
    description: "Набор цветных карточек для заметок",
    price: "12 000 so'm",
    image: "https://picsum.photos/seed/indexcard3/200/200",
    category: "Индексные карточки",
    rating: 4.5,
    reviews: 41,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4422,
    name: "Индексные карточки в коробке",
    description: "Карточки с коробкой для хранения",
    price: "20 000 so'm",
    image: "https://picsum.photos/seed/indexcard4/200/200",
    category: "Индексные карточки",
    rating: 4.6,
    reviews: 36,
    seller: "ОфисМаркет",
    trending: false
  },

  // Спорттовары - Мячи
  {
    id: 4423,
    name: "Футбольный мяч",
    description: "Мяч для футбола стандартного размера",
    price: "85 000 so'm",
    image: "https://picsum.photos/seed/ball1/200/200",
    category: "Мячи",
    rating: 4.7,
    reviews: 72,
    seller: "SportShop",
    trending: true
  },
  {
    id: 4424,
    name: "Баскетбольный мяч",
    description: "Профессиональный мяч для баскетбола",
    price: "95 000 so'm",
    image: "https://picsum.photos/seed/ball2/200/200",
    category: "Мячи",
    rating: 4.6,
    reviews: 65,
    seller: "SportShop",
    trending: false
  },
  {
    id: 4425,
    name: "Волейбольный мяч",
    description: "Мяч для волейбола с мягким покрытием",
    price: "75 000 so'm",
    image: "https://picsum.photos/seed/ball3/200/200",
    category: "Мячи",
    rating: 4.5,
    reviews: 58,
    seller: "SportShop",
    trending: true
  },
  {
    id: 4426,
    name: "Мяч для фитнеса",
    description: "Большой мяч для фитнеса и йоги",
    price: "120 000 so'm",
    image: "https://picsum.photos/seed/ball4/200/200",
    category: "Мячи",
    rating: 4.8,
    reviews: 67,
    seller: "SportShop",
    trending: true
  },

  // Спорттовары - Скакалки
  {
    id: 4427,
    name: "Скакалка с утяжелением",
    description: "Скакалка с утяжеленными ручками для тренировок",
    price: "45 000 so'm",
    image: "https://picsum.photos/seed/jumprope1/200/200",
    category: "Скакалки",
    rating: 4.6,
    reviews: 53,
    seller: "SportShop",
    trending: true
  },
  {
    id: 4428,
    name: "Скакалка скоростная",
    description: "Скакалка для интенсивных кардиотренировок",
    price: "35 000 so'm",
    image: "https://picsum.photos/seed/jumprope2/200/200",
    category: "Скакалки",
    rating: 4.5,
    reviews: 48,
    seller: "SportShop",
    trending: false
  },
  {
    id: 4429,
    name: "Скакалка с счетчиком прыжков",
    description: "Скакалка с цифровым счетчиком прыжков",
    price: "65 000 so'm",
    image: "https://picsum.photos/seed/jumprope3/200/200",
    category: "Скакалки",
    rating: 4.7,
    reviews: 62,
    seller: "SportShop",
    trending: true
  },
  {
    id: 4430,
    name: "Скакалка детская",
    description: "Легкая скакалка для детей",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/jumprope4/200/200",
    category: "Скакалки",
    rating: 4.4,
    reviews: 39,
    seller: "SportShop",
    trending: false
  },

  // Спорттовары - Гантели
  {
    id: 4431,
    name: "Гантели 2 кг",
    description: "Пара гантелей весом 2 кг для фитнеса",
    price: "50 000 so'm",
    image: "https://picsum.photos/seed/dumbbell1/200/200",
    category: "Гантели",
    rating: 4.6,
    reviews: 55,
    seller: "SportShop",
    trending: true
  },
  {
    id: 4432,
    name: "Гантели разборные",
    description: "Набор разборных гантелей до 10 кг",
    price: "150 000 so'm",
    image: "https://picsum.photos/seed/dumbbell2/200/200",
    category: "Гантели",
    rating: 4.7,
    reviews: 68,
    seller: "SportShop",
    trending: true
  },
  {
    id: 4433,
    name: "Гантели виниловые 1 кг",
    description: "Гантели с виниловым покрытием для удобства",
    price: "35 000 so'm",
    image: "https://picsum.photos/seed/dumbbell3/200/200",
    category: "Гантели",
    rating: 4.5,
    reviews: 47,
    seller: "SportShop",
    trending: false
  },
  {
    id: 4434,
    name: "Гантели 5 кг",
    description: "Пара гантелей весом 5 кг для силовых тренировок",
    price: "80 000 so'm",
    image: "https://picsum.photos/seed/dumbbell4/200/200",
    category: "Гантели",
    rating: 4.6,
    reviews: 59,
    seller: "SportShop",
    trending: true
  },

  // Спорттовары - Спортивные сумки
  {
    id: 4435,
    name: "Спортивная сумка компактная",
    description: "Небольшая сумка для тренировок",
    price: "85 000 so'm",
    image: "https://picsum.photos/seed/sportbag1/200/200",
    category: "Спортивные сумки",
    rating: 4.5,
    reviews: 63,
    seller: "SportShop",
    trending: true
  },
  {
    id: 4436,
    name: "Спортивная сумка с отделением для обуви",
    description: "Сумка с отдельным отсеком для спортивной обуви",
    price: "120 000 so'm",
    image: "https://picsum.photos/seed/sportbag2/200/200",
    category: "Спортивные сумки",
    rating: 4.7,
    reviews: 71,
    seller: "SportShop",
    trending: true
  },
  {
    id: 4437,
    name: "Рюкзак спортивный",
    description: "Удобный спортивный рюкзак для активного отдыха",
    price: "95 000 so'm",
    image: "https://picsum.photos/seed/sportbag3/200/200",
    category: "Спортивные сумки",
    rating: 4.6,
    reviews: 58,
    seller: "SportShop",
    trending: false
  },
  {
    id: 4438,
    name: "Спортивная сумка водонепроницаемая",
    description: "Сумка для спорта с водонепроницаемым покрытием",
    price: "130 000 so'm",
    image: "https://picsum.photos/seed/sportbag4/200/200",
    category: "Спортивные сумки",
    rating: 4.8,
    reviews: 66,
    seller: "SportShop",
    trending: true
  },

  // Спорттовары - Фитнес-аксессуары
  {
    id: 4439,
    name: "Коврик для йоги",
    description: "Противоскользящий коврик для йоги и фитнеса",
    price: "65 000 so'm",
    image: "https://picsum.photos/seed/fitness1/200/200",
    category: "Фитнес-аксессуары",
    rating: 4.7,
    reviews: 74,
    seller: "SportShop",
    trending: true
  },
  {
    id: 4440,
    name: "Эспандер для рук",
    description: "Компактный эспандер для тренировки кистей",
    price: "20 000 so'm",
    image: "https://picsum.photos/seed/fitness2/200/200",
    category: "Фитнес-аксессары",
    rating: 4.4,
    reviews: 49,
    seller: "SportShop",
    trending: false
  },
  {
    id: 4441,
    name: "Ремни для фитнеса",
    description: "Набор ремней для функциональных тренировок",
    price: "55 000 so'm",
    image: "https://picsum.photos/seed/fitness3/200/200",
    category: "Фитнес-аксессары",
    rating: 4.6,
    reviews: 53,
    seller: "SportShop",
    trending: true
  },
  {
    id: 4442,
    name: "Петли для тренировок",
    description: "Система подвесных петель для фитнеса",
    price: "95 000 so'm",
    image: "https://picsum.photos/seed/fitness4/200/200",
    category: "Фитнес-аксессары",
    rating: 4.8,
    reviews: 61,
    seller: "SportShop",
    trending: true
  },

  // Школьные принадлежности - Пеналы
  {
    id: 4443,
    name: "Пенал мягкий",
    description: "Мягкий пенал для школьных принадлежностей",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/pencilcase1/200/200",
    category: "Пеналы",
    rating: 4.4,
    reviews: 52,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 4444,
    name: "Пенал с отделениями",
    description: "Пенал с несколькими отделениями для организации",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/pencilcase2/200/200",
    category: "Пеналы",
    rating: 4.5,
    reviews: 47,
    seller: "Канцелярский мир",
    trending: false
  },
  {
    id: 4445,
    name: "Пенал жесткий",
    description: "Прочный пенал с жестким корпусом",
    price: "30 000 so'm",
    image: "https://picsum.photos/seed/pencilcase3/200/200",
    category: "Пеналы",
    rating: 4.6,
    reviews: 55,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 4446,
    name: "Пенал с рисунком",
    description: "Пенал с ярким дизайном для детей",
    price: "20 000 so'm",
    image: "https://picsum.photos/seed/pencilcase4/200/200",
    category: "Пеналы",
    rating: 4.3,
    reviews: 41,
    seller: "Канцелярский мир",
    trending: true
  },

  // Школьные принадлежности - Тетради
  {
    id: 4447,
    name: "Тетрадь 12 листов",
    description: "Тетрадь в клетку для школьников",
    price: "5 000 so'm",
    image: "https://picsum.photos/seed/notebook1/200/200",
    category: "Тетради",
    rating: 4.4,
    reviews: 68,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 4448,
    name: "Тетрадь 48 листов",
    description: "Тетрадь в линию для старших классов",
    price: "12 000 so'm",
    image: "https://picsum.photos/seed/notebook2/200/200",
    category: "Тетради",
    rating: 4.5,
    reviews: 72,
    seller: "Канцелярский мир",
    trending: false
  },
  {
    id: 4449,
    name: "Тетрадь для черновиков",
    description: "Тетрадь без обложки для черновых записей",
    price: "8 000 so'm",
    image: "https://picsum.photos/seed/notebook3/200/200",
    category: "Тетради",
    rating: 4.3,
    reviews: 59,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 4450,
    name: "Тетрадь с твердой обложкой",
    description: "Прочная тетрадь для длительного использования",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/notebook4/200/200",
    category: "Тетради",
    rating: 4.6,
    reviews: 64,
    seller: "Канцелярский мир",
    trending: false
  },

  // Школьные принадлежности - Альбомы для рисования
  {
    id: 4451,
    name: "Альбом для рисования А4",
    description: "Альбом с плотной бумагой для рисования",
    price: "20 000 so'm",
    image: "https://picsum.photos/seed/sketchbook1/200/200",
    category: "Альбомы для рисования",
    rating: 4.6,
    reviews: 58,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 4452,
    name: "Альбом для рисования А3",
    description: "Большой альбом для художественных работ",
    price: "30 000 so'm",
    image: "https://picsum.photos/seed/sketchbook2/200/200",
    category: "Альбомы для рисования",
    rating: 4.7,
    reviews: 62,
    seller: "Канцелярский мир",
    trending: false
  },
  {
    id: 4453,
    name: "Альбом для акварели",
    description: "Специальный альбом для акварельной живописи",
    price: "35 000 so'm",
    image: "https://picsum.photos/seed/sketchbook3/200/200",
    category: "Альбомы для рисования",
    rating: 4.8,
    reviews: 67,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 4454,
    name: "Альбом для эскизов",
    description: "Компактный альбом для быстрых эскизов",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/sketchbook4/200/200",
    category: "Альбомы для рисования",
    rating: 4.5,
    reviews: 53,
    seller: "Канцелярский мир",
    trending: false
  },

  // Школьные принадлежности - Цветная бумага
  {
    id: 4455,
    name: "Цветная бумага А4",
    description: "Набор цветной бумаги для детского творчества",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/colorpaper1/200/200",
    category: "Цветная бумага",
    rating: 4.5,
    reviews: 61,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 4456,
    name: "Цветная бумага двусторонняя",
    description: "Набор двусторонней цветной бумаги",
    price: "20 000 so'm",
    image: "https://picsum.photos/seed/colorpaper2/200/200",
    category: "Цветная бумага",
    rating: 4.6,
    reviews: 57,
    seller: "Канцелярский мир",
    trending: false
  },
  {
    id: 4457,
    name: "Цветная бумага с узорами",
    description: "Набор бумаги с декоративными узорами",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/colorpaper3/200/200",
    category: "Цветная бумага",
    rating: 4.7,
    reviews: 63,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 4458,
    name: "Цветная бумага глянцевая",
    description: "Набор глянцевой бумаги для поделок",
    price: "22 000 so'm",
    image: "https://picsum.photos/seed/colorpaper4/200/200",
    category: "Цветная бумага",
    rating: 4.5,
    reviews: 49,
    seller: "Канцелярский мир",
    trending: false
  },

  // Школьные принадлежности - Пластилин
  {
    id: 4459,
    name: "Пластилин 12 цветов",
    description: "Набор пластилина для детского творчества",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/clay1/200/200",
    category: "Пластилин",
    rating: 4.6,
    reviews: 66,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 4460,
    name: "Пластилин мягкий",
    description: "Мягкий пластилин для легкого лепления",
    price: "20 000 so'm",
    image: "https://picsum.photos/seed/clay2/200/200",
    category: "Пластилин",
    rating: 4.5,
    reviews: 58,
    seller: "Канцелярский мир",
    trending: false
  },
  {
    id: 4461,
    name: "Пластилин с блестками",
    description: "Набор пластилина с блестящим эффектом",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/clay3/200/200",
    category: "Пластилин",
    rating: 4.7,
    reviews: 62,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 4462,
    name: "Пластилин профессиональный",
    description: "Пластилин для сложных скульптурных работ",
    price: "30 000 so'm",
    image: "https://picsum.photos/seed/clay4/200/200",
    category: "Пластилин",
    rating: 4.8,
    reviews: 55,
    seller: "Канцелярский мир",
    trending: false
  },

  // Школьные принадлежности - Школьные ранцы
  {
    id: 4463,
    name: "Школьный рюкзак детский",
    description: "Легкий рюкзак для младших школьников",
    price: "150 000 so'm",
    image: "https://picsum.photos/seed/backpack1/200/200",
    category: "Школьные ранцы",
    rating: 4.7,
    reviews: 78,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 4464,
    name: "Рюкзак с ортопедической спинкой",
    description: "Рюкзак с поддержкой спины для школьников",
    price: "200 000 so'm",
    image: "https://picsum.photos/seed/backpack2/200/200",
    category: "Школьные ранцы",
    rating: 4.8,
    reviews: 85,
    seller: "Канцелярский мир",
    trending: true
  },
  {
    id: 4465,
    name: "Школьный рюкзак подростковый",
    description: "Стильный рюкзак для старших школьников",
    price: "180 000 so'm",
    image: "https://picsum.photos/seed/backpack3/200/200",
    category: "Школьные ранцы",
    rating: 4.6,
    reviews: 71,
    seller: "Канцелярский мир",
    trending: false
  },
  {
    id: 4466,
    name: "Рюкзак с USB-портом",
    description: "Рюкзак с разъемом для зарядки гаджетов",
    price: "220 000 so'm",
    image: "https://picsum.photos/seed/backpack4/200/200",
    category: "Школьные ранцы",
    rating: 4.9,
    reviews: 69,
    seller: "Канцелярский мир",
    trending: true
  },

  // Штемпельная продукция - Штемпельные подушки
  {
    id: 4467,
    name: "Штемпельная подушка синяя",
    description: "Подушка с синей краской для печатей",
    price: "10 000 so'm",
    image: "https://picsum.photos/seed/stamp1/200/200",
    category: "Штемпельные подушки",
    rating: 4.4,
    reviews: 43,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4468,
    name: "Штемпельная подушка черная",
    description: "Подушка с черной краской для штампов",
    price: "10 000 so'm",
    image: "https://picsum.photos/seed/stamp2/200/200",
    category: "Штемпельные подушки",
    rating: 4.3,
    reviews: 39,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 4469,
    name: "Штемпельная подушка цветная",
    description: "Набор подушек с разноцветной краской",
    price: "15 000 so'm",
    image: "https://picsum.photos/seed/stamp3/200/200",
    category: "Штемпельные подушки",
    rating: 4.5,
    reviews: 47,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4470,
    name: "Штемпельная подушка большая",
    description: "Большая подушка для интенсивного использования",
    price: "20 000 so'm",
    image: "https://picsum.photos/seed/stamp4/200/200",
    category: "Штемпельные подушки",
    rating: 4.6,
    reviews: 41,
    seller: "ОфисМаркет",
    trending: false
  },

  // Штемпельная продукция - Датеры
  {
    id: 4471,
    name: "Датер автоматический",
    description: "Автоматический штамп с регулируемой датой",
    price: "45 000 so'm",
    image: "https://picsum.photos/seed/dater1/200/200",
    category: "Датеры",
    rating: 4.5,
    reviews: 52,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4472,
    name: "Датер ручной",
    description: "Ручной датер для документов",
    price: "30 000 so'm",
    image: "https://picsum.photos/seed/dater2/200/200",
    category: "Датеры",
    rating: 4.4,
    reviews: 46,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 4473,
    name: "Датер с текстом",
    description: "Датер с возможностью добавления текста",
    price: "55 000 so'm",
    image: "https://picsum.photos/seed/dater3/200/200",
    category: "Датеры",
    rating: 4.6,
    reviews: 49,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4474,
    name: "Мини-датер",
    description: "Компактный датер для небольших документов",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/dater4/200/200",
    category: "Датеры",
    rating: 4.3,
    reviews: 38,
    seller: "ОфисМаркет",
    trending: false
  },

  // Штемпельная продукция - Нумераторы
  {
    id: 4475,
    name: "Нумератор автоматический",
    description: "Автоматический штамп для нумерации документов",
    price: "50 000 so'm",
    image: "https://picsum.photos/seed/numerator1/200/200",
    category: "Нумераторы",
    rating: 4.5,
    reviews: 47,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4476,
    name: "Нумератор ручной",
    description: "Ручной нумератор для маркировки",
    price: "35 000 so'm",
    image: "https://picsum.photos/seed/numerator2/200/200",
    category: "Нумераторы",
    rating: 4.4,
    reviews: 41,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 4477,
    name: "Нумератор с регулировкой",
    description: "Нумератор с возможностью настройки формата",
    price: "60 000 so'm",
    image: "https://picsum.photos/seed/numerator3/200/200",
    category: "Нумераторы",
    rating: 4.6,
    reviews: 53,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4478,
    name: "Мини-нумератор",
    description: "Компактный нумератор для малых объемов",
    price: "30 000 so'm",
    image: "https://picsum.photos/seed/numerator4/200/200",
    category: "Нумераторы",
    rating: 4.3,
    reviews: 39,
    seller: "ОфисМаркет",
    trending: false
  },

  // Штемпельная продукция - Оснастки для печатей
  {
    id: 4479,
    name: "Оснастка для печати автоматическая",
    description: "Автоматическая оснастка для круглых печатей",
    price: "40 000 so'm",
    image: "https://picsum.photos/seed/stampholder1/200/200",
    category: "Оснастки для печатей",
    rating: 4.5,
    reviews: 48,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4480,
    name: "Оснастка для печати ручная",
    description: "Ручная оснастка для печатей",
    price: "25 000 so'm",
    image: "https://picsum.photos/seed/stampholder2/200/200",
    category: "Оснастки для печатей",
    rating: 4.4,
    reviews: 42,
    seller: "ОфисМаркет",
    trending: false
  },
  {
    id: 4481,
    name: "Оснастка для печати карманная",
    description: "Компактная оснастка для переноски",
    price: "30 000 so'm",
    image: "https://picsum.photos/seed/stampholder3/200/200",
    category: "Оснастки для печатей",
    rating: 4.6,
    reviews: 46,
    seller: "ОфисМаркет",
    trending: true
  },
  {
    id: 4482,
    name: "Оснастка для печати металлическая",
    description: "Прочная металлическая оснастка для печатей",
    price: "50 000 so'm",
    image: "https://picsum.photos/seed/stampholder4/200/200",
    category: "Оснастки для печатей",
    rating: 4.7,
    reviews: 51,
    seller: "ОфисМаркет",
    trending: false
  }

]