import React from 'react';
import './SeasonDisplay.css';

// I tried giving "getSeason(lat,month){}" ---> but it throws error expecting only arrow func dono why, .y understanding
//tis way of writing function without "function" keyword should be done only ini class based component.
const getSeason = (lat, month) => {
  if(month > 2 && month < 9 ){
    return lat > 0 ? 'summer' : 'winter'
  }
  else{
    return lat > 0 ? 'winter' : 'summer'
  }
}

const seasonConfig = {
  summer:{
    text : "Let's hit the beach",
    iconName : 'sun'
  },
  winter:{
    text : 'Burr, it is chilly',
    iconName : 'snowflake'
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth())
  const {text, iconName} = seasonConfig[season] // the defined const name should match exactly with the key names

//Alternative way to acheive the same
// const text = Season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
// const icon = Season === 'Winter' ? 'snowflake' : 'sun';

  // if you are trying to print a variable as well as a hardcoded value within double quotes syntax below
  // `` ---> backtick character
  // const value = "Shri";
  // console.log(`${value}vignesh`)
  
  return(
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}/>
      {/* we can also do the below way but not recommended to write the logic here
      {Season === 'Winter' ? 'Burr, it is chilly' : 'Lets hit the beach'} */}
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;