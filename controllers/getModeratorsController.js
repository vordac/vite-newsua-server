const Moderator = require('../models/moderatorModel');
const admin = require('firebase-admin');

exports.getModerators = async (req, res) => {
    try {
        const db = admin.firestore();
        const usersRef = db.collection('users');
        let usersSnapshot;
        let moderatorsList = [];

        usersSnapshot = await usersRef
            .where('role', '==', 'moderator')
            .get();
        usersSnapshot.forEach((doc) => {
            const moderatorsData = doc.data();
            const moderator = new Moderator(
                doc.id,
                moderatorsData.email,
                moderatorsData.isBlocked,
                moderatorsData.role,
                moderatorsData.uid,
                moderatorsData.username,
            );
            moderatorsList.push(moderator);
        });
        res.json(moderatorsList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error getting moderators' });
    }
};
