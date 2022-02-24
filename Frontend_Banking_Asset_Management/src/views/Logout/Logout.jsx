import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import axios from "./../../util/axiosInstance";
import { useEffect } from "react";




export default function Logout() {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AppContext);
  useEffect(() => {
    // declare a function and call it separately
    async function _logout() {
      await axios.get("/api/user/logout");
      handleLogin(""); // empty strings will resolve to falsey value
      navigate("/");
    }
    setTimeout(() => {
      _logout();
    }, 500);
    // IIFE - create and run a function immediately
    // void (async function () {
    //   await axios.get("http://localhost:3001/api/users/logout");
    // })();
  }, []); // run once when component mounts
  return <h1>You are currently being logged out...</h1>;
}









