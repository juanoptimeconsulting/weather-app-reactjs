import React from 'react';
import WeatherIcons  from 'react-weathericons';

//diccionario
const INCONS = {

    cloud: "cloud",    
    

};

const getWeatherIcon = weatherstate => {
    const icon = INCONS[weatherstate];
      console.log(icon);
    if(icon)
    return   <WeatherIcons name={icon} size="2x"/>;
    else
     return   <WeatherIcons name={"cloudy"} size="2x"/>;
}

//destructuring 
const WheatherTemperature = ({temperature, weatherstate}) => (
    <div>
    {
    //se coloca en llaves por ser codigo js 

       getWeatherIcon({weatherstate})
       }
       <br/><br/>
       <span>{`${temperature} C° ` }</span>
    </div>
    
    );

export default WheatherTemperature;