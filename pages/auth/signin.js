import React from 'react'
import Header from '../../component/Header'
import {getProviders, signIn } from 'next-auth/react'

export default function signin({ providers }) {
  return (
    <>
    <Header />
        <div className='mt-40'>
            {Object.values(providers).map(provider => (
                <div key={provider.name} className='flex flex-col items-center' >
                    { /* also provide a keay when doing map-loop*/}
                    <img className="w-52 object-cover"
                     src='https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
                     alt="google-log"
                     />

                    <p className='text-sm italic my-10 text-center'>This website is created with NextJs for learning purposes</p>
                    <button className='bg-red-400 rounded-lg text-white p-3 hover:bg-red-500'
                    onClick={()=>signIn(provider.id, {callbackUrl: "/"})}>Sign in with { provider.name }</button>
                </div>
            ))}
        </div>
    </>
    )
}

// Build the Server-Side
// we need the information of the google provider 
// await getProvider() => getProvider first before passing to client
export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: { providers },
    }

}