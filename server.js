const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!\n');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>About Litchfield Darwin</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background: #f0fdf4;
                        padding: 30px;
                    }
                    .container {
                        max-width: 900px;
                        margin: auto;
                        background: white;
                        padding: 30px;
                        border-radius: 12px;
                        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        text-align: center;
                        color: #00695c;
                        font-size: 2.5em;
                    }
                    img {
                        width: 100%;
                        max-height: 400px;
                        object-fit: cover;
                        border-radius: 10px;
                        margin: 20px 0;
                        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                    }
                    p {
                        font-size: 1.1em;
                        line-height: 1.6;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Welcome to Litchfield Park</h1>
                    <img src="/naturalaminities.jpg" alt="Litchfield Natural Amenities">
                    <p>
                        Discover the stunning  beauty of Litchfield National Park, just a short drive from Darwin.
                        With waterfalls, rock pools, and unique termite mounds, this is a perfect destination for adventure and relaxation.
                    </p>
                </div>
            </body>
            </html>
        `);
    } else if (req.url === '/naturalaminities.jpg') {
        const imgPath = path.join(__dirname, 'naturalaminities.jpg');
        fs.readFile(imgPath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Image not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
