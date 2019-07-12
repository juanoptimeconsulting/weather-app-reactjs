import React from 'react';

const WheatherExtraInfor = ({humidty,wind}) => (
<div>
     <b>Extra Information</b><br/><br/>
    <span>{`${humidty} % -  `}</span>       
    <span>{`${wind} viento  `}</span>       
  
</div>

);

export default WheatherExtraInfor;