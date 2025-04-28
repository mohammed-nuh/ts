interface User {
    username: string
    email: string
    phoneNumber?: string
}

let user1: User = createUser("Nuh", "nuh@gmail.com", "7795402536");
let user2: User = createUser("Usman", "usman@gmail.com");

console.log("User 1");
printUserDetails(user1);
console.log("User 2");
printUserDetails(user2);

function createUser(username: string, email: string, phoneNumber?: string): User {
    if(phoneNumber){
        let user: User = {username: username, email: email, phoneNumber: phoneNumber};
        return user;
    } else {
        let user: User = {username: username, email: email};
        return user;
    }
};

function printUserDetails(user: User){
    console.log(`name => ${user.username}`);
    console.log(`email => ${user.email}`);

    if(user.phoneNumber){
        console.log(`phoneNumber => ${user.phoneNumber}`);
    }
    console.log();
}