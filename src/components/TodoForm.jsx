import React, { useState } from "react";

const TodoForm = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState([]);

  function nameHandler(e) {
    setName(e.target.value);
  }
  // function(){}
  function userHandler() {
    setUser([...user, name]);
    setName("");
  }
  console.log(user);
  console.log("hello");

  return (
    <div>
      <input type="text" onChange={nameHandler} value={name} />
      <button onClick={userHandler}>add user</button>
      {user.map((el) => {
        return (
          <div>
            <h3>{el}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default TodoForm;
