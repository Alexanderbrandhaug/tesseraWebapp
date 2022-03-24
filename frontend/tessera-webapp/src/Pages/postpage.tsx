import { Avatar, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import userprofile from "../assets/images/user-profile.png";
import { Post } from "../DataTypes/Post";
import { getLoadedPosts, getUser, updatePost } from "../Utility/data";

export default function PostPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [post, setPost] = useState<Post | null>(null);
  const posts = useOutletContext()
  const [isCreator, setIsCreator] = useState<boolean>(false);
  const [closer, setCloser] = useState("")
  const [errorMessage, setErrorMessage] = useState("");


  async function closePost(){
    let closerID = null;
    const postID = post ? post.id : null;
    await getUser(closer).then((result) => {
      if (result) {
        closerID = result.data.id
      } else {
        setErrorMessage("Could not find user, username does not exist. Please try again. ");
      }
    }).catch(() => {
      setErrorMessage("Could not find user, username does not exist. Pleasy try again.");
    })
    if (closerID != null && postID != null){
      updatePost(postID, closerID).then((result) => {
        if (result) {
          console.log("Success")
          setErrorMessage("")
          setCloser("")
          window.location.reload();
        }
      }).catch(err => {
        setErrorMessage("Something went wrong, please try again. ");
      })}
  }

  useEffect(() => {
    const pathArr = location.pathname.split('/');

    if(pathArr.length > 2){
      const postID = location.pathname.split('/')[2];

      let id: number = +postID
      let thisPost = getLoadedPosts().find((p: Post) => p.id === id )

      if(thisPost){
        setPost(thisPost)
      }
    }
  }, [location.pathname, posts])

  useEffect(() => {
    setIsCreator(+(localStorage.getItem("userID") ?? 0)  === post?.userID)
  }, [post])

  function redirect() {
    navigate("/profile/" + post?.id)
  }

  console.log("Posted by user: " + post?.userID)

  return (
    <main style={{ padding: "1rem 0" }}>
      {
      post !== null ?

      <div>

        <header className="postHeader">

          <div className="profileInfo">

            <h1 className="title"> {post.title}</h1>
            <p> {post.username}</p>
          </div>
        </header>
        <body>
          <p className="location"> {post.location} &emsp; {post.eventDate} </p>
          <p className="created">Created {post.createdAt}</p>
          <p> {post.price} kr</p>
          <p className="contact">{post.contactPoint}</p>
            <div className="description">
          <p>[{post.description}]</p>
            </div>
            <Avatar alt='user-profile' src={userprofile} className='userprofile-image' onClick={redirect}/>
            {isCreator && post?.active ?
            <div>
            <Button variant="contained" onClick={closePost} > Close Post</Button >
            <label>
            Title:
            <input
              type="text"
              name="closer"
              value={closer}
              onChange={(e) => setCloser(e.target.value)}
              placeholder="Username"
            />
          </label>
          <div className="error">
            {errorMessage && <div>{errorMessage}</div>}
          </div>
            </div>
            :
            <></>
          }
          {/* <button className = "seeUserButton"onClick={redirect}>See user</button> */}
        </body>
      </div>

      :
      <div>
        No post found at path {location.pathname} :(
      </div>
      }
    </main>
  );
}