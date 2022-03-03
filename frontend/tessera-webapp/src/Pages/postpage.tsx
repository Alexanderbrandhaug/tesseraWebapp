import React, { useEffect, useState } from "react";
import { useLocation, useOutletContext,  } from "react-router-dom";
import { Post } from "../DataTypes/Post";
import { getLoadedPosts, posts } from "../Utility/data";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { usePosts } from "../App";
=======
import userprofile from "../assets/images/user-profile.png";
import { isPropertySignature } from "typescript";
>>>>>>> css-styling-for-feedpage

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
          <p>Date: {post.createdAt}</p>
          <p>Price: {post.price}</p>
          <p>Contact {post.contactPoint}</p>

          <p>Beskrivelse</p>
          <p>{post.description}</p>
          <button className = "seeUserButton"onClick={redirect}>See user</button>
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