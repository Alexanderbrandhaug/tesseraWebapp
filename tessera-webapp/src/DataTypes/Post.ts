export { Post };


class Post {
    id: number;
    username: string;
    userID: number;
    title: string;
    location: string;
    description: string;
    createdAt: string;
    eventDate: string;
    price: number;
    contactPoint: string;
    active: string;
    postType: string;
    eventType: string;
    closerID: number | null;
    showPost: boolean;


    constructor(id: number, username: string, userID: number, title: string, location: string, description: string, createdAt: string, eventDate: string, price: number,  contactPoint: string, active: string, postType: string, eventType: string, closerID: number | null, showPost: boolean){
        this.id = id;
        this.username = username;
        this.userID = userID;
        this.title = title;
        this.location = location;
        this.description = description;
        this.createdAt = createdAt;
        
        // Checks whether eventDate is null. Needs T as postpage depends on this
        // to display eventTime (See postpage)
        if(eventDate == null){
            this.eventDate = "T"
        }else{
            this.eventDate = eventDate;
        }
        this.price = price;
        this.contactPoint = contactPoint;
        this.active = active;
        this.postType = postType;
        this.eventType = eventType;
        this.closerID = closerID;
        this.showPost = showPost;
    }

    /**
     * @returns object with post-attributes stripped to only those needed by backend
     */
    getPostData() {
        return {
            title: this.title,
            description: this.description,
            contactPoint: this.contactPoint,
            location: this.location,
            postType: this.postType,
            eventType: this.eventType,
            eventDate: this.eventDate,
            price: this.price,
            username: this.username
        }
    }
}