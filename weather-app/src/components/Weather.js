import React from 'react'
import '../style.css'

function Weather({cityInfo}) {
  return (
    <div className='info' >
   
        <h1 >{cityInfo.name}</h1>
        <h1 >{cityInfo.main.temp} °C</h1>
        <h1>{cityInfo.weather[0].main}</h1>

    </div>
  )
}

export default Weather