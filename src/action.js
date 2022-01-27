//import axios from "axios";
import http from "./http-common";

// get all users
export const fetchUsers = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_USERS_REQUEST" });
  try {
    const response = await http.get("/getUsers");
    console.log("getting user data", response.data);
    dispatch({ type: "FETCH_USERS_SUCCESS", payload: response.data });

  } catch (error) {
    dispatch({ type: "FETCH_USERS_FAILURE", error });
  }
};

// add a user  
export const addUser = () => async (dispatch, getState) => {
  dispatch({ type: "ADD_USER_REQUEST" });
  try {
    // add user
    //**replace hard-coded values with form values
    
    const user = {
        userName: "sam",
        email: "sam@email.com",
        address: "Phoenix",
        userPhone: 23545443,
        password: "password"
    }
    const response = await http.post("/user", user);
    console.log("add user", response.data);
    dispatch({ type: "ADD_USER_SUCCESS", payload: response.data });

  } catch (error) {
    dispatch({ type: "ADD_USER_FAILURE", error });
  }


};
