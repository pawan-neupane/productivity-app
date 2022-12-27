import React, { useState } from 'react';
import Calendar from 'react-calendar';

// import 'react-calendar/dist/Calendar.css';

function Cal() {
  const [value, onChange] = useState(new Date());
 const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

  return (
    <div>
        <h1>{months[value.getMonth()]}</h1>
      <Calendar onChange={onChange} value={value}  />


      <h3>{value.toDateString()}</h3>
    </div>
  );
}

export default Cal;