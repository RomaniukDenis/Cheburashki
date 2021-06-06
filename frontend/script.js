let xhr = new XMLHttpRequest();

const url = "http://localhost:8888";

xhr.open("GET", url);

xhr.onload(()=>{
    let res = JSON.parse(xhr.response);
    document.getElementById("post").innerHTML = `
        <h1>${res.name}</h1>
        <img src="${res.name}"></h1>
    `;
})
xhr.send();

function Post(){
    xhr.open("POST", url);

        let post = {
            name: document.getElementById("name"),
            url: document.getElementById("link")
        }
    
    xhr.send(JSON.stringify(post));
}


