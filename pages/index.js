import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>

      <div className='mt-20 flex'>
        <div className='w-7/12'>
          <h1 className='text-7xl font-bold'>Meet Paul Pladziewicz</h1>
          <h2 className='mt-8 text-6xl font-medium text-gray-700'><span className='font-bold text-purple-800'>Software Engineer</span> with experience building <span className='font-bold text-purple-700'>websites</span> and <span className='font-bold text-purple-700'>web applications</span>.</h2>
        </div>
        <div className='w-5/12'>
          <img src="/development-vector.jpeg" alt="vector image of people building a project with code"/>
        </div>
      </div>

      <div className='mt-20 text-center'>
        <h2 className='capitalize text-5xl font-semibold text-gray-700'>Utilizing my talents within software engineering to add value to the lives of others.</h2>
        <span className='block mt-6 text-6xl font-bold text-purple-800'>At any scale.</span>
      </div>

    </Layout>
  )
}
