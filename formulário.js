
    const name = document.querySelector('.Nome').value
    const nickName = document.querySelector('.NickName').value
    const email = document.querySelector('.Email').value;
    const password = document.getElementById('senha').value;
    const form = document.querySelector('.form')


    form.addEventListener('submit', (event)=>{
   
    event.preventDefault()

    console.log(name)


    //condição Nome
    const nameNum = name.length
   if(name.length===0){
      alert('Insira o seu nome.');
    }else if(nameNum<5){
        alert('É necessario um nome com 5 ou mais caracteres.')
   
    }
    //Condição Nickname
   if(nickName.length===0){
      alert('Insira o seu NickNmae.');
    }else if(nickName.length<5){
        alert('É necessario um NickName com 5 ou mais caracteres.')
    }
    //condicional email
    if(email.length===0 && !validaEmail(email.value)){
        alert('Email incorreto')
 }


    //condicional senha

    if(password.length===0){
        alert('Senha em branco')
   
    }else if(password.length<8)
    alert('Senha no mínimo de 8 caracteres')




})

//Verificar entendimento

function validaEmail(email){
    const emailRegex = new RegExp(

        /^[a-zA-Z0-9 ._-]+@[a-zA-Z0-9 ._-]+\.[a-zA-Z]{2,}$/
        );


        if(emailRegex.test(email)){
            return true
        }
        return false
    }