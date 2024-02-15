import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

function User(props) {
  const { name, email } = props;
  const { first, last } = name;

  return (
   <div>
      <p>Name: {first} {last}</p>
      <p>Email: {email} </p>
      <hr />
   </div>
);
}

const dataUsers = [
  {
    name:
    {
      first: "John",
      last: "Doe"
    },
    email: "JohnDoe@dataUser.nl",
    login:
    {
      uuid: "000001"
    }
  }
];

function Users() {
  const [users, setUsers] = useState(dataUsers);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=0&results=20")
      .then((response) => setUsers(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
  <div>
    {users.map((user) => (
      <User key={user.login.uuid} name={user.name} email={user.email} />
    ))}
  </div>
);
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Users />);