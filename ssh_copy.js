const fs = require('fs');
const clipboardy = require('clipboardy');

fs.readFile('/c/Users/Administrator/.ssh/id_rsa.pub', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  clipboardy.writeSync(data);
  console.log('文件内容已复制到剪切板');
});
