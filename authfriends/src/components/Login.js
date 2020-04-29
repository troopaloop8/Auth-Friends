import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';

const Login = (props) => {
    const [credentials, setCredentials] = useState({});
    const [isLoading, setIsLoading] = useState(false);
  
    const handleChange = (e, setter) => {
      setCredentials({
          ...credentials,
          [e.target.name]: e.target.value
      })
    };

    const login = e => {
        e.preventDefault();
        setIsLoading(true);
        axiosWithAuth()
          .post("http://localhost:5000/api/login", credentials)
          .then(res => {
            console.log("jt: Login.js: login: success: res: ", res);
            localStorage.setItem("token", res.data.payload);
            props.history.push("/friends");
          })
          .catch(err => console.error(err));
      };
   
    return (
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    );
  }
  
export default Login


