import { Button, TextField } from "@mui/material";
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
    }).catch(reason => {
      setErrorMessage("Could not get user: " + reason);
    })
    if (closerID != null && postID != null){
      updatePost(postID, closerID).then((result) => {
        if (result) {
          console.log("Success")
          setErrorMessage("")
          setCloser("")
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
          <h1> {post.title}</h1>
          <div className="profileInfo">
            <img alt='user-profile' src={userprofile} className='userprofile-image'/>
            <p> {post.username}</p>

          </div>
        </header>
        <body>
          <p>Location: {post.location}</p>
          <p>Price: {post.price}</p>
          <p>Date: {post.eventDate}</p>
          <p>Contact: {post.contactPoint}</p>
          <p>Created at: {post.createdAt}</p>
          <p>Beskrivelse</p>
          <p>{post.description}</p>
          <Button variant="contained" onClick={redirect} >See user</Button>
          {
            isCreator && post.active ?
            <div className="closePostContainer">
              <Button className="closePostButton" variant="outlined" onClick={closePost}>Close post</Button>
              <TextField type="text" value={closer} onChange={(e) => setCloser(e.target.value)}></TextField>
              <div className="error">
              {errorMessage && <div>{errorMessage}</div>}
              </div>
            </div>
            :
            <>
            </>
          }
          { !post.active ?
          <div>
            Post has been closed
          </div> : <></>}
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