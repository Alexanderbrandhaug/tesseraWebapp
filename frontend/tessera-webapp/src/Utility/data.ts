import axios from 'axios';
import { Post } from '../DataTypes/Post';

let posts = [
  {
    title: "Hendrick Lamar (Trondheim)",
    userID: 666,
    description: "Thugs of Stabekk live in Trondheim.",
    contactPoint: "47868327",
    active: "true",
    postType: "Sell",
    eventType: "Konsert",
    id: 1995,
    price: 10800,
    createdAt: "01/02/2022",
    location: "Trondheim"
  },
  {
    userID: 123,
    id: 1995,
    title: "Lavrans3000 (Oslo)",
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

export function getPosts() {
  return posts.map(post => {
    return new Post(post.id, post.userID, post.title, post.location, post.description, post.createdAt, post.price, post.contactPoint, post.active, post.postType, post.eventType)
  });
}