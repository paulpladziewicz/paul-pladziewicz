import Link from 'next/link'

export default function Footer() {
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

      <div className='mt-20 flex'>
        <div className='w-1/2'>
          <h2>More description</h2>
        </div>
        <ul className='w-1/2'>
          <li>List links</li>
        </ul>
      </div>

    </footer>
  )
}