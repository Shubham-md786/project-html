var pie = 22/7;
/*area of circle*/
function areaofcircle(){
let input = document.getElementById("radiofcir").value;
let output = document.getElementById("arearesult");
parseFloat(input,output);
area = pie*input*input;
console.log(area);
output.value = "Area Of Circle Is " +area ;
}
/*Circumference of circle*/
function cirofcircle(){
let input = document.getElementById("cirofcir").value;
let output = document.getElementById("cirresult");
parseFloat(input,output);
let area = 2*pie*input;
console.log(area);
output.value = "Area Of Circle Is " +area;
}


function areaofsquare(){
let input = document.getElementById("lengthofsquare").value;
let output = document.getElementById("resultareaofsquare");
parseFloat(input,output);
let area = input**2;
console.log("Area of square is " +area);
output.value = "Area of square is " +area;
}

function areaofrect(){
let inputl = document.getElementById("lengthofrect").value;
let inputb = document.getElementById("breathofrect").value;
let output = document.getElementById("resultareaofrect");
parseFloat(inputl,inputb,output);
let area = inputl*inputb;
console.log("Area of rectangle is " +area);
output.value = "Area of rectangle is " +area;
}

function areaoftri(){
let inputb = document.getElementById("baseoftri").value;
let inputh = document.getElementById("heightoftri").value;
let output = document.getElementById("resultareaoftri");
parseFloat(inputb,inputh,output);
let area = 1/2*inputb*inputh;
console.log("Area of triangle is " +area);
output.value = "Area of triangle is " +area;
}

function areaofparall(){
let inputl = document.getElementById("lengthofparall").value;
let inputb = document.getElementById("breathofparall").value;
let output = document.getElementById("resultareaofparall");
parseFloat(inputl,inputb,output);
let area = inputl*inputb;
console.log("Area of parallelogram is " +area);
output.value = "Area of parallelogram is " +area;
}


function areaoftra(){
let inputl = document.getElementById("ulengthoftra").value;
let inputb = document.getElementById("llengthoftra").value;
let inputh = document.getElementById("heightoftra").value;
let output = document.getElementById("resultareaoftra");
let inputl2 = parseFloat(inputl);
let inputb2 = parseFloat(inputb);
let inputh2 = parseFloat(inputh);
parseFloat(output);
let area = [inputl2+inputb2]/2*inputh2;
console.log("Area of trapezium is " +area);
output.value = "Area of trapezium is " +area;
}
function areaofrho(){
let inputl = document.getElementById("diaofrho").value;
let inputb = document.getElementById("dia2ofrho").value;
let output = document.getElementById("resultareaofrho");
parseFloat(inputl,inputb,output);
let area = [inputl*inputb]/2*1;
console.log("Area of rhombus is " +area);
output.value = "Area of rhombus is " +area;
}







/*area of cuboid*/
function areaofcuboid(){
let inputl = document.getElementById("lengthofcubo").value;
let inputb = document.getElementById("breathofcubo").value;
let inputh = document.getElementById("heightofcubo").value;
let output = document.getElementById("cuboarea");
parseFloat(inputl,inputb,inputh,output);
let area = 2*[inputl*inputh+inputb*inputh+inputl*inputb];
let csacubo = 2*inputh*inputl+2*inputh*inputb;
console.log(area);
console.log(csacubo);
output.value = "area of cuboid is " +area+ " CSA of cuboid is "+csacubo;
}
/* Area of cube */
function areaofcube(){
let input = document.getElementById("lengthofcube").value;
let output = document.getElementById("resultareaofcube");
parseFloat(input,output);
let area = 6*input**2;
let csa = 4*input**2;
console.log(area);
console.log(csa);
output.value = "TSA of cube is " +area+" CSA of cube is "+ csa;
}

/*Area of cylinder*/
function areaofcylinder(){
let inputr = document.getElementById("radiusofcyl").value;
let inputh = document.getElementById("heightofcyl").value;
let output = document.getElementById("cylarea");
parseFloat(inputr,inputh,output);
let area = 2*pie*inputr*inputh+2*pie*inputr**2;
let csa = 2*pie*inputr*inputh;
console.log(area);
console.log(csa);
output.value = "TSA of cylinder is " +area +" CSA of cylinder is " + csa;
}

/* Area of Cone */
/*Slant Height*/
function slantheightofcone(){
height = document.getElementById("heightofcone").value;
radius = document.getElementById("radiusofcone1").value;
output = document.getElementById("resultslant");
parseFloat(height,radius);
let length1 = Math.sqrt(height**2+radius**2);
console.log(length1);
output.value = "Slant Height is " + length1;
let length = document.getElementById("lengthofcone");
length.value = length1;
let radius1 = document.getElementById("radiusofcone");
radius1.value =radius;
}
/*area of cone*/
function areaofcone(){
let inputr = document.getElementById("radiusofcone").value;
let inputl = document.getElementById("lengthofcone").value;
let output = document.getElementById("resultconearea");
parseFloat(inputr,inputl,output);
let area = pie*inputr*inputl+pie*inputr**2;
let csa = pie*inputr*inputl;
console.log(csa);
console.log(area);
output.value = "TSA of cone is " +area + " CSA of cone is "+csa;
}

/*area of sphere*/
function areaofsphere(){
let inputr = document.getElementById("radiusofsphere").value;
let output = document.getElementById("resultspherearea");
parseFloat(inputr,output);
let area = 4*pie*inputr**2;
let csa = 4*pie*inputr**2;
console.log(area);
console.log(csa);
output.value = "TSA of sphere is " + area +" CSA of sphere is " + csa;
}

/*hemisphere*/
function areaofhemisphere(){
let inputr = document.getElementById("radiusofhemisphere").value;
let output = document.getElementById("resulthemispherearea");
parseFloat(inputr,output);
let area = 3*pie*inputr**2;
let csa = 2*pie*inputr**2;
console.log(area);
console.log(csa);
output.value = "TSA of hemi sphere is " + area + " CSA of  hemi sphere is " + csa;
}
