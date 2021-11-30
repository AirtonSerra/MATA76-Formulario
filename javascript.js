function ValidaNome(nome){
    var nm = nome.InnerHtml;
    var invalidnome = document.getElementById('valnome');
    if(nm.length < 1 || nm.trim().length < 1){  
        invalidnome.style.display = "inherit";
        return false;
    }
    else{
        invalidnome.style.display = "none";
        return true;
    }
}

function ValidaTel(telefone){
    var tel = telefone.InnerHtml;
    var invalidtel = document.getElementById('valtelefone');
    var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{7})|(9[0-9]{8}))$'); 

    if(regex.test(tel)){
        invalidtel.style.display = "inherit";
        return false;
    }
    else{
        invalidtel.style.display = "none";
        return true;
    } 
}

function ValidaCel(celular){
    var cel = celular.InnerHtml;
    var invalidcel = document.getElementById('valcelular');
    var regex = new RegExp('^[1-9]{2}9?[0-9]{8}$'); 

    if(regex.test(cel)){
        invalidcel.style.display = "inherit";
        return false;
    }
    else{
        invalidcel.style.display = "none";
        return true;
    } 
}

function ValidaSenha(senha){
    var sen = senha.InnerHtml;
    var invalidsenha = document.getElementById('valsenha');
    if(sen.length < 1 || sen.trim().length < 1){  
        invalidsenha.style.display = "inherit";
        return false;
    }
    else{
        invalidsenha.style.display = "none";
        return true;
    }
}

function ValidaConfirmacaoSenha(confsenha){
    var senhaconf = confsenha.InnerHtml;
    var senha = document.getElementById('password');
    var invalidsenhaconf = document.getElementById('valconfirmacaosenha');
    if(senhaconf.length < 1 || senhaconf.trim().length < 1 || senhaconf != senha){  
        invalidsenhaconf.style.display = "inherit";
        return false;
    }
    else{
        invalidsenhaconf.style.display = "none";
        return true;
    }
}

function ValidaSexo(){
    var sexom = document.getElementById('sexoM');
    var sexof = document.getElementById('sexoF');
    var sexoo = document.getElementById('sexoO');

    if(sexom.checked || sexof.checked || sexoo.checked){
        return true;
    }
    else{
        alert("O campo Sexo precisa ser preenchido!");
    }
}

function ValidaCurso(){
    var curso = document.getElementsByClassName('options');
    
}

function Enviar(){
    var nome = ValidaNome(document.getElementById('nome'));
    var telefone = ValidaTel(document.getElementById('telefone'));
    var celular = ValidaCel(document.getElementById('celular'));
    var password = ValidaSenha(document.getElementById('password'));
    var confirmpassword = ValidaConfirmacaoSenha(document.getElementById('confirmpassword'));
    var sexo = ValidaSexo();
    var curso = ValidaCurso();

    if(nome && telefone && celular && password && confirmpassword && sexo && curso){
        alert("Registro concluído com sucesso!");
    }
    else{
        alert("Existem campos inválidos ou não preenchidos!");
    }
}


function ResetaCampos(){
    
}