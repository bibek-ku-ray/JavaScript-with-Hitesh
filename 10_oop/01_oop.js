const instauser = {
    username: "bibek",
    loginCount: 4,
    signedIn: true,

    getuserDetail: function(){
        console.log("got user detail from database");
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getuserDetail());
// console.log(this);

function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greet = function(){
        console.log(`Welcome, ${this.username}`);
    }

    return this;
}

const userOne = new user('john', 12, true);
const userTwo = new user('cena', 4, false);

console.log('userone: ', userOne);
// console.log('usertwo: ', userTwo);

// console.log(userOne.constructor); n 