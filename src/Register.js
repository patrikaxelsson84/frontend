import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import Login from "./Login"

const Register = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleregister() {
    const user = { username, password }
    const result = await fetch("http://localhost:8080/user/register", {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
    console.log(user)
    history.push("/login")
  }

  return (
    <div>
      <h1>Register</h1> <br />
      <br />
      <div>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <br />
        <input
          type="button"
          value={loading ? "Loading...." : "Register"}
          onClick={handleregister}
        />
      </div>
    </div>
  )
}

export default Register
