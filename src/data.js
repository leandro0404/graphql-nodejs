const data = {
    posts: [
        {
            postId: 1,
            title: " post 1 ",
        },
        {
            postId: 2,
            title: "post 2"
        }
    ],
    comments: [
        {
            commentId: 1,
            postId: 1,
            text: " comentário legal eim fera !!"
        },
        {
            commentId: 2,
            postId: 1,
            text: "  legal mesmo  eim  !!!"
        }
    ],
    author: [
        {
            authorId: 1,
            commentId: 1,
            name: "Leandro Silveira Alves Moreira"
        },
        {
            authorId: 2,
            commentId: 2,
            name: "Leandro Silveira Alves Moreira"
        }
    ]
};

exports.getData = function (collection, key, value) {
    if (!key || !value) return data[collection];
    return data[collection].filter(document => document[key] === value);
};

exports.saveData = function (collection, value) {
    data[collection].push(value);
    return value;
};