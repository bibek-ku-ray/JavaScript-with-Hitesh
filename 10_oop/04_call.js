function setUsername(username) {
    this.username = username;
    console.log('function called');
}

function createUser(username, email, password) {
    setUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const chai = new createUser('chai', 'chai@fantech.com', 1235);
console.log(chai);