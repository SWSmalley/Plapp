import React from 'react'
import MenuButton from './MenuButton'

export default function MenuBar({menuItems,...props}) {
   // console.log(menuItems[0].Name, "= menu items")
    let menuItemsNames = []
    let  menuItemButtons = []
    for(let key in menuItems){
        menuItemsNames.push(menuItems[key].Name)
        menuItemButtons.push(<MenuButton key = {menuItems[key].Name} name = {menuItems[key].Name} value = {menuItems[key].Name} content = {menuItems[key].Name}/>)
    }
    console.log(menuItemButtons, "= menuItemButtons")
  return (
    <div className='flex flex-row justify-center bg-green-800 w-5/6 m-auto'>{menuItemButtons}</div>
  )
}
