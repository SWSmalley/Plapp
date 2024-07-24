import React from 'react'

export default function SubTitle({className,content,...props}) {
  return (
    <h2 className={`text-center italic ${className}`}{...props}>{content}</h2>
  )
}
