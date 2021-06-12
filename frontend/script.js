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
        btnLike.addEventListener("click", ()=>{window.location=`http://localhost8888/like/${image.name}`})

        btnLike.innerText = "Likes: " + image.likes;
        let btnDisLike= document.createElement("button");
        btnLike.className = "btnDisLike";
        btnDisLike.addEventListener("click", ()=>{window.location=`http://localhost8888/dislike/${image.name}`})

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
    let xhr = new XMLHttpRequest();

        let post = {
            name: document.getElementById("name").value,
            url: document.getElementById("link").value,
            likes: 0,
            dislikes: 0
        }
    
    xhr.send(JSON.stringify(post));
}


