module.exports = function(static, file){
    const express =  require("express");
    const app = express();
    const server = require("http").createServer(app);
    const path = require("path");
    app.use(express.static(path.join(`${static}`)));

    app.get("/", (req, res)=>{
        res.sendFile(`${static}/${file}`);
    })

    return server;
}