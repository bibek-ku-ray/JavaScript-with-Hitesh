function user(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },

        set: function (value) {
            this._email = value;
        }
    });
}

const me = new user('fantech@dell.com', 'fantech125');

console.log(me.email);