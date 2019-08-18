# graphql-nodejs
  Exemplo de  api  graphql usando node.js   ***graphql-yoga***

 * Query
```graphql

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
```graphql
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


  * Docker  : Comandos para rodar em container
```docker
docker build  -t leandro/node-teste  .
docker run -p   8028:4000 -d  leandro/node-teste
```
