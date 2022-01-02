import { SiAdobephotoshop } from '@react-icons/all-files/si/SiAdobephotoshop'
import { SiAdobeillustrator } from '@react-icons/all-files/si/SiAdobeillustrator'
import { SiAdobeindesign } from '@react-icons/all-files/si/SiAdobeindesign'
import { useState } from 'react'
import { Button, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import SkillCard from './skill-card'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const skills = [
    {
      title: 'Adobe Photoshop',
      description: 'pages.about.skills.photoshop.description',
      tags: ['pages.about.skills.tags.application'],
      icon: <SiAdobephotoshop />,
      link: 'https://www.adobe.com/fr/products/photoshop.html'
    },
    {
      title: 'Adobe Illustrator',
      description: 'pages.about.skills.illustrator.description',
      tags: ['pages.about.skills.tags.application'],
      icon: <SiAdobeillustrator />,
      link: 'https://www.adobe.com/fr/products/illustrator.html'
    },
    {
      title: 'Adobe InDesign',
      description: 'pages.about.skills.indesign.description',
      tags: ['pages.about.skills.tags.application'],
      icon: <SiAdobeindesign />,
      link: 'https://www.adobe.com/fr/products/indesign.html'
    }
  ]

  const tags = Array.from(new Set(skills.flatMap(({ tags }) => tags)))
  const [displaySkills, setDisplaySkills] = useState(skills)
  const [selectedTag, setSelectedTag] = useState()

  const filterSkills = (tag) => {
    if (tag) {
      setDisplaySkills(skills.filter(({ tags }) => tags.includes(tag)))
    } else {
      setDisplaySkills(skills)
    }
    setSelectedTag(tag)
  }

  const { t } = useTranslation()

  return (
    <VStack spacing={3} align={{ base: 'center', md: 'start' }}>
      <Heading as='h3'>
        {t('pages.about.skills.title')}
      </Heading>
      <HStack spacing={3} flexWrap='wrap' gridRowGap={2}>
        <Button
          textTransform='uppercase'
          onClick={() => filterSkills()}
          size='xs'
          variant={!selectedTag ? 'solid-tag' : 'ghost-tag'}>
          {t('various.all')}
        </Button>
        {tags.map((tag) => (
          <Button
            key={tag}
            textTransform='uppercase'
            onClick={() => filterSkills(tag)}
            size='xs'
            variant={selectedTag === tag ? 'solid-tag' : 'ghost-tag'}>
            {t(tag)}
          </Button>
        ))}
      </HStack>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        gap={6}
        alignItems='stretch'
        as='section'>
        {displaySkills.map(({ title, description, icon, link, tags }) => (
          <SkillCard title={t(title)} description={t(description)} icon={icon} link={link}
                     tags={tags.map((tag) => t(tag))} />
        ))}
      </SimpleGrid>
    </VStack>
  )
}

export default Skills