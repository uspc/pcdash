Local data storage logic success
To demonstrate
1. Load the app with DB and Server running
2. Create inital lanes and task - this will be persisted to DB
3. Demonstrate this by restarting the server and loading the page in new tab

To demonstrate local storage 
4. Stop the DB
5. Create new lane or task - This will immediately put the storage session to local session 
6. Restart only the express server 
7. Reload the page in new window - You should have the state as per step 5

To demonstrate the syncing of database
8. Restart both DB and express serer
9. Reload the page in new window, this will effectively push the data present in local storage to DB
11. Show the Database value to user through mongodb UI

*** JEST ***
npm run testjest (command specified in package.json)
processes all the test case present in __test__ folder 
Sanpshots are created and added to __test__/__Snapshots__