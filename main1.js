const form=document.getElementById('form-numero');
let variavelA = document.getElementById("idA").value;
let variavelB = document.getElementById("idB").value;
let formvalid=false;


function numeroValido(variavelA,variavelB){
    return variavelB > variavelA;
}

function limpar(variavelA, variavelB ){
    document.getElementById(variavelA).value="";
    document.getElementById(variavelB).value="";
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    const variavelSucesso = document.querySelector(".mensagem-suesso");
    const variavelErro = document.querySelector(".error-menseger2");
    
    formvalid = numeroValido(parseInt(variavelA.value), parseInt(variavelB.value));
    
    if(formvalid){
        variavelSucesso.style.display = "block";
        variavelErro.style.display = "none";

        variavelA.value="";
        variavelB.value="";

    }else{
        
        variavelSucesso.style.display = "none";
        variavelErro.style.display = "block";

        variavelA.value="";
        variavelB.value="";

    

    }
});

console.log(form)
