import React from "react";
import Clouds from "./Clouds";



const DisplayWeatherType = ({type}) => {

  switch (type?.toLowerCase()) {
    case 'clear_sky':
      <Clouds cloudType="clear_sky" />
      break;

    case 'few_clouds':
      <Clouds cloudType="few_clouds" />
      break;

    case 'scattered_clouds':
      break;

    case 'broken_clouds':
      break;

    case 'overcast_clouds':
      <Clouds cloudType="overcast_clouds" />
      break;

    case 'shower_rain':
      break;

    case 'rain':
      break;

    case 'thunderstorm':
      break;

    case 'snow':
      break;
  }
};


export default DisplayWeatherType;