let button = document.querySelector("button");
button.addEventListener("click",()=>{
    console.log("Button Clicked");
})



const c = document.getElementById("btnClick");
c.addEventListener("click",()=>{
    console.log("C has clicked this button");
})


const t = document.getElementById("textBox");
t.addEventListener("keyup",()=>{
    console.log(t.value);
})


function passwordCheck(){
    console.log("working");
}


const p = document.getElementById("passCheck");
p.addEventListener("keyup",()=>{
    console.log(p.value);
})

//keyboard events
window.addEventListener("keydown",event =>{
    if(event.key=="i"){
        document.body.style.background = "red";
    };
})

window.addEventListener("keyup",event =>{
    if(event.key=="i"){
        document.body.style.background = "white";
    };
})


//focus event

function focusevent(){
    document.getElementById("input1").style.background=" aqua";  
}

//mouse event

let hoverElement = document.getElementsByClassName("box1")

let backgroundContent = document.getElementsByTagName("body")

let textTxt = document.getElementById("spanId")


 hoverElement[0].addEventListener("mouseover",()=>{
    console.log("hii ")
    hoverElement[0].textContent="";
    backgroundContent[0].style.backgroundColor="black"
     textTxt.style.display="block"

 })

 hoverElement[0].addEventListener('mouseout',function(){


  
         hoverElement[0].innerHTML = "";
         backgroundContent[0].style.backgroundColor="white"
         textTxt.style.display="none"
     });

 





