import React from "react";

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
  return (
    <>
      {users.map((user) => (
        <div
          key={user.id}
        >{`${user.firstName} ${user.lastName} is from ${user.city}, ${user.state}.`}</div>
      ))}
    </>
  );
}

export default App;
