/*
async function buscaCep() {
    const cep = document.getElementById("input-cep").value
    const ht = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    const json = await ht.json();

    document.getElementById("bairro").innerHTML = json.bairro
    document.getElementById("rua").innerHTML = json.logradouro
    document.getElementById("cidade").innerHTML = json.localidade
    console.log(json);
}
document.getElementById("botao").addEventListener("click", buscaCep)
*/
async function buscaCep() {
    const cep = document.getElementById("input-cep").value;
    const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    console.log(response);
    const json = await response.json();
    console.log(json);
    document.getElementById('cidade').innerHTML = json.localidade;
    document.getElementById('bairro').innerHTML = json.bairro;
    document.getElementById('rua').innerHTML = json.logradouro;
}
document.getElementById('botao').addEventListener('click', buscaCep);