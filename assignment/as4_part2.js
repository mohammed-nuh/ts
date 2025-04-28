var user1 = createUser("Nuh", "nuh@gmail.com", "7795402536");
var user2 = createUser("Usman", "usman@gmail.com");
console.log("User 1");
printUserDetails(user1);
console.log("User 2");
printUserDetails(user2);
function createUser(username, email, phoneNumber) {
    if (phoneNumber) {
        var user = { username: username, email: email, phoneNumber: phoneNumber };
        return user;
    }
    else {
        var user = { username: username, email: email };
        return user;
    }
}
;
function printUserDetails(user) {
    console.log("name => ".concat(user.username));
    console.log("email => ".concat(user.email));
    if (user.phoneNumber) {
        console.log("phoneNumber => ".concat(user.phoneNumber));
    }
    console.log();
}
