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


