



let novaPalavra = document.querySelector("#input-nova-palavra");
let palavraEscrita = document.querySelector("#palavra-text");
let buttonAdicionarPalavra = document.querySelector("#nova-palavra");
let btnPalavra = document.querySelector("#btnPalavra");
let btnSortearPalavra = document.querySelector("#btn-sortear");
let span = document.querySelector('span');
let palavraSecreta = [];
let btnLimparLista = document.querySelector("#btn-limpar-lista");

btnSortearPalavra.addEventListener("click", function(){
 
  
  return sortearPalavra();
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
function verificarPalavra(palavraSorteada, letraDigitada){
  for(let i=0;i< palavraSorteada.length;i++){
    if(palavraSorteada[i] != letraDigitada){
      //Parei aqui
    }
  }
  
}
btnLimparLista.addEventListener("click",function(){
  palavraSecreta = [];
  span.textContent = palavraSecreta.length;
});
btnPalavra.addEventListener("click", function(){
  if(validarPalavra("teste")){
      console("OK");
  }
});
function sortearPalavra(){
  let quantidade = palavraSecreta.length;
  let numeroSorteado = Math.floor(Math.random() * quantidade);
  return palavraSecreta[numeroSorteado];
   
}


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
