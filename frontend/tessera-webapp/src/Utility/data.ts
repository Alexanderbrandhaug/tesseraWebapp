const axios = require('axios');

let posts = [
  {
    title: "Hendrick Lamar ",
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
  },{
    title: "Hendrick Lamar ",
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
  },{
    title: "Hendrick Lamar",
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
  },{
    title: "Hendrick Lamar",
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
  },{
    title: "Hendrick Lamar",
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
  },{
    title: "Hendrick Lamar",
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
];

export function getPosts() {
  return posts;
}

export async function getUser() {
  const config = {
    method: 'get',
    url: 'http://localhost:8080/tessera/api/user/tesseraAdmin'
  }
  let user = await axios(config)

}