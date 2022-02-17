import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Post } from "../DataTypes/Post";
import { getPosts } from "../Utility/data";
import { useNavigate } from "react-router-dom";

export default function PostPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const pathArr = location.pathname.split('/');

    if(pathArr.length > 2){
      const postID = location.pathname.split('/')[2];

      let id: number = +postID
      let thisPost = getPosts().find((p) => p.id === id )
      
      if(thisPost){
        setPost(thisPost)
      }
    }
  }, [location.pathname])

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