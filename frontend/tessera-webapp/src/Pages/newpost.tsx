import React from "react";

export default function NewPostPage() {

  function submitPost(e: any){
    console.log("Attempting to submit post!")
    console.log(e)
    console.log(e.form.newPostForm);
  }


  return (
    <main className="newPostPage">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={submitPost}>
        <label>
          Title:
          <input type="text" name="title" placeholder="Title"/> 
        </label>

        <label>
          Location (city):
          <input type="text" name="location"></input>
        </label>
        
        <label>
          Price:
          <input type="text" placeholder="Price" />
        </label>
        
        <label>
          Description: 
          <textarea></textarea>
        </label>
        <label>
          Selling (checked)/Buying (unchecked)
          <input type="checkbox"/>
        </label>
        <label>
          <input type="submit" value="Submit"/>
        </label>
      </form>
    </main>
  );
}
