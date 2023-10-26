class user {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}1233`;
    }
    capitalName() {
        return this.name.toUpperCase();
    }
}

//prototype or behind the sence
user.prototype.displayAllDetail = function () {
    return `name: ${this.name}, email: ${this.email},password: ${this.password}`;
};

const user1 = new user('bibek', 'ray@mango.com', 'kumar');

console.log(user1.encryptPassword());
console.log(user1.capitalName());
console.log(user1.displayAllDetail());