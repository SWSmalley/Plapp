import React from 'react'

export default function Input({type,className,...props}) {
  return (
    <input type = {type} {...props} className= {`border-black border-2 shadow-inner shadow-slate-500 ${className}`}/>
  )
}
