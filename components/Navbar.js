import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex justify-between'>
      <span>Paul</span>
      <ul>
        <Link href="/about"><a>About</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </ul>
    </nav>
  )
}