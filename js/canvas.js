
var canvas = document.querySelector('canvas');
const contexto = canvas.getContext("2d");

contexto.lineWidth = 5;

function shapeStart() {
    contexto.beginPath();
    contexto.moveTo(100, 400);
    contexto.lineTo(50, 450);
    contexto.lineTo(150, 450);
    contexto.lineTo(100, 400);
    contexto.fill();
    contexto.closePath();
}

function shape1() {
    var width=5; 
    var height=350;
    contexto.fillRect(100-(width/2), 50, width, height);
}
function shape2() {
    var width=200; 
    var height=5;
    contexto.fillRect(100, 50, width, height);
}
function shape3() {
    var width=5; 
    var height=50;
    contexto.fillRect(300, 50, width, height);
}
function shape4(){
    var radius=30; 
    contexto.arc(300, 100+radius, 30, 0, 2 * Math.PI);
    contexto.fill();
}
function shape5(){
    var width=5; 
    var height=100;
    contexto.fillRect(300, 160, width, height);
}
function shape6() {
    contexto.lineWidth = 5;
    contexto.beginPath();
    contexto.moveTo(300, 160);
    contexto.lineTo(260, 200);
    contexto.stroke();
    contexto.closePath();
}
function shape7() {
    contexto.beginPath();
    contexto.moveTo(300, 160);
    contexto.lineTo(340, 200);
    contexto.stroke();
    contexto.closePath();
}
function shape8() {
    contexto.lineWidth = 5;
    contexto.beginPath();
    contexto.moveTo(300, 260);
    contexto.lineTo(260, 300);
    contexto.stroke();
    contexto.closePath();
}
function shape9() {
    contexto.beginPath();
    contexto.moveTo(300, 260);
    contexto.lineTo(340, 300);
    contexto.stroke();
    contexto.closePath();
}



function shapes(){
        if(erros === 1){
            shapeStart();
        }
        else if(erros === 2){
            shape1();
        }
        else if(erros === 3){
            shape2();
        }
        else if(erros === 4){
            shape3();
        }
        else if(erros === 5){
            shape4();
        }
        else if(erros === 6){
            shape5();
        }
        else if(erros === 7){
            shape6();
        }
        else if(erros === 8){
            shape7();
        }
        else if(erros === 9){
            shape8();
        }
        else{
            shape9();
            ocutarElemento(containerDigitarLetras);
            jogarNovamente();
        }
} 
    
