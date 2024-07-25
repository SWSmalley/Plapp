import React from 'react'
import PageRunner from './PageRunner'
import ParagraphBox from './ParagraphBox'
import Title from './Title'

export default function AboutPage() {
  return (
    <PageRunner>
     <Title className = "text-3xl text-green-800 p-2"content= { "What Is PLAPP?"} />
    <ParagraphBox 
    content = "PLAPP is your friendly gardening companion that helps you keep your plants happy and healthy. PLAPP keeps an eye on your plants' soil moisture, making sure they're getting the water they need. PLAPP also checks the weather forecast and lets you know if hot or dry conditions are coming up, so you can water your plants before they get thirsty. Whether you have a few potted plants or a whole garden, PLAPP is here to help you keep them thriving and looking their best."
    />
    </PageRunner>
  )
}
