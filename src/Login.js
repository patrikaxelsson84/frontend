import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { loginUser } from "./UserService"

const Login = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handlelogin = (e) => {
    e.preventDefault()

    const token = loginUser(username, password)
    token.then((actualToken) => props.settoken(actualToken))
    console.log(props.token)
    props.setUsername(username)
    history.push("/forum")
  }

  return (
    <div>
      <h1>Login</h1> <br />
      <br />
      <div className="col-sm-6 offset-sm-3">
        <div>
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <br />
        <input
          className="btn btn-primary"
          type="button"
          value={loading ? "Loading...." : "Login"}
          disabled={loading}
          onClick={handlelogin}
        />
      </div>
    </div>
  )
}

export default Login
