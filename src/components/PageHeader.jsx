import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import MenuBar from './MenuBar'

export default function PageHeader() {
  return (
    <div className='w-5/6 h-32 bg-green-800 flex flex-col justify-center items-center align-middle m-auto'>
        <Title content = "PLAPP" className= "text-white text-6xl"/>
        <SubTitle content={`-Cataloguing and caring for your plants-`} className={"text-white"}/>
        <MenuBar />
    </div>
  )
}
