
//1. objects literal
let car = {
    color: ["red","blue","yellow"],
    brand: "toyota",
    price: 10000,
    model: "DxYne",
    hardware: {
        chasis : "arminz",
        engine : "model 15",
    },
    start:function(){
        console.log("The car has been started");
    }
};


console.log(car);
console.log(car.price);
car.price = 500000;
console.log(car.price);

//2. instance object

let bus = new Object();
bus.number = 101;
bus.name = "Shyam Rides";


//3. Object constructor
function truck(number,name){
    this.number = number;
    this.name = name;
}

const e = new truck(1,"H");