<<<<<<< HEAD

const mkdirp = require('mkdirp');
const fs = require('fs');

const writeFile = async (path, filename, content) => {
    await mkdirp(path);
=======
const fs = require('fs');

const writeFile = async (path, filename, content) => {
    await fs.mkdirSync(path, { recursive: true });
>>>>>>> 42c950919bd4183a5d41c77b3a8cab6c5dba7c1e
    fs.writeFileSync(path+filename, content);
}
function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
      response = {};
  
    if (matches.length !== 3) {
      return new Error('Invalid input string');
    }
  
    response.type = matches[1];
    response.data = Buffer.from(matches[2], 'base64');
  
    return response;
}
function file2Base64Image() {
    return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result);
        }
    })
}

module.exports = {
    writeFile,
    decodeBase64Image,
    file2Base64Image
}