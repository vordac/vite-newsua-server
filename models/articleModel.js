class Article {
    constructor(id, author, category, comments, content, preview, publishTime, rating, title, userReactions, views) {
        this.id = id;
        this.author = author;
        this.category = category;
        this.comments = comments;
        this.content = content;
        this.preview = preview;
        this.publishTime = publishTime;
        this.rating = rating;
        this.title = title;
        this.userReactions = userReactions;
        this.views = views;
    }
}

module.exports = Article;
