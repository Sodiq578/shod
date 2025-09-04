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
      favorites: 'Favorites',
      cart: 'Cart',
      profile: 'Profile',
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
      favorites: 'Sevimlilar',
      cart: 'Savat',
      profile: 'Profil',
    },
  },
  ru: {
    translation: {
      logo: 'LOGO',
      searchPlaceholder: 'Что вы хотите купить?',
      searchAriaLabel: 'Поиск товаров',
      favoritesAriaLabel: 'Избранное',
      cartAriaLabel: 'Корзина',
      profileAriaLabel: 'Профиль',
      toggleMenuAriaLabel: 'Переключить меню',
      favorites: 'Избранное',
      cart: 'Корзина',
      profile: 'Профиль',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;