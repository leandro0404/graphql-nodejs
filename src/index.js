const {GraphQLServer} = require('graphql-yoga');
const data = require('./data');

const typeDefs = `
    type Post {
        postId: Int,
        title: String,
        likesCount: Int,
        comments: [Comment]
    }
    type Comment {
        commentId: Int,
        text: String,
        author: [Author]
    }
    type Author {
         authorId: Int,
         name: String
    }
    type Query {
        posts(postId: Int): [Post]
    }
    type Mutation {
        savePost(postId: Int, title: String): Post
    }
`;

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

const server = new GraphQLServer({typeDefs, resolvers});
server.start(4000);