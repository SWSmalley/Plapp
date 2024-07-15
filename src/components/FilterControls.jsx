import React from 'react'
import SelectInput from './SelectInput'

export default function FilterControls({applyingTextFilter,filterOptions,applyingFilterOptions}) {


    const filterButtonPressed = (event) => {
        console.log("button value = ", event.target.value)
        applyingTextFilter(event.target.value)
    }
    const filterTypeSelected = (filterValue) =>{
      applyingFilterOptions(filterValue)
      console.log("new filter type ", filterValue)
    }
    
  return (
    <div className='flex flex-row justify-center gap-5 p-5'>
        <label htmlFor = "nameFilter">Filter By:</label>
        <SelectInput className = "bg-white" optionsList={filterOptions} selectedCallBack = {filterTypeSelected}/>
   < input id = "nameFilter" onInput={filterButtonPressed} type='text' placeholder='Rose...' className='border-2 border-black w-20 md:w-auto'/>
   </div>
  )
}
