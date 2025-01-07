import Section from './Section'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import {v4 as uuidv4} from 'uuid'
import muscari from '../assets/images/projects/muscari.webp'

const projectList = [
  {
    title: 'Muscari Clothing',
    description: 'Muscari es una plataforma de venta de ropa de moda con una interfaz de usuario moderna. Cuenta con pasarela de pago, autenticación de usuarios, y una base de datos de productos y clientes.',
    technologies: ['react', 'css', 'tailwindcss', 'nextjs', 'postgresql'],
    img: muscari,
    repoLink: 'https://github.com/omar15hr/Muscari',
    liveLink: 'https://muscari.vercel.app/'
  },
].map(project => ({...project, id: uuidv4()}))

const Projects = () => {
  return (
    <Section>
      <SectionTitle title='Proyectos' id='proyectos' />
      <div className='flex flex-col gap-8 md:gap-10 lg:gap-12'>
        {projectList.map(({ id, ...project }) => (
          <ProjectCard
            key={id}
            {...project}
          />
        ))}
      </div>
    </Section>
  )
}

export default Projects