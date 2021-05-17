import {useRouter} from "next/router";
import Layout from "../components/Layout";
import Head from "next/head";

const en = {
  meta: {
    title: 'Publications - Paul Pladziewicz - Software Engineer'
  },
  pub: {
    title: 'Coming Soon.'
  }
}

const es = {
  meta: {
    title: 'Publicaciones - Paul Pladziewicz - Ingeniero de software'
  },
  pub: {
    title: 'Próximamente, en breve, pronto.'
  }
}

export default function Publications() {
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
        <h1 className='text-5xl text-center font-bold text-gray-700'>{t.pub.title}</h1>
      </div>
    </Layout>
  )
}