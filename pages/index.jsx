// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
//: NextPage
import { useSession, signIn, signOut } from "next-auth/react"

const Home = () => {
  const { data:session} = useSession()



  return (
    <div className="flex min-h-screen flex-col items-center justify-center " style={{
      backgroundImage :"linear-gradient( rgb(0 0 0 /60%),rgb(0 0 0 / 60%)), url(/netflixbg.jpg)"}}>
      <Head>
        <title>Netflix Clone </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" text-white flex w-full flex-1 flex-col items-center justify-center px-20 text-center ">
      {session && <> Signed in as {session.user.email} <br />
        <button className='bg-red-500 px-8  ' onClick={() => signOut()}>Sign out</button></>
        
        }

      {!session && <>Not signed in <br />
      <button className='bg-red-500 px-4'  onClick={() => signIn()}>Sign in</button></>}

        <h1 className='text-5xl font-medium '>Unlimited movies, TV shows, and more.</h1>
        <p className='text-3xl my-4'>Watch anywhere. Cancel anytime.</p>
        <p className='my-2'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className=' flex bg-red-400'>
        <input type="text" placeholder='Enter Address' className='border-2 py-3 px-2 w-96 '/>
        <button className='bg-red-500 px-8 '>Get Started</button>
        </div>
      </main>
    </div>
  )
}

export default Home
