/*
Código de validação de formulário de login
*/
function Validar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;
    let name  = document.getElementById('name').value;
    let date  = document.getElementById('date').value;
    let fone = document.getElementById('fone').value;
    let cpf = document.getElementById('cpf').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let cep = document.getElementById('cep').value;
    let cidade = document.getElementById('cidade').value;
    let bairro = document.getElementById('bairro').value;
    let estado = document.getElementById('estado').value;
    let complemento = document.getElementById('complemento').value;
    
// || !cpf || !rua || !numero || !cep || cidade || !bairro || !estado || !complemento

    if(!email || !senha || !name || !date || !fone || !cpf || !rua || !numero || !cep || cidade || !bairro || !estado || !complemento){
        alert("Campos de preenchimento obrigatório. Favor preecher");
    }else{
        alert("Campos preechidos com sucesso!");
    }
}