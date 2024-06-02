const admin = require('firebase-admin');

exports.blockUser = async (req, res) => {
    try {

        const db = admin.firestore();
        const usersRef = db.collection('users');
        const docRef = usersRef.doc(req.query.uid);

        await docRef.update({
            isBlocked: true,
        });

        res.status(200).send('Document updated successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error updating document:', error);
    }
};
