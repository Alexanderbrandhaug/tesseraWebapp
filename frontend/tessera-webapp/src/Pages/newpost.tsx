import React, { useState } from "react";
import { Post } from "../DataTypes/Post";

export default function NewPostPage() {

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [eventType, setEventType] = useState("");
  const [contactPoint, setContactPoint] = useState("");
  const [description, setDescription] = useState("");
  const [isSelling, setIsSelling] = useState<boolean>(false);


  function submitPost(e: any){
    //const post = new Post()
  }


  return (
    <main className="newPostPage">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={(e) => submitPost(e)}>
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
          Selling (checked)/Buying (unchecked)
          <input
            type="checkbox"
            checked={isSelling}
            onChange={() => setIsSelling(!isSelling)}
          />
        </label>
        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    </main>
  );
}
