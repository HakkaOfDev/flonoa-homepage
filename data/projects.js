import { ILLUSTRATIONS } from './illustrations'
import { PENCIL } from './pencil'
import { LINER } from './liner'
import { OTHERS } from './others'

export const PROJECTS = [
  {
    title: 'pages.portfolio.projects.creative_shapes.title',
    link: '/projects/creative-shapes',
    cover: '/projects/creative-shapes/mockup2.jpg',
    date: '10/2021',
    tags: ['pages.portfolio.tags.school']
  },
  {
    title: 'pages.portfolio.projects.insect_style.title',
    link: '/projects/insect-style',
    cover: '/projects/insect-style/illu1.jpg',
    date: '05/2021',
    tags: ['pages.portfolio.tags.school']
  },
  {
    title: 'pages.portfolio.projects.the_greatest_showman.title',
    link: '/projects/the-greatest-showman',
    cover: '/projects/the-greatest-showman/illu1.jpg',
    date: '04/2021',
    tags: ['pages.portfolio.tags.school']
  },
  {
    title: 'pages.portfolio.projects.soundlab.title',
    link: '/projects/soundlab',
    cover: '/projects/soundlab/mockup2.jpg',
    date: '06/2020',
    tags: ['pages.portfolio.tags.school']
  },
  {
    title: 'pages.portfolio.projects.paper_couv.title',
    link: '/projects/paper-couv',
    cover: '/projects/paper-couv/illu1.jpg',
    date: '12/2019',
    tags: ['pages.portfolio.tags.school']
  },
  ...ILLUSTRATIONS,
  ...LINER,
  ...PENCIL,
  ...OTHERS
]