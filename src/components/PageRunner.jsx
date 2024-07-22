import React  from 'react'

export default function PageRunner({ children }) {
  
  return (
    <div className='flex flex-col items-center bg-white rounded-lg my-2  p-5 mx-auto w-5/6 justify-center align-middle'>
        {children}
    </div>
  )
}
