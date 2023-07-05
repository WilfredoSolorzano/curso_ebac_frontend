const form=document.getElementById('form-numero');
let campA=parseInt(document.getElementById('forA').value);
let campB=parseInt(document.getElementById('forB').value);
let formvalid=false;


function numeroValido(campA,campB){
    return campB>campA;
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    const mensageSucesso = 'formulario enviado! verificado: <b>campo A</b> es menor que <b>campo B</b>';
    const mensageError= document.querySelector('.error-menseger2')
    formvalid=numeroValido(forA,forB);
    if(formvalid){
        const chamdamensagensucess=document.querySelector('.mensagem-suesso');
        chamdamensagensucess.innerHTML= mensagesucesso;
        chamdamensagensucess.getElementsByClassName.display='block';

        campA.value ='';
        campB.value ='';

    }else{
        document.querySelector('error-menseger2');
    }
});

console.log(form)