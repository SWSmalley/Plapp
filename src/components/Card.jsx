import React from 'react'
import DisplayPic from './DisplayPic.jsx'
import Title from './Title.jsx'
import FlowerNameAndDescription from './FlowerNameAndDescription.jsx'


export default function Card({children}) {
  return (
    <div className='flex flex-row w-64 h-36 bg-plantcolor rounded-lg justify-around items-center'>
      {children}
    
    </div>
  )
}
