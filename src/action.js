//import axios from "axios";
import http from "./http-common";

export const fetchPosts = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_POSTS_REQUEST" });
  try {
    const response = await http.get("/getAdmins");
    console.log("getting product data", response.data);
    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });

  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE", error });
  }
};
