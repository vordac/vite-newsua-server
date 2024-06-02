const Author = require('../models/authorModel');
const admin = require('firebase-admin');

exports.getAuthors = async (req, res) => {
    try {
        const db = admin.firestore();
        const usersRef = db.collection('users');
        let usersSnapshot;
        let authorsList = [];

        usersSnapshot = await usersRef
            .where('role', '==', 'author')
            .get();
        usersSnapshot.forEach((doc) => {
            const authorsData = doc.data();
            const author = new Author(
                doc.id,
                authorsData.email,
                authorsData.isBlocked,
                authorsData.role,
                authorsData.uid,
                authorsData.username,
            );
            authorsList.push(author);
        });

        res.json(authorsList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error getting authors' });
    }
};
