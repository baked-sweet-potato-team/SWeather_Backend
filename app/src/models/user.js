"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }
    login () {
        const body = this.body;
        const {id, password} = UserStorage.getUserInfo(body.id);
        if(id){
            if(id === body.id && password === body.password){
                return {success : true}
            }
            return { success : false , msg : "password error"};
        }
        return {success : false, msg:"id error"};
    }
    register() {
        const client = this.body;
        UserStorage.save(client);
    }
}

module.exports = User;