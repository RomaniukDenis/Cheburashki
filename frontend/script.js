let xhr = new XMLHttpRequest();

const url = "http://localhost:8888";

xhr.open("GET", url);

xhr.onload = () => {
    let res = JSON.parse(xhr.response);
    console.log(res);
    res.map((image)=>{
        let one = document.createElement("div");
        one.className = "one";
        one.id =  "one";
        document.getElementById("post").appendChild(one);
        let btnLike= document.createElement("button");
        btnLike.className = "btnLike";

        btnLike.innerText = "Likes: " + image.likes;
        let btnDisLike= document.createElement("button");
        btnLike.className = "btnDisLike";

        btnDisLike.innerText = "Disikes: " + image.dislikes;

        document.getElementById("one").innerHTML = `
        <h1>${image.name}</h1>
        <img src="${image.url}">
    `
    document.getElementById("one").appendChild(btnDisLike);
    document.getElementById("one").appendChild(btnLike);

    });

    

}
xhr.send();

function Post(){
    xhr.open("POST", url);

        let post = {
            name: document.getElementById("name"),
            url: document.getElementById("link"),
            likes: 0,
            dislikes: 0
        }
    
    xhr.send(JSON.stringify(post));
}


