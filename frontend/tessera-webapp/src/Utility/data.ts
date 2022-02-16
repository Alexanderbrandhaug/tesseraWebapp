import axios from 'axios';
import { Post } from '../DataTypes/Post';

let posts = [
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
  {
    title: "Hendrick Lamar ",
    userID: 3333,
    description: "Thugs of Stabekk live in Trondheim.",
    contactPoint: "47868327",
    active: "true",
    postType: "Sell",
    eventType: "Konsert",
    id: 3333,
    price: 10800,
    createdAt: "01/02/2022",
    location: "Trondheim"
  },{
    title: "Hendrick Lamar ",
    userID: 4444,
    description: "Thugs of Stabekk live in Trondheim.",
    contactPoint: "47868327",
    active: "true",
    postType: "Sell",
    eventType: "Konsert",
    id: 4444,
    price: 10800,
    createdAt: "01/02/2022",
    location: "Trondheim"
  },{
    title: "Hendrick Lamar",
    userID: 5555,
    description: "Thugs of Stabekk live in Trondheim.",
    contactPoint: "47868327",
    active: "true",
    postType: "Sell",
    eventType: "Konsert",
    id: 5555,
    price: 10800,
    createdAt: "01/02/2022",
    location: "Trondheim"
  },{
    title: "Hendrick Lamar",
    userID: 6666,
    description: "Thugs of Stabekk live in Trondheim.",
    contactPoint: "47868327",
    active: "true",
    postType: "Sell",
    eventType: "Konsert",
    id: 6666,
    price: 10800,
    createdAt: "01/02/2022",
    location: "Trondheim"
  },{
    title: "Hendrick Lamar",
    userID: 7777,
    description: "Thugs of Stabekk live in Trondheim.",
    contactPoint: "47868327",
    active: "true",
    postType: "Sell",
    eventType: "Konsert",
    id: 7777,
    price: 10800,
    createdAt: "01/02/2022",
    location: "Trondheim"
  },{
    title: "Hendrick Lamar",
    userID: 8888,
    description: "Thugs of Stabekk live in Trondheim.",
    contactPoint: "47868327",
    active: "true",
    postType: "Sell",
    eventType: "Konsert",
    id: 8888,
    price: 10800,
    createdAt: "01/02/2022",
    location: "Trondheim"
  },
];

export function getPosts() {
  return posts.map(post => {
    return new Post(post.id, post.userID, post.title, post.location, post.description, post.createdAt, post.price, post.contactPoint, post.active, post.postType, post.eventType)
  });
}