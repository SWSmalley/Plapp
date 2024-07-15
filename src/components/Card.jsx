import React from 'react'
import DisplayPic from './DisplayPic.jsx'
import Title from './Title.jsx'
import FlowerNameAndDescription from './FlowerNameAndDescription.jsx'


export default function Card({item}) {
  return (
    <div className='flex flex-row w-64 h-36 bg-plantcolor rounded-lg justify-around items-center'>
      <DisplayPic imagePath = {item.ProfileImage} />
      <div className='flex flex-col justify-center items-center'>
      <Title content = {item.Title} className={"text-2xl"}/>
      <FlowerNameAndDescription flowerName = {item.Breed} flowerDescription = {item.Description} />

      </div>

    
    </div>
  )
}
