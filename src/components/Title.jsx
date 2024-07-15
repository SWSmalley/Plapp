import React from 'react'

export default function Title({content,className,...props}) {
  return (
    <p className= {` font-extrabold justify-center ${className}`}{...props}>{content}</p>
  )
}

