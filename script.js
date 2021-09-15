
// Estou colocando um evento para toda vez que a tecla ser solta no body.
document.body.addEventListener('keyup', (event)=>{
    // Pegando a função (playSound), transformando os codigos das letras em minusculo.
    playSound(event.code.toLowerCase());
});

// Aqui estou criando uma função de clique , paraquando clicar no botão , executar algo.
document.querySelector('.composer button').addEventListener('click', ()=>{
    // aqui criei a variavel para pegar o valor que foi digitado dentro de "input".
    let song = document.querySelector('#input').value;
    //Aqui temos a condição , se for diferente de vazio então, transformar em um Array.
    if (song !== ''){
        let songArray = song.split('');
        // mandando o array para a função criada.
        playComposition(songArray);
        
    }
})

// Selecionando  o Id desejado dinamicamente com Type string e jogando o parametro "Sound".
function playSound(sound){
    // Aqui estou colocando uma condição , se encontrar (audioElement), entao toca o som relacionado a tecla.
    let audioElement = document.querySelector(`#s_${sound}`); 
    // Aqui estou criando a variavel que esta setando o elemento para mostrar na tela qual esta sendo tocado .
    let keyElement = document.querySelector(`div[data-key ="${sound}"]`);
    // Aqui tem uma condição , se achar (audioElement), tocar play.
    if (audioElement){
        // Aqui estou pegando a variavel e assim que tocar e quando eu der play novamente , ela ira retornar o som para o zero , podendo tocar ritmos mais acelerados.
        audioElement.currentTime = 0;
        audioElement.play();
    }
    // Aqui tambem tem uma condição , se achar o elemento entao adiciona a class.
    if (keyElement){
        keyElement.classList.add('active');
        // Aqui estou criando uma função de tempo , e depois de 300 milesegundos ira remover o "active".
        setTimeout(()=>{
            keyElement.classList.remove('active');
        },300);
    }

}  

// criando a função para fazer um loop dentro do array e pegando cada item e tocando.
function playComposition(songArray) {
    let wait = 0;
    // Aqui dentro do for criamos um setTimeOut , para cada vez que tocar um item ele espere 250 milessegundos.
    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`numpad${songItem}`);
        }, wait);

        wait += 400;
    }
}