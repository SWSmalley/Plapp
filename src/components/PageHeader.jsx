import React from 'react'
import Title from './Title'
import MenuBar from './MenuBar'


export default function PageHeader() {
  return (
    <div className='w-5/6 h-32 bg-green-800 flex flex-col justify-center items-center align-middle m-auto'>
        <Title content = "PLAPP" variant = "primary"/>
        <Title variant = "subTitle"content={`-Cataloguing and caring for your plants-`} className={"text-white"}/>
        <MenuBar />
    </div>
  )
}
