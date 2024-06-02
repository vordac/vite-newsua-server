class Author {
    constructor(id, email, isBlocked, role, uid, username) {
        this.id = id;
        this.email = email;
        this.isBlocked = isBlocked;
        this.role = role;
        this.uid = uid;
        this.username = username;
    }
}

module.exports = Author;
