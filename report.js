const newman = require('newman');
require('dotenv').config();
 
newman.run({
   
    collection:require('./API integration testing Assignment.postman_collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
     delayRequest: 5000, 
         envVar: [
        {

            
            key: "gmail_token",
            value:  process.env.token
        }
    ],
    reporter: {
        htmlextra: {


            
            export: './Reports/report.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});