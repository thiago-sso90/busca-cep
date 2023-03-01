async function buscaendereco() {
    try {
        var consultacep = fetch('viacep.com.br/ws/01001000/json/')
        var consultacepresposta = await consultacep.json();

        console.log(consultacepresposta);
    } catch (erro) {
        console.log(erro);
    }
}


let ceps = ['01001000','01001000'];
let conjuntoceps = ceps.map(valores => buscaendereco(valores));
Promise.all(conjuntoceps).then(resposta => console.log(resposta));

