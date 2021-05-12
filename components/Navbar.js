import { useRouter } from "next/router";
import Link from 'next/link'

const en = {
  langButton: 'Español',
  links: ['About', 'Portfolio', 'Publications', 'Contact'],
  hrefs: ['/about', '/portfolio', '/publications', '/contact']
};
const es = {
  langButton: 'Inglés',
  links: ['Sobre', 'Portafolio', 'Publicaciones', 'Contacto'],
  hrefs: ['/sobre', '/portafolio', '/publicaciones', '/contacto']
};

export default function Navbar() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  const changeLanguage = (e) => {
    const locale = e.target.innerText === "Español" ? "es" : "en";
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <nav className='mt-4 mx-4 flex justify-between items-center'>
      <Link href="/"><a><img className='w-12' src="pp.svg" alt="logo"/></a></Link>
      <ul>
        <Link href={t.hrefs[0]}><a className='mr-8 font-semibold text-lg'>{t.links[0]}</a></Link>
        <Link href={t.hrefs[1]}><a className='mr-8 font-semibold text-lg'>{t.links[1]}</a></Link>
        <Link href={t.hrefs[2]}><a className='mr-8 font-semibold text-lg'>{t.links[2]}</a></Link>
        <Link href={t.hrefs[3]}><a className='mr-8 font-semibold text-lg'>{t.links[3]}</a></Link>
        <button className='btn' onClick={changeLanguage}>{t.langButton}</button>
      </ul>
    </nav>
  )
}