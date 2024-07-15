import React from 'react'

export default function DisplayPic({imagePath}) {
  return (
    <img src = {imagePath} className = "rounded-full object-cover w-28 h-28 m-1" />
  )
}
