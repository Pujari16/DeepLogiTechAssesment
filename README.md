# DeepLogiTechAssesment




The 2 files `server.js` is used to fetch the html page from 'time.com' and returns a Promise.

Now the `index.js` is used to strat our js server(at port 3001) will parse the url which is reaching the server and 
returns the data of latest 6 stories in json format when any one hits the api "http://localhost:3001/getTimeStories".

First the html text from 'time.com' is parsed using the articleRegex that defines the structure of the webiste html.

After parsing the html, the latest 6 stories are fethched from the parsed text and will return the and links of those stories as json.




Steps to follow to make it work --- >
  1) Clone the folder in your local from github using command  `git clone <link to repository>`
  2) After cloning successfully, run the command `node server.js` to make our server listen at port 3001.
  3) Make sure no other processes are runnning in this port
  4) Now finally hit the api "http://localhost:3001/getTimeStories" from any platform like Postman or ThunderClient and 
  that will give you the latest 6 stroies from 'time.com'.
