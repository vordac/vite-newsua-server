const admin = require('firebase-admin');

exports.unblockUser = async (req, res) => {
    try {
        if (req.query.uid) {
            const db = admin.firestore();
            const usersRef = db.collection('users');
            const docRef = usersRef.doc(req.query.uid);
            docRef.update({
                isBlocked: false,
            })
                .then(() => {
                    console.log('Document updated successfully');
                })
                .catch((error) => {
                    console.log('Error updating document:', error);
                });
        } else {
            console.log("Error blocking")
        }
    } catch (e) {
        console.log(e);
    }
};