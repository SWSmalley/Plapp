import React from 'react'
import RainApi from '../components/RainApi'
import PageRunner from '../components/PageRunner'
import Title from '../components/Title'

export default function WeatherPage() {
  return (
    <PageRunner>
        <Title variant='secondary' className = " text-green-800 p-2"content= { "Weekly Rain Forecast"} />
        <RainApi />
    </PageRunner>
  )
}
