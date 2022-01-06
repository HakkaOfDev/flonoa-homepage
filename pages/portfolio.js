import Layout from '../components/layouts/article'
import { Button, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import ProjectCard from '../components/project-card'
import Section from '../components/section'
import { PROJECTS } from '../data/projects'

const Portfolio = () => {
  const { t } = useTranslation()

  const projects = PROJECTS
  const tags = Array.from(new Set(projects.flatMap(({ tags }) => tags)))

  const [selectedTag, setSelectedTag] = useState()
  const [displayProjects, setDisplayProjects] = useState(projects)

  const filterProjects = (tag) => {
    if (tag) {
      setDisplayProjects(projects.filter(({ tags }) => tags.includes(tag)))
    } else {
      setDisplayProjects(projects)
    }
    setSelectedTag(tag)
  }

  return (
    <Layout title={t('navigation.portfolio')}>
      <Section delay={0.3}>
        <VStack spacing={6}>
          <Heading as='h1' align='center'>
            {t('pages.portfolio.title')}
          </Heading>
          <Text align='center' fontSize='lg'>{t('pages.portfolio.subtitle')}</Text>
          <HStack spacing={3} flexWrap='wrap' gridRowGap={2}>
            <Button
              textTransform='uppercase'
              onClick={() => filterProjects()}
              size='xs'
              variant={!selectedTag ? 'solid-tag' : 'ghost-tag'}>
              {t('various.all')}
            </Button>
            {tags.map((tag) => (
              <Button
                key={tag}
                textTransform='uppercase'
                onClick={() => filterProjects(tag)}
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
            {displayProjects.map(({ title, cover, link, date, tags }) => (
              <ProjectCard key={link} title={t(title)} cover={cover} link={link} date={date}
                           tags={tags.map((tag) => t(tag))} />
            ))}
          </SimpleGrid>
        </VStack>
      </Section>
    </Layout>
  )
}

export default Portfolio