import axios from "axios";
import { Post } from "../DataTypes/Post";

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

export const retrievePosts = new Promise<Post[]>( (resolve, reject) => {
  console.log("Retrieving posts!")
  axios.get("http://localhost:8080/tessera/api/posts/").then((response) => {
    if(response.status !== 200){
      reject("Invalid status-code: " + response.status);
    }

    posts = response.data.map((post: any) => {
      return new Post(post.id, post.userId, post.title, post.location, post.description, post.creationDate, post.price, post.contactPoint, post.showPost, post.postType, post.eventType)
    });

    console.log("Done retrieving posts.");
    resolve(posts)
  })
})

export function getLoadedPosts() {
  return posts;
}

export function createPosts(post: Post) {

  return new Promise( (resolve, reject) => {
    axios.post("http://localhost:8080/tessera/api/post/", post.getPostData()).then( (response) => {
      if(response.status !== 200){
        reject("Invalid status-code: " + response.status)
      }
      resolve("Success: " + response.statusText)
    })
  })
}

/*
Gammel metode
export async function getUser(userName: string) {
  const config = {
    method: 'get',
    url: 'http://localhost:8080/tessera/api/user/' + userName
  }
  let user = await axios(config)
  if (user.data) {
    return user;
  }
  return false
}
*/

export async function getUser(userName: string) {
  const response = await axios.get("http://localhost:8080/tessera/api/user/" + userName)
  if(response.data){
      return response
    }
    return false
}

