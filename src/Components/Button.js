import React from "react";
//import  ReactDOM  from "react-dom";
// const Button=(props)=>{
//   //  props.text="guava";  // we can not do this because props is read only object/property

//     return(
//         <div>
//             <button>{props.text}</button>
//             <p>This is a {props.text} which is {props.color} in color</p>
//         </div>
//     )
// }
// export default Button;


//another way 

const Button=({details})=>{
    //  here props={text,color}
  
      return(
          <div>
          <button style={{backgroundColor:details[2],color:details[1]}}>{details[0]}</button>
              
          </div>
      )
  }
  export default Button;