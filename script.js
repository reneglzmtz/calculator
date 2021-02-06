console.log('Hello World!')

var num1 = 0;
var num2 = 2;



var operate;

document.getElementById("+")
    .addEventListener("click", function () {
        operate = (a, b) => (a + b);
    });

document.getElementById("-")
    .addEventListener("click", function () {
        operate = (a, b) => (a - b);
    });

document.getElementById("×")
    .addEventListener("click", function () {
        operate = (a, b) => (a * b);
    });

document.getElementById("÷")
    .addEventListener("click", function () {
        operate = (a, b) => (a / b);
    });

document.getElementById("%")
    .addEventListener("click", function () {
        operate = (a, b) => (a + b);
    });


document.getElementById('equal')
    .addEventListener("click",
        function () {
            console.log(operate(num1, num2));
        }
    );