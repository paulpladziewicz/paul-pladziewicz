import {useRouter} from "next/router";
import Link from 'next/link'

const en = {
  contact: ['Think I could help?', 'Reach out.', 'I would be happy to have a discussion.', 'Please state clearly the opportunity or why you feel I could add value to your mission.'],
  links: ['About', 'Portfolio', 'Opinion', 'Contact'],
  form: ['Name', 'Business', 'Email', 'How did you find me?', 'How can I assist?', 'Submit'],
  footer: {
    title: 'Software Engineer'
  }
};
const es = {
  contact: ['¿Crees que puedo ayudar?', 'Envíame un mensaje.', 'Estaría feliz de tener una discusión.', 'Indique claramente la oportunidad o por qué cree que podría agregar su misión.'],
  links: ['Sobre', 'Portafolio', 'Opinión', 'Contacto'],
  form: ['Nombre', 'Negocio', 'Correo electrónico', '¿Cómo me encontraste?', '¿Cómo puedo ayudarle?', 'Enviar'],
  footer: {
    title: 'Ingeniero de software'
  }
};

export default function Footer() {
  const router = useRouter();
  const {locale} = router;
  const t = locale === "en" ? en : es;

  return (
    <footer className='mt-32'>

      <div id='contact contacto' className='flex items-center'>
        <div className='w-1/2'>
          <div className='w-10/12'>
            <h2 className='text-6xl font-bold text-gray-700'>{t.contact[0]}</h2>
            <p className='mt-4 text-4xl font-semibold text-gray-700'><span
              className='text-4xl font-bold text-purple-700'>{t.contact[1]}</span> {t.contact[2]}
            </p>
            <p className='mt-2 text-2xl font-light'>{t.contact[3]}</p>
            <img src="/discussion.jpeg" alt="three people sitting around a desk with their laptops"/>
          </div>
        </div>

        <div className='w-1/2'>
          <form className='flex flex-wrap justify-between' action="">
            <div style={{width: '49%'}}>
              <input className='w-full p-4 rounded-2xl bg-gray-100 text-lg' type="text" placeholder={t.form[0]}/>
            </div>
            <div style={{width: '49%'}}>
              <input className='w-full p-4 rounded-2xl bg-gray-100 text-lg' type="text" placeholder={t.form[1]}/>
            </div>
            <div className='mt-4' style={{width: '49%'}}>
              <input className='w-full p-4 rounded-2xl bg-gray-100 text-lg' type="email" placeholder={t.form[2]}
                     required={true}/>
            </div>
            <div className='mt-4' style={{width: '49%'}}>
              <input className='w-full p-4 rounded-2xl bg-gray-100 text-lg' type="text"
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

      <div className='mt-20 mb-8 flex items-center'>
        <div className='w-8/12'>
          <div className='w-10/12'>
            <h2 className='text-5xl font-bold'>Paul Pladziewicz</h2>
            <h3 className='mt-2 text-4xl font-semibold text-purple-700'>{t.footer.title}</h3>
            <p className='mt-2 font-light'>I believe there are still many ways to
              make life easier with software, especially
              internationally.
              Sometimes it means creating tools that save us time. Other times it's about helping us conduct business
              regardless of place. When you help others make a connection online, who knows where it can lead?</p>
          </div>
        </div>
        <ul className='w-4/12 mt-10'>
          <Link href="/about"><a className='mr-8 font-semibold'>{t.links[0]}</a></Link>
          <Link href="/work"><a className='mr-8 font-semibold'>{t.links[1]}</a></Link>
          <Link href="/opinion"><a className='mr-8 font-semibold'>{t.links[2]}</a></Link>
          <Link href="/contact"><a className='mr-8 font-semibold'>{t.links[3]}</a></Link>
        </ul>
      </div>

      <p className='mb-2'>© Copyright 2021 Paul Pladziewicz. All rights reserved.</p>
    </footer>
  )
}