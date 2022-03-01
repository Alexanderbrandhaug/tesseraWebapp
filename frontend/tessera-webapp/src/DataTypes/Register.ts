export {Register} 


class Register {
    username: string;
    description: string;
    profilePicture: string;
    isAdmin: boolean;
    password: string;
    
    constructor(username: string, password: string, description: string){
        this.username = username;
        this.description = description;
        this.profilePicture = ("");
        this.isAdmin = false;
        this.password = password;
    }

    getRegisterData() {
        return {
            username: this.username,
            description: this.description,
            profilePicture: this.profilePicture,
            isAdmin: this.isAdmin,
            password: this.password,
        }
    }
}