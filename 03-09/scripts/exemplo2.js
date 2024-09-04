let sexo = document.getElementsByName("sexo");

function verificaMarca() {
    let marcado = false;
    sexo.forEach(s => {
        if(s.checked){
            marcado = true;
        }
    });
    return marcado;
}

let form = document.getElementsByTagName("form");
form.onsubmit =  function(){
    return verificaMarca();
};