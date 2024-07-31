
import { Routes, Route } from "react-router-dom"

import PageHeader from './components/PageHeader.jsx'
import WeatherPage from '../src/Pages/WeatherPage.jsx'
import AboutPage from '../src/Pages/AboutPage.jsx'
import SiteToDoPage from "../src/Pages/SiteToDoPage.jsx"
import GalleryPage from "../src/Pages/GalleryPage.jsx"





function App() {

  return (<div className="bg-[url('./src/assets/graphics/leaf-pattern-seamless-background-half-size.jpg')] pb-5 min-h-screen bg-repeat">

      <PageHeader />
      
      <Routes>
         <Route path = "/" element = {<GalleryPage/>} />
         <Route path = "/Weather" element = {<WeatherPage />} />
        <Route path = "/About" element = {<AboutPage />} />
        <Route path = "/ToDo" element = {<SiteToDoPage />} />
      </Routes>

    </ div>
  )
}

export default App
