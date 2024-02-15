import ReactDOM from "react-dom/client";
import {useCallback, useEffect, useState } from 'react';
import User from "./user.js";
import useFetch from "./useFetch.js";
//import axios from "axios";

function Users() {

 //   const [users, setUsers] = useState([]);
 //   const [count, setCount] = useState(0);
    const [users] = useFetch();
  
    const onItemClick = useCallback((event) => {
      console.log("You clicked ", event.currentTarget);
    }, [users]);

//    useEffect(() => {
//      axios
//        .get("https://randomuser.me/api/?page=0&results=10")
//        .then((response) => {
//          console.log("set users");
//          setUsers(response.data.results)
//        })
//        .catch((error) => console.log(error));
//    },[]);

    return (
      <>
        <User users={users} onItemClick={onItemClick} />
      </>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Users />);