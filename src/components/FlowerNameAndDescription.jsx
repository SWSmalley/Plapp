import React from 'react'
import SubTitle from './SubTitle.jsx'

export default function FlowerNameAndDescription({flowerName,flowerDescription}) {
  return (
    <div className='m-1'>
    <SubTitle content={`-${flowerName}-`}/>
    {/*<p>{flowerDescription}</p> i dont think its actually worth putting this here for the moment. we can show it on hover over maybe?*/}
    </div>
    
  )
}
