const admin = require('firebase-admin');

exports.isUserBlocked = async (req, res) => {
    try {
        const db = admin.firestore();
        const { email } = req.query;
        const userDoc = await db.collection("users").where("email", "==", email).limit(1).get();
        if (userDoc.empty) {
            return res.status(404).json({ message: "User not found" });
        }
        const userData = userDoc.docs[0].data();
        console.log("userData.isBlocked" + userData.isBlocked);
        res.json({ isBlocked: userData.isBlocked });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error getting user data" });
    }
};