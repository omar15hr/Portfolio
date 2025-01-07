import HtmlIcon from './icons/Html'
import CssIcon from './icons/Css'
import JavaScriptIcon from './icons/JavaScript'
import ReactIcon from './icons/React'
import TailwindcssIcon from './icons/TailwindCss'
import NextJs from './icons/NextJs'
import PostgreSQL from './icons/PostgreSQL'

const technologyIconSize = 'xxs'

const technologies = [
  {
    name: 'html',
    displayName: 'HTML',
    icon: <HtmlIcon size={technologyIconSize} />,
    background: 'bg-[#c74b25]'
  },
  {
    name: 'css',
    displayName: 'CSS',
    icon: <CssIcon size={technologyIconSize} />,
    background: 'bg-[#563d7c]'
  },
  {
    name: 'javascript',
    displayName: 'JavaScript',
    icon: <JavaScriptIcon size={technologyIconSize} />,
    background: 'bg-[#8e730d]'
  },
  {
    name: 'react',
    displayName: 'React',
    icon: <ReactIcon size={technologyIconSize} />,
    background: 'bg-[#2c4f66]'
  },
  {
    name: 'tailwindcss',
    displayName: 'Tailwind CSS',
    icon: <TailwindcssIcon size={technologyIconSize} />,
    background: 'bg-[#0f2c42]'
  },
  {
    name: 'nextjs',
    displayName: 'Next.js',
    icon: <NextJs size={technologyIconSize} />,
    background: 'bg-[#000000]'
  },
  {
    name: 'postgresql',
    displayName: 'PostgreSQL',
    icon: <PostgreSQL size={technologyIconSize} />,
    background: 'bg-[#336791]'
  }
]

// eslint-disable-next-line react/prop-types
const TechnologyBadge = ({ name }) => {
  const technology = technologies.find(technology => technology.name === name)

  if (!technology) return;

  return (
    <span className={`${technology.background} inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-[#ededed]`}>
      {technology.icon}
      {technology.displayName}
    </span>
  )
}

export default TechnologyBadge