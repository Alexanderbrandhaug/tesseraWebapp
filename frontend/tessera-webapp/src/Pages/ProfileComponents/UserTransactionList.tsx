import { Divider, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { usePosts } from "../../App";
import { Post } from "../../DataTypes/Post"
import { posts, retrievePostsClosedWithUser, retrieveUserPosts } from "../../Utility/data";

interface UserTransactionListProps {
    userID: number, 
    hideTransactions: boolean
}

/**
 * @requires userID prop must refer to a real user
 * @returns Full transaction history and active posts if displaying profile page
 * of the user who is currently logged in. If not logged in user display a count
 * of the user's closed transactions.
 */
export default function UserTransactionList(props: UserTransactionListProps){
    const [errorMessage, setErrorMessage] = useState<string>("");

    const [activePosts, setActivePosts] = useState<Post[]>([]);
    const [closedPosts, setClosedPosts] = useState<Post[]>([]);
   
    const navigate = useNavigate();

    function redirect(postID: number) {
        navigate("/feed/" + postID)
    }

    /**
     * Load user posts on userID (or url) changes.
     */
    useEffect(() => {
        loadUserPosts()
    }, [props.userID])

    /**
     * @requires props.userID is valid if not will throw error.
     * @effects loads the users active posts into activePost and the posts he 
     * has been on either side of a closed transaction of into closedPosts.
     */
    function loadUserPosts(){
        retrieveUserPosts(props.userID).then( (res: Post[]) => {
            const activePosts: Post[] = res.filter( (post: Post) => post.closerID === null || post.showPost === true);
            setActivePosts(activePosts)
        }).catch( err => {
            setErrorMessage("Error ocurred loading user's posts. (" + err + ")")
        })

        retrievePostsClosedWithUser(props.userID).then( (res: Post[]) => {
            setClosedPosts(res)    
        }).catch( err => {
            setErrorMessage("Error ocurred loading user's closed transactions. (" + err + ")")
        })
    }

    return (
        <div id="userTransactionContainer">
            <div id="userTransactionList">
                <div>
                    <h3>Active Posts: {activePosts.length}</h3>
                    {!props.hideTransactions ? 
                    <List sx={{ width: '100%', maxWidth: 400 }}>
                        {activePosts.map((post: Post) => <PostListElement key={post.id} post={post} userID={props.userID} redirect={redirect} />)}
                    </List>
                    :
                    <></>
                    } 
                </div>

                <div>
                    <h3>Closed Transactions: {closedPosts.length}</h3>
                    {!props.hideTransactions ?
                    <List sx={{ width: '100%', maxWidth: 400 }} >
                        {closedPosts.map((post: Post) => <ClosedPostListElement key={post.id} post={post} userID={props.userID} redirect={redirect} />)}
                    </List>
                    : 
                    <></>
                    }                
                </div>
            </div>
            {errorMessage !== "" ? <h1 className="error">{errorMessage}</h1> : <></>}
        </div>
    )

}

interface PostListElementProps {
    post: Post,
    userID: number,
    redirect: (postID: number) => void
}

function PostListElement(props: PostListElementProps) {

    const isSelling: boolean = props.post.postType === "Selling";

    function getPostTypeText(){
        return isSelling ? "You are selling" : "You are buying";
    }

    return (
        <>
            <ListItem onClick={() => props.redirect(props.post.id)}>
                <div className="postListElement">
                    <div className={isSelling ? "sellingMarker" : "buyingMarker" } />
                    <ListItemText primary={props.post.title} secondary={getPostTypeText()} />
                </div>
            </ListItem>
            <Divider />
        </>
    )
}

function ClosedPostListElement(props: PostListElementProps) {
    // Whether the logged in user bought a ticket or sold a ticket in a transaction
    const closedByBuying: boolean = ((props.post.closerID === props.userID && props.post.eventType === "Selling") ||
                                                          (props.post.closerID !== props.userID && props.post.eventType === "Buying"))

    const deactivated: boolean = props.post.showPost === false && props.post.closerID === null;

    function getClosedType() {
        if(deactivated){
            return "This post was deactivated"
        }
        return closedByBuying ? "You purchased this ticket" : "You sold this ticket"
    }

    return (
        <>
            <ListItem onClick={() => props.redirect(props.post.id)}>
                <div className="postListElement">
                    <div className={deactivated ? "deactivatedMarker" : (closedByBuying ? "buyingMarker" : "sellingMarker")} />
                    <ListItemText primary={props.post.title} secondary={getClosedType()} />
                </div>
            </ListItem>
            <Divider variant="fullWidth" component="li" />
        </>
    )
}