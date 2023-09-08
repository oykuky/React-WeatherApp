import React from 'react'
import '../style.css'

function Weather({cityInfo}) {
    if (!cityInfo) {
        return null; // cityInfo tanımsızsa bileşeni render etme
      }
      function getIcon (iconCode){
        const icon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
        return <img src = {icon} alt = "" />
    }

  return (
    <div className='info' >
   
        <h1 className='cName' >{cityInfo.name}</h1>
        <h2 className='dot'>...</h2>
        <div className='box'>
            <div className='degreeBox'>
              <h1 className='deg'>{cityInfo.main.temp} °C</h1>
            </div>
           <h1 className='weatherState'>{cityInfo.weather[0].main}</h1>                 
        </div>

        <div className='icon'>
          {getIcon(cityInfo.weather[0].icon)}
        </div>

        <div className='temp'>
          <div className='max'>
              <h3 >Max</h3>
              <label >{cityInfo.main.temp_max} °C</label>
          </div>
          <div className='min'>
            <h3 >Min</h3>
            <label >{cityInfo.main.temp_min} °C </label>
          </div>
        </div>
   
    </div>
  )
}

export default Weather