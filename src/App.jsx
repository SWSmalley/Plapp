
import { Routes, Route } from "react-router-dom"

import PageHeader from './components/PageHeader.jsx'
import GalleryPage from './components/GalleryPage.jsx'
import flowerData from './assets/flowerProfileData/PlantProfiles.json'
import WeatherPage from './components/WeatherPage.jsx'
import AboutPage from './components/AboutPage.jsx'
import { createContext } from "react"
export const PagesContext = createContext();


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
      }
]



function App() {

  return (<div className="bg-[url('./src/assets/graphics/leaf-pattern-seamless-background-half-size.jpg')] pb-5 min-h-screen bg-repeat">
    <PagesContext.Provider value = {PageContentList}>
      <PageHeader />
      
      <Routes>
         <Route path = "/" element = {<GalleryPage galleryData={flowerData} />} />
         <Route path = "/Weather" element = {<WeatherPage />} />
        <Route path = "/About" element = {<AboutPage />} />
      </Routes>
    </PagesContext.Provider>
    </ div>
  )
}

export default App
