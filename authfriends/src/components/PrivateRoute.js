import React, {useState, useEffect} from "react";
import axios from "axios";

import { axiosWithAuth } from "../utils/axiosWithAuth";

function Login()  {
  const [credentialObject, setCredentialObject] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  handleChange = (e, setter) => {
    setter(e.target.value)
  };


  useEffect(() => {
      console.log("typing");
      setCredentialObject({
          ...credentialObject,
          username: usernameInput,
          password: passwordInput
      });
      console.log(credentialObject)
  }, [usernameInput, passwordInput])
//   login = e => {
//     e.preventDefault();
//     axiosWithAuth()
//       .post("/login", this.state.credentials)
//       .then(res => {
//         console.log("bk: Login.js: login: success: res: ", res);
//         localStorage.setItem("token", res.data.payload);
//         this.props.history.push("/protected");
//       })
//       .catch(err => console.error(err));
//   };

  render() {
    return (
      <div>
        <form onSubmit={""}>
          <input
            type="text"
            name="username"
            value={usernameInput}
            onChange={(e) => {
                handleChange(e, setUsernameInput)
            }}
          />
          <input
            type="password"
            name="password"
            value={passwordInput}
            onChange={(e) => {
                handleChange(e, setPasswordInput)
            })}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
