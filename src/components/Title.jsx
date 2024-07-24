import React from 'react'

export default function Title({content,className,...props}) {
  return (
    <h1 className= {` font-extrabold justify-center ${className}`}{...props}>{content}</h1>
  )
}

