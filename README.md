# streaming-media
Effortlessly stream media files over the HTTP . Elevate your app's multimedia experience with ease.

## Installation

```bash
npm install streaming-media 
```
## Quick Start
what we need.

1. `req` : request object 
2. `res` : response object 
3. `filePath` : file path of the media file that you need to streaming.

### How to use.


``` js
const mediaStreaming = require("streaming-media");
mediaStreaming(req,res,videoPath)
```

### Example 
#### With Express js

```
const express = require("express");
const app = express();
const mediaStreaming = require("streaming-media");

app.get("/video", function (req, res) {
    const videoPath = "<path to you's media file>";
    mediaStreaming(req,res,videoPath)
});

```

#### With just Http

```
var http = require('http');
const mediaStreaming = require("streaming-media");

http.createServer(function(req, res) {
    mediaStreaming(req,res,"storage/a.mp4")
}).listen(8000);

```



## Need to contribute
1. go to the [github]('https://github.com/chethanakh/streaming-media/') repo and rise a issue(if you found the issue or feature).
2. create branch (on top of the master) with below format.
    - MS-<issue_number> -> *Ex: MS-1*
3. do your code change and make a single commit with below format.
    - <type(fix or feat)>(app): <your's-branch-name> commit message
    - ex : feat(app): MS-1 i did awesome future for you.
4. then make PR to the main branch

That's it.

## Buy me a coffee
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/chethana)