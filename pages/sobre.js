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

      <div className='mt-20 w-10/12 mx-auto'>
        <div className='flex items-center'>
          <div className='w-3/12'>
            <img className='h-60 rounded-full' src="/profilepicture.jpg" alt=""/>
          </div>
          <div className='w-9/12 px-8'>
            <h1 className='text-5xl font-bold text-gray-700'>{t.about.title}</h1>
            <h2 className='mt-6 text-3xl font-semibold text-purple-700'>{t.about.h1}</h2>
            <p className='mt-2 text-xl font-light tracking-wide leading-relaxed'>{t.about.p1}</p>
            <p className='mt-2 text-xl font-light tracking-wide leading-relaxed'>{t.about.p2}</p>
          </div>
        </div>
        <div className='mt-12 w-9/12 mx-auto'>
          <h2 className='mt-2 text-3xl font-semibold text-purple-700'>Experience</h2>
          <p className='mt-2 text-xl font-light tracking-wide leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus eius eos laborum, natus
            praesentium quam quia quo ratione sint.</p>
          <a className='inline-block mt-2 btn' href='/ppladziewicz_resume.pdf' target="_blank" rel="noreferrer">Download Resume</a>
        </div>
        <div className='mt-12 w-9/12 mx-auto'>
          <h2 className='mt-2 text-3xl font-semibold text-purple-700'>Away From The Computer</h2>
          <p className='mt-2 text-xl font-light tracking-wide leading-relaxed'>{t.about.outsideWork}</p>
        </div>
      </div>
    </Layout>
  )
}