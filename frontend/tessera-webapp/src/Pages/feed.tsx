import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import PostComponent from "../Components/PostComponent";
import Post from "../Components/PostComponent";
import { getPosts } from "../Utility/data";
import PostPage from "./postpage";

export default function FeedPage() {

  let posts = getPosts();

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Feed</h2>

      <div className="threeColumnFlex">
        <div className="sidebarColumn">
          <Sidebar />
        </div>
        <div className="feedColumn">
          {posts.map((post) => (
            <PostComponent post={post}/>
          ))}
        </div>
        <div className="column-3">
          <Routes>
            <Route path="post" element={<div>No post selected</div>} />
            <Route path="post/:id" element={<PostPage  />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}

function Sidebar() {

  return (
    <div className="sidebar">
      <input type="text" name="Search" placeholder="Search titles!"/>
      <label><input type="checkbox" defaultChecked={true} /> Selling</label>
      <label><input type="checkbox" defaultChecked={true} /> Buying</label>
    </div>
  )
}