const admin = require('firebase-admin');
const Article = require('../models/articleModel'); // Import the Article class

const read = async (req, res) => {
    try {
        const db = admin.firestore();
        const articleRef = db.collection('articles').doc(req.query.id);
        const articleSnapshot = await articleRef.get();

        if (!articleSnapshot.exists) {
            return res.status(404).json({ message: 'Article not found' });
        }

        const articleData = articleSnapshot.data();
        const article = new Article(
            articleSnapshot.id,
            articleData.author,
            articleData.category,
            articleData.comments,
            articleData.content,
            articleData.preview,
            articleData.publishTime,
            articleData.rating,
            articleData.title,
            articleData.userReactions,
            articleData.views
        );
        res.json(article);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error getting article' });
    }
}

exports.read = read;
