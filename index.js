async function  buscaendereco(cep){
    var mensagemerro = document.getElementById('erro')
    mensagemerro.innerHTML = "";
    try{
        var consultacep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var resposta = await consultacep.json();
        if(resposta.erro){
            throw Error('cep não existe');
        }      

        var cidade = document.getElementById('cidade');
        var lagradouro = document.getElementById('endereco');
        var ddd = document.getElementById('ddd');
        var ibge = document.querySelector('#ibge');
        var bairro = document.getElementById('bairro');
        var estado = document.getElementById('uf');
      

        cidade.value = resposta.localidade;
        lagradouro.value = resposta.logradouro; 
        ddd.value = resposta.ddd;
        ibge.value = resposta.ibge;      
        bairro.value = resposta.bairro;
        estado.value = resposta.uf;
       
       

        console.log(resposta);
        return resposta;
    
    } catch (erro){
        mensagemerro.innerHTML = `<P>CEP invalido! digite o numero correto<p>`;
        console.log(erro);
    }

}
var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaendereco(cep.value));
