const Article = require('../models/articleModel');
const admin = require('firebase-admin');

exports.getArticlesCategory = async (req, res) => {
    try {
        const db = admin.firestore();
        const articlesRef = db.collection('articles');
        let articlesSnapshot;
        let articlesList = [];

        if (req.query.category) {
            const category = req.query.category;
            articlesSnapshot = await articlesRef
                .where('category', '==', category)
                .orderBy(req.query.sortingType, req.query.sortingDirection)
                .limit(32)
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
        } else {
            articlesSnapshot = await articlesRef
            .orderBy(req.query.sortingType, req.query.sortingDirection)
            .limit(32)
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
        }
        res.json(articlesList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error getting articles' });
    }
};
