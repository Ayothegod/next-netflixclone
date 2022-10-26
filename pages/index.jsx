// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
//: NextPage
import { useSession, signIn, signOut } from "next-auth/react"
import image from '../public/netflix-3.svg'

const Home = () => {
  const { data:session} = useSession()



  return (
    <div className="flex min-h-screen flex-col items-center justify-center " style={{
      backgroundImage :"linear-gradient( rgb(0 0 0 /60%),rgb(0 0 0 / 60%)), url(/netflixbg.jpg)"}}>
      <Head>
        <title>Netflix Clone </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='sm:flex justify-between items-center my-2 px-4  w-full'>
        <div className='text-white font-bold text-2xl'>
          <Image
      src={image}
      alt="Picture of the logo"
      width={100}
      height={90}
    />
        </div>
        <div className='flex text-center'>
          {!session ? <>Not signed in <br />
      <button className='bg-red-500 px-6 py-2 rounded'  onClick={() => signIn()}>Sign in</button></> : <div className='text-white'> Signed in as {session.user.email} <br />
        <button className='bg-red-500 px-6 py-2 rounded ' onClick={() => signOut()}>Sign out</button></div>}
        </div>
      </header>

      <main className=" text-white flex w-full flex-1 flex-col items-center justify-center  text-center ">
        <h1 className='text-2xl sm:text-5xl font-medium '>Unlimited movies, TV shows, and more.</h1>
        <p className=' sm:text-3xl sm:my-4'>Watch anywhere. Cancel anytime.</p>
        <p className='leading-none my-2'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className=' sm:flex '>
        <input type="text" placeholder='Enter Address' className='py-1 px-4   sm:px-2 sm:w-96 '/>
        <button className='p-1 bg-red-500 rounded mt-2 sm:mt-0 sm:px-2 sm:py-3 '>Get  Started</button>
        </div>
      </main>
    </div>
  )
}

export default Home
