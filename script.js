/**Definition des variables "chiffre" */

let zero = document.getElementById('zero').value;
let one = document.getElementById('one').value;
let two = document.getElementById('two').value;
let three = document.getElementById('three').value;
let four = document.getElementById('four').value;
let five = document.getElementById('five').value;
let six = document.getElementById('six').value;
let seven = document.getElementById('seven').value;
let eight = document.getElementById('eight').value;
let nine = document.getElementById('nine').value;

let number=[zero, one, two, three, four, five, six, seven, eight, nine];

/**Definition des variables "operateur" */

let sum = document.getElementById('sum');
let equal = document.getElementById('equal');
let substract = document.getElementById('substract');
let divide = document.getElementById('divide');
let multiply = document.getElementById('multiply');

let operator=[sum, equal, substract, divide, multiply];

/**Definition de l'endroit où seront écrites les valeurs */

let output = document.getElementById('output');

for (let i=0;i<number.length;i++){
    number[i].onclick = function(){        /**Ecriture du/des premier(s) chiffre(s)*/
        output.innerHTML += number[i].value;
        let premier=output;
        for (let j=0;j<operator.length;j++){       /**Ecriture des operateurs*/
            operator[j].onclick = function(){
                output.innerHTML += operator[j].value;
                for (let h=0;h<number.length;h++){        /**Ecriture du/des deuxieme(s) chiffre(s)*/
                    number[h].onclick = function(){
                        output.innerHTML += number[h].value;
                        let deuxieme=output;
                        equal.onclick = function(){
                            output.innerHTML= premier + deuxieme;
                        };
                    };
                }
            };
        }
    };
}




