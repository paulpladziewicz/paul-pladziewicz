import { useRouter } from "next/router";
import Link from 'next/link'

const en = {
  langButton: 'Español',
  links: ['About', 'Work', 'Opinion', 'Contact']
};
const es = {
  langButton: 'Inglés',
  links: ['Sobre', 'Trabajo', 'Opinión', 'Contacto']
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
        <Link href="/about"><a className='mr-4 font-semibold'>{t.links[0]}</a></Link>
        <Link href="/work"><a className='mr-4 font-semibold'>{t.links[1]}</a></Link>
        <Link href="/opinion"><a className='mr-4 font-semibold'>{t.links[2]}</a></Link>
        <Link href="/contact"><a className='mr-4 font-semibold'>{t.links[3]}</a></Link>
        <button className='btn' onClick={changeLanguage}>{t.langButton}</button>
      </ul>
    </nav>
  )
}