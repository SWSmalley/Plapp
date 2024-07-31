import React, { useState } from 'react'
import DisplayPic from '../components/DisplayPic.jsx'
import Title from '../components/Title.jsx'


export default function PlantCardDetails({plant}) {

const [objectIsHovered,setObjectIsHovered] = useState(false)


    return (
    <div className = " flex flex-row justify-around items-center" onMouseEnter = {() => { setObjectIsHovered(true)}} onMouseLeave = {() => { setObjectIsHovered(false)}}>
        <DisplayPic imagePath = {plant.ProfileImage} />
                <div className='flex flex-col justify-center items-center m-1'>
                    <Title variant='secondary' content = {plant.Title} className={""}/>
                    <Title variant = "subTitle" content = {plant.Breed}/>
                </div>
                
                    <div className={`  absolute w-64 h-36 bg-opacity-80 backdrop-blur-sm bg-white mt-6 z-10 rounded-lg transition-opacity duration-200 ${objectIsHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <Title variant='subTitle'  content= {plant.Description} />
                    </div>
                

    </div>
  )
}
