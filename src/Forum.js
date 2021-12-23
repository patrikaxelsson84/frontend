import { post } from "jquery"
import React, { useState, useEffect } from "react"
import "./Style/Forum.css"

const Forum = (props) => {
  const [posts, setPosts] = useState([])
  const [postName, setPostName] = useState("")
  const [description, setDescription] = useState("")

  async function getallPost() {
    await fetch("http://localhost:8080/post/all", {
      method: "Get",
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
      })
  }

  useEffect(() => {
    getallPost()
  }, [])

  async function createPost() {
    const result = await fetch("http://localhost:8080/post/create", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: props.token,
      },
      body: JSON.stringify({
        name: postName,
        description: description,
        username: props.username,
      }),
    })
    getallPost()
  }

  return (
    <div>
      <ul className="postListing">
        {posts.map((post, index) => {
          if (post.username === props.username) {
            return (
              <li key={index}>
                Title: {post.name} | Content: {post.description} | username:
                {post.username}
                <button
                  onClick={() => {
                    fetch(
                      "http://localhost:8080/post/post/delete/" + post.name,
                      {
                        method: "DELETE",
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    ).then((response) => {
                      getallPost()
                    })
                  }}
                >
                  Delete
                </button>
              </li>
            )
          }
          return (
            <li key={index}>
              Title: {post.name} | Content: {post.description} | username:
              {post.username}
            </li>
          )
        })}
      </ul>
      <h1>Create a post</h1> <br />
      <br />
      <div>
        <div>
          <label>Title </label>
          <br />
          <input
            type="text"
            value={postName}
            onChange={(e) => setPostName(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Description </label>
          <br />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <br />
        <input type="button" value={"Post"} onClick={createPost} />
        {/*<input type="button" value={"DeletePost"} onClick={DeletePost}/>*/}
      </div>
    </div>
  )
}

export default Forum
