# graphql-nodejs
  Exemplo de  api  graphql usando node.js   ***graphql-yoga***

 * Query
```

query {
 posts(postId:1){
  postId,
  title,
  comments{
    commentId,
    text,
    author{
      name
    }
  }
}
}

```

 * Mutation
```
mutation {
  savePost(
    postId:3,
    title:" post 3"
  )
  {
    postId,
    title  
  }
}
```
![alt text](https://github.com/leandro0404/graphql-nodejs/blob/master/img/mutation.png)
