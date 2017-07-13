if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

const https = require('https');
const http = require('http');

let url = process.argv[2];
const regexTitle = /(<\s*title[^>]*>(.+?)<\s*\/\s*title)>/g;

http.get(url, function(response) {
  response.on('data', function(chunk) {
    const str = chunk.toString();

    const titleMatch = regexTitle.exec(str);

    if (titleMatch && titleMatch[2] === '302 Found') {
      const domain = url.split(':')[1];
      url = 'https:' + domain;

      https.get(url, function(response) {
        response.on('data', function(chunk) {
          const str = chunk.toString();

          const titleMatch = regexTitle.exec(str);

          if (titleMatch && titleMatch[2]) {
            console.log('The result is HTML');
            console.log('The title is ' + titleMatch[2]);
          }
        });
      });
    } else {
      http.get(url, function(response) {
        response.on('data', function(chunk) {
          const str = chunk.toString();

          const titleMatch = regexTitle.exec(str);

          if (titleMatch && titleMatch[2]) {
            console.log('The result is HTML');
            console.log('The title is ' + titleMatch[2]);
          }
        });
      });
    }
  });
});
