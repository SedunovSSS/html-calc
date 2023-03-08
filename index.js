function f(text){
    if (document.getElementById("c").innerHTML == "0"){
        document.getElementById("c").innerHTML = "";
    }
    document.getElementById("c").innerHTML += text;
}
function t(text){
    document.getElementById("c").innerHTML += text;
}
function ac(){
    document.getElementById("c").innerHTML = "0";
}
function del(){
    document.getElementById("c").innerHTML = document.getElementById("c").innerHTML.slice(0, -1);
    if (document.getElementById("c").innerHTML == ""){
        document.getElementById("c").innerHTML = "0";
    }
}
function sOpen(){
    if (document.getElementById("c").innerHTML == "0"){
        document.getElementById("c").innerHTML = "";
    }
    document.getElementById("c").innerHTML += '(';
}

function sClose(){
    if (document.getElementById("c").innerHTML == "0"){
        document.getElementById("c").innerHTML = "";
    }
    document.getElementById("c").innerHTML += ')';
}

function calculate(){
    try{
        document.getElementById("c").innerHTML = eval(document.getElementById("c").innerHTML);
    }
    catch(error){
        console.log(error);
        document.getElementById("c").innerHTML = "0";
    }
}
