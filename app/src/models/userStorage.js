"use strict";

class userStorage {    
    static #users = {
        id: ["h", "a","b"],
        password: ["1234", "1234", "1234"],
        names: ["h", "a", "b"],
    };
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = userStorage;