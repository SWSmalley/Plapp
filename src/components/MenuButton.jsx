import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function MenuButton({content,pathLink}) {
  return (
    <Link to = {pathLink}>
    <Button variant = {"secondary"}content = {content} ></Button>
    </Link>
  )
}
