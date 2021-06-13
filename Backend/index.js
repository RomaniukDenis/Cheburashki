const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    let data;
    if(req.url.startsWith("/like")){
        let index = req.url.lastIndexOf("/");
        let name = req.url.substring(index+1);
        db = JSON.parse(
            fs.readFileSync(path.join(__dirname, "data.json"), (err)=>{
                if(err){
                    res.end(err);
                }
            })
        );
        let i = db.findIndex(image=>image.name == name)     
        db[i].likes++;
        fs.writeFileSync(path.join(__dirname, "data.json"), JSON.stringify(db),err=>{});
        res.end();
    }
    else if(req.url.startsWith("/dislike")){
        let index = req.url.lastIndexOf("/");
        let name = req.url.substring(index+1);
        db = JSON.parse(
            fs.readFileSync(path.join(__dirname, "data.json"), (err)=>{
                if(err){
                    res.end(err);
                }
            })
        );
        let i = db.findIndex(image=>image.name == name)     
        db[i].dislikes++;
        fs.writeFileSync(path.join(__dirname, "data.json"), JSON.stringify(db),err=>{});
        res.end();
    }
    else if(req.url == "/api"){
         if(req.method == "POST"){
        db = JSON.parse(
            fs.readFileSync(path.join(__dirname, "data.json"), (err)=>{
                if(err){
                    res.end(err);
                }
            })
        );
        let post = '';
        req.on('data',(chunk)=>{
           post += chunk;
        });
        req.on('end',()=>{
            db.push(JSON.parse(post));
            fs.writeFile(path.join(__dirname, "data.json"), JSON.stringify(db), (err)=>{
                if(err){
                    res.end(err);
                }
            });
            res.end();
        })
    }
    else if(req.method == "GET"){
        let images = fs.readFileSync(path.join(__dirname, "data.json"), (err)=>{
            if(err){
                res.end(err);
            }
        });
        res.end(images);
    }
    } 

});

server.listen(8888);

