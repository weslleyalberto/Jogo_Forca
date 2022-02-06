



let novaPalavra = document.querySelector("#input-nova-palavra");
let letraEscolhida = document.querySelector("#palavra-text");
let buttonAdicionarPalavra = document.querySelector("#nova-palavra");
let btnPalavra = document.querySelector("#btnPalavra");
let btnSortearPalavra = document.querySelector("#btn-sortear");
let span = document.querySelector('span');
let palavraSecreta = ["BABY","GENTIL","JOAO","THIAGO","ADRIANO","WESLLEY","URSINHO"];
let palavraEscolhida = [];
let btnLimparLista = document.querySelector("#btn-limpar-lista");
let seletorEspaco = document.getElementById("container");
let entradaLetra = document.getElementById('letra-text');
let erros =0;
let acertos = 0;
let letrasDigitadas = [];
let listContainer = document.querySelector('p');

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
    console.log(p);
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
    let container = document.createElement("p");
    let innetSplit = document.createTextNode(letrasSplit[w]);
    container.setAttribute("ID","list-container");
    seletorEspaco.appendChild(container);
    container.appendChild(innetSplit);
   


  }
  console.log(palavraEscolhida + " " + "Palavra ESC");
  console.log(container + 'Container');  
}
function validarPalavra(){
  let elementoP = document.querySelector(".container-space"); // Coloquei como variavel local , pois no escopo global ela não existe até ser chamada pelo sortearPalavra();
 
 let acertou = null;
 let entradaUsuario = entradaLetra.value.toUpperCase();
 console.log(palavraEscolhida.length);
 letrasDigitadas.push(entradaUsuario);
 if(letrasDigitadas.includes(entradaUsuario)){
  
   console.log("A letra " + entradaUsuario + "Já foi digitada");
 }
 else{
   console.log("Não contem a letra");
 }
 console.log(palavraEscolhida + "Palavra Escolhida");
 
for(let i=0;i < palavraEscolhida.length;i++){
  if(palavraEscolhida[i] ===entradaUsuario){
    
    console.log("acertou");
    acertos++;
    acertos = true;
    elementoP.children[i].style.display = 'block';
    

  
    

  }
  else if(!palavraEscolhida.includes(entradaUsuario)){
    erros++;
    console.log(erros);
    shapes;
    console.log("Errou");
    acertou = false;
    return;

  }
  
}

 console.log(entradaLetra.value);
  
  
}
console.log(listContainer);
/**Testes */

/*
document.addEventListener('keypress',() =>{
  var teste = entradaLetra.key.replaceAll(/[^a-zA-Z]/g,'').toUpperCase();
  console.log(teste);
  entradaLetra.value = teste;
});*/