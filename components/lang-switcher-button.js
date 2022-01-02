import { Button, Image } from '@chakra-ui/react'
import i18n from '../translations/i18n'
import { AnimatePresence, motion } from 'framer-motion'

const LangSwitcherButton = () => {

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={i18n.language}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button leftIcon={<Image src={'/images/flags/' + i18n.language + '.png'} width={8} height={6}
                                 rounded='md' alt={i18n.language} />}
                onClick={() => i18n.changeLanguage((i18n.language === 'en' ? 'fr' : 'en'))}
                variant='ghost'
                mr={3}>
          {i18n.language.toUpperCase()}
        </Button>
      </motion.div>
    </AnimatePresence>
  )
}

export default LangSwitcherButton
