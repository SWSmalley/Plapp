import React from 'react'



export default function Card({children,...props}) {
  return (
    <div {...props} className='w-64 h-36 bg-plantcolor rounded-lg'>
      {children}
    
    </div>
  )
}
