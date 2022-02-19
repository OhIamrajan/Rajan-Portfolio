let qNext = document.getElementsByClassName('q2');
let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let a = 0;
for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click',()=>{


        if(parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "rgb(121, 121, 224)";
            qNext[a].style.display = "block";
            a+=1;
        }
        else{
            contentDiv[i].style.height = "0px";
        }
        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
            }
        }
    });
}
var right = document.getElementById('right').clientHeight;
var left = document.getElementById('left');
left.style.height = right + "px";
var right = document.getElementById('project-content').clientHeight;
var left = document.getElementById('project-menu');
left.style.height = right + "px";
var menu = document.getElementById('menu');
const imageBoard = document.getElementById('imagePlace');
function changeImage(number){
    let site = ["#","#","#","#"];
    let code = ["#","#","#","#"];
    let title = ["enjoyWtihMovies.com","kaviAutomobiles.co.in","bodyProtocol.in","..........."];
    let des = ["This site is useful to download the movies with onclick. This is add free and buffer free site.","This is the site used to CRUD (create, retrieve, update, delete) autoMobile customer details","This is the site for the body fitness buddies can read about what to do and how to manage side effects while building their body","................................."];
    let imageList = ["../images/projects-images/movie.project.png","../images/projects-images/auto.project.png","../images/projects-images/gym.project.png","../images/projects-images/.project.png"];
    document.getElementById('imagePlace').src = imageList[number];
    document.querySelector("#title").textContent = title[number];
    document.querySelector("#des-content").textContent = des[number];
    document.querySelector('#site').href = site[number];
    document.querySelector('#code').href = code[number];
}
function hide(){
    var menuBar = document.getElementById('pro-menu');
    if(menuBar.style.display = "block"){
        menuBar.style.display = "none";
        document.getElementById('pro-content').style.width = "100%";
    }
    else if(menuBar.style.disply = "none"){
        menuBar.style.display = "block";
        document.getElementById('pro-content').style.width = "90%";
    }
}