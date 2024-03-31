const fs = require('fs');
const process = require('process');
const path = require('path');
const http = require('http');
const https = require('https');

// Checking for filename input
if (process.argv.length !== 3) {
    console.error('Usage: node urls.js <FILENAME>');
    process.exit(1);
  }

// Reading contents of file.
let file = process.argv[2];
let urls;
    
try{
    urls = fs.readFileSync(file, 'utf-8').split(/\r?\n/).filter(Boolean);
    
    console.log(urls)
} catch {
    console.error(`Unable to read at ${file}, ${err}`);
    process.exit(1);
}


// Download content from URL and create new file.
function downloadContent(url) {
    const protocol = url.startsWith('https') ? https : http;
    const options = { method: 'GET', headers: { 'User-Agent': 'Chrome/123.0.0.0' } };
    return new Promise((resolve, reject) => {
      protocol.get(url, options, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => { resolve(data); });
      }).on('error', (err) => { reject(err); });
    });
  }
  

// Write to a file 
function writeToFile(filename, content) {
    return new Promise((resolve, reject) => {
      fs.writeFile(filename, content, 'utf-8', (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

// Download all URLs and write to Files
async function create() {
    const promises = urls.map(async (url) => {
      const hostname = new URL(url).hostname;
      const filename = path.join(process.cwd(), hostname);
  
      try {
        console.log(`Downloading ${url} to ${filename}`);
        const content = await downloadContent(url);
        await writeToFile(filename, content);
        console.log(`Wrote to ${hostname}`);
      } catch (err) {
        console.error(`Error processing ${url}:`, err.message);
      }
    });
  
    await Promise.all(promises);
  }
  
  create();