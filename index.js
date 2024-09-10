
let output = document.getElementById("out");
let headtxt = document.getElementById("headtext");

function addToDisplay(x){
    output.value += x;
}

function deleteCal(){
    output.value = "";
    output.style.backgroundColor = "#181F32";
    headtxt.style.color = "white";
}

function Evaluate(){
    let inp = output.value.replace("×","*");
    let result = eval(inp);
    deleteCal();
    addToDisplay(result);
    output.style.backgroundColor = "black";
    headtxt.style.color = "black";
}


