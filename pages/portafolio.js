import {useRouter} from "next/router";
import Layout from "../components/Layout";
import Head from "next/head";

const en = {
  meta: {
    title: 'About Paul Pladziewicz - Software Engineer'
  },
  about: {
    title: 'About Paul Pladziewicz'
  }
}

const es = {
  meta: {
    title: 'Sobre Paul Pladziewicz - Ingeniero de software'
  },
  about: {
    title: 'Sobre Paul Pladziewicz'
  }
}

export default function Portafolio() {
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
        <h1>Portfolio of Work</h1>
      </div>
    </Layout>
  )
}