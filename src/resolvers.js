const data = require('./data');

const resolvers = {
    Query: {
        posts: function (obj, args, context, info) {
            return data.getData('posts', 'postId', args.postId);
        }
    },
    Mutation: {
        savePost: function (obj, args, context, info) {
            return data.saveData('posts', args);
        }
    },
    Post: {
        comments: function (obj, args, context, info) {
            return data.getData('comments', 'postId', obj.postId);
        }
    },
    Comment: {
        author: function (obj, args, context, info) {
            return data.getData('author', 'commentId', obj.commentId);
        }
    }
};

module.exports = resolvers;