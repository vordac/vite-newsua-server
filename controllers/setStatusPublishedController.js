const admin = require("firebase-admin");

exports.setStatus = async (req, res) => {
    try {
        const db = admin.firestore();
        const articlesRef = db.collection("articles");
        const docRef = articlesRef.doc(req.body.uid);

        console.log("Updating document with status: ", req.body.status); // Verify that the update() method is being called with the correct status value

        await docRef.update({
            status: req.body.status,
        });

        console.log("Document updated successfully. Sending response with status code 200..."); // Verify that the server is responding with a valid status code

        res.status(200).send("Document updated successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error updating document: " + error);
    }
};