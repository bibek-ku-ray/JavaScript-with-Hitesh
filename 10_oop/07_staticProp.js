class user {
    constructor(username) {
        this.username = username;
    }

    createId1() {
        return '123';
    }

    //static -> it restrict the access to the instance.
    static createId2() {
        return 'abc';
    }
}

const userdetail = new user('bibke');

/**
 * createId1 is accessable but createId2 is not accessible because it is made 'static'
 */
console.log(userdetail.createId1());
// console.log(userdetail.createId2());