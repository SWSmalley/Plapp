import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'

export default function PageHeader() {
  return (
    <div className='w-5/6 h-28 bg-green-800 flex flex-col justify-center items-center align-middle m-auto'>
        <Title content = "PLAPP" className= "text-white text-6xl"/>
        <SubTitle content={`-Cataloguing and caring for your plants-`} className={"text-white"}/>

    </div>
  )
}
