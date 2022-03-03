import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PostComponent from "../Components/PostComponent";
import { Post } from "../DataTypes/Post";
import { retrievePosts } from "../Utility/data";

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([])

  //Retrieve posts from backend
  useEffect(() => {
    retrievePosts.then((res: Post[]) => {
      setPosts(res)
    }).catch(message => {
      console.log("Error: " + message);
    })
  }, [])

  return (
    <main style={{ padding: "1rem 0" }}>
      {/*<h2>Feed</h2>*/}

      <div className="threeColumnFlex">
        <div className="sidebarColumn">
          <Sidebar />
        </div>
        <div className="feedColumn">
          {
            posts.length !== 0 ?

            posts.map((post: Post) => (
              <PostComponent key={post.id} post={post}/>
            ))
            :
            <>
              Ingen innlegg
            </>
          }

        </div>
        <div className="column-3">
          <Outlet context={posts} />
        </div>
      </div>
    </main>
  );
}



function Sidebar() {
  const navigate = useNavigate();

  function redirect() {
    navigate("/newpost")
}


  return (
    <div className="sidebar" >
      <button onClick={redirect} className="newPost" type="button">Nytt innlegg</button >
      <input type="text" name="Search" placeholder="Search titles!"/>
      <label><input type="checkbox" defaultChecked={true} /> Selling</label>
      <label><input type="checkbox" defaultChecked={true} /> Buying</label>
    </div>


  )
}