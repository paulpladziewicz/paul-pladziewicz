import {useRouter} from "next/router";
import Layout from "../components/Layout";
import Image from 'next/image'
import Head from 'next/head'

const en = {
  meta: {
    title: 'Paul Pladziewicz - Software Engineer'
  },
  jumbotron: {
    heading: 'Meet Paul Pladziewicz',
    desc: ['Software engineer', 'with experience building', 'websites', 'and', 'web applications', '.']
  },
  purpose: ['Utilizing my talents within software engineering to add value to the lives of others.', 'At any scale.'],
  skills: ['Core Skills',
  'Continuously learning by focusing on building practical solutions.',
    'Here are a few technologies I\'ve been working with recently.'
  ],
  quotes: [
    'The only way to learn a new programming language is by writing programs in it.',
    'When you struggle with a problem, that’s when you understand it. Anyone who struggled hard with a problem never forgets it.',
    'Talk is cheap. Show me the code.',
    'The ideal man bears the accidents of life with dignity and grace, making the best of circumstances.'
  ],
  quotesTitle: 'Favorite Quotes'
};
const es = {
  meta: {
    title: 'Paul Pladziewicz - Ingeniero de software'
  },
  jumbotron: {
    heading: 'Conoce a Paul Pladziewicz',
    desc: ['Ingeniero de software', 'con experiencia en la construcción de', 'sitios web', 'y', 'aplicaciones web', '.']
  },
  purpose: ['Utilizando mis talentos dentro de la ingeniería de software para agregar valor a la vida de los demás.', 'A cualquier escala.'],
  skills: ['Habilidades Fundamentales',
    'Aprendizaje continuo enfocándose en la construcción de soluciones prácticas.',
    'Aquí hay algunas tecnologías con las que he estado trabajando recientemente.'
  ],
  quotes: [
    'La única forma de aprender un nuevo lenguaje de programación es escribiendo programas en él.',
    'Cuando luchas con un problema, es cuando lo entiendes. Cualquiera que haya luchado mucho con un problema nunca lo olvida.',
    'Hablar es barato. Muéstrame el código.',
    'El hombre ideal soporta los accidentes de la vida con dignidad y gracia, aprovechando las circunstancias al máximo.'
  ],
  quotesTitle: 'Citas Favoritas'
};

export default function Home() {
  const router = useRouter();
  const {locale} = router;
  const t = locale === "en" ? en : es;
  return (
    <div className='mx-4'>
      <Layout>
        <Head>
          <title>{t.meta.title}</title>
          <link rel="shortcut icon" href="/pp.svg"/>
        </Head>

        <div className='mt-20 lg:flex'>
          <img className='lg:hidden' src="/development-vector.jpeg"
               alt="vector image of people building a project with code"/>
          <div className='lg:w-6/12'>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800'>{t.jumbotron.heading}</h1>
            <h2 className='mt-8 text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-700'><span
              className='font-bold text-purple-700'>{t.jumbotron.desc[0]}</span> {t.jumbotron.desc[1]} <span
              className='font-bold text-purple-700'>{t.jumbotron.desc[2]}</span> {t.jumbotron.desc[3]} <span
              className='font-bold text-purple-700'>{t.jumbotron.desc[4]}</span>{t.jumbotron.desc[5]}</h2>
          </div>
          <div className='hidden lg:block lg:w-6/12'>
            <Image src="/development-vector.jpeg" width={680} height={440} alt="vector image of people building a project with code" priority/>
          </div>
        </div>


        <div className='mt-40 md:mx-auto md:w-3/4 text-center'>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-700'>{t.purpose[0]}</h2>
          <span className='block mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-700'>{t.purpose[1]}</span>
        </div>

        <div>
          <img src="/hands.jpeg" alt="many hand prints with different colors"/>
        </div>

        <div className='mt-40 md:flex'>
          <div className='md:w-1/2 rounded-lg p-8 bg-purple-800 to-purple-600'>
            <h2 className='text-white text-4xl font-bold'>{t.skills[0]}</h2>
            <p className='mt-4 text-xl font-light text-white'>{t.skills[1]}</p>
            <p className='mt-2 text-xl font-light text-white'>{t.skills[2]}</p>
            <div className='mt-8'>
              <h3 className='text-3xl font-bold text-purple-200'>Front-end</h3>
              <ul className='mt-4 flex flex-wrap'>
                <li className='mr-8 text-xl font-medium text-white'>HTML</li>
                <li className='mr-8 text-xl font-medium text-white'>CSS (Sass, TailwindCSS)</li>
                <li className='mr-8 text-xl font-medium text-white'>Javascript (React)</li>
              </ul>
            </div>
            <div className='mt-8'>
              <h3 className='text-3xl font-bold text-purple-200'>Back-end</h3>
              <ul className='mt-4 flex flex-wrap'>
                <li className='mr-8 text-xl font-medium text-white'>Node.js</li>
                <li className='mr-8 text-xl font-medium text-white'>PHP</li>
              </ul>
            </div>
            <div className='mt-8'>
              <h3 className='text-3xl font-bold text-purple-200'>Database</h3>
              <ul className='mt-4 flex flex-wrap'>
                <li className='mr-8 text-xl font-medium text-white'>MongoDB</li>
                <li className='mr-8 text-xl font-medium text-white'>MySQL</li>
              </ul>
            </div>
            <div className='mt-8'>
              <h3 className='text-3xl font-bold text-purple-200'>Deployment</h3>
              <ul className='mt-4 flex flex-wrap'>
                <li className='mr-8 text-xl font-medium text-white'>cPanel</li>
                <li className='mr-8 text-xl font-medium text-white'>AWS</li>
              </ul>
            </div>
          </div>

          <div className='mt-8 md:w-1/2 md:p-8 md:mt-0'>
            <h2 className='text-center text-purple-700 text-4xl font-bold'>{t.quotesTitle}</h2>
            <ul className='mt-4 mx-auto md:w-10/12 text-center'>
              <li className='mt-10 text-xl font-medium'>{t.quotes[0]} <p className='text-right text-lg text-gray-700 mr-4'>- Dennis Ritchie</p>
              </li>
              <li className='mt-10 text-xl font-medium'>{t.quotes[1]} <p className='text-right text-lg text-gray-700 mr-4'>-
                  Elon Musk</p>
              </li>
              <li className='mt-10 text-xl font-medium'>{t.quotes[2]} <p
                className='text-right text-lg text-gray-700 mr-4'>-
                Linus Torvalds</p>
              </li>
              <li className='mt-10 text-xl font-medium'>{t.quotes[3]} <p className='text-right text-lg text-gray-700 mr-4'>- Aristotle</p>
              </li>
            </ul>
          </div>
        </div>

      </Layout>
    </div>
  )
}
