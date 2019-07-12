import React from 'react';
import WheatherExtraInfo from './WheatherExtraInfo';
import WheatherTemperature from './WheatherTemperature';


const WheatherData = () => (
<di><span>
<WheatherTemperature/><br/>
<WheatherExtraInfo humidty={80} wind = {"10 m/s"}/>


</span>

</di>
);

export default WheatherData;