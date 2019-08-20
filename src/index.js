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
        savePost(title: String): Post
        likePost(postId: Int, like: Boolean): Post
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
            const posts = data.getData('posts');
            const values = {
                postId: posts.length + 1,
                ...args
            }
            return new Promise((resolve) => {
                setTimeout(()=> resolve(data.saveData('posts', values)), 2000)
            }) 
            // return data.saveData('posts', values);
        },
        likePost: function (postId, args, context, info) {
            return data.likePost(postId, args);
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