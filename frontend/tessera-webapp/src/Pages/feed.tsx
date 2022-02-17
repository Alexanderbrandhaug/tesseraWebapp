import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import PostComponent from "../Components/PostComponent";
import { Post } from "../DataTypes/Post";
import { getPosts, retrievePosts } from "../Utility/data";
import PostPage from "./postpage";

export default function FeedPage() {
  let [posts, setPosts] = useState<Post[]>([])

  //Retrieve posts from backend
  useEffect(() => {
    retrievePosts().then(() => {
      let loadedPosts = getPosts()
      console.log("LOADING POSTS TO FEED: " + loadedPosts)
      setPosts(loadedPosts)
    })
  }, [])

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Feed</h2>

      <div className="threeColumnFlex">
        <div className="sidebarColumn">
          <Sidebar />
        </div>
        <div className="feedColumn">
          {posts.map((post: Post) => (
            <PostComponent key={post.id} post={post}/>
          ))}
        </div>
        <div className="column-3">
          <Outlet />
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