import React, {useState} from 'react';
import {DateRange} from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

//DATE PICKER COMPONENT
function Search() {
    const [state, setState] =  useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);


    return(
      <div>
        <DateRange
          editableDateInputs={true}
          onChange={item => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </div>
    )
}



export default Search;