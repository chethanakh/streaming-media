const fs = require("fs");
const mime = require('mime-types');
/**
 * Function for getting a certain number of recipes.
 * NOTE: The req object should include a "count" query parameter.
 * 
 * req: Request being passed in from the server.js
 * res: Response that will be sent back.
 * filePath: media file path that you need to stream (this should be need to relative).
 *
 */
function mediaStreaming(req,res,filePath) {
    const range = req.headers.range;
    if (!range) {
        res.writeHead(400,"range header not fond on the request");
        res.end();
        return null;
    }
    
    const file = fs.statSync(filePath)
    const videoSize = file.size;
    const fileType = mime.lookup(filePath);
    
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + mbToBytes(1), videoSize - 1);
    
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": fileType,
    };
    
    res.writeHead(206, headers);
    
    const videoStream = fs.createReadStream(filePath, { start, end });
    videoStream.pipe(res);
}

function mbToBytes(size) {
    return size * 1000000
}

module.exports = mediaStreaming