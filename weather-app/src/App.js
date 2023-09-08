import React from 'react' 
import './App.css';
import axios from 'axios'
import { useEffect ,useState } from 'react';
import Home from './components/Home';


function App() {
  const key = '65a7f19ca97a2fe99ea8681ed1325523'; //Api key
  const [city,setCity] = useState();
  const [search,setSearch] = useState("");
  useEffect(() => {
    async function get() {
      try{
        const response = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
       } catch(err){console.error(err)}
    }
    get();
  },[search])
  console.log(search)
  return (
    <div className="App">
    <Home search = {search} setSearch ={setSearch} cityInfo={city} />
    </div>
  );
}

export default App;
