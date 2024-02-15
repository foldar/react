import axios from "axios";

import { useCallback, useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import User from "./user.js";

function Users() {

  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  
  const onItemClick = useCallback((event) => {
    console.log("You clicked ", event.currentTarget);
  }, [users]);

//  const onItemClick = (event) => {
//    console.log("You clicked ", event.currentTarget);
//  };

  const increment = () => {
    setCount((c) => c + 1 );
  };

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=0&results=10")
      .then((response) => setUsers(response.data.results))
      .catch((error) => console.log(error));
  },[]);

  return (
    <>
      <User users={users} onItemClick={onItemClick} />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Users />);