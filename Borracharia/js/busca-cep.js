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
    const json = await response.json();
    let rua = json.logradouro;
    let bairro = json.bairro;
    let cidade = json.localidade;
    let uf = json.uf;
    document.getElementById('rua-input').innerHTML = `${rua}, ${bairro} - ${cidade} - ${uf}`;



    if (cep >= 89010000 && cep <= 89099999) {
        document.getElementById('response-true').innerHTML = `Que bom! Nós temos uma filial em ${json.localidade} c:`;
    } else {
        document.getElementById('response-false').innerHTML = "Ainda não temos uma filial na sua cidade :c";
    }

    /*

    89010000
    89100000

    document.getElementById('rua-input').innerHTML = json.logradouro;
    document.getElementById('bairro-input').innerHTML = json.bairro;
    document.getElementById('cidade-input').innerHTML = json.localidade;*/
}
document.getElementById('searchbtn').addEventListener('click', buscaCep);