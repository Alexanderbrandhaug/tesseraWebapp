import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Post } from "../DataTypes/Post";
import { getPosts } from "../Utility/data";

export default function PostPage() {
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

  return (
    <main style={{ padding: "1rem 0" }}>
      {
      post !== null ? 

      <div>
        VI FANT EN POST!
      </div>
      :
      <div>
        No post found at path {location.pathname} :(
      </div>
      }
    </main>
  );
}