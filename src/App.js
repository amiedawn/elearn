import React from "react";
import { useSelector, useDispatch } from "react-redux";
import UserForm from "./pages/User";
//import Posts from './Posts';


function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch()
  return (
    <div>
      <UserForm /> 
      {/* <h1><Posts /></h1>     */}
    </div>
  );
};

export default App;
