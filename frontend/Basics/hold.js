




let hold =  document.getElementsByClassName('box1') ="Starry Night"
 hold.addEventListener('mouseover',function(){
     hold.textContent = 'Starry Night';
 });

 hold.addEventListener('mouseout',function(){
     hold.textContent = 'Come Here';
     document.body.style.background.color = '';
 });


