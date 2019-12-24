const path = require('path');
const mimeTypes = {
    "xml":"application/xml",       
    "zip":"application/zip",       
    "rar":"application/x-rar",
    "txt":"text/plain",
    "html":"text/html",
    "htm":"text/html",
    "js":"text/javascript",
    "css":"text/css",
    "jpg":"image/jpeg",
    "jpeg":"image/jpeg",
    "gif":"image/gif",
    "png":"image/png"        
}

module.exports = (filePath) => {
    let ext = path.extname(filePath)
        .split('.')
        .pop()
        .toLowerCase();
    if(!ext){
        ext = filePath;
    }

    return mimeTypes[ext] || mimeTypes['txt'];

}