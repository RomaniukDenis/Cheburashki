const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res)=>{
    let data;
    if(req.url.startsWith("/like")){
        let index = req.url.lastIndexOf("/");
        let name = req.url.substring(index+1);
    }
    if(req.url.startsWith("/dislike")){
        let index = req.url.lastIndexOf("/");
        let name = req.url.substring(index+1);
    }
    if(method == "POST"){
        db = JSON.parse(
            fs.readFileSync(path.join(__dirname, data.json), (err)=>{
                if(err){
                    res.end(err);
                }
            })
        );
        let post = '';
        req.on('data',(chunk)=>{
           post += chunk;
        });
        res.on('end',()=>{
            db.push(post);
        })
    }
    else{
        if(method == "GET"){
            let images = fs.readFileSync(path.join(__dirname, data.json), (err)=>{
                if(err){
                    res.end(err);
                }
                else{
                    res.end(images)
                }
            });
        }
    }
});

server.listen(8888);

