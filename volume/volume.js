
var pie = 22/7;


//volume of cuboid
let perstartcubo = performance.now();
function volumeofcuboid(){
let inputl = document.getElementById("lengthofcubo");
let inputb = document.getElementById("breathofcubo");
let inputh = document.getElementById("heightofcubo");
let output = document.getElementById("cubovolume");
let inputl1 = inputl.value;
let inputb1 = inputb.value;
let inputh1 = inputh.value;
parseFloat(inputl1,inputb1,inputh1);
parseFloat(output);
let volume = inputl1*inputb1*inputh1;
console.log(volume);
output.value = "Volume of cuboid is " +volume ;
let perendcubo = performance.now();
console.log(`${perendcubo-perstartcubo} milli seconds`)
}
// volume of cube
let perstartcube = performance.now();
function volumeofcube(){
let input = document.getElementById("lengthofcube");
let output = document.getElementById("resultvolumeofcube");
let input2 = input.value;
parseFloat(input2);
parseFloat(output);
let volume = input2**3;
console.log(volume);
output.value = "Volume of cube is " +volume;
let perendcube = performance.now();
console.log(`${perendcube-perstartcube} milli seconds`)
}

//volume of cylinder
function volumeofcylinder(){
let perstartcyl = performance.now();
let inputr = document.getElementById("radiusofcyl");
let inputh = document.getElementById("heightofcyl");
let output = document.getElementById("cylvolume");
let inputr1 = inputr.value;
let inputh1 = inputh.value;
parseFloat(inputr1);
parseFloat(inputh1);
parseFloat(output);
let volume = pie*inputr1**2*inputh1;
console.log(volume);
output.value = "Volume of cylinder is " +volume ;
let perendcyl = performance.now();
console.log(`${perendcyl-perstartcyl} milli seconds`)
}

//volume of cone
function volumeofcone(){
let perstartcone = performance.now();
let inputr = document.getElementById("radiusofcone");
let inputh = document.getElementById("heightofcone");
let output = document.getElementById("resultconevolume");
let inputr1 = inputr.value;
let inputh1 = inputh.value;
parseFloat(inputr1);
parseFloat(inputh1);
parseFloat(output);
let volume = pie*inputr1**2*inputh1/3;
console.log(volume);
output.value = "Volume of cone is " +volume ;
let perendcone = performance.now();
console.log(`${perendcone-perstartcone} milli seconds`)
}

//volume of sphere
function volumeofsphere(){
let perstartsph = performance.now();
let inputr = document.getElementById("radiusofsphere");
let output = document.getElementById("resultspherevolume");
let inputr1 = inputr.value;
parseFloat(inputr1);
parseFloat(output);
let volume = 4/3*pie*inputr1**3;
console.log(volume);
output.value = "TSA of sphere is " + volume ;
let perendsph = performance.now();
console.log(`${perendsph-perstartsph} milli seconds`)
}
