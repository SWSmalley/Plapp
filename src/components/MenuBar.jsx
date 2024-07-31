import React from 'react'
import MenuButton from './MenuButton'

const PageContentList = [{
  "Path":"/",
  "Name": "CATALOGUE"
},
{
"Path": "/Weather",
"Name" : "WEATHER"
},
{
  "Path":"/About",
  "Name": "ABOUT"
},
{
  "Path":"/ToDo",
  "Name":"TODO"
}
]


export default function MenuBar() {  ;
  ///we map create a menubutton comp. for each page in the page content list - this comp. wraps a Button comp. in a routing link.
  return (
   <div className='flex flex-row flex-wrap gap-1 p-2 items-center justify-center'>
   {PageContentList.map((page,index)=>{return(<MenuButton key = {index} content ={page.Name} pathLink = {page.Path}/>)})}
   </div>
  )
}
