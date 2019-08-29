const a = 10;
const b = "ini string";
const c = [1,2,3];
const key = "nama";
const d ={
    "nama":"makers",
    "addres":"dago",
    "rank":1
};
function test(x,y){
    return x + y
};
var z = test(3,5);

var f = true;
if(f){
    console.log("ini true");
}else if (f){
    console.log("ini false");
} else {
    console.log("ini else");
};

f ? console.log("true again") : console.log("false again");

if(3< 1){

}else if(4 < 3){

}else{

};

const num = 20;
switch (num) {
    case 20:
        console.log("20");
        break;
    case 20:
        console.log("40");
        break;
    default:
        console.log("default");
}

function test(x,y) {
    return x + y;
}
const test2 = function (x,y) {
    return x + y;    
}
const test3 = (x,y) => {
    return x + y;    
}

const object = {
    "nama":"makers",
    "addres":"dago",
    "rank":1,
    "check":function(){
        console.log(this.nama)
    }
};

for(let i = 0; i <5; i++){
    // logic here
}

var person = {
    fname:"john",
    lname:"doe",
    age:12
};

for(x in person){
    console.log("key",x)
    console.log("value",person[x])
}

const number = [5,9,2,4]
for(x of number){
    console.log(number,x)
}

const string = "ini string"
for(x of string){
    console.log(string,x)
}

let i = 11
while (i < 10) {
    i += 1;
    console.log("masuk while")    
}

do {
    console.log("masuk do")
} while (i < 10);