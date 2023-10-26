class users {
    constructor(username) {
        this.username = username;
    }

    logme() {
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends users {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`new course added by: ${this.username}`);
    }
}

const techDetail = new Teacher('bibek ray', 'bibek@ray.com', 1552);
const userDetail = new users('fantech');

techDetail.addCourse();
userDetail.logme();

console.log(techDetail.username === userDetail.username);