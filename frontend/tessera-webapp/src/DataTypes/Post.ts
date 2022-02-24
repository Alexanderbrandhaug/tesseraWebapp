export {Post} 


class Post {
    id: number;
    username: string;
    title: string;
    location: string;
    description: string;
    createdAt: string;
    price: number;
    contactPoint: string; 
    active: string;
    postType: string;
    eventType: string;
    
    constructor(id: number, username: string, title: string, location: string, description: string, createdAt: string, price: number,  contactPoint: string, active: string, postType: string, eventType: string){
        this.id = id;
        this.username = username;
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
            title: this.title,
            description: this.description,
            contactPoint: this.contactPoint,
            location: this.location,
            postType: this.postType,
            eventType: this.eventType,
            price: this.price,
            username: this.username
        }
    }
}