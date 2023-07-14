import React from "react";
//import  ReactDOM from "react-dom";
import Button from './Components/Button';

// const App=()=>{
    
//     return (
//         <div className="hello">
//             <h1>Hello World</h1>

//          <Button text="Apple" color="red"/>
//          <Button text="Orange" color="orange"/>
//          <Button text="banana" color="yellow"/>

         
//         </div>
//     )
//   }


const App=()=>{
  let arr=["Apple","Black","Red"];
  return (
    <div className="hello">
      <h1>Hello World</h1>
      <Button
      details={["Apple", "black","red"]}
      />
        <Button
      details={["Banana", "red","yellow"]}
      />
        <Button
      details={["Mango", "blue","green"]}
      />

    </div>

  )
}

export default App;
