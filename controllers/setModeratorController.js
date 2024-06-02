const admin = require('firebase-admin');

exports.setModerator = async (req, res) => {
    try {

        const db = admin.firestore();
        const usersRef = db.collection('users');
        const docRef = usersRef.doc(req.query.uid);

        await docRef.update({
            role: 'moderator',
        });

        res.status(200).send('Document updated successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error updating document:', error);
    }
};
