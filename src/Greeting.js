import React from "react";

// Access the component using <Greeting></Greeting>
// Pass in props to the first part of the element:
// <Greeting greeting="Hey" userName={"Rebekah"} />

// Props
// greeting: string <how you want to greet the user>
// userName: string <the name of the user>
function Greeting(props) {
  console.log("PROPS", props);
  return <h1>{`${props.greeting}, ${props.userName}`}</h1>;
}

export default Greeting;
