async function buscaCep() {
    const cep = document.getElementById("input-cep").value
    const ht = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    const json = await ht.json();

    document.getElementById("bairro").innerHTML = json.bairro
    document.getElementById("rua").innerHTML = json.logradouro
    document.getElementById("cidade").innerHTML = json.localidade

}
document.getElementById("botao").addEventListener("click", buscaCep)