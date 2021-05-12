import {useRouter} from "next/router";
import Layout from "../components/Layout";
import Head from "next/head";

const en = {
  meta: {
    title: 'Portfolio Paul Pladziewicz - Software Engineer',
    subtitle: 'Always programming.'
  },
  portfolio: {
    title: 'Portafolio of Work',
    subtitle: 'Always programming.',
    desc: 'A list of my latest work I am able to share.'
  },
  project: {
    button: ['Live Website']
  }

}

const es = {
  meta: {
    title: 'Portafolio Paul Pladziewicz - Ingeniero de software'
  },
  portfolio: {
    title: 'Portafolio de trabajo',
    subtitle: 'Siempre programando.',
    desc: 'Una lista de mi último trabajo que puedo compartir.'
  },
  project: {
    button: ['Sitio web en vivo']
  }
}

export default function Portfolio() {
  const router = useRouter();
  const {locale} = router;
  const t = locale === "en" ? en : es;
  return (
    <Layout>
      <Head>
        <title>{t.meta.title}</title>
        <link rel="shortcut icon" href="/pp.svg"/>
      </Head>

      <div className='mt-20'>
        <h1 className='text-6xl font-bold text-gray-700'>{t.portfolio.title}</h1>
        <h3 className='mt-2 text-4xl font-semibold text-purple-700'>{t.portfolio.subtitle}</h3>
        <p className='mt-2 text-xl font-light tracking-wide leading-relaxed'>{t?.portfolio?.desc}</p>
      </div>

      <div className='mt-10 flex flex-wrap'>

        <div className='mt-10 w-1/2 pr-4'>
          <img src="/project-photos/jawor-machine.png" alt=""/>
          <div className='p-4'>
            <h3 className='text-4xl font-semibold text-gray-700'>Jawor Machine Co.</h3>
            <p className='mt-2'>Jawor Machine Co. is a small tool and die shop that manufactures fixtures and gages for
              numerous turbine
              engine parts and employs 5 full time tool builders and a part time office manager. It is a complete tool
              shop; including design , build and inspection. Jawor Machine Co. has a wealth of knowledge and experience
              in everything related to the design and manufacture of fixtures and gages for the aerospace industry.</p>
            <a className='inline-block mt-4 btn' href='https://www.jawormachine.com' target='_blank'>{t?.project?.button[0]}</a>
          </div>
        </div>

        <div className='mt-10 w-1/2 pl-4'>
          <img src="/project-photos/lhg.png" alt=""/>
          <div className='p-4'>
            <h3 className='text-4xl font-semibold text-gray-700'>Lucas Howard Group</h3>
            <p className='mt-2'>Rated best real estate company in Grand Rapids, MI, Lucas Howard Group needed a website
              refresh. The original design was created with Wix, and they were finding it difficult to add content
              nicely. After a complete custom redo of there website and integrating WordPress, the website looks better
              and is extremely easy to add content.</p>
            <a className='inline-block mt-4 btn' href='https://www.jawormachine.com' target='_blank'>Live Website</a>
          </div>
        </div>

        <div className='mt-10 w-1/2 pr-4'>
          <img src="/project-photos/drpaul.png" alt=""/>
          <div className='p-4'>
            <h3 className='text-4xl font-semibold text-gray-700'>Dr. Paul The Dentist</h3>
            <p className='mt-2'>Rated best real estate company in Grand Rapids, MI, Lucas Howard Group needed a website
              refresh. The original design was created with Wix, and they were finding it difficult to add content
              nicely. After a complete custom redo of there website and integrating WordPress, the website looks better
              and is extremely easy to add content.</p>
            <a className='inline-block mt-4 btn' href='https://www.jawormachine.com' target='_blank'>Live Website</a>
          </div>
        </div>

      </div>
    </Layout>
  )
}