import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { en_US } from './en/en_US'
import { fr_FR } from './fr/fr_FR'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    lng: 'fr',
    resources: {
      en: {
        translation: en_US
      },
      fr: {
        translation: fr_FR
      }
    }
  })

export default i18next