const ddds = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 4,          7, 8   ],
    [1, 2, 3, 4, 5,    7, 8   ],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1,    3, 4, 5            ],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1,    3, 4, 5,    7,    9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
];

function maskphone(event) {
    let input = document.getElementById("celular");
    let cursorposition = input.selectionStart;
    if("0123456789".includes(event.key)){
        switch(cursorposition){
            case 0:
                if(event.key == "0") {event.preventDefault();  false}
                input.value = "(";
            break;
            case 2:
                let okdigit = false;
                for(let i=0; i<ddds[input.value.slice(-1) -1].length; i++){
                    if(event.key == ddds[input.value.slice(-1) - 1][i]) {
                        okdigit = true;
                    }
                }
                if(!okdigit) {event.preventDefault();  false}
            break;
            case 3: 
                input.value = input.value.slice(0,3) + ")" + input.value.slice(3);
            break;
            case 9:
                input.value = input.value.slice(0,9) + "-" + input.value.slice(9);
            break;
        }
    }else{
        if(event.key != "Backspace"){
            event.preventDefault();
        }else{
            if(cursorposition < 5){
                input.value = ""
            }
        }
    }
}

function matchpasswords(){
    let password = document.getElementById("password").value;
    let passwordconfirm = document.getElementById("passwordconfirm").value;
    let passworderror = document.getElementById("passworderror");
    
    if(password != ""){
        if(passwordconfirm == ""){
            passworderror.style.display = "none";
        }else{
            if(password.localeCompare(passwordconfirm) == 0){
                passworderror.style.display = "none";
            }else{
                passworderror.style.display = "block";
            }
        }
    }
}

function validatename() {
    nome = document.getElementById("nome").value;
    if(nome == ""){
        alert("Digite seu nome completo");
        return false;
    }
    return true;
}

function validatephone() {
    celular = document.getElementById("celular").value;
    celular = celular.replace("(", "");
    celular = celular.replace(")", "");
    celular = celular.replace("-", "");
    if(celular == ""){
        alert("Insira seu número de celular");
        return false;
    }
    let validddd = false;
    for(let i=0; i<ddds[celular[0] - 1].length; i++){
        if(celular[1] == ddds[celular[0] - 1][i]) validddd = true;
    }
    if(!validddd){
        alert("Insira um ddd válido");
        return false;
    }
    return true;
}

function validatepassword(){
    password = document.getElementById("password").value;
    passwordconfirm = document.getElementById("passwordconfirm").value;
    if(password == ""){
        alert("É preciso criar uma senha");
        return false;
    }
    if(passwordconfirm == ""){
        alert("É preciso confirmar sua senha");
        return false;
    }
    if(password.length < 8){
        alert("A senha precisa ter no mínimo 8 caracteres");
        return false;
    }
    if(password.localeCompare(passwordconfirm) != 0){
        alert("As senhas informadas não são iguais");
        return false;
    }
    return true;
}

function validatesex(){
    sexos = document.getElementsByName("sexo");
    let escolheusexo = false;
    for(let i=0; i<sexos.length; i++){
        if(sexos[i].checked) {
            escolheusexo = true; 
            break;
        }
    }
    if(!escolheusexo){
        alert("Informe seu sexo");
        return false;
    }
    return true;
}

function validatecourse(){
    curso = document.getElementById("curso").value;
    return true;
}


function validatedata(event) {
    let valid = true;
    valid &= validatename();
    valid &= validatephone();
    valid &= validatepassword();
    valid &= validatesex();
    valid &= validatecourse();
    if(!valid) event.preventDefault();
    return valid;
}
