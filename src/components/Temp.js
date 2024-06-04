import React, {useEffect, useState} from 'react';
// import './stylesheets/style.css'

const Temp = () => {

    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Mumbai");

    useEffect ( () => {
        const fetchApi = async () =>{
            const url =  `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8410512dfc430676de390006421a6a48`;
            const res = await fetch(url);
            const resjson = await res.json();
            console.log(resjson);
            setCity(resjson.main);
        };   

        fetchApi();
    },[search])

  return (
    <>
 <div className='temp-outer'>    
<h1>Welcome To Sky Update !</h1>
    
    <div className='box'>
        
        <div className='inputData'>
              <input type="Search" value={search}
              className='inputfield' onChange={(event)=>{
                   setSearch(event.target.value)
              }}/>
        </div>
        
    {
        !city ? (
            <p className='errmsg'>No Data Found !</p>
        ) : (

         <div>
          <div className='info'>
        <h2 className='location'><i className="fas fa-street-view"></i><span>{search}</span>
        </h2>
        <h2 className='temp'>
        <i class="fa-regular fa-sun"></i><span>City Temp.- {city.temp}</span>
    
        </h2>
        <h2 className='tempmin_max'>
<i class="fa-solid fa-bolt"></i>
            Min-temp- {city.temp_min} | Max-temp- {city.temp_max}
        </h2>
        <h2 className='hum'>
 <i class="fa-solid fa-droplet"></i> Humidity - {city.humidity}</h2>
        <h2 className='pressure'>
        <i class="fa-solid fa-temperature-low"></i>
            Pressure - {city.pressure}</h2>
         </div>
         </div>

        )
    }
      
    </div>
    </div>
    </>
    
  )
}

export default Temp