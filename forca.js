let novaPalavra = document.querySelector("#input-nova-palavra");
let letraEscolhida = document.querySelector("#palavra-text");
let buttonAdicionarPalavra = document.querySelector("#nova-palavra");
let btnPalavra = document.querySelector("#btnPalavra");
let btnSortearPalavra = document.querySelector("#btn-sortear");
let span = document.querySelector('span');
let palavraSecreta = ["BABY"];
let palavraEscolhida = [];
let btnLimparLista = document.querySelector("#btn-limpar-lista");
let seletorEspaco = document.getElementById("container");
let entradaLetra = document.getElementById('letra-text');
let erros =0;
let acertos = 0;
let letrasDigitadas = [];
let listContainer = document.querySelector('p');
let vitoria = document.getElementById('vitoria');
let derrota = document.getElementById('derrota');
let btnReiniciarPartida = document.getElementById('btnPerdeu');
let acertou = null;
let containerTracinhos = document.getElementById('container-tracinhos');
btnSortearPalavra.addEventListener("click", function(){ 
  escolhaPalavraSecreta();
   sortearPalavra();
});
buttonAdicionarPalavra.addEventListener("click",function(){
  adicionarPalavra(novaPalavra.value);
  novaPalavra.value = "";  
});
function adicionarPalavra(palavra){
  palavraSecreta.push(palavra.toUpperCase());
  palavraSecreta.forEach(function(p){
    span.textContent = palavraSecreta.length;
  })
}
btnLimparLista.addEventListener("click",function(){
  palavraSecreta = [];
  span.textContent = palavraSecreta.length;
});
function escolhaPalavraSecreta(){
  palavraEscolhida = palavraSecreta[Math.floor(Math.random() * palavraSecreta.length)]; 
}
btnPalavra.addEventListener("click", function(){
  validarPalavra(); 
});
function sortearPalavra(){ 
  let letrasSplit = palavraEscolhida.split(''); 
  for(let w=0;w<palavraEscolhida.length;w++){
    let tracinhos = document.createElement("span");
    tracinhos.setAttribute("ID","mostrar-tracinhos");
    let container = document.createElement("p");
    let innetSplit = document.createTextNode(letrasSplit[w]);
    container.setAttribute("ID","list-container");
    seletorEspaco.appendChild(container);
    container.appendChild(innetSplit); 
    containerTracinhos.appendChild(tracinhos);
  }
  console.log(palavraEscolhida + " " + "Palavra ESC"); 
}
function validarPalavra(){
 let elementoP = document.querySelector(".container-space"); 
 let entradaUsuario = entradaLetra.value.toUpperCase();
 letrasDigitadas.push(entradaUsuario);
for(let i=0;i < palavraEscolhida.length;i++){
   if(palavraEscolhida[i] ===entradaUsuario){    
    acertos++;
    console.log(acertos);
    console.log(palavraEscolhida.length);
    acertou = true;
    elementoP.children[i].style.display = 'block';
    validarVitoria();   
  }
  else if(!palavraEscolhida.includes(entradaUsuario)){
    erros++;
    shapes();
    acertou = false;  
    return;
  }      
}
}
function validarVitoria(){
  if(acertos === palavraEscolhida.length){
    vitoria.style.display = "block"; 
  } 
}
function jogarNovamente(){
  if(erros >= 10){
    derrota.style.display = "block";    
  }
}
btnReiniciarPartida.addEventListener("click", function(){
  document.location.reload(true);
});

/*
document.addEventListener('keypress',() =>{
  var teste = entradaLetra.key.replaceAll(/[^a-zA-Z]/g,'').toUpperCase();
  console.log(teste);
  entradaLetra.value = teste;
});*/