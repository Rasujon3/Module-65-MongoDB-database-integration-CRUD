import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            console.log("deleted");
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h2>Available users: {users.length} </h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name}::{user.email}
            <Link to={`/update/${user._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleUserDelete(user._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
