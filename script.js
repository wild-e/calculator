let one = document.getElementById('one');
let two = document.getElementById('two');
let sum = document.getElementById('sum');
let equal = document.getElementById('equal');
let output = document.getElementById('output');
let outputArrayOne = "";
let operator = "";
let outputArrayTwo = "";

let grid = [];
console.log(grid.push(one));


function calculator(a){
    outputArrayOne = outputArrayOne + a.value;
    output.innerHTML = outputArrayOne;
};

for (let i = 0; i <= grid.length; i++){
        grid[i].onclick = function(){
            calculator(grid[i]);
        }
};


   


sum.onclick = function(){
    operator = sum.value;
    if (outputArrayOne != ""){
        output.innerHTML = sum.value;
    }
    one.onclick = function(){
        outputArrayTwo = outputArrayTwo + one.value;
        output.innerHTML = outputArrayTwo;
    };
};


equal.onclick = function(){
    if (operator == "+") {
    output.innerHTML = parseInt(outputArrayOne) + parseInt(outputArrayTwo);
    }
};


