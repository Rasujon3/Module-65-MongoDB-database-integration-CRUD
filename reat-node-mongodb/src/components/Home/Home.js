import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/user`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleUserDelete = (id) => {
    const proceed = window.confirm("Are u sure u want to delete?");
    if (proceed) {
      console.log("deleting user for id=", id);
    }
  };
  return (
    <div>
      <h2>Available users: {users.length} </h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name}::{user.email}
            <button onClick={() => handleUserDelete(user._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
