import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuButton({content,pathLink,...props}) {
  return (
    <Link to = {pathLink}>
    <div className='text-green-800 bg-white px-3 font-extrabold w-32 text-center align-middle' {...props}>{content}</div>
    </Link>
  )
}
