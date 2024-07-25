import React from 'react'

export default function ParagraphBox({content}) {
  return (
    <div className='rounded-lg border-4 border-green-800 md:w-1/3'>
        <p className='p-5'>{content}</p>
    </div>
  )
}
