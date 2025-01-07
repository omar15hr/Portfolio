/* eslint-disable react/prop-types */
import Section from './Section'
import SectionTitle from './SectionTitle'
import ButtonLink from './ButtonLink'
import ExternalLinkIcon from './icons/flat/ExternalLink'
import { v4 as uuidv4 } from 'uuid'

const linkIconSize = 'xs'

const education = [
  {
    title: 'Devtalles',
    date: '2024',
    description: 'Realice cursos de desarrollo web donde aprendi React, Node.js, Express, MongoDB, TypeScript, Angular y sigo en el proceso de aprender otras tecnologías.',
    links: [
      {
        icon: <ExternalLinkIcon size={linkIconSize} />,
        href: 'https://cursos.devtalles.com/',
        text: 'Plataforma'
      }
    ]
  },
  {
    title: 'Analista Programador Computacional',
    date: '2021 - 2024',
    description: 'En el Instituto Duoc UC. Sede de San Joaquín, ubicada en Santiago de Chile.'
  }
].map(item => {
  const newItem = { ...item, id: uuidv4() }

  if (newItem.links) {
    newItem.links = newItem.links.map(link => ({ ...link, id: uuidv4() }))
  }

  return newItem
})

const EducationItem = ({ title, date, description, links }) => {
  return (
    <div>
      <p className='relative text-[#666666] dark:text-[#a1a1a1] md:text-lg font-medium before:content-[""] before:bg-[#a8a8a8] dark:before:bg-[#878787] before:absolute before:-left-4 md:before:-left-8 before:top-1/2 before:h-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:aspect-square before:rounded-full'>
        {date}
      </p>
      <h3 className='mb-1 text-xl md:text-2xl font-medium text-[#00254d] dark:text-[#ebf6ff]'>
        {title}
      </h3>
      <p className='md:text-lg'>
        {description}
      </p>
      {links && (
        <div className='mt-2 flex flex-wrap gap-2'>
          {links.map(({ id, ...link }) => (
            <ButtonLink
              key={id}
              {...link}
            />
          ))}
        </div>
      )}
    </div>
  )
}

const Education = () => {
  return (
    <Section>
      <SectionTitle title='Formación' id='formacion' />
      <div className='flex flex-col gap-10 border-l border-[#a8a8a8] dark:border-[#878787] pl-4 md:pl-8'>
        {education.map(item => (
          <EducationItem
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </Section>
  )
}

export default Education