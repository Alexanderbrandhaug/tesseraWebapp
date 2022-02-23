export {Post} 


class Post {
    id: number;
    userID: number;
    title: string;
    location: string;
    description: string;
    createdAt: string;
    price: number;
    contactPoint: string; 
    active: string;
    postType: string;
    eventType: string;
    
    constructor(id: number, userID: number, title: string, location: string, description: string, createdAt: string, price: number,  contactPoint: string, active: string, postType: string, eventType: string){
        this.id = id;
        this.userID = userID;
        this.title = title;
        this.location = location;
        this.description = description
        this.createdAt = createdAt
        this.price = price;
        this.contactPoint = contactPoint;
        this.active = active
        this.postType = postType
        this.eventType = eventType
    }

    getPostData() {
        return {
            userID: this.userID,
            title: this.title,
            location: this.location,
            description: this.description,
            price: this.price,
            contactPoint: this.contactPoint,
            active: this.active,
            postType: this.postType,
            eventType: this.eventType

        }
    }
}