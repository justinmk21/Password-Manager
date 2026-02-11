import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useState } from "react";
import "../styles/button.css";
import "../styles/addpassword.css";
import { Flex } from "@chakra-ui/react";
import "../styles/form.css";
import Toaster from "./Toaster";
import Toast from "./Toaster";
import Notify from "./Dialog";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    }
  };

  const name = method === "login" ? "Login" : "Register";

  function ForgotPassword() {
    return (
      <Flex>
        <p
          className="text-route"
          style={{ marginTop: "12px", color: "#ff6464" }}
        >
          {name === "Login" ? "Forgot Password" : ""}
        </p>
      </Flex>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Flex flexDirection={"column"}>
        <label>Username</label>
        <input
          className="input"
          style={{ marginBottom: "30px" }}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
      </Flex>
      <Flex marginBottom={"10px"} flexDirection={"column"}>
        <label>Password</label>
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </Flex>
      <Notify info={<ForgotPassword />} />
      <button className="btn" style={{ margin: "30px 0" }} type="submit">
        {name}
      </button>
      {name === "Login" ? (
        <Flex>
          <p className="text-route" onClick={() => navigate("/register")}>
            Don't have an account yet?
            <span style={{ color: "#ff6464" }}> REGISTER</span>
          </p>
        </Flex>
      ) : (
        <Flex>
          <p className="text-route" onClick={() => navigate("/login")}>
            Already have an account?
            <span style={{ color: "#ff6464" }}> LOGIN</span>
          </p>
        </Flex>
      )}
    </form>
  );
}

export default Form;
