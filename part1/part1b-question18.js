
function log_time(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);  
}

//let intervalID = setInterval(log_time, 1000)

function printNums() {
    console.log(1);
    setTimeout(function() {console.log(2);}, 1000);
    setTimeout(function() {console.log(3);}, 0);
    console.log(4);
}
printNums()