import axios from "axios";
import { Post } from "../DataTypes/Post";
import { Register } from "../DataTypes/Register";
import { User } from "../DataTypes/User";

export const eventTypes: string[] = [
  "Concert",
  "Conference",
  "Circus",
  "Festival",
  "Party",
  "Theatre",
  "Sport",
  "Movie",
  "Other"
]

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
      return new Post(post.id, post.username, post.userID, post.title, post.location, post.description, post.creationDate, post.eventDate, post.price, post.contactPoint, post.showPost, post.postType, post.eventType, post.closerID, post.showPost)
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

export async function getUser(username: string) {
  const response = await axios.get("http://localhost:8080/tessera/api/user/" + username)
  if(response.data){
      return response
  }
    return false
}

/**
 * @param userID - id of whose users posts we want
 * @returns Promise retrieving all posts that a user has created
 */
 export function getUserByID(userID: number) {
  const data = {params: {id: userID}, headers:{"Content-type": "application/json"}}
  return new Promise<User>((resolve, reject) => {
    axios.get("http://localhost:8080/tessera/api/user?id=" + userID).then((res) => {
      if(res.status !== 200){
        reject("Invalid status-code: " + res.status);
      }else if(!res.data){
        reject("Backend did not return any data");
      }
      const usr: User = new User(res.data.id, res.data.username, res.data.description, res.data.creationDate, res.data.password, res.data.suspended, res.data.admin);
      resolve(usr)
    }).catch(err => {
      reject(err)
    })
  })
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

export function updatePost(postID: number, closerID: number) {
  return new Promise((resolve, reject) => {
    const data = {params: {postID: postID, closerID: closerID}, headers: {"Content-Type": "application/json"}}
    axios.post("http://localhost:8080/tessera/api/posts/",{}, data).then((response) => {
      if(response.status !== 200){
        reject ("Invalid status-code: " + response.status)
      }
      resolve("Success: " + response.statusText)
    }).catch(err => {
      reject(err)
    })
  })
}


/**
 * @param userID - id of the user we wish posts from
 * @returns Promise retrieving posts that the user has been on either side of a closed transaction.
 */
export function retrievePostsClosedWithUser(userID: number) {
  return new Promise<Post[]>((resolve, reject) => {
    axios.get("http://localhost:8080/tessera/api/posts/transactions/" + userID).then((response) => {
      if(response.status !== 200){
        reject("Invalid status-code: " + response.status);
      }
  
      const user_posts: Post[] = response.data.map((post: any) => {
        return new Post(post.id, post.username, post.userID, post.title, post.location, post.description, post.creationDate, post.eventDate, post.price, post.contactPoint, post.showPost, post.postType, post.eventType, post.closerID, post.showPost)
      });
  
      resolve(user_posts)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * @param userID - id of whose users posts we want
 * @returns Promise retrieving all posts that a user has created
 */
export function retrieveUserPosts(userID: number) {
  return new Promise<Post[]>((resolve, reject) => {
    axios.get("http://localhost:8080/tessera/api/posts/" + userID).then((response) => {
      if(response.status !== 200){
        reject("Invalid status-code: " + response.status);
      }
  
      const user_posts: Post[] = response.data.map((post: any) => {
        return new Post(post.id, post.username, post.userID, post.title, post.location, post.description, post.creationDate, post.eventDate, post.price, post.contactPoint, post.showPost, post.postType, post.eventType, post.closerID, post.showPost)
      });
  
      resolve(user_posts)
    }).catch(err => {
      reject(err)
    })
  })
}
