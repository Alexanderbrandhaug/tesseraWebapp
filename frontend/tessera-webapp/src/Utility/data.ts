import axios from "axios";
import { Post } from "../DataTypes/Post";
import { Register } from "../DataTypes/Register";

export let posts: any = [
  {
    title: "Hendrick Lamar ",
    userID: 666,
    description: "Thugs of Stabekk live in Trondheim.",
    contactPoint: "47868327",
    active: "true",
    postType: "Sell",
    eventType: "Konsert",
    id: 1111,
    price: 10800,
    createdAt: "01/02/2022",
    location: "Trondheim"
  },
  {
    userID: 123,
    id: 2222,
    title: "Lavrans3000 ",
    location: "Bergen",
    description: "Thugs of Stabekk live in Trondheim.",
    createdAt: "01/02/2022",
    price: 10800,
    contactPoint: "47868327",
    active: "true",
    postType: "Sell",
    eventType: "Standup",
  },
];

/**
 * @requires: backend running
 * @returns: Promise returning loaded posts from backend on resolve.
 * Rejects if status-code from backend is not 200.
 */
export const retrievePosts = new Promise<Post[]>( (resolve, reject) => {
  console.log("Retrieving posts!")
  axios.get("http://localhost:8080/tessera/api/posts/").then((response) => {
    console.log("Response from backend:")
    console.log(response)
    if(response.status !== 200){
      reject("Invalid status-code: " + response.status);
    }

    posts = response.data.map((post: any) => {
      return new Post(post.id, post.username, post.userId, post.title, post.location, post.description, post.creationDate, post.price, post.contactPoint, post.showPost, post.postType, post.eventType)
    });

    console.log("Done retrieving posts.");
    resolve(posts)
  })
})

export function getLoadedPosts() {
  return posts;
}

/**
 * @requires: post - the input post to be posted to backend.
 * @returns promise that posts post to backend. Rejects if code is not 200.
 * Post id and created-at fields are ignored as these are created in backend.
 * (See Post.getPostData())
*/
export function createPosts(post: Post) {
  return new Promise<Post[] | string>( (resolve, reject) => {
    const data = {params: post.getPostData(), headers:{"Content-type": "application/json"}}
    axios.post("http://localhost:8080/tessera/api/post/",{}, data).then( (response) => {
      if(response.status !== 200){
        reject("Invalid status-code: " + response.status)
      }
      resolve("Success: " + response.statusText)
    }).catch(err => {
      reject(err);
    })
  })
}

export async function getUser(userName: string) {
  const response = await axios.get("http://localhost:8080/tessera/api/user/" + userName)
  if(response.data){
      return response
  }
    return false
}

export function createUser(register: Register) {
  return new Promise((resolve, reject)  => {
      const data = {params: register.getRegisterData(), headers: {"Content-Type": "application/json"}}
      axios.post("http://localhost:8080/tessera/api/user/",{}, data).then((response) => {
        if(response.status !== 200){
          reject ("Invalid status-code: " + response.status)
        }
        resolve("Success: " + response.statusText)
      }).catch(err => {
        reject(err)
      })
  })
}



