import React from 'react'
import MenuButton from './MenuButton'



const menuItems = [{
  "Path": "/",
  "Name": "CATALOGUE"
},

{
  "Path": "/Weather",
  "Name": "WEATHER"
},

{
  "Path": "/About",
  "Name": "ABOUT"
},
{
  "Path": "/ToDo",
  "Name": "TODO"
}

]



export default function MenuBar() {

  return (
    <div className='flex flex-row flex-wrap gap-1 p-2 items-center justify-center'>
      {
        menuItems.map((item, index) => (<MenuButton key={index} content={item.Name} pathLink={item.Path} />))
      }
    </div>
  )
}
