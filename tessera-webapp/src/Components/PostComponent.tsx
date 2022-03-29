import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Post } from "../DataTypes/Post";
import { useNavigate } from "react-router-dom";

interface PostProps {
  post: Post
}

export default function PostComponent(props: PostProps){
  const navigate = useNavigate();
  const location = useLocation();

  function redirect() {
      navigate("/feed/" + props.post.id)
  }

  return (
    <div className="postComponent" onClick = {redirect}>
      {"" + props.post.active === "true" ?
      <div>
        <p className="title"> {props.post.title}, {props.post.location}</p>
        <p className="created"> {props.post.createdAt}  &emsp;  {props.post.postType}</p>
        <p className="price"> {props.post.price} kr</p>
      </div>
      :
      <div>
        <h5 className="closedPost"> Closed post</h5>
        <p className="title"> {props.post.title}, {props.post.location}</p>
        <p className="created"> {props.post.createdAt}  &emsp;  {props.post.postType}</p>
        <p className="price"> {props.post.price} kr</p>
      </div>
    }
    </div> 
  ); 

} 