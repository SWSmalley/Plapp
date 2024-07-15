import React from 'react'

export default function SelectInput({optionsList,selectedCallBack}) {
    let options = []
    for(let i=0;i<optionsList.length;i++){
        options.push(<option  className = "bg-white" key = {optionsList[i]} id = {optionsList[i]} value = {optionsList[i]}>{optionsList[i]}</option>)
    }
    const valueChanged = (event) =>{
        selectedCallBack(event.target.value)
    }
  return (
    <select className = "bg-white border-black border-2 text-center "onChange={valueChanged}>
        {options}
    </select>
  )
}
