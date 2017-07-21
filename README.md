# MEN-Structure
There are 5 folders in this project: config, db, middlewares, models, tests
Config folder will be in charge of the server configuration for local, test and production environments. We will put all the configurations here so any changes in different environment will be made here only. This folder will have two files. config.json and config.js

config.json is a simple JSON or maybe BSON and will hold key information for different environments. config.js file will decide which environment we are and based on that it will load the details of that environment into the environment variables of the machine.

As it can be seen in the config.js file, the environment variable of NODE_ENV is not defined locally. So what happens is that it will get the details from the config.json file (either TEST or DEVELOPMENT environment) and will load the details, create those environment variables and load the values into them. As it can be seen by default the value is development as NODE_ENV does not exist. But if we want to push test we should do it by test script inside the package.json file. Later we will go through its details.

db folder will hold a file for our database connection. We can name the file mongoose.js.

middleware will hold our middlewares for example authenticate middleware or log middle or anything you might have in mind you can keep here.

test folder will hold our test scripts using mocha, expect, supertest and nodemon. Inside test folder, we should have another folder called seed (seed.js) which will push in data for us before our tests. It is very useful. All tests for the server.js file will also go into server.test.js file located in test folder.
