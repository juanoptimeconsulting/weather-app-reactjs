import React from 'react';
import WheatherExtraInfo from './WheatherExtraInfo';
import WheatherTemperature from './WheatherTemperature';



const WheatherData = () => (
<div><span>
<WheatherTemperature temperature={20}  weatherstate = {''} /><br/>
<WheatherExtraInfo humidty={80} wind = {"10 m/s"}/>


</span>

</div>
);

export default WheatherData;