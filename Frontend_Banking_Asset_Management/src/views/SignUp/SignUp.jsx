import React from "react";
/* import axios from "../../util/axiosInstance"; */
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormWrapper from "../../components/Common/Wrapper/wrapper";
import ErrorMessage from "../../components/Common/ErrorMessage/errorMessage";
import signupimage from "../../assets/images/seacoast.jpg";

export default function SignUp() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submit the form");
    const formData = new FormData(event.target);

    const data = {
      firstname: formData.get("firstname"), //get the data from the input with name firstname
      lastname: formData.get("lastname"), //get the data from the input with name lastname
      email: formData.get("email"), //...
      password: formData.get("password"),
      PIN: formData.get("PIN"),
    };

    try {
      const response = await axios.post("/api/user/register", data, {
        withCredentials: true,
      });
      console.log(response);
      if (response.status === 200) {
        //everything went well!
        console.log("user was created");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="sign-up-page">
      <img className="image-signup-page" src={signupimage} />

      <form className="signup-form" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="firstname"
            className="input-login"
            placeholder="First name"
          />
        </label>

        <label>
          <input
            type="text"
            name="lastname"
            className="input-login"
            placeholder="Last name"
          />
        </label>

        <label>
          <input
            type="email"
            name="email"
            className="input-login"
            placeholder="Enter email"
          />
        </label>

        <label>
          <input
            type="password"
            name="password"
            className="input-login"
            placeholder="Enter password"
          />
        </label>

        <label>
          <input
            type="password"
            name="PIN"
            className="input-login"
            placeholder="Enter PIN"
          />
        </label>
            <div className="signup-buttons-container">
        <ErrorMessage isVisible={isError} errorMessage={errorMessage} />
        <button className="button-signup">Sign Up</button>
        <p className="forgot-password text-right">Already registered</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/login";
          }}
          to="/login"
          className="button-signup"
        >
          Login
        </button>
        </div>
      </form>
    </div>
  );
}
