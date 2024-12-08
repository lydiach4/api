import UserList from "./userList";
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((response) => {
      setListOfUsers(response.data.users);
    });
  }, []);

  return (
    <>
      <h1 className="text-center font-bold text-4xl m-4 "> Users List</h1>
    <UserList listOfUsers={listOfUsers}/>
    </>
  );
}

export default App;

