import {useEffect, useState } from 'react';
//import User from "./user.js";
import axios from "axios";

function useFetch() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=0&results=10")
      .then((response) => {
        console.log("set users");
        setUsers(response.data.results)
      })
      .catch((error) => console.log(error));
  },[]);

  return [users];
}

export default useFetch;