import axios from "axios";

import {useMemo, useCallback, useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import User from "./user.js";

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 5000000000; i++) {
    num += 1;
  }
  return num;
};

function Users() {

  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
//  const berekening = expensiveCalculation(count);
  const berekening = useMemo(() => expensiveCalculation(count), [count]);

  const onItemClick = useCallback((event) => {
    console.log("You clicked ", event.currentTarget);
  }, [users]);

  const increment = () => {
    setCount((c) => c + 1 );
  };

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=0&results=10")
      .then((response) => {
        console.log("set users");
        setUsers(response.data.results)
      })
      .catch((error) => console.log(error));
  },[]);

  return (
    <>
      <User users={users} onItemClick={onItemClick} />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <p>Langdurige berekening {berekening}</p>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Users />);