import React from "react";
//import {useNavigate} from 'react-router-dom';

function UserForm() {
 // const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.userid.value);
    console.log(event.target.elements.username.value);
    console.log(event.target.elements.email.value);
    console.log(event.target.elements.password.value);
    console.log(event.target.elements.phone.value);
    console.log(event.target.elements.address.value);
    // if ( event.target.elements.username.value === "testuser" && event.target.elements.password.value === "password" ) {
    // navigate("/success");
    // } else {
    // navigate("/failure");
    // }
  };


  return (
    <form className="form-container" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <div className="input-field form-control">
          <label htmlFor="userid">User ID: </label>
          <input name="userid" type="text" id="userid" />
        </div>
        <div className="input-field form-control">
          <label htmlFor="username">Name: </label>
          <input name="username" type="text" id="username" />
        </div>
        <div className="input-field form-control">
          <label htmlFor="email">Email: </label>
          <input name="email" type="email" id="email" />
        </div>
        <div className="input-field form-control">
          <label htmlFor="password">Password: </label>
          <input name="password" type="password" id="password" />
        </div>
        <div className="input-field form-control">
          <label htmlFor="phone">Phone: </label>
          <input name="phone" type="text" id="phone" />
        </div>
        <div className="input-field form-control">
          <label htmlFor="address">Address: </label>
          <input name="address" type="text" id="address" />
        </div>
        <button type="submit" className="btn btn-warning">Register User</button>
      </div>
    </form>
  );
};

export default UserForm;