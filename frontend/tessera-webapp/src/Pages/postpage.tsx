import React, { useEffect, useState } from "react";
import { useLocation, useOutletContext,  } from "react-router-dom";
import { Post } from "../DataTypes/Post";
import { getLoadedPosts, posts } from "../Utility/data";
import { useNavigate } from "react-router-dom";

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
    navigate("/profile/" + post?.userID)
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      {
      post !== null ? 

      <div>
        <header>
          <h1> {post.title}</h1>
        </header>
        <body>
          <p>Location: {post.location}</p>
          <p>Date: {post.createdAt}</p>
          <p>Price: {post.price}</p>
          <p>Contact {post.contactPoint}</p>

          <p>Beskrivelse</p>
          <p>{post.description}</p>
          <button onClick={redirect}>See user</button>
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