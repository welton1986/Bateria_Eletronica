
// Estou colocando um evento para toda vez que a tecla ser solta no body.
document.body.addEventListener('keyup', (event)=>{
    // Pegando a função (playSound), transformando os codigos das letras em minusculo.
    console.log(event.code);
});

function playSound(sound){
    let audioElement = document.querySelector('#'); 
}