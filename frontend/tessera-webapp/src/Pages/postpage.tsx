import React, { useEffect, useState } from "react";
import { useLocation, useOutletContext,  } from "react-router-dom";
import { Post } from "../DataTypes/Post";
import { getLoadedPosts, posts } from "../Utility/data";
import { useNavigate } from "react-router-dom";
import userprofile from "../assets/images/user-profile.png";
import { Avatar, Popover, Typography } from "@mui/material";

export default function PostPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [post, setPost] = useState<Post | null>(null);
  const posts = useOutletContext()

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

  function redirect() {
    navigate("/profile/" + post?.username)
  }

  console.log("Posted by user: " + post?.username)
  console.log(post);

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