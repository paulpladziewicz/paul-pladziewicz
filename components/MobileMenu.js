import {FaCompressAlt, FaExpandAlt} from "react-icons/fa";
import {useReducer} from "react";
import { useRouter } from "next/router";
import Link from 'next/link'

const en = {
  links: ['About', 'Portfolio', 'Publications', 'Contact'],
  hrefs: ['/about', '/portfolio', '/publications', '/contact']
};
const es = {
  links: ['Sobre', 'Portafolio', 'Publicaciones', 'Contacto'],
  hrefs: ['/sobre', '/portafolio', '/publicaciones', '/contacto']
};

export default function MobileMenu() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  const [menu, toggleMenu] = useReducer(open => !open, false)

  return (
    <div className='fixed sm:hidden bottom-4 right-4 rounded-full p-4 bg-purple-700 text-white cursor-pointer'
         onClick={toggleMenu}
    >
      {menu ? <FaCompressAlt size={20}/> : <FaExpandAlt size={20}/>}

      {menu ? <ul className='absolute flex flex-col rounded-md right-16 bottom-8 p-6 bg-purple-700'>
        <Link href={t.hrefs[0]}><a onClick={toggleMenu} className='text-white font-semibold text-lg'>{t.links[0]}</a></Link>
        <Link href={t.hrefs[1]}><a onClick={toggleMenu} className='mt-2 text-white font-semibold text-lg'>{t.links[1]}</a></Link>
        {/*<Link href={t.hrefs[2]}><a onClick={toggleMenu} className='mt-2 text-white font-semibold text-lg'>{t.links[2]}</a></Link>*/}
        <Link href={t.hrefs[3]}><a onClick={toggleMenu} className='mt-2 text-white font-semibold text-lg'>{t.links[3]}</a></Link>
      </ul> : null}

    </div>
  );
}