



let novaPalavra = document.querySelector("#input-nova-palavra");
let palavraEscrita = document.querySelector("#palavra-text");
let buttonAdicionarPalavra = document.querySelector("#nova-palavra");
let btnPalavra = document.querySelector("#btnPalavra");
let btnSortearPalavra = document.querySelector("#btn-sortear");
let span = document.querySelector('span');
let palavraSecreta = ["BABY","GENTIL","JOAO","THIAGO","ADRIANO","WESLLEY","URSINHO"];
let palavraEscolhida = [];
let btnLimparLista = document.querySelector("#btn-limpar-lista");
let seletorEspaco = document.getElementById("container");

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

function sortearPalavra(){ 
  for(let w=0;w<palavraEscolhida.length;w++){
    let container = document.createElement("div");
    container.setAttribute("class","list-container");
    seletorEspaco.appendChild(container);   
  }
  console.log(palavraEscolhida + "Palavra ESC");
  console.log(container + 'Container');  
}
function validarPalavra(){
  let letrasSplit = palavraEscolhida.split('');
  
}
let teste = "maria";
console.log(teste.includes('a'));
/*
function validarPalavra(palavra){
    if(palavra.length == 0){
    
        error.className = "error";
        setTimeout(function() {
          error.className = "error-invisivel";
         }, 3000);  

         return false;
      }
      else if(palavra.match(/[^a-z ]/g)){
        error.textContent = "Não são permitidos caracteres especiais, números ou letras maíusculas!";
        error.className = "error";
        setTimeout(function(){
          error.className = "error-invisivel";
        },3000);
        
        return false;
      }
      else{
        textoTitulo.textContent = "Mensagem criptografada"
        error.className = "error-invisivel";
        var mensagemMinuscula = codificador(result);
        msg.value = mensagemMinuscula.replace(/[^a-z ]/gi,'');
     return true;
      }
}

*/