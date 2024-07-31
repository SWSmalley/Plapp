import React from 'react'

export default function Title({variant = "secondary",content,className,...props}) {
  const variants ={
    "primary" : "font-extrabold justify-center text-white text-6xl",
    "secondary" : "font-extrabold justify-center text-2xl",
    "subTitle" : "text-center italic "
  }
  return (
    <h2 className= {` ${variants[variant]} ${className}`}{...props}>{content}</h2>
  )
}

