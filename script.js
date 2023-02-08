const form =document.getElementsByClassName('container')[0];
 const username= document.getElementsByClassName('username')[0];
 const email= document.getElementsByClassName('email')[0];
 const password= document.getElementsByClassName('password')[0];
 const confirmpassword= document.getElementsByClassName('confirm-password')[0];

  const fields = [username,email,password,confirmpassword]

  function checkMinMax(targetField,min,max){
    const usernameField= targetField.querySelector('input');
    if(usernameField.value.length >= min && usernameField.value.length<=max){
        return true;
    }
    return false;
 }

 function isInputGiven(targetField){
    const textField= targetField.querySelector('input');
     if(textField.value !== ""){
         return true;
     }
    return false;
 }

 function isConfirmPasswordSame(passwordField,confirmpasswordField){
    const textPasswordField = passwordField.querySelector('input')
    const textConfirmPasswordField = confirmpasswordField.querySelector('input')
    if(textPasswordField.value === textConfirmPasswordField.value){
        return true;
    }
    return false;
 }

 function hideErrors(){
    fields.forEach((field)=>{
        const fieldRef = field.querySelector('.onError')
        fieldRef.innerText="";

    })
 }

 const minUsername=4;
 const maxUsername=10;

 const minPassword=4;
 const maxPassword=10;

function validateFields(){
     
    for(let i=0;i<fields.length;i++){
        const field = fields[i];
        if(!isInputGiven(field)){
            const fieldname = field.querySelector('.fieldname')
            const errorField = field.querySelector('.onError')
            errorField.innerText =`please enter ${fieldname.innerText}`; 
            return;
           } 
    }

    if(!checkMinMax(username,minUsername,maxUsername)){
        const errorField =username.querySelector('.onError');
        errorField.innerText =`Username should be in between ${minUsername} and ${maxUsername}`
       return;
    }
    if(!checkMinMax(password,minPassword,maxPassword)){
        const errorField =password.querySelector('.onError');
        errorField.innerText =`Password should be in between ${minPassword} and ${maxPassword}`
      return;
    }
    if(!checkMinMax(confirmpassword,minPassword,maxPassword)){
        const errorField =confirmpassword.querySelector('.onError');
        errorField.innerText =`Confirmed Password should be in between ${minPassword} and ${maxPassword}`
      return;
    }
    const passwordText = password.querySelector('input');
    const confirmPasswordText = confirmpassword.querySelector('input');

    if(passwordText.value!==confirmPasswordText.value){
        const errorField =confirmpassword.querySelector('.onError');
        errorField.innerText ="Password and confirmed Password should se same"
    }
       
}
 
 


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    hideErrors();
    validateFields();
});