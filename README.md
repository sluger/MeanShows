# MeanShows
**Description**

This is a very simple MEAN Stack App based on [MongoDB](https://www.mongodb.com/), [Express.js](http://expressjs.com/), [AngularJS](https://angularjs.org/), and [Node.js](https://nodejs.org/) that lists TV Shows with a Title and a Rating. The backend is done via Express on top of Node that provides a RESTful API of simple data stored in MongoDB. The frontend is written in Angular that consumes the REST endpoints with ngResource. Routing is done with ngRoute.

**Global Requirements**

* [Node](https://nodejs.org/)

* [MongoDB](https://www.mongodb.com/)

**Deployment**

Clone the repository

	$ git clone https://github.com/sluger/MeanShows.git
    
Navigate into the app directory
    
    $ cd MeanShows

Install bower globally

    $ npm install -g bower

Install node packages

    $ npm install
    
Install bower packages

    $ bower install
    
Start the MongoDB deamon: 

	$ mongod --dbpath data
        
Start the MongoDB shell

	$ mongo
    
Create the database

	$ use tvshows

    
Fill the collection shows with contents
 
```bash
$ db.shows.insert([
	{ "_id" : ObjectId("566692fd8db97f41fbd348e4"), "title" : "Breaking Bad", "rated" : "9.5" },
    { "_id" : ObjectId("566693128db97f41fbd348e5"), "title" : "Game of Thrones", "rated" : "9.5" },
    { "_id" : ObjectId("5666a4038db97f41fbd348e6"), "title" : "The Wire", "rated" : "9.3" },
    { "_id" : ObjectId("5666a4198db97f41fbd348e7"), "title" : "Firefly", "rated" : "9.1" },
    { "_id" : ObjectId("5666a4288db97f41fbd348e8"), "title" : "Narcos", "rated" : "9.0" }
])
```

Start the app
    
    $ npm start
    
Visit your browser at <http://127.0.0.1:3000>
