/* Organizar todos os seletores/variáveis globais todos os seletores com query depois com byID,
depois todas as variáveis , arrays de palavra secreta, renomear variáveis e funções para deixa-las
mais apresentáveis.
*/
let erros =0;
let acertos = 0;
let acertou = null;
let palavraSecreta = ["BABY"];
let letrasDigitadas = [];
let palavraEscolhida = [];
let novaPalavra = document.querySelector("#input-nova-palavra");
let letraEscolhida = document.querySelector("#palavra-text");
let buttonAdicionarPalavra = document.querySelector("#nova-palavra");
let btnPalavra = document.querySelector("#btnPalavra");
let btnSortearPalavra = document.querySelector("#btn-sortear");
let span = document.querySelector('span');
let listContainer = document.querySelector('p');
let btnLimparLista = document.querySelector("#btn-limpar-lista");
let seletorEspaco = document.getElementById("container");
let entradaLetra = document.getElementById('letra-text');
let vitoria = document.getElementById('vitoria');
let derrota = document.getElementById('derrota');
let btnReiniciarPartida = document.getElementById('btnPerdeu');
let containerTracinhos = document.getElementById('container-tracinhos');
/*Organizar todos os addeventList , depois funções externas , nessa ordem */
btnSortearPalavra.addEventListener("click", function(){ 
  escolhaPalavraSecreta();
   sortearPalavra();
});
buttonAdicionarPalavra.addEventListener("click",function(){
  adicionarPalavra(novaPalavra.value);
});
btnLimparLista.addEventListener("click",function(){
  palavraSecreta = [];
  span.textContent = palavraSecreta.length;
});
btnPalavra.addEventListener("click", function(){
  validarPalavra(); 
  letrasDigitadas.push(entradaLetra.value);
  entradaLetra.value = '';
});
btnReiniciarPartida.addEventListener("click", function(){
  document.location.reload(true);
});
entradaLetra.addEventListener('input',function() {
  let entradaTextMaiusculo =entradaLetra.value.toUpperCase();
  entradaLetra.value = entradaTextMaiusculo.replace(/[^a-z ]/gi,'');
});
function adicionarPalavra(palavra){
  palavraSecreta.push(palavra.toUpperCase());
  palavraSecreta.forEach(function(p){
    span.textContent = palavraSecreta.length;
  })
}

/* Adicionar um eventListen ou trabalhar os existentes para desabilitar o botão que
começa o jogo. Pensar em disable com setAttribute ou semelhantes*/
/*Limpar o input depois de cada input 
1º - Limpar o input depois de cada entrada.
2º -  Capturar o valor da entrada e utilizar createTextNode para escreve-lá na tela.
3º - Criar um elemento no HTML abaixo do canvas para escrever essas letras.
OBS: Pós a letra errada ser inserida e escrita na tela, tendo como validação, se a letra está
presenta na palavra escolhida, desabilitar essa letra para entrada futuras.
*/
function escolhaPalavraSecreta(){
  palavraEscolhida = palavraSecreta[Math.floor(Math.random() * palavraSecreta.length)]; 
}

/*Comentar toda essa função , ou seja, documentar o a cada etapa da função e Retirar todos os consoles
logs */
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
  console.log(palavraEscolhida + " " + "Palavra ESCOLHIDA"); 
}
/*Documentar o que cada linha de código esta fazendo na função abaixo:
 */
function validarPalavra(){
 let elementoP = document.querySelector(".container-space"); 
 let entradaUsuario = entradaLetra.value;
 //letrasDigitadas.push(entradaUsuario);
for(let i=0;i < palavraEscolhida.length;i++){
   if(palavraEscolhida[i] ===entradaUsuario){
    acertou = true;      
    console.log(acertos);
    console.log(palavraEscolhida.length); 
    elementoP.children[i].style.display = 'block';
    acertos++;
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



