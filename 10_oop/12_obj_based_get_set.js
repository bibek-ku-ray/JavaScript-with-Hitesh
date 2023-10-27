const user = {
    _email: 'bbi@gmail.com',
    _password: 'abc',

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
};

//factory function
const coffee = Object.create(user);

console.log(coffee.email);