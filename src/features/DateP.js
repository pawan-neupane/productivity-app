import React, { useState } from 'react';


import ReactDarkDatepicker from 'react-dark-datepicker';  
import 'react-dark-datepicker/lib/main.min.css'

function DateP() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <ReactDarkDatepicker onChange={e => console.log(e)}/> 
      {/* <ReactDarkDatepicker onChange={e=>onChange(e)} value={value} />  */}
      {/* <h1>{value.getDate}</h1> */}
    </div>
  );
}

export default DateP;