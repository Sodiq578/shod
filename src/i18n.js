import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      logo: 'LOGO',
      searchPlaceholder: 'What are you shopping for?',
      searchAriaLabel: 'Search products',
      favoritesAriaLabel: 'Favorites',
      cartAriaLabel: 'Cart',
      profileAriaLabel: 'Profile',
      toggleMenuAriaLabel: 'Toggle menu',
      selectLanguageAriaLabel: 'Select language',
      favorites: 'Favorites',
      cart: 'Cart',
      profile: 'Profile',
      more: 'More',
      settings: 'Settings',
      orders: 'Orders',
      support: 'Support',
      banner: {
        summerCollection: {
          title: 'Summer Collection',
          subtitle: 'New Arrivals 2023',
          description: 'Discover our exclusive summer collection with special discounts',
          ctaText: 'Shop Now',
        },
        winterCollection: {
          title: 'Winter Collection',
          subtitle: 'Stay Warm in Style',
          description: 'Get ready for winter with our premium collection',
          ctaText: 'Explore',
        },
        autumnCollection: {
          title: 'Autumn Specials',
          subtitle: 'Cozy & Comfortable',
          description: 'Perfect outfits for the fall season',
          ctaText: 'View Collection',
        },
        springCollection: {
          title: 'Spring Fashion',
          subtitle: 'Fresh Looks',
          description: 'Brighten your wardrobe with our spring collection',
          ctaText: 'Discover',
        },
      },
    },
  },
  uz: {
    translation: {
      logo: 'LOGO',
      searchPlaceholder: 'Nima xarid qilmoqchisiz?',
      searchAriaLabel: 'Mahsulotlarni qidirish',
      favoritesAriaLabel: 'Sevimlilar',
      cartAriaLabel: 'Savat',
      profileAriaLabel: 'Profil',
      toggleMenuAriaLabel: 'Menyuni ochish/yopish',
      selectLanguageAriaLabel: 'Tilni tanlash',
      favorites: 'Sevimlilar',
      cart: 'Savat',
      profile: 'Profil',
      more: 'Koproq',
      settings: 'Sozlamalar',
      orders: 'Buyurtmalar',
      support: 'Yordam',
      banner: {
        summerCollection: {
          title: 'Yozgi kolleksiya',
          subtitle: 'Yangi kelganlar 2023',
          description: 'Maxsus chegirmalar bilan eksklyuziv yozgi kolleksiyamizni kashf eting',
          ctaText: 'Hozir xarid qiling',
        },
        winterCollection: {
          title: 'Qishki kolleksiya',
          subtitle: 'Uslubda issiq qoling',
          description: 'Qish uchun premium kolleksiyamiz bilan tayyorlaning',
          ctaText: 'Kashf eting',
        },
        autumnCollection: {
          title: 'Kuzgi maxsus takliflar',
          subtitle: 'Qulay va qulay',
          description: 'Kuz mavsumi uchun mukammal kiyimlar',
          ctaText: 'Kolleksiyani koring',
        },
        springCollection: {
          title: 'Bahorgi moda',
          subtitle: 'Yangi korinishlar',
          description: 'Bahorgi kolleksiyamiz bilan garderobingizni yoriting',
          ctaText: 'Kashf eting',
        },
      },
    },
  },
  ru: {
    translation: {
      logo: 'ЛОГО',
      searchPlaceholder: 'Что вы хотите купить?',
      searchAriaLabel: 'Поиск товаров',
      favoritesAriaLabel: 'Избранное',
      cartAriaLabel: 'Корзина',
      profileAriaLabel: 'Профиль',
      toggleMenuAriaLabel: 'Переключить меню',
      selectLanguageAriaLabel: 'Выбрать язык',
      favorites: 'Избранное',
      cart: 'Корзина',
      profile: 'Профиль',
      more: 'Ещё',
      settings: 'Настройки',
      orders: 'Заказы',
      support: 'Поддержка',
      banner: {
        summerCollection: {
          title: 'Летняя коллекция',
          subtitle: 'Новые поступления 2023',
          description: 'Откройте нашу эксклюзивную летнюю коллекцию со специальными скидками',
          ctaText: 'Купить сейчас',
        },
        winterCollection: {
          title: 'Зимняя коллекция',
          subtitle: 'Сохраняйте тепло в стиле',
          description: 'Подготовьтесь к зиме с нашей премиальной коллекцией',
          ctaText: 'Исследовать',
        },
        autumnCollection: {
          title: 'Осенние специальные предложения',
          subtitle: 'Уютно и комфортно',
          description: 'Идеальные наряды для осеннего сезона',
          ctaText: 'Посмотреть коллекцию',
        },
        springCollection: {
          title: 'Весенняя мода',
          subtitle: 'Свежий вид',
          description: 'Оживите свой гардероб с нашей весенней коллекцией',
          ctaText: 'Открыть',
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default til
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React allaqachon qiymatlarni himoya qiladi
  },
});

export default i18n;