

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

 


