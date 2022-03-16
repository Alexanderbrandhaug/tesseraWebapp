import { useEffect, useState } from "react"
import { Post } from "../../DataTypes/Post"



interface UserTransactionListProps {
    userID: number
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

    /**
     * Load user posts on userID (or url) changes.
     */
    useEffect(() => {
        loadUserPosts()
    }, [props.userID])

    function loadUserPosts(){
        
    }

    return (
        <div id="userTransactionList">

        </div>
    )
}