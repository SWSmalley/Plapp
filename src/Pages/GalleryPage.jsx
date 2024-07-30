import React, { useDeferredValue, useEffect, useState } from 'react'
import CardContainer from '../components/CardContainer.jsx'
import Card from '../components/Card.jsx'
import PageRunner from '../components/PageRunner.jsx'
import Title from '../components/Title.jsx'
import Input from '../components/Input.jsx'
import galleryData from "../assets/flowerProfileData/PlantProfiles.json"
import DisplayPic from '../components/DisplayPic.jsx'
import FlowerNameAndDescription from '../components/FlowerNameAndDescription.jsx'
///this is intended to hold a filter and a container




export default function GalleryPage() {

  const [cards,setCards] = useState(galleryData)
  const [filterText,setFilterText] = useState("")
  const defferedFilterText = useDeferredValue(filterText)

  console.log(cards)

useEffect( () => {
  
  if (!defferedFilterText){
    setCards(galleryData)
  }else{
    setCards(galleryData.filter((dataItem)=>{return(dataItem.Title.toLowerCase().includes(defferedFilterText.toLowerCase())||dataItem.Breed.toLowerCase().includes(defferedFilterText.toLowerCase())) }))
  }

},[defferedFilterText])



  return (
    <PageRunner>
      <Title className = "text-3xl text-green-800 p-2"content= { "Browse Your Plant Profiles"} />
      <Input value = {filterText} className = "w-4/5" type="text" onInput = {(e) => {setFilterText(e.target.value)}} id="filter" placeholder = " Filter list by title or breed"/>
      <CardContainer>
        {cards.map( (item,index) =>
          {
            return(
              <Card key = {index}>
                <DisplayPic imagePath = {item.ProfileImage} />
                <div className='flex flex-col justify-center items-center'>
                  <Title content = {item.Title} className={"text-2xl"}/>
                  <FlowerNameAndDescription flowerName = {item.Breed} flowerDescription = {item.Description} />
                </div>
              </Card>
            )
          }
        )}
      </CardContainer>
    </PageRunner>
  )
}
