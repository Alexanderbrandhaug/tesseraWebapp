import React from "react";
import { Link } from "react-router-dom";

interface PostProps {
  pid: string,
  title: string,
  
}

export default function PostWidget(props: PostProps){


  return (
    <div>
      <Link
        style={{ display: "block" }}
        to={`/posts/${props.pid}`}
      >
        {props.title}
      </Link>
      <h1>{props.pid}</h1>
    </div>
  );
}
