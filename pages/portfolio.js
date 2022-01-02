import Layout from '../components/layouts/article'
import { Button, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import ProjectCard from '../components/project-card'
import Section from '../components/section'

const Portfolio = () => {
  const { t } = useTranslation()

  const projects = [
    {
      title: 'pages.portfolio.projects.soundlab.title',
      link: '/projects/soundlab',
      cover: '/projects/soundlab/mockup2.jpg',
      tags: ['pages.portfolio.tags.school']
    },
    {
      title: 'pages.portfolio.projects.paper_couv.title',
      link: '/projects/paper-couv',
      cover: '/projects/paper-couv/illu1.jpg',
      tags: ['pages.portfolio.tags.school']
    },
    {
      title: 'pages.portfolio.projects.insect_style.title',
      link: '/projects/insect-style',
      cover: '/projects/insect-style/illu1.jpg',
      tags: ['pages.portfolio.tags.school']
    },
    {
      title: 'pages.portfolio.projects.the_greatest_showman.title',
      link: '/projects/the-greatest-showman',
      cover: '/projects/the-greatest-showman/illu1.jpg',
      tags: ['pages.portfolio.tags.school']
    },
    {
      title: 'pages.portfolio.projects.creative_shapes.title',
      link: '/projects/creative-shapes',
      cover: '/projects/creative-shapes/mockup2.jpg',
      tags: ['pages.portfolio.tags.school']
    },
    {
      title: undefined,
      link: '/draws/illustrations/1',
      cover: '/draws/illustrations/1/mockup.jpg',
      tags: ['pages.portfolio.tags.illustration']
    },
    {
      title: undefined,
      link: '/draws/illustrations/2',
      cover: '/draws/illustrations/2/mockup.jpg',
      tags: ['pages.portfolio.tags.illustration']
    },
    {
      title: undefined,
      link: '/draws/illustrations/3',
      cover: '/draws/illustrations/3/mockup.jpg',
      tags: ['pages.portfolio.tags.illustration']
    },
    {
      title: undefined,
      link: '/draws/pencil/1',
      cover: '/draws/pencil/1/mockup.jpg',
      tags: ['pages.portfolio.tags.pencil']
    },
    {
      title: undefined,
      link: '/draws/pencil/2',
      cover: '/draws/pencil/2/mockup.jpg',
      tags: ['pages.portfolio.tags.pencil']
    },
    {
      title: undefined,
      link: '/draws/pencil/3',
      cover: '/draws/pencil/3/mockup.jpg',
      tags: ['pages.portfolio.tags.pencil']
    },
    {
      title: undefined,
      link: '/draws/liner/1',
      cover: '/draws/liner/1/mockup.jpg',
      tags: ['pages.portfolio.tags.liner']
    },
    {
      title: undefined,
      link: '/draws/liner/2',
      cover: '/draws/liner/2/mockup.jpg',
      tags: ['pages.portfolio.tags.liner']
    },
    {
      title: undefined,
      link: '/draws/liner/3',
      cover: '/draws/liner/3/mockup.jpg',
      tags: ['pages.portfolio.tags.liner']
    },
    {
      title: 'pages.portfolio.projects.sewn_designs.title',
      link: '/projects/sewn-designs',
      cover: '/projects/sewn-designs/illu2.png',
      tags: ['pages.portfolio.tags.others']
    }
  ]

  const tags = Array.from(new Set(projects.flatMap(({ tags }) => tags)))

  const [displayProjects, setDisplayProjects] = useState(projects)
  const [selectedTag, setSelectedTag] = useState()

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
            {displayProjects.map(({ title, cover, link, tags }) => (
              <ProjectCard key={link} title={t(title)} cover={cover} link={link} tags={tags.map((tag) => t(tag))} />
            ))}
          </SimpleGrid>
        </VStack>
      </Section>
    </Layout>
  )
}

export default Portfolio