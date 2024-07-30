import React from 'react'

export default function DeleteButton({onClick}) {
  return (
    <button onClick = {onClick} className='text-right font-extrabold text-xs text-gray-500 cursor-pointer'>DELETE</button>
  )
}
