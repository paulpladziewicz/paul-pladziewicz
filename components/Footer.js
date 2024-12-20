import {useRouter} from "next/router";
import Link from 'next/link'

const en = {
  contact: ['Think I could help?', 'Reach out.', 'I would be happy to have a discussion.', 'Please state clearly the opportunity or why you feel I could add value to your mission.'],
  links: ['About', 'Portfolio', 'Publications', 'Contact'],
  hrefs: ['/about', '/portfolio', '/publications', '/contact'],
  form: ['Name', 'Business', 'Email', 'How did you find me?', 'How can I assist?', 'Submit'],
  footer: {
    title: 'Software Engineer',
    desc: 'I believe there are still many ways to make life easier with software, especially internationally. Sometimes it means creating tools that save us time. Other times it\'s about helping us conduct business regardless of place. When you help others make a connection online, who knows where it can lead?'
  }
};
const es = {
  contact: ['¿Crees que puedo ayudar?', 'Envíame un mensaje.', 'Estaría feliz de tener una discusión.', 'Indique claramente la oportunidad o por qué cree que podría agregar su misión.'],
  links: ['Sobre', 'Portafolio', 'Publicaciones', 'Contacto'],
  hrefs: ['/sobre', '/portafolio', '/publicaciones', '/contacto'],
  form: ['Nombre', 'Negocio', 'Correo electrónico', '¿Cómo me encontraste?', '¿Cómo puedo ayudarle?', 'Enviar'],
  footer: {
    title: 'Ingeniero de software',
    desc: 'Creo que todavía hay muchas formas de hacer la vida más fácil con el software, especialmente a nivel internacional. A veces significa crear herramientas que nos ahorren tiempo. Otras veces se trata de ayudarnos a realizar negocios sin importar el lugar. Cuando ayudas a otros a establecer una conexión en línea, ¿quién sabe a dónde puede conducir?'
  }
};

export default function Footer() {
  const router = useRouter();
  const {locale} = router;
  const t = locale === "en" ? en : es;

  return (
    <footer className='mt-32'>

      <div id='contact contacto' className='md:flex md:items-center mx-4'>
        <div className='md:w-1/2'>
          <div className='md:w-10/12'>
            <h2 className='text-6xl font-bold text-gray-700'>{t.contact[0]}</h2>
            <p className='mt-4 text-4xl font-semibold text-gray-700'><span
              className='text-4xl font-bold text-purple-700'>{t.contact[1]}</span> {t.contact[2]}
            </p>
            <p className='mt-2 text-2xl font-light'>{t.contact[3]}</p>
            <img src="/discussion.jpeg" alt="three people sitting around a desk with their laptops"/>
          </div>
        </div>

        <div className='md:w-1/2'>
          <form className='md:flex md:flex-wrap md:justify-between' action="">
            <div className='md:w-1/2'>
              <input className='w-full p-4 md:mr-1 rounded-2xl bg-gray-100 text-lg' type="text" placeholder={t.form[0]}/>
            </div>
            <div className='mt-4 md:w-1/2 md:mt-0'>
              <input className='w-full p-4 md:ml-1 rounded-2xl bg-gray-100 text-lg' type="text" placeholder={t.form[1]}/>
            </div>
            <div className='mt-4 md:w-1/2'>
              <input className='w-full p-4 md:mr-1 rounded-2xl bg-gray-100 text-lg' type="email" placeholder={t.form[2]}
                     required={true}/>
            </div>
            <div className='mt-4 md:w-1/2'>
              <input className='w-full p-4 md:ml-1 rounded-2xl bg-gray-100 text-lg' type="text"
                     placeholder={t.form[3]} required={true}/>
            </div>
            <div className='w-full mt-4'>
              <textarea className='w-full p-4 rounded-2xl bg-gray-100 text-lg' name="message" id="message"
                        placeholder={t.form[4]} rows="5" required={true}/>
            </div>
            <div>
              <input className='mt-4 btn' type="submit" value={t.form[5]}/>
            </div>
          </form>
        </div>
      </div>

      <div className='mt-20 mb-8 mx-4 md:flex items-center'>
        <div className='md:w-8/12'>
          <div className='md:w-10/12'>
            <h2 className='text-5xl font-bold'>Paul Pladziewicz</h2>
            <h3 className='mt-2 text-4xl font-bold text-purple-700'>{t.footer.title}</h3>
            <p className='mt-2 font-light'>{t.footer.desc}</p>
          </div>
        </div>
        <ul className='hidden md:block md:w-4/12 mt-10 md:flex md:flex-wrap'>
          <Link href={t.hrefs[0]}><a className='hidden sm:block mr-4 font-semibold text-lg'>{t.links[0]}</a></Link>
          <Link href={t.hrefs[1]}><a className='hidden sm:block mr-4 font-semibold text-lg'>{t.links[1]}</a></Link>
          {/*<Link href={t.hrefs[2]}><a className='hidden sm:block mr-4 font-semibold text-lg'>{t.links[2]}</a></Link>*/}
          <Link href={t.hrefs[3]}><a className='hidden sm:block mr-4 font-semibold text-lg'>{t.links[3]}</a></Link>
        </ul>
      </div>

      <p className='mb-2 mx-4 text-center font-light'>© Copyright 2021 Paul Pladziewicz. All rights reserved.</p>
    </footer>
  )
}