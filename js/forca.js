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
let btnOk = document.querySelector("#btnPalavra");
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
let erroEmpty = document.getElementById('error-empty');
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
btnOk.addEventListener("click", function(){
  if(palavraEscolhida.length <=0){
    erroEmpty.textContent = 'Você deve sortear uma palavra primeiro!';
    setTimeout(function(){
      erroEmpty.textContent = '';
    },3000);
  }
  else if(validarEntradaTexto()){
    validarPalavra(); 
    letrasDigitadas.push(entradaLetra.value);
    entradaLetra.value = '';
  }
  else{
    erroEmpty.textContent = 'Esse campo não pode ficar vazio!';
    setTimeout(function(){
      erroEmpty.textContent = '';
    },3000);
    return;    
  }
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
function escolhaPalavraSecreta(){ // Função que sorteia a palavraSecreta e atribui ao array palavraEscolhida
  palavraEscolhida = palavraSecreta[Math.floor(Math.random() * palavraSecreta.length)]; // atribui a apalvraEscolhida a palavra sorteada 
}

/*Comentar toda essa função , ou seja, documentar o a cada etapa da função e Retirar todos os consoles
logs */
function sortearPalavra(){  // função que cria dinâmicamente com DOM , a depender do tamanho da palavra escolhida e mostra traços ou a letra , se for correta , de acordo com palavra escolhida
  let letrasSplit = palavraEscolhida.split('');  // cria variavel letrasSplit e atribui a ela a palavra palavraEscolhida "splitada", ou seja, divite a palavra em um array de letras da palavraEscolhida;
  for(let w=0;w<palavraEscolhida.length;w++){ // laço for para verifica percorrer de acordo com tamanho da palavraEscolhida;
    let tracinhos = document.createElement("span"); // atribui a variável tracinho o objeto span determinado pelo DOM;
    tracinhos.setAttribute("ID","mostrar-tracinhos"); // tracinho e atribui a ele o ID: mostrar tracinhos , que esta no CSS, para que seja mostrado os traços de acordo com tamanho da palavra escolhida.
    let container = document.createElement("p"); //atribui a variável container a criação de um elemento p, atraves do DOM;
    let innetSplit = document.createTextNode(letrasSplit[w]); // aqui criamos através do DOM as letrasSplit, e atribuimos a variavel declarada innetSplit ou seja da palavra escolhida, escreve a palavra escolhida e percorre ela de acordo com seu tamanho, logo mostrará a palavra escolhida;
    container.setAttribute("ID","list-container");  // atribuimos ao container o ID list container, de define o comportamento desse container de acordo com nosso CSS
    seletorEspaco.appendChild(container); // aqui, adicionamos o container ao seletor de espaço, ou seja como filho dele.(que esta contido nele);
    container.appendChild(innetSplit);  // adicionaos as letras "Splitadas" no container como filho, ou seja que esta contida nele;
    containerTracinhos.appendChild(tracinhos); // no container dos tracinhos adicionados como filho, de fato , ou tracinhos com tamanho ta palavra escolhida;
  }
  console.log(palavraEscolhida + " " + "Palavra ESCOLHIDA"); 
}
/*Documentar o que cada linha de código esta fazendo na função abaixo:
 */
function validarPalavra(){
 let elementoP = document.querySelector(".container-space"); // cria a variável elementoP , que é o container dos espaços
 let entradaUsuario = entradaLetra.value; // cria variavel entradaUsuario com a letra digitada pelo usuario(o valor dela); 
 //letrasDigitadas.push(entradaUsuario);
for(let i=0;i < palavraEscolhida.length;i++){ // cria um laço for , de acordo com tamanho da palavra(as letras da palavra escolhida);
   if(palavraEscolhida[i] ===entradaUsuario){ // se a palavra escolhida(a letra no momento do for), for igual a letra que o usuario digitar(ou seja veirifica se a letra que o usuario digitou está presente na palavra);
    acertou = true;     //se a condição acima for verdadeira, irá atribuir a variavel acertou a confição de verdadeira; 
    console.log(acertos);
    console.log(palavraEscolhida.length); 
    elementoP.children[i].style.display = 'block'; //aqui ele pega o elemento filho do container-spaço  e atribui a propriedade do seu css display:block, ou seja , para que aparece as letras, respeitando a condição principal do IF
    acertos++; //ele adiciona +1 toda vez que a condição for verdaira, logo, toda vez que a letra escolhida pelo usuario estiver condida na palavraEscolhida, ele irá adicionar +1, é necessário, pois precisamos validar se o usuario acertou todas as letras e comparar com a quantidade de letras contidas na palavra escolhida(Em outra função);
    validarVitoria();  //chama a função de validação, que verificar o contador de acertos e o compara com a quantidade de letras condidas na palavra escolhida.(toda vez que o usuario acertar a palavra ele irá validar se a quantidade de letras acertadas está igual a quantidade de letras da palavra escolhida); 
  }
  else if(!palavraEscolhida.includes(entradaUsuario)){ // se não tiver (!) incluida a letra dentro da palavra escolhida (condição)
    erros++; // Adiciona +1 no contador de erros, é necessário pois precisamos contabilizar o números de erros para determinar se o usuário perdeu o jogo;(10 no total)
    shapes(); // cade vez que o usuario errar a letra , ele irá desenhar um pedaço da forca;
    acertou = false;  //aqui atribuimos a variavel acertou como false, afinal, o usuario errou.
    return; // retorna à condicional sempre que o usuario errar a letra, para que uma nova verificação ocorra;
  }      
}
}
function validarVitoria(){ // valida se usuario ganhou a partida
  if(acertos === palavraEscolhida.length){ // verifica se a quantidade de acertos é igual a quantidade de letras na palavraEscolhida(ou secreta);
    vitoria.style.display = "block";  //se positivo, ao seletor vitoria, que corresponde a  ao span que mostra que o usuario ganhou;
  } 
}
function jogarNovamente(){ // reinicia , ou da um reload na pagína para que o usuario possa jogar novamente
  if(erros >= 10){ // verifica se o usuario perdeu o jogo, 
    derrota.style.display = "block";    //se possitivo, apresenta a mensagem de jogador perdeu através da mudança do atributo css display:block do span;
  }
}
function validarEntradaTexto(){ // valida entrada de texto do usuario
  if(entradaLetra.value.length >0 ){ // se usuario  digitar alguma letra
    return true; // retorna verdadeiro
  }
  else{ // caso contrário
    return false; //retorna falso
  }
}




