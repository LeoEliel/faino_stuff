function verificarSenha(){
    var s1 = document.getElementById("senha").value;
    var s2 = document.getElementById("confirmarsenha").value;
    if (s1 != s2){
        var msg = document.getElementById("mensagem");
        msg.innerHTML= "As senhas não conferem";
        msg.className= "alert alert-danger";
        return false;
    }
    return true;
}

function verNumCaracteres(){
    let nome = document.getElementById("nome");
    if(nome.legth <= 5){
        mensagem.textContent = "O nome deve ter mais de 5 caracteres."
        return false;
}
    toUperCase(nome.value)
    return true;
}

let form1 = document.getElementById("form1")

form1.onsubmit = function(event){
    //event.preventDefault();
    mensagem.textContent = "";
    let ok = false;
    ok = verificarSenha() && verNumCaracteres();
    return ok;
}