const admin = require('../services/firebase-admin.js');
const bcrypt = require('bcryptjs');

class User {
  constructor(data) {
    this.email = data.email;
    this.uid = data.uid;
    this.username = data.username;
    this.role = data.role;
    this.isBlocked = data.isBlocked;
    this.password = data.password;
  }

  async save() {
    const userRef = admin.firestore().collection('users').doc(this.uid);

    if (!this.password) {
      throw new Error('Password is required to save user');
    }

    const hashedPassword = await bcrypt.hash(this.password, 10);

    await userRef.set({
      email: this.email,
      uid: this.uid,
      username: this.username,
      role: this.role,
      isBlocked: this.isBlocked,
      password: hashedPassword,
    });
  }

  async update(data) {
    const userRef = admin.firestore().collection('users').doc(this.uid);

    if (data.password) {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      data.password = hashedPassword;
    }

    await userRef.update(data);
  }

  async delete() {
    const userRef = admin.firestore().collection('users').doc(this.uid);

    await userRef.delete();
  }

  async comparePassword(candidatePassword) {
    const userRef = admin.firestore().collection('users').doc(this.uid);
    const userDoc = await userRef.get();
    const userData = userDoc.data();

    return bcrypt.compare(candidatePassword, userData.password);
  }

  static async findByEmail(email) {
    const userRef = admin.firestore().collection('users').where('email', '==', email).limit(1);
    const userDoc = await userRef.get();

    if (userDoc.empty) {
      return null;
    }

    const userData = userDoc.docs[0].data();
    const user = new User(userData);

    return user;
  }

  static async findByUid(uid) {
    const userRef = admin.firestore().collection('users').doc(uid);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return null;
    }

    const userData = userDoc.data();
    const user = new User(userData);

    return user;
  }
}

module.exports = User;
