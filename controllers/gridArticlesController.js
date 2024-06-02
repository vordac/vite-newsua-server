const Article = require('../models/articleModel');
const admin = require('firebase-admin');

exports.getArticlesGrid = async (req, res) => {
    try {
      const db = admin.firestore();
      const articlesRef = db.collection('articles');
      let articlesSnapshot;
      let articlesList = [];
  
      // Include the status query in the base query
      let baseQuery = articlesRef.where('status', '==', 'published');
  
      if (req.query.category) {
        const category = req.query.category;
        // Chain the category query onto the base query
        baseQuery = baseQuery.where('category', '==', category);
      }
  
      // Chain the sorting and limiting queries onto the base query
      articlesSnapshot = await baseQuery
        .orderBy(req.query.sortingType, req.query.sortingDirection)
        .limit(6)
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
  
