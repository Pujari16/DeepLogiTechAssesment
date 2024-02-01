
const https = require('https');

const getTimesStories = () => {
    return new Promise((resolve, reject) => {
        https.get('https://time.com', (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                const stories = [];
                const articleRegex = /<article.*?>[\s\S]*?<h3.*?>(.*?)<\/h3>[\s\S]*?<a.*?href="(.*?)".*?>/g;

                let match;
                while ((match = articleRegex.exec(data)) !== null && stories.length < 6) {
                    const title = match[1].trim();
                    const link = match[2];
                    stories.push({ title, link });
                }

                resolve({ latest_stories: stories });
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
};

module.exports = { getTimesStories };
