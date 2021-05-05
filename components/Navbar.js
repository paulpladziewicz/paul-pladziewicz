import { useRouter } from "next/router";
import Link from 'next/link'

const en = {
  about: 'About',
};
const es = {
  about: 'Sobre'
};

export default function Navbar() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <nav className='mt-4 mx-4 flex justify-between items-center'>
      <Link href="/"><a><img className='w-12' src="pp.svg" alt="logo"/></a></Link>
      <ul>
        <Link href="/about"><a className='mr-4'>{t.about}</a></Link>
        <Link href="/work"><a className='mr-4'>Work</a></Link>
        <Link href="/opinion"><a className='mr-4'>Opinion</a></Link>
        <Link href="/contact"><a className='mr-4'>Contact</a></Link>
        <select
          onChange={changeLanguage}
          defaultValue={locale}
          className="text-xl p-1 border-2 border-gray-500 rounded-lg"
        >
          <option className="text-gray-900" value="en">
            English
          </option>
          <option className="text-gray-900" value="es">
            Español
          </option>
        </select>
      </ul>
    </nav>
  )
}