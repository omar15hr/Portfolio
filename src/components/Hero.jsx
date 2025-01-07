import Section from './Section'
import ContactLink from './ContactLink'
import LinkedIn from './icons/flat/LinkedIn'
import GitHub from './icons/flat/GitHub'
import Email from './icons/flat/Email'

const contactIconSize = 'sm'

const contactLinks = [
  {
    href: 'https://www.linkedin.com/in/omar-alejandro-hernandez-diaz/',
    icon: <LinkedIn size={contactIconSize} />,
    text: 'LinkedIn'
  },
  {
    href: 'https://github.com/omar15hr',
    icon: <GitHub size={contactIconSize} />,
    text: 'GitHub'
  },
  {
    href: 'mailto:omarhrn@gmail.com',
    icon: <Email size={contactIconSize} />,
    text: 'omarhrn@gmail.com'
  }
]

const Hero = () => {
  return (
    <Section>
      <div className='grid gap-5 md:gap-6 lg:gap-8 my-4 md:my-10 lg:my-20'>
        <div className='flex gap-5 items-center'>
          <img src={''} className='w-20 rounded-xl' alt='Omar Hernández' />
          <div>
            <h1 className='mb-2 text-4xl md:text-5xl font-medium text-[#0068d6] dark:text-[#52a8ff]'>Omar Hernández</h1>
            <h3 className='text-lg md:text-xl text-[#666666] dark:text-[#a1a1a1]'>Desarrollador Frontend</h3>
          </div>
        </div>
        <p className='text-xl md:text-2xl'>
          Analista Programador con enfoque en el desarrollo web frontend.
        </p>
        <div className='flex flex-wrap gap-4'>
          {contactLinks.map((contactLink, index) => (
            <ContactLink
              key={index}
              {...contactLink}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Hero