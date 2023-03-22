import React from "react";
import Greeting from "./Greeting";
import UserGreetings from "./UserGreetings";

const users = [
  { firstName: "Rebekah", lastName: "CK", id: 1, city: "Durham", state: "NC" },
  {
    firstName: "Brian",
    lastName: "Kaczmarczyk",
    id: 2,
    city: "Atlanta",
    state: "GA",
  },
  {
    firstName: "Rachel",
    lastName: "Callari",
    id: 3,
    city: "St. Petersburg",
    state: "FL",
  },
];

function App() {
  console.log("ALL USERS:", users);
  // map demo
  const newUsers = users.map((user) => {
    console.log("This is an individual user:", user);
    return { fullName: `${user.firstName} ${user.lastName}`, id: user.id };
  });
  console.log("NEW USERS:", newUsers);

  return (
    <>
      <UserGreetings />
      <hr></hr>
      {newUsers.map((newUser) => (
        <Greeting
          key={newUser.id}
          greeting="Hello"
          userName={newUser.fullName}
        ></Greeting>
      ))}
    </>
  );
}

export default App;
