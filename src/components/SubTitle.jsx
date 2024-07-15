import React from 'react'

export default function SubTitle({className,content,...props}) {
  return (
    <p className={`text-center italic ${className}`}{...props}>{content}</p>
  )
}
