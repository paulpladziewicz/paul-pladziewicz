import {useRouter} from "next/router";
import Layout from "../components/Layout";
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
  form: {}
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
  form: {}
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
          <div className='w-6/12'>
            <h1 className='text-7xl font-bold text-gray-800'>{t.jumbotron.heading}</h1>
            <h2 className='mt-8 text-6xl font-medium text-gray-700'><span
              className='font-bold text-purple-700'>{t.jumbotron.desc[0]}</span> {t.jumbotron.desc[1]} <span
              className='font-bold text-purple-700'>{t.jumbotron.desc[2]}</span> {t.jumbotron.desc[3]} <span
              className='font-bold text-purple-700'>{t.jumbotron.desc[4]}</span>{t.jumbotron.desc[5]}</h2>
          </div>
          <div className='w-6/12'>
            <img src="/development-vector.jpeg" alt="vector image of people building a project with code"/>
          </div>
        </div>

        <div className='mt-40 mx-auto w-3/4 text-center'>
          <h2 className='text-6xl font-semibold text-gray-700'>{t.purpose[0]}</h2>
          <span className='block mt-6 text-6xl font-bold text-purple-700'>{t.purpose[1]}</span>
        </div>

        <div className='mt-40 flex'>
          <div className='w-1/2 rounded-lg p-4 bg-purple-800'>
            <h2 className='text-white text-4xl font-bold'>Core Skills</h2>
            <p className='mt-4 text-xl text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Adipisci amet culpa cumque delectus earum enim
              error provident ratione soluta tempora?</p>
          </div>
          <div className='w-1/2 p-4'>
            <h2 className='text-4xl font-bold text-gray-700'>Core Philosophies</h2>
          </div>
        </div>

        <div className='mt-40'>
          <h2 className='text-6xl font-bold text-gray-700'>Featured Projects</h2>
          <span className='block mt-4 text-4xl font-bold text-purple-700'>Always developing.</span>
        </div>

      </Layout>
    </div>
  )
}
