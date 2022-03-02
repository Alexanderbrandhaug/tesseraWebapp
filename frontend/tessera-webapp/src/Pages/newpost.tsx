import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Post } from "../DataTypes/Post";
import { createPosts } from "../Utility/data";

export default function NewPostPage() {

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [eventType, setEventType] = useState("");
  const [contactPoint, setContactPoint] = useState("");
  const [description, setDescription] = useState("");
  const [isSelling, setIsSelling] = useState<boolean>(false);

  const [loadingPost, setLoadingPost] = useState<boolean>(false);
  const [errorOcurred, setErrorOcurred] = useState<string>("")

  const navigate = useNavigate();

  function redirect(path: string) {
    navigate(path)
  }

  //Requires: 
  function submitPost(e: any){
    e.preventDefault()
    const postID = 1234
    /**@todo get username from localstorage */
    const username = "tesseraAdmin"
    const createdAt = "0"
    const active = "True"
    let postType = isSelling ? "Selling" : "Buying";

    const post = new Post(postID, username, title, location, description, createdAt, price, contactPoint, active,  postType, eventType)
    createPosts(post).then( (res: Post[] | string) => {
        redirect("/feed")
    }).catch( (res) => {
        setErrorOcurred(res);
        console.log(res)
    }).finally(() => {
      setLoadingPost(false)
    })

    setLoadingPost(true);
  }

  return (
    <main className="newPostPage">
      <h2>New Post</h2>
      {
        loadingPost ? 
        <div>
          Loading
        </div> 
        :
        <div>
          <form className="newPostForm" onSubmit={(e) => submitPost(e)}>
          <label>
            Selling (checked)/Buying (unchecked)
            <input
              type="checkbox"
              checked={isSelling}
              onChange={() => setIsSelling(!isSelling)}
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </label>

          <label>
            Location (city):
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            ></input>
          </label>

          <label>
            Event type:
            <input
              type="text"
              name="eventType"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              placeholder="Event type"
            ></input>
          </label>

          <label>
            Contactpoint:
            <input
              type="text"
              value={contactPoint}
              placeholder="Contact point"
              onChange={(e) => setContactPoint(e.target.value)}
            />
          </label>

          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(+e.target.value)}
              placeholder="Price"
            />
          </label>

          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            ></textarea>
          </label>
          <label>
            <input type="submit" value="Submit" />
          </label>
        </form>
        {errorOcurred === "" ? 
        <></>
        : 
        <label className="error">{errorOcurred}</label> 
        }
        </div>
      }
    </main>
  );
}

