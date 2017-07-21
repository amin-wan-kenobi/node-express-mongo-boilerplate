# MEN-Structure
There are 5 folders in this project: config, db, middlewares, models, tests
Config folder will be in charge of the server configuration for local, test and production environments. We will put all the configurations here so any changes in different environment will be made here only. This folder will have two files. config.json and config.js

config.json is a simple JSON or maybe BSON and will hold key information for different environments. Example is shown below
{
    "test": {
        "PORT": 3000,
        "MONGODB_URI": "mongodb://localhost:27017/TodoAppTest",
        "JWT_SECRET": "alksdasfhudsdfrtgyhujhgfdswdfghnjmhgfdesw4deftgbhnjmnhg235433454y5rhtgfghu"
    },
    "development": {
        "PORT": 3000,
        "MONGODB_URI": "mongodb://localhost:27017/TodoApp",
        "JWT_SECRET": "asdfg34778934576835yuihjfhjfjksdiou908wjdjksfw4435t5gfguh"
    }
}
config.js file will decide which environment we are and based on that it will load the details of that environment into the environment variables of the machine. Example is shown below
