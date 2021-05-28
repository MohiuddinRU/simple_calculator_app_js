function disp(val){
    document.getElementById("display").value += val;
}

function calculate(){
    let x = document.getElementById("display").value;
    let y = eval(x);

    document.getElementById("display").value = y;
}

function clearScreen(){
    document.getElementById("display").value = "";
}
