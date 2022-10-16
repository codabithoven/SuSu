import Head from 'next/head'
import Header from '../component/Header'
import {classnames} from 'tailwindcss-classnames';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SuSu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     {/* Header */}
    <Header />
     {/* Body */}
     
     {/* Footer */}           

    {/*<h1 className='flex justify-end ... text-3xl font-bold underline'>hello world</h1> */}
        {/* <div class="bg-green-700 w-24 h-12">1</div> 
        <div class="bg-green-600 w-24 h-12">2</div> 
        <div class="bg-green-500 w-24 h-12">3</div> 
        <div class="bg-green-400 w-24 h-12">4</div>  */}
        
       {/*
        <img alt="user-image" className='h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1'/>} 
       <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brigthness-105' onClick={signIn}>Sign in</button>
      */}


    </div>
  )
}
