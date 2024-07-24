import React from 'react'
import MenuButton from './MenuButton'
import { useContext } from 'react'
import { PagesContext } from "../App.jsx"

export default function MenuBar() {  
  const PageContentList = useContext(PagesContext);
  let buttons =[]
  for(let i=0;i<PageContentList.length;i++){
    buttons.push(<MenuButton key ={i} content ={PageContentList[i].Name} pathLink = { PageContentList[i].Path}/>)
  }
  return (
   <div className='flex flex-row flex-wrap gap-1 p-2 items-center justify-center'>
    {buttons}
   </div>
  )
}
