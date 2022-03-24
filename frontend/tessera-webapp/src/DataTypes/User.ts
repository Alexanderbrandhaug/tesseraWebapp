
export { User };

class User {
    userID: number;
    username: string;
    description: string;
    creationDate: string;
    password: string;
    suspended: boolean;
    admin: boolean;

    constructor(userID: number, username: string, description: string, creationDate: string, password: string, suspended: boolean, admin: boolean){
        this.userID = userID;
        this.username = username;
        this.description = description;
        this.creationDate = creationDate;
        this.password = password;
        this.suspended = suspended;
        this.admin = admin;
    }
}


/*
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
        this.eventDate = eventDate;
        this.price = price;
        this.contactPoint = contactPoint;
        this.active = active;
        this.postType = postType;
        this.eventType = eventType;
        this.closerID = closerID;
        this.showPost = showPost;
    }

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
*/