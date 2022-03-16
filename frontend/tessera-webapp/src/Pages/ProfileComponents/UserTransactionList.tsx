import { useEffect, useState } from "react"
import { usePosts } from "../../App";
import { Post } from "../../DataTypes/Post"
import { posts } from "../../Utility/data";



interface UserTransactionListProps {
    userID: number, 
    username: string
}


/**
 * @requires userID prop must refer to a real user
 * @returns Full transaction history and active posts if displaying profile page
 * of the user who is currently logged in. If not logged in user display a count
 * of the user's closed transactions.
 */
export default function UserTransactionList(props: UserTransactionListProps){
    const [activePosts, setActivePosts] = useState<Post[]>([]);
    const [closedPosts, setClosedPosts] = useState<Post[]>([]);
    const [name, setName] = useState<string>("Hello");
   
  

    /**
     * Load user posts on userID (or url) changes.
     */
    useEffect(() => {
        loadUserPosts()
        setName("Hello World")
        console.log("yes")
    }, [props.userID])

    function loadUserPosts(){
        setActivePosts(posts)
        setClosedPosts(posts)
    }

    return (
        <div id="userTransactionList">
            {props.username}
            {activePosts.length}
            {closedPosts.length}
            {activePosts.map(post => <PostListElement post={post}></PostListElement>)}
            {name}
        </div>
    )

}

interface PostListElementProps {
    post: Post
}

function PostListElement(props: PostListElementProps) {
    return (
        <div>
           <h1>{props.post.title}</h1>
           <h5>{props.post.description}</h5>
        </div>
    )
}