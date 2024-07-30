import React, { useState } from 'react'
import CardContainer from '../CardContainer.jsx'
import Card from '../Card.jsx'
import FilterControls from '../FilterControls.jsx'
import PageRunner from '../PageRunner.jsx'
import Title from '../Title.jsx'
import Input from '../Input.jsx'
///this is intended to hold a filter and a container




export default function GalleryPage({galleryData}) {
 // const [textFilter,setTextFilter] = useState("")
 /// cant have a filter state becauese it update untill the rerender and we want the cards to update on the rerender using it.
 //instead were filtereing the cards list and using that set to trigger the rerender
  const defaultCards  = []
  for(let i=0;i<galleryData.length;i++){
    defaultCards.push( <Card key = {galleryData[i].Title} item = {galleryData[i]} />)

  }
  const [cards,setCards] = useState(defaultCards)
  //const [filterText,setFilterText] = useState("")


  // let filteredCards = []
  // function filterCards(newFilter){
  //   console.log(newFilter, "we are applying this text filter value")
  //   filteredCards.length = 0
  //   if(newFilter){ // if theres any value in the text filter add all the plants that names match it
  //   for(let i=0;i<galleryData.length;i++){
  //     if(galleryData[i][filterType].toLowerCase().includes(newFilter.toLowerCase())){
  //       filteredCards.push( <Card key = {galleryData[i].Title} item = {galleryData[i]} />)
 
  //   }
  
  // //}
  // }else{ // if theres no filter value just add all the cards anyway
  //   for(let i=0;i<galleryData.length;i++){
  //     filteredCards.push( <Card key = {galleryData[i].Title} item = {galleryData[i]} />)
      
  //   }

  // }
 
  //setCards(filteredCards) 
//}

function filterTypeUpdate(newValue){
  setFilterType(newValue)
  filterCards("")
}
// filter controls can call the filter cards function and will pass it a new filter value
  return (
    <PageRunner>
      <Title className = "text-3xl text-green-800 p-2"content= { "Browse Your Plant Profiles"} />
      <Input type = "text"  placeholder="Filter by title or breed..." className = "w-4/5"/>
      <CardContainer>
        {cards.map(<Task />)}
      </CardContainer>
    </PageRunner>
  )
}
