
function validarEmail() {

let usuario = email.value.substring(0, email.value.indexOf("@"));
let dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
  
  
if ((usuario.length >=1) && (usuario.length <=32) && (dominio.length >=1) && (dominio.length <=16) ) {
      document.getElementById('erro-email').innerHTML= "";
    }
      else{
      document.getElementById('erro-email').innerHTML="Dados Inválidos";
      document.getElementById('email').focus();
      return;
      }   
    }

function validarDados(){

  let mensagem= document.getElementById('mensagem').value;
  let usuario = email.value.substring(0, email.value.indexOf("@"));

    if(mensagem == ""){
      document.getElementById('erro-mensagem').innerHTML = "Dados inválidos";
      document.getElementById('mensagem').focus();
      return;
      }else{
        document.getElementById('erro-mensagem').innerHTML = `Obrigado pelo contato, ${usuario}!`;
        }
        
    }