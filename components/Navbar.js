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
    <nav className='flex justify-between'>
      <span>Paul</span>
      <ul>
        <Link href="/about"><a>{t.about}</a></Link>
        <Link href="/work"><a>Work</a></Link>
        <Link href="/opinion"><a>Opinion</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
        <select
          onChange={changeLanguage}
          defaultValue={locale}
          className="text-xl p-1 border-2 rounded-md"
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