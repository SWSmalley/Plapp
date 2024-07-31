import React from 'react'

export default function Button({variant = "primary", className = "",content = "",...props}) {

  const variants = {
    "primary" : 'text-white bg-green-800 px-3 font-extrabold w-48 text-center p-1 m-2 transition hover:text-green-800 hover:bg-white duration-100',
    "secondary": "text-green-800 bg-white px-3 font-extrabold w-48 text-center p-1 m-2 transition hover:text-white hover:bg-green-800 duration-100",
    "ghost" : "font-extrabold text-xs text-gray-500 transition hover:text-red-800 duration-100"
}
  return (
    <button className={ `${variants[variant]} ${className}`} {...props} >{content}</button>
  )
}
