import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';
import Title from './Title';

export default function RainApi() {
    const [forecast,setForecast] = useState({"latitude":53.66,"longitude":-2.6200001,"generationtime_ms":0.04494190216064453,"utc_offset_seconds":0,"timezone":"GMT","timezone_abbreviation":"GMT","elevation":105.0,"daily_units":{"time":"iso8601","precipitation_probability_max":"%"},"daily":{"time":["today","+1","+2","+3","+4","+5","+6"],"precipitation_probability_max":[0,0,0,0,0,0,0]}})
    let barColours = []
    barColours = forecast.daily.precipitation_probability_max.map(value =>(value > 55 ? '#80EAFF' : '#990000'))
    function getWeatherForecast(){
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=53.65&longitude=-2.6167&daily=precipitation_probability_max`)
        .then(res => res.json())
            .then(data => {
                setForecast(data)
                console.log(data)
                barColours = data.daily.precipitation_probability_max.map(value =>(value > 55 ? '#80EAFF' : '#990000'))
            })
            
        }
useEffect(()=>{   getWeatherForecast()},[]) // this calls getweatherforecast on the initial render
// it calls it again when the props within [] change.... there are non so only on the initial render
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
    <Title className = "text-3xl text-green-800"content= { "Weekly Rain Forecast"} />
    <Plot className = "border-green-800 border-4"data = {[
        {
            x: ["today","+1","+2","+3","+4","+5","+6"],
            y: forecast.daily.precipitation_probability_max,
            type: `bar`,
            marker: {color: barColours}
        }

        ]}
        layout={ {
           width: 360, 
            height: 240,
            margin:{
                l:50,
                r:25,
                t:25,
                b:50,
                },
            xaxis:{
                type: 'category',
                showgrid: false,
                title: "",
                zeroline: false
                },
            yaxis:{
                showgrid: false,
                range:[0,100],
                zeroline: false,
                title:{ 
                    text:"Chance of rain (%)",
      
                    }
                }
                

                }
        } 
        config={{   displayModeBar: false,
                    staticPlot: true
                     }}

        />
        </div>
)
  

}
