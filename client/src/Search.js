// import React, {useState} from 'react';
// import {DateRange} from 'react-date-range';

// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file

// //DATE PICKER COMPONENT
// export default class Search extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       selectionRange : {
//         startDate: new Date(),
//         endDate: new Date(),
//         key: "selection"
//       }
//     } 
//   }

//   handleSelect=(ranges)=> {
//     this.setState({
//       selectionRange : {
//         startDate: ranges.selection.startDate,
//         endDate: ranges.selection.endDate,
//         key: "selection"
//       }
//     })
  
//     console.log(ranges.selection.endDate);
//   }
//   render() {
    
//     return (
//       <DateRange ranges={[this.state.selectionRange]} onChange={this.handleSelect} />
//     );
//   }
// }


// // import React, {useState} from 'react';
// // import {DateRange} from 'react-date-range';

// // import 'react-date-range/dist/styles.css'; // main css file
// // import 'react-date-range/dist/theme/default.css'; // theme css file

// // //DATE PICKER COMPONENT
// // function Search() {
//   //     const [state, setState] =  useState([
//     //         {
//       //           startDate: new Date(),
//       //           endDate: null,
//       //           key: 'selection'
//       //         }
//       //       ]);
      
      
//       //     return(
//         //       <div>
//         //         <DateRange
//         //           editableDateInputs={true}
//         //           onChange={item => setState([item.selection])}
//         //           moveRangeOnFirstSelection={false}
//         //           ranges={state}
//         //         />
//         //       </div>
//         //     )
//         // }
        
//         // export default Search; 
