import React from "react";
import Greeting from "./Greeting";

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

function UserGreetings() {
  return (
    <>
      {users.map((user) => (
        <Greeting key={user.id} greeting="Hey" userName={user.firstName} />
      ))}
    </>
  );
}

export default UserGreetings;
