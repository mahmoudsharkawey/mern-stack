import { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Email, setEmail] = useState("");
  const api = "http://localhost:1000";
  
  useEffect(() => {
    Axios.get(`${api}/users`).then((res) => {
      setUsers(res.data);
    });
  }, [users]);

  const createUser = () => {
    if (Name && Age && Email) {
      Axios.post(`${api}/createUsers`, {
        name: Name,
        age: Age,
        email: Email,
      }).then((res) => {
        console.log(res.data);
      });
    }
  };
  
  return (
    <>

<div className="form">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={createUser}>Create User</button>
      </div>



      {users.map(({ _id, name, age, email }) => {
        return (
          <div className="card" key={_id}>
            <ul>
              <li>Name :  {name}</li>
              <li>Age : {age}</li>
              <li>Email : {email}</li>
            </ul>
          </div>
        );
      })}

      

    </>
  );
}
