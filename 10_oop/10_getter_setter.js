class user {
    constructor(email, password) {
        this.email = email,
            this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this.newpassword.toUpperCase()}bibek`;
    }

    set password(value) {
        this.newpassword = value;
    }
    /**
     * we are setting password '25ray' that will store in database or somewhere else
     * but when someone try to access this password they will get '25RAYbibek'
     */

}

const bibek = new user('bib@gmail.com', '25ray');
console.log(bibek.password);
console.log(bibek.email);