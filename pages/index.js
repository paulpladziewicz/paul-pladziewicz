import {useRouter} from "next/router";
import Layout from "../components/Layout";
import Head from 'next/head'

const en = {
  meta: {
    title: 'Paul Pladziewicz - Software Engineer'
  },
  jumbotron: {
    heading: 'Meet Paul Pladziewicz'
  },
  form: {}
};
const es = {
  meta: {
    title: 'Paul Pladziewicz - Ingeniero de software'
  },
  jumbotron: {
    heading: 'Conoce a Paul Pladziewicz'
  },
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
          <img className='lg:hidden' src="/development-vector.jpeg" alt="vector image of people building a project with code"/>
          <div className='w-6/12'>
            <h1 className='text-7xl font-bold text-gray-800'>{t.jumbotron.heading}</h1>
            <h2 className='mt-8 text-6xl font-medium text-gray-700'><span className='font-bold text-purple-800'>Software Engineer</span> with
              experience building <span className='font-bold text-purple-700'>websites</span> and <span
                className='font-bold text-purple-700'>web applications</span>.</h2>
          </div>
          <div className='w-6/12'>
            <img src="/development-vector.jpeg" alt="vector image of people building a project with code"/>
          </div>
        </div>

        <div className='mt-40 mx-auto w-3/4 text-center'>
          <h2 className='text-6xl font-semibold text-gray-700'>Utilizing my talents within software engineering to add
            value to the lives of others.</h2>
          <span className='block mt-6 text-6xl font-bold text-purple-700'>At any scale.</span>
        </div>

        <div className='p-4 mt-40 rounded-lg bg-purple-800'>
          <h2 className='text-white text-4xl font-bold'>Core Skills</h2>
          <p className='mt-4 w-7/12 text-xl text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci amet culpa cumque delectus earum enim
            error provident ratione soluta tempora?</p>
        </div>

        <div className='mt-40'>
          <h2 className='text-6xl font-semibold text-gray-700'>Feature Projects</h2>
          <span className='block mt-4 text-4xl font-bold text-purple-700'>Always developing.</span>
        </div>

      </Layout>
    </div>
  )
}
