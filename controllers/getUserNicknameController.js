const admin = require('firebase-admin');

const getUserNickname = async (req, res) => {
    try {
        const db = admin.firestore();
        const userDoc = await db.collection('users').doc(req.query.id).get();

        if (userDoc.exists) {
            res.json({ username: userDoc.data().username });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error getting user' });
    }
}


exports.getUserNickname = getUserNickname;
