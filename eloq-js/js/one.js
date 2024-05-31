

// a simple use of break 

for(let num=20; ;num+=1){
    if( num%3==0 ){
        console.log(num);
        break;
    }
}




//switch

let day = 4
switch(day){
    case day:
        console.log("It's Monday");
        break;
        case day:
            console.log("It's Wednesday");
            break;
            case day:
                console.log("It's Friday");
                break;
                default:
                    console.log("It's another day");
                    break;
}


//Looping a triangle


let line="#";
let result="";

while(line.length <= 7){
result += line+ " ";
console.log(result);
line += "#";

}

//FIZZBUZZ

for(let i=1;i<=100;i++){
    if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
       console.log("Buzz");
    }
    else if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else{
        console.log(i);
    }
}

//CHESSBOARD

let grid="";
let black="#";

for(let i=0;i<8;i++){
       grid=black;
       for(let j=0;j<8;j++){
        if((i+j)%2==0){
        console.log(grid);
       }
       }
       console.log("\n");
       
    }







