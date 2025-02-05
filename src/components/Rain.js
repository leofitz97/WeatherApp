import React from "react";
import './rain.css';



const Rain = ({ rainType = 'raindrop'}) => {
  return (
    <>
      <div className="rain">
        <div className={rainType}></div>
        <div className={rainType}></div>
        <div className={rainType}></div>
        <div className={rainType}></div>
        <div className={rainType}></div>
        <div className={rainType}></div>
        <div className={rainType}></div>
        <div className={rainType}></div>
        <div className={rainType}></div>
        {/* <div class="raindrop-heavy"></div>
        <div class="raindrop-heavy"></div>
        <div class="raindrop-heavy"></div>
        <div class="raindrop-heavy"></div>
        <div class="raindrop-heavy"></div>
        <div class="raindrop-heavy"></div>
        <div class="raindrop-heavy"></div>
        <div class="raindrop-heavy"></div>
        <div class="raindrop-heavy"></div>
        <div class="raindrop-heavy"></div> */}
      </div>
    </>
  )
};



export default Rain;