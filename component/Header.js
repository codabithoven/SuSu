import React from 'react'
import User from './User'
import {className} from 'tailwindcss-classnames'

function Header() {
  return (
    <header className="flex justify-between flex-center p-5 text-sm-gray-700flex space-x-4"> 
        {/* <div class="bg-green-700 w-24 h-12">1</div> 
        <div class="bg-green-600 w-24 h-12">2</div> 
        <div class="bg-green-500 w-24 h-12">3</div> 
        <div class="bg-green-400 w-24 h-12">4</div>  */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>  
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          <User />
        </div>  
      </header>
  )
}

export default Header