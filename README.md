# Grand Hustle Records Database Viewer

## About this repro
This is a demo application, called SupraHotFire, for viewing a database of rap artists beloning to the fictitious record company, Grand Hustle records.  

## Application Notes

- After cloning the this repro, run the database server as described below
- start the application by executing 'yarn start' (or npm start) in the repro directory.  Port 9000 is used.


- Application Screen 

    ![Screen Shot](/documentation/screen1.PNG?raw=true "Screen Shot")

    
 -  History:
    - This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
    - Webpack modified for locally scoped css class names.
    - Redux added. 
    - Thunk middleware added
    - jest testing added
    - jason-server added to vend the artist data base

# Running the database server
- It is necessary to run the database server to see any data in the viewer application 
- install the the json server like this:   npm install -g json-server
- After making a local copy of the repro, execute 'yarn server' (or npm server) from the command line in the repro directory
- This will start the json server on port 3500
- The artist datebase is stored in src/mock/rappers.json

# Running tests
- A few sample tests have been implemented.  The tests do not cover all code or every situation that should be tested in a production app. 
- To run the tests, execute 'yarn test' (or npm test) from the command prompt
