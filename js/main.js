'use strict';  //We will write strict javascript, helps the engine to be faster.

const firstname = document.querySelector("#firstnm");
const lastname = document.querySelector("#lastnm");
const phonenumber = document.querySelector("#phonenumber");
const password = document.querySelector("#password");
const postalcode = document.querySelector("#postalcode");
const email = document.querySelector("#email");
/*const submitbutton = document.querySelector("#submitbutton");*/

function checkForm(form) {

    let errors=[];

      if(firstname.value=='') {
      errors.push("Error: Enter first name \n");
      alert('Извините, но ввод имени обязателен!')
      return false;
  }

      if(lastname.value=='') {
      errors.push("Error: Enter last name \n");
      alert('Извините, но ввод фамилии обязателен!')
      return false;
  }

  let email_input=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
      if (!email_input.test(email.value)){
      errors.push("Error: Email should have '@' sign \n");
      alert('Email введен не верно!')
      return false;
    }

    let tel_input=/^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (!tel_input.test(phonenumber.value)){
      errors.push("Error: Phone number should contain country code eg.+358 1234556 \n");
      alert('Извините, но номер телефон введен не верно, введите пожалуйста номер телефона в формате +375ХХХХХХХХХ')
      return false;
    }

    let postalcode_input=/^[0-9]{6}?$/;
      if (postalcode.value != '' && !postalcode_input.test(postalcode.value)){
      errors.push("Error: Postcode should be 6 digit numbers \n");
      alert('Почтовый индекс должен иметь цифровое значение и состоять из 6 символов!')
      return false;
    }

    if(password.value=='') {
      errors.push("Error: Enter password \n");
      alert('Вы забыли ввести пароль, который является обязательным!')
      return false;
   }

    if(errors.length>0){
      let msg="ERRORS:\n";
      for(let i=0; i<errors.length; i++){
        msg+=errors[i];
        return false;
      }
      
      alert(msg);
    }

  return true;
}
