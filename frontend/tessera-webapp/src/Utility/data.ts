import axios from 'axios';

let posts = [
  {
    name: "Hendrick Lamar (Trondheim)",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995"
  },
  {
    name: "Lavrans3000 (Oslo)",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000"
  },
  {
    name: "Unge Thomas (Moskva)",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003"
  },
  {
    name: "Lil Alexander (Ytre Stavanger)",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997"
  },
  {
    name: "Tingeling feat. Vic2Ria (Uganda-turne)",
    number: 1998,
    amount: "$4,600",
    due: "01/27/2998"
  },
  {
    name: "Barfod Killa (Malmö)",
    number: 1998,
    amount: "$4,600",
    due: "01/27/2998"
  }
];

export function getPosts() {
  return posts;
}