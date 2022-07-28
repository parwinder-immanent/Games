
// orignal
const users = [];
module.exports.UserDB = {
    get users() {
        return users
    },

    addUser(user) {
        users.push(user)
    },

    findUserByEmail(email) {
        return users.find(user => user.email === email)
    },
    
    findUserBypassword(password) {
        return users.find(user => user.password === password)
    },
    findUserByName(name) {
        return users.find(user => user.name === name)
    },
   
   


}



console.log(users)