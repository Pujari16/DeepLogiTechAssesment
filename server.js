const http = require('http');
const url = require('url');
const { getTimesStories } = require('./index.js');

const port = 3001;

const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname } = parsedUrl;

    try {
        if (pathname === '/getTimeStories') {
            const responseData = await getTimesStories();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(responseData));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'No route matching' }));
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Internal server error' }));
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
