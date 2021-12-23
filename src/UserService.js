export async function loginUser(username, password) {
  const response = await fetch("http://localhost:8080/user/login", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      username: username,
      password: password,
    },
  })

  if (response.status === 200) {
    return await response.text()
  } else {
    return alert("Wrong username or password")
  }
}

export async function logoutUser(token) {
  const response = await fetch("http://localhost:8080/user/logout", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  })
  if (response.status === 200) {
    return await response.text()
  } else {
    return alert("contact support!")
  }
}
