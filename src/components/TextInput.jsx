import React from 'react'

export default function TextInput({inputID,description,placeholder,setValueCall}) {
  return (
    <div className='flex flex-row justify-between gap-5 p-1 w-full'>
    <label htmlFor={inputID}>{description}</label>
    <input id = {inputID} name={inputID} placeholder = {placeholder}  type = "text" className='border-black border-2 shadow-inner shadow-slate-500' onSubmit={setValueCall} />
    </div>
  )
}
