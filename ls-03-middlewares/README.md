http method
    get 
    post 
    put 
    patch
    delete
        - soft delete => pull
        - hard delete => delete

http status code
    2xx - 200, 201, 204 ... => success
    4xx - 400, 401, 403 ... => client error
    5xx - 500 ... => server error 

resource: post
    Base url: http://localhost:3001/api/v1/...endpoints...
        - get all posts: 
            + /posts
            + method: GET

        - get posts by id:
            + posts/:id        
            + method: GET

        - create post:
            + /posts
            + method: POST
            + request body

        - update post by id:
            + posts/:id
            + method: PUT/PATCH
            + request body

        - delete post by id:
            + /posts/:id
            + method: DELETE


--- Request query , params,  

    - Query:
        . API: http://localhost:3001/api/v1/posts?page=1&size=50
        . method: GET
        . req.query: 
            {
                page: 1,
                size: 50,
            }
    
    - Params: 
        . APi: http://localhost:3001/api/v1/posts/:id
        . is -> param

    - Reqest body:
        .

    