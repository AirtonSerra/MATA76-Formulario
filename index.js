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

function validatephone() {
    var celular = document.getElementById("celular").value;
    var celularvalidate = document.getElementById("celularvalidate");

    if(celular.trim() == ""){
        celularvalidate.innerText = "É preciso inserir um número de celular";
        celularvalidate.style.display = "block";
        return false;
    }

    celular = celular.replace("(", "");
    celular = celular.replace(")", "");
    celular = celular.replace("-", "");
    if(celular == ""){
        celularvalidate.innerText = "É preciso inserir um número de celular";
        celularvalidate.style.display = "block";
        return false;
    }
    let validddd = false;
    for(let i=0; i<ddds[celular[0] - 1].length; i++){
        if(celular[1] == ddds[celular[0] - 1][i]) validddd = true;
    }
    if(!validddd){
        celularvalidate.innerText = "Insira um DDD válido";
        celularvalidate.style.display = "block";
        return false;
    }
    celularvalidate.style.display = "none";
    return true;
}

function validatepassword(){
    var password = document.getElementById("password").value;
    var passwordvalidate = document.getElementById("senhavalidate");

    if(password.trim() == ""){
        passwordvalidate.innerHTML = "É preciso inserir uma senha";
        passwordvalidate.style.display = "block";
        return false;
    }
    if(password.length < 8){
        passwordvalidate.innerHTML = "A senha precisa ter no mínimo 8 caracteres";
        passwordvalidate.style.display = "block";
        return false;
    }
    passwordvalidate.style.display = "none";
    return true;
}

function matchpasswords(){

    if(!validatepassword()){
        return false;
    }

    let password = document.getElementById("password").value;
    let passwordconfirm = document.getElementById("passwordconfirm").value;
    let passworderror = document.getElementById("passworderror");
    
    if(passwordconfirm.trim() == ""){
        passworderror.style.display = "none";
        return false;
    }
    else{
        if(password.localeCompare(passwordconfirm) == 0){
            passworderror.style.display = "none";
            return true;
        }else{
            passworderror.style.display = "block";
            return false;
        }
    }

}

function validatesex(){
    var sexos = document.getElementsByName("sexo");
    var sexovalidate = document.getElementById("sexvalidate");
    let escolheusexo = false;
    for(let i=0; i<sexos.length; i++){
        if(sexos[i].checked) {
            escolheusexo = true; 
            break;
        }
    }
    if(!escolheusexo){
        sexovalidate.style.display = "block";
        return false;
    }
    sexovalidate.style.display = "none";
    return true;
}

function validatecourse(){
    var curso = document.getElementById("curso").value;
    var cursovalidate = document.getElementById("coursevalidate");
    if(curso != "null"){
        cursovalidate.style.display = "none";
        return true;
    }
    else{
        cursovalidate.style.display = "block";
        return false;
    }
}

function validatename(){
    var nome = document.getElementById("nome").value;
    var nomevalidate = document.getElementById('nomevalidate');
    if(nome.trim() != ""){
        nomevalidate.style.display = "none";
        return true;
    }
    else{
        nomevalidate.style.display = "block";
        return false;
    }
}

function validatedata(event) {
    let valid = true;
    valid &= validatename();
    valid &= validatephone();
    valid &= matchpasswords();
    valid &= validatesex();
    valid &= validatecourse();

    localStorage["nome"] = document.getElementById("nome").value;
    localStorage["celular"] = document.getElementById("celular").value;
    var sexos = document.getElementsByName("sexo");
    console.log(sexos);
    for(let i=0; i<sexos.length; i++){
        if(sexos[i].checked) {
            localStorage["sexo"] = sexos[i].labels[0].innerHTML; 
            break;
        }
    }
    var cursos = document.getElementById("curso");
    console.log(cursos);
    localStorage["curso"] = cursos[cursos.selectedIndex].innerHTML; 
    
    if(!valid) alert("Verifique os campos e submeta o cadastro novamente!");
    else window.location.href = "./form_response.html";

    event.preventDefault();
    return valid;
}

function cleanallfields(){
    var nome = document.getElementById("nome");
    var celular = document.getElementById("celular");
    var password = document.getElementById("password");
    var passwordconfirm = document.getElementById("passwordconfirm");
    var sexos = document.getElementsByName("sexo");
    var curso = document.getElementById("curso");

    nome.innerHTML = "";
    celular.innerHTML = "";
    password.innerHTML = "";
    passwordconfirm.innerHTML = "";

    for(let i=0; i<sexos.length; i++){
        sexos[i].checked = false;
    }

    curso.value = "null";

    var nomevalidate = document.getElementById('nomevalidate');
    var celularvalidate = document.getElementById("celularvalidate");
    var passwordvalidate = document.getElementById("senhavalidate");
    var passworderror = document.getElementById("passworderror");
    var sexovalidate = document.getElementById("sexvalidate");
    var cursovalidate = document.getElementById("coursevalidate");

    nomevalidate.style.display = "none";
    celularvalidate.style.display = "none";
    passwordvalidate.style.display = "none";
    passworderror.style.display = "none";
    sexovalidate.style.display = "none";
    cursovalidate.style.display = "none";
}
