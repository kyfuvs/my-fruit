import Link from 'next/link'
import React from 'react'

const bgNav ={
    backgroundColor: '#1c3455',
}

export default function Navbar() {
  return (
    <div>
       <div style={bgNav} className=' px-5 py-5 flex justify-center gap-10'>
        <Link 
            className='btn bg-white rounded-md px-8 py-2 text-2xl font-bold ' 
            href={'/'}>首頁
        </Link>

        <Link 
            className='btn bg-white rounded-md px-8 py-2 text-2xl font-bold ' 
            href={'/cart'}>購物車
        </Link>
       </div>
    </div>
  )
}
