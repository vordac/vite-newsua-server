const admin = require('firebase-admin');

exports.viewsIncrement = async (req, res) => {
    const articleId = req.body.articleId;
    const articleRef = admin.firestore().doc(`articles/${articleId}`);

    try {
        await articleRef.update({
            views: admin.firestore.FieldValue.increment(1),
        });

        res.status(200).send('Views incremented successfully');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server error');
    }
};
