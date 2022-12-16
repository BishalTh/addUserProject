import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };
  const usernameChangeHandler = (event) => {
    setenteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setenteredAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username"> Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit"> Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
