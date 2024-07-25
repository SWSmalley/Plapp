import React, { useDeferredValue, useEffect, useState } from 'react'
import CardContainer from '../components/CardContainer'
import Card from '../components/Card.jsx'
import PageRunner from '../components/PageRunner.jsx'
import Title from '../components/Title.jsx'
///this is intended to hold a filter and a container

import galleryData from '../assets/flowerProfileData/PlantProfiles.json'
import Input from '../components/Input.jsx'


export default function GalleryPage() {

  const [query, setQuery] = useState("")
  const deferredValue = useDeferredValue(query)
  const [plants, setPlants] = useState(galleryData)


  useEffect(() => {
    if (!deferredValue) {
      setPlants(galleryData)
      return
    }

    let lowerCaseValue = deferredValue.toLowerCase()

    let filteredPlants = galleryData.filter(p => p.Title.toLowerCase().includes(lowerCaseValue) || p.Breed.toLowerCase().includes(lowerCaseValue))

    setPlants(filteredPlants)

  }, [deferredValue])


  // filter controls can call the filter cards function and will pass it a new filter value
  return (
    <PageRunner>
      <Title className="text-3xl text-green-800 p-2" content={"Browse Your Plant Profiles"} />
      {/* <FilterControls applyingTextFilter={filterCards} filterOptions={["Title", "Breed"]} applyingFilterOptions={filterTypeUpdate} /> */}
      <Input value={query} onInput={(e) => setQuery(e.target.value)} type="search" placeholder="Search by name or breed" />
      <CardContainer>
        {
          plants.map((item, index) => (<Card key={index} item={item} />))
        }
      </CardContainer>
    </PageRunner>
  )
}
