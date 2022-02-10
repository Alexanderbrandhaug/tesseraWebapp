import React from "react";
import { Link } from "react-router-dom";
import Post from "../Components/PostWidget";
import { getPosts } from "../Utility/data";

export default function FeedPage() {

  let posts = getPosts();

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Feed</h2>

      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          {posts.map((post) => (
            <Post key={post.number} pid={post.number + ""} title={post.name} />
          ))}
        </nav>
      </div>
    </main>
  );
}