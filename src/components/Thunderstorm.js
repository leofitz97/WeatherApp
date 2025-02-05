import React from "react";
import './thunder.css';


const Thunderstorm = () => {
  return (
    <>
      <div class="clouds">
        <div class="cloud-heavy"></div>
        <div class="cloud-heavy"></div>
        <div class="cloud-heavy"></div>
      </div>
      <div class="rain">
        <div class="raindrop-heavy"></div>
        <div class="raindrop-heavy"></div>
        <div class="raindrop-heavy"></div>
        <div class="raindrop-heavy"></div>
        <div class="raindrop-heavy"></div>
        <div class="raindrop-heavy"></div>
      </div>
      <div class="lightning"></div>
    </>
  )
};


export default Thunderstorm;