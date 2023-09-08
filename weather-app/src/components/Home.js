import React from 'react'
import '../style.css'
import '../index.css'
import Weather from './Weather';

function Home({setSearch, cityInfo}) {

  return (
    <div className='container'>
         <h1 className='title' >Weather</h1>
            <div className="search">
            <input type="text" placeholder="City Name" 
            onChange={(e) => setSearch(e.target.value)} />
            </div>
        <div className='weather'>
            <Weather cityInfo={cityInfo} />
        </div>
    </div>
  )
}

export default Home;