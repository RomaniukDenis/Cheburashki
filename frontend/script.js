let xhr = new XMLHttpRequest();

const url = "http://localhost:8888";

xhr.open("GET", url);

xhr.onload = () => {
    let res = JSON.parse(xhr.response);
    console.log(res);
    res.map((image)=>{
        let one = document.createElement("div");
        one.className = "one";
        one.id =  `one${image.name}`;
        document.getElementById("post").appendChild(one);
        let btnLike= document.createElement("button");
        btnLike.className = "btnLike";
        btnLike.addEventListener("click", ()=>{window.location=`http://localhost:8888/like/${image.name}`})

        btnLike.innerText = "Likes: " + image.likes;
        let btnDisLike= document.createElement("button");
        btnLike.className = "btnDisLike";
        btnDisLike.addEventListener("click", ()=>{window.location=`http://localhost:8888/dislike/${image.name}`})

        btnDisLike.innerText = "Disikes: " + image.dislikes;

        document.getElementById(`one${image.name}`).innerHTML = `
        <h1>${image.name}</h1>
        <img src="${image.url}">
    `
    document.getElementById(`one${image.name}`).appendChild(btnDisLike);
    document.getElementById(`one${image.name}`).appendChild(btnLike);

    });

    

}
xhr.send();

function Post(){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);
        let post = {
            name: document.getElementById("name").value,
            url: document.getElementById("link").value,
            likes: 0,
            dislikes: 0
        }
    
    xhr.send(JSON.stringify(post));
}


