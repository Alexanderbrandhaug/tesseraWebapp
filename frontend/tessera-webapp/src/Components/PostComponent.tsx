import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../DataTypes/Post";
import { useNavigate } from "react-router-dom";

interface PostProps {
  post: Post
  
}

export default function PostComponent(props: PostProps){

  let navigate = useNavigate();
  function redirect() {
      navigate("post/" + props.post.id)
  }

  return (
    <div className="postComponent" onClick = {redirect}>
      <p>{props.post.createdAt}</p>
      <p>{props.post.title}, {props.post.location}</p>
      <p>{props.post.price} kr</p>
    </div>
  );
}
