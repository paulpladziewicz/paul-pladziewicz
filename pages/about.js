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
    p1: '',
    p2: '',
  }
}

const es = {
  meta: {
    title: 'Sobre Paul Pladziewicz - Ingeniero de software'
  },
  about: {
    title: 'Sobre Paul Pladziewicz',
    h1: 'Propósito',
    p1: '',
    p2: '',
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
            <p className='mt-2 text-xl font-light tracking-wide leading-relaxed'>I believe there are still many ways to
              make life easier with software, especially
              internationally.
              Sometimes it means creating tools that save us time. Other times it's about helping us conduct business
              regardless of place. When you help others make a connection online, who knows where it can lead?</p>
            <p className='mt-2 text-xl font-light tracking-wide leading-relaxed'>Obtaining mastery within software
              engineering takes an extraordinary amount of time
              and passion, and after my natural search for meaning in life, I have dedicated myself to the
              profession. I hope it never ends.</p>
          </div>
        </div>
        <div className='mt-12 w-9/12 mx-auto'>
          <h2 className='mt-2 text-3xl font-semibold text-purple-700'>Experience</h2>
          <p className='mt-2 text-xl font-light tracking-wide leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus eius eos laborum, natus
            praesentium quam quia quo ratione sint.</p>
          <button className='mt-2 btn'>Download Resume</button>
        </div>
        <div className='mt-12 w-9/12 mx-auto'>
          <h2 className='mt-2 text-3xl font-semibold text-purple-700'>Away From The Computer</h2>
          <p className='mt-2 text-xl font-light tracking-wide leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus eius eos laborum, natus
            praesentium quam quia quo ratione sint.</p>
        </div>
      </div>
    </Layout>
  )
}