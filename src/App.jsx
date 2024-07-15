import { useState } from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import CardContainer from './components/CardContainer.jsx'
import PageHeader from './components/PageHeader.jsx'
import GalleryPage from './components/GalleryPage.jsx'
import galleryData from './assets/flowerProfileData/PlantProfiles.json'
import MenuBar from './components/MenuBar.jsx'
import WeatherPage from './components/WeatherPage.jsx'
import AboutPage from './components/AboutPage.jsx'

let PageContentList = { 
      "flowerGallery" :
      {
        "Tag":<GalleryPage galleryData={galleryData}/>,
        "Name": "Catalogue"
      },
    "WeatherPage":
      {
      "Tag": <WeatherPage />,
      "Name" : "Weather"
      },
    "AboutPage":
      {
        "Tag":<AboutPage />,
        "Name": "About"
      }
    }




function App() {
  const [currentPage,setCurrentPage] = useState(PageContentList.flowerGallery)

  return (<div className="bg-[url('./src/assets/graphics/leaf-pattern-seamless-background.jpg')] pb-5">
    <PageHeader />
    <MenuBar menuItems = {PageContentList}/>

    {currentPage.Tag}
    </ div>
  )
}

export default App
