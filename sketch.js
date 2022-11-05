let values = [];
let i = 0;
let j = 0;
let k = 0;
function setup() {
  createCanvas(720, 400);
  
  frameRate(5);
  for(let i = 0; i < width/8; i++){
    values.push(random(height));
  }
}

function draw() {
  background(220);
  bubbleSort();
  simulateSorting();
}
function bubbleSort() {
  for(let k = 0;k<8;k++){
    if(i<values.length){
      let temp = values[j];
      if(values[j] > values[j+1]){
        values[j] = values[j+1];
        values[j+1] = temp;
      }
      j++;
      
      if(j>=values.length-i-1){
        j = 0;
        i++;
      }
    }
    else{
      noLoop();
    }
  }
}

// The simulateSorting() function helps in animating
// the whole bubble sort algorithm
// by drawing the rectangles using values
// in the array as the length of the rectangle.
function simulateSorting(){
  for(let i = 0;i<values.length;i++){
    stroke(100, 143, 143);
     fill(k);
     k += 10;
     rect(i*8 , height, 8, -values[i],20);
   }
}
