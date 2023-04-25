/*
Código de validação de formulário de login
*/
function Validar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;
    let name  = document.getElementById('name').value;
    let dataNasc = document.getElementById('dataNasc').value;
    let fone = document.getElementById('fone').value;
    let cpf = document.getElementById('CPF').value;
    let rua = document.getElementById('rua').value;
    

    if(!email || !senha || !name || !dataNasc || !fone || !cpf || !rua){
        alert("Campos de preenchimento obrigatório. Favor preecher");
        
    }else{
        alert("Campos preechidos com sucesso!");
    }
}