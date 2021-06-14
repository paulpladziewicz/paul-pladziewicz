import {useRouter} from "next/router";
import Layout from "../components/Layout";
import Head from "next/head";

const en = {
  meta: {
    title: 'About Paul Pladziewicz - Software Engineer'
  },
  about: {
    title: 'About Paul Pladziewicz',
    h1: 'Purpose',
    p1: 'I believe there are still many ways to\n' +
      '              make life easier with software, especially\n' +
      '              internationally.\n' +
      '              Sometimes it means creating tools that save us time. Other times it\'s about helping us conduct business\n' +
      '              regardless of place. When you help others make a connection online, who knows where it can lead?',
    p2: 'Obtaining mastery within software\n' +
      '              engineering takes an extraordinary amount of time\n' +
      '              and passion, and after my natural search for meaning in life, I have dedicated myself to the\n' +
      '              profession. I hope it never ends.',
    experience: 'If you review my projects, you will see I have had a lot of practice with PHP-based CRMs (WordPress, Drupal), the LAMP stack, along with the MERN stack (Next.js, Meteor.js). I am also currently practicing with serverless workflows on AWS.',
    outsideWork: 'If I am not reviewing documentation or coding, you\'ll find me cooking, playing chess, or playing golf.'
  }
}

const es = {
  meta: {
    title: 'Sobre Paul Pladziewicz - Ingeniero de software'
  },
  about: {
    title: 'Sobre Paul Pladziewicz',
    h1: 'Propósito',
    p1: 'Creo que todavía hay muchas formas de hacer la vida más fácil con el software, especialmente a nivel internacional. A veces significa crear herramientas que nos ahorren tiempo. Otras veces se trata de ayudarnos a realizar negocios sin importar el lugar. Cuando ayudas a otros a establecer una conexión en línea, ¿quién sabe a dónde puede conducir?',
    p2: '\n' +
      'Obtener dominio dentro del software\n' +
      '              la ingeniería lleva una cantidad extraordinaria de tiempo\n' +
      '              y pasión, y después de mi búsqueda natural de sentido en la vida, me he dedicado a la\n' +
      '              profesión. Espero que nunca termine.',
    experience: 'Si revisas mis proyectos, verá que he tenido mucha práctica con PHP-based CRMs (WordPress, Drupal), el LAMP stack, \n' +
      'junto con el MERN stack (Next.js, Meteor.js). Actualmente también estoy practicando con serverless workflows en AWS.',
    outsideWork: '\n' +
      'Si no estoy revisando la documentación o la codificación, me encontrará cocinando, jugando al ajedrez o jugando al golf.'
  }
}

export default function About() {
  const router = useRouter();
  const {locale} = router;
  const t = locale === "en" ? en : es;
  return (
    <Layout>
      <Head>
        <title>{t.meta.title}</title>
        <link rel="shortcut icon" href="/pp.svg"/>
      </Head>

      <div className='mt-20 mx-4 md:w-10/12 md:mx-auto'>
        <h1 className='text-center sm:text-left text-5xl sm:text-6xl font-bold text-gray-700 mb-4'>{t.about.title}</h1>


        <div className='md:flex md:items-center'>
          <img className='w-60 mx-auto rounded-full' src="/profilepicture.jpg" alt="profile picture"/>
          <div className='md:ml-8'>
            <h2 className='mt-6 text-3xl font-bold text-purple-700'>{t.about.h1}</h2>
            <p className='mt-2 text-xl font-light tracking-wide leading-relaxed'>{t.about.p1}</p>
            <p className='mt-2 text-xl font-light tracking-wide leading-relaxed'>{t.about.p2}</p>
          </div>
        </div>

        <div className='mt-12'>
          <h2 className='mt-2 text-3xl font-bold text-purple-700'>Experience</h2>
          <p className='mt-2 text-xl font-light tracking-wide leading-relaxed'>{t.about.experience}</p>
          <a className='inline-block mt-2 btn' href='/Paul_Pladziewicz_Resume.PDF' target="_blank" rel="noreferrer">Download
            Resume</a>
        </div>
        <div className='mt-12'>
          <h2 className='mt-2 text-3xl font-bold text-purple-700'>Away From The Computer</h2>
          <p className='mt-2 text-xl font-light tracking-wide leading-relaxed'>{t.about.outsideWork}</p>
        </div>

      </div>

    </Layout>
  )
}