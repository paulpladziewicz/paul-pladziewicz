import {useRouter} from "next/router";
import Layout from "../components/Layout";
import Head from "next/head";

const en = {
  meta: {
    title: 'Contact Paul Pladziewicz - Software Engineer'
  },
  contact: {
    title: 'Gracias por su interés expresado.',
    h1: 'Purpose',
    p1: '',
    p2: '',
  }
}

const es = {
  meta: {
    title: 'Contáctame - Paul Pladziewicz - Ingeniero de software'
  },
  contact: {
    title: 'Sobre Paul Pladziewicz',
    h1: 'Propósito',
    p1: '',
    p2: '',
  }
}

export default function Contact() {
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
        <h1 className='text-5xl text-center font-bold text-gray-700'>{t.contact.title}</h1>
      </div>
    </Layout>
  )
}