Web Development(MERN)
#1. Frontend(html,css,js,reactjs)
#2. Backend (server(APIs),Database)
APIs stands for application programming interface.setup of code help to make the communication.
Database ia aplace where we are storing the data.--for mongodb --cloud database
 here,
 M-MongoDb
 e-APIs/server
 r-react
 n-node

node --javascript runtime environment
it has engine of v8 ..similar google chrome do have.
it is a compiler or interpretar  which execute javascript..code outside my browser also.

javascript firstly for frontend only now for backend also.
rest APIs--removing deleting the data with single APIs.
# cuvette-Backend Session

-1. Node js--js Runtime Environment
-2.Express js --Web API fRamework
-3. Mongo Db--Nosql Document Database
-4.CRUD- creation,Reading,Updating,deleting.
-5.server-API-Database.
## important Topics?

-1.what is backend in web development?
-2.what is database?
-3.what is an API?
-4.what is node js runtime environment?
-5.install and configure node js.
-6.Execute js outside your Browser.
-7.Core Features of Node js
-8.Non-Blocking I/O.
-9.single-threaded.
-10.Modules
-11.Setting up a Basic node.js server
-12.core modules-file system(fs)-read,write.
-13.creating a simple API  with express.js
-14.setting up a basic express server.
-15.what are Middlewares?
-16.using Middlewares in Express.
-17.what is HTTP and other topics included?
-18.HTTP(HYPERTEXT TRANSFER PROTOCOL)

## packages under nodemon

##### js #######

-1.node .js is a run time environment that allows you to run js on the server side,outside of a browser.it uses the v8 js engine(the one that powers google chrome),enabling js to perform backend operations like reading files,handlingrequests,interacting with  databases,etc,.
-2.non-blocking I/O:node .js uses an event -driven,non-blocking architecture,which makes it ideal for building scalable network applications.
-3.Single-threaded:Node js uses a single thread to handle multiple requests concurrently by using asynchronous programming.
-4.Modules:Node .js uses the commonjs module system to import and export code between files.

### HTTP ###
-1. HTTP (HYPERTEXT TRANSFER PROTOCOL)is the 
foundation of any data exchange on the web and a 
key concept when working with express.js,a web 
framework for node.js.in express you will often deal 
with requests and responses that conform to the HTTP 
protocol.

-2.Http methods
* GET:retrieve information.
* post:submit data to be processed.
* put:update a resource.
* delete:remove a resource.
* patch:partially update a resource.

## a view engine in nodejs allows you to render HTML
  page dynamatically usinh template engines.it lets 
  you insert server-side data into HTML templates 
  before sending the final HTML to the client.Commonly
  used view engines includes EJS(Embedded js),pug(formoly jade),and Handlebars.
## <%= %>: used to insert a variable's value directly into the HTML.
##  <% %>: used for control flow statements(e.g.,for each,if)

## Benefits of using a view engine
-1.Separation of Cocerns:Logic and presentation are separated.The server handles the logic,and EJS templates handle the UI.

-2.Reusability: you can reuse parts of HTML by including partial templates,which reduces redundancy.

-3.Data Binding:Dynamic data canbe inserted into HTML pages,making it easier to create dynamic websites.

#### MongoDb

###### Mongodb is a popular nosql database designed for handling large volumes of unstructured data.Unlike traditional SQL databases that use tables and rows,MongoDB stores data in flexible,JSON-like documents,making it ideal for modern web applications where data structures can change over time.


## MongoDb stores data as documents in BSON(Binary JSON)format.
## each document is a key-value pair structure similar to JSON.
## the _id field is unique for each document and is automatically creatted by MongoDB if not provided.


{
    "_id":"12345",
    "name":"john Doe",
    "email":"john@example.com",
    "age":30,
}

# Documents are stored in collection.A collection is agroup of MongoDb documents,similar to a table in relational databases.
# collections do not enforce a scheme ,allowing documents with different structures to be stored together.

# a mongoDb database is a container for collection,similar to databases in SQL.Multiple databases can exist in a MongoDb instance.

# MongoDb is schema-less,meaning there is no predefined structure,and documents in the same colection can have different fields and data types.

# create:insert documents into a collection.
# Read:Retrieve documents from a collection using queries.
# Update:Modify existing documents.
# Delete:Remove documents from a collection.





