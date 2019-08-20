const query = ` query {
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
}`;

module.exports = query;
