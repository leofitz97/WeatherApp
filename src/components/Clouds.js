import React from "react";
import './clouds.css';


const Clouds = ({ cloudType = 'cloud' }) => {
  return (
    <div className="clouds">
      <div className={cloudType}></div>
      <div className={cloudType}></div>
      <div className={cloudType}></div>
    </div>
  )
};


export default Clouds;