const Article = require('../models/articleModel');
const admin = require('firebase-admin');

exports.getArticlesRejected = async (req, res) => {
    try {
        const db = admin.firestore();
        const articlesRef = db.collection('articles');
        let articlesSnapshot;
        let articlesList = [];

        const author = req.query.userNickname;
        if (!author) {
            return res.status(400).json({ message: 'Missing userNickname query parameter' });
        }
        articlesSnapshot = await articlesRef
            .where('status', '==', 'rejected')
            .where('author', '==', author)
            .get();
        articlesSnapshot.forEach((doc) => {
            const articleData = doc.data();
            const article = new Article(
                doc.id,
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
            articlesList.push(article);
        });

        res.json(articlesList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error getting articles' });
    }
};
