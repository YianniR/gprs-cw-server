# gprs-cw-server
A server to get and display IoT sensor data.

To run this you need to have Node.js and MongoDB installed.

Node: https://nodejs.org/en/download/
MongoDB: https://docs.mongodb.com/manual/installation/

Once you have these installed do:
```
  npm install -g bower
  npm install --save-dev nodemon
  npm install express --save
  npm install mongoose --save
  bower install bootstrap angular angular-route jquery --save
```
To install nodemone, express and Mongoose.

To start the node server run on a terminal at the directory where the code is:
```
  npm run start
```
To start mongoDB server run in a separate terminal:
```
  mongod
```
And finaly on the terminal you have the node server run:
```
  rs
```
to restart the server.

To test everything you can install postman: https://www.getpostman.com/

Nice tutorial:
https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd


By Yiannis Rav.
