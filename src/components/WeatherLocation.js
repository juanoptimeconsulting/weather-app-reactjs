import React from 'react';
import Location from './location';
import WheatherData from './WheatherData';

//arrowFunction: funcion que se define con una flecha propia de es6
const WheatherLocation = () => (
    <div> Wheather Location<span><Location city={"Bogotá - Colombia"}></Location><WheatherData></WheatherData></span></div>
);

//un solo elemento en este archivo, esta disponible para todo 
export default WheatherLocation;