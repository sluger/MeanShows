# MeanShows
**Description**

This is a very simple MEAN Stack App that lists TV Shows with a Title and a Rating.

**Global Requirements**

    Node
    
    MongoDB

**Deployment**

    git clone https://github.com/sluger/MeanShows.git
    
    cd MeanShows
    
    npm install -g bower
    
    npm install
    
    bower install
    
    Start the MongoDB deamon: `mongod --dbpath data`
    
    Start the MongoDB shell: `mongo`
    
    Create the database: `use tvshows`
    
    Filly the collection shows with contents:
    ```
    db.shows.insert(
    [{ "_id" : ObjectId("566692fd8db97f41fbd348e4"), "title" : "Breaking Bad", "rated" : "9.5" },
    { "_id" : ObjectId("566693128db97f41fbd348e5"), "title" : "Game of Thrones", "rated" : "9.5" },
    { "_id" : ObjectId("5666a4038db97f41fbd348e6"), "title" : "The Wire", "rated" : "9.3" },
    { "_id" : ObjectId("5666a4198db97f41fbd348e7"), "title" : "Firefly", "rated" : "9.1" },
    { "_id" : ObjectId("5666a4288db97f41fbd348e8"), "title" : "Narcos", "rated" : "9.0" }]
    )
    ```

    npm start
    
**Visit your browser @** http://127.0.0.1:3000
