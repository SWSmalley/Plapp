import React from 'react'
import RainApi from '../RainApi'
import PageRunner from '../PageRunner'
import Title from '../Title'

export default function WeatherPage() {
  return (
    <PageRunner>
        <Title className = "text-3xl text-green-800 p-2"content= { "Weekly Rain Forecast"} />
        <RainApi />
    </PageRunner>
  )
}
