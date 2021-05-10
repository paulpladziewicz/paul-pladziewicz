import {useRouter} from "next/router";
import Link from 'next/link'

const en = {
  links: ['About', 'Work', 'Opinion', 'Contact']
};
const es = {
  links: ['Sobre', 'Trabajo', 'Opinión', 'Contacto']
};

export default function Footer() {
  const router = useRouter();
  const {locale} = router;
  const t = locale === "en" ? en : es;

  return (
    <footer className='mt-20'>

      <div className='flex'>
        <div className='w-1/2'>
          <div className='w-10/12'>
            <h2 className='text-6xl font-bold text-gray-700'>Think I could help?</h2>
            <p className='mt-4 text-4xl font-semibold text-gray-700'><span
              className='text-4xl font-bold text-purple-700'>Reach out.</span> I would be happy to have a discussion.
            </p>
            <p className='mt-2 text-2xl font-light'>Please state clearly the opportunity or why you feel I could add
              value to your mission.</p>
          </div>
        </div>

        <div className='w-1/2'>
          <form className='flex flex-wrap justify-between' action="">
            <div style={{width: '49%'}}>
              <input className='w-full p-4 rounded-2xl bg-gray-100 text-lg' type="text" placeholder='Name'/>
            </div>
            <div style={{width: '49%'}}>
              <input className='w-full p-4 rounded-2xl bg-gray-100 text-lg' type="text" placeholder='Business'/>
            </div>
            <div className='mt-4' style={{width: '49%'}}>
              <input className='w-full p-4 rounded-2xl bg-gray-100 text-lg' type="email" placeholder='Email'
                     required={true}/>
            </div>
            <div className='mt-4' style={{width: '49%'}}>
              <input className='w-full p-4 rounded-2xl bg-gray-100 text-lg' type="text"
                     placeholder='How did you find me?' required={true}/>
            </div>
            <div className='w-full mt-4'>
              <textarea className='w-full p-4 rounded-2xl bg-gray-100 text-lg' name="message" id="message"
                        placeholder='How can I assist?' rows="5" required={true}/>
            </div>
            <div>
              <input className='mt-4 btn' type="submit"/>
            </div>
          </form>
        </div>
      </div>

      <div className='mt-20 flex items-center'>
        <div className='w-1/2'>
          <div className='w-10/12'>
            <h2 className='text-5xl font-bold'>Paul Pladziewicz</h2>
            <h3 className='mt-2 text-4xl font-semibold text-purple-700'>Software Engineer</h3>
            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci assumenda aut commodi culpa dicta
              doloribus eligendi excepturi explicabo fugit illum incidunt maxime molestias, obcaecati, pariatur possimus
              quaerat quibusdam quo quos, sint sit sunt suscipit tenetur ullam vel veniam voluptatum!</p>
          </div>
        </div>
        <ul className='w-1/2'>
          <Link href="/about"><a className='mr-4 font-semibold'>{t.links[0]}</a></Link>
          <Link href="/work"><a className='mr-4 font-semibold'>{t.links[1]}</a></Link>
          <Link href="/opinion"><a className='mr-4 font-semibold'>{t.links[2]}</a></Link>
          <Link href="/contact"><a className='mr-4 font-semibold'>{t.links[3]}</a></Link>
        </ul>
      </div>

    </footer>
  )
}