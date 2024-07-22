import React from 'react'
import RainApi from './RainApi'
import PageRunner from './PageRunner'

export default function WeatherPage() {
  return (
    <PageRunner>
        <RainApi />
    </PageRunner>
  )
}
