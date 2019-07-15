import React from 'react';
import WeatherIcons  from 'react-weathericons';

//destructuring 
const WheatherTemperature = ({temperature, weatherstate}) => (
    <div>
        <WeatherIcons name="day-sunny" size="2x"/><br/><br/>
       <span>{`${temperature} C° ` }</span>
    </div>
    
    );

export default WheatherTemperature;