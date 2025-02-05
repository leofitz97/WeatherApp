import React from "react";
import "./weather.css"; 

const Weather = ({condition}) => {


  return (
    <>
      {condition.toLowerCase() === "clear" && (
        <div className="clear-sky"></div>
      )}
      {condition.toLowerCase() === "rain" && (
        <div className="rain">
          {[...Array(50)].map((_, index) => (
            <div
              key={index}
              className="raindrop"
              style={{
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
              }}
            ></div>
          ))}
        </div>
      )}
      {condition.toLowerCase() === "snow" && (
        <div className="snow">
          {[...Array(50)].map((_, index) => (
            <div
              key={index}
              className="snowflake"
              style={{
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            ></div>
          ))}
        </div>
      )}
      {condition.toLowerCase() === "thunderstorm" && (
        <>
          <div className="lightning"></div>
          <div className="rain">
            {[...Array(50)].map((_, index) => (
              <div
                key={index}
                className="raindrop"
                style={{
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 2 + 2}s`,
                }}
              ></div>
            ))}
          </div>
        </>
      )}
      {condition.toLowerCase() === "clouds" && (
        <div className="clouds">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="cloud"
              style={{
                // animationDelay: `${Math.random() * 10}s`,
                // animationDuration: `${Math.random() * 10 + 40}s`,
                
              }}
            ></div>
          ))}
        </div>
      )}
    </>
  );
};

export default Weather;
