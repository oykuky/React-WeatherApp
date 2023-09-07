import React from 'react'
import '../style.css'
import '../index.css'
import { useState } from 'react';
import Weather from './Weather';

function Home({setSearch, city}) {

  return (
    <div className='container'>
        <div className='weather'>
            <div className="search">
            <input type="text" placeholder="City Name" 
            onChange={(e) => setSearch(e.target.value)} />
            </div>
            <Weather cityInfo={city} />
        </div>
    </div>
  )
}

export default Home;