function getAphone() {
  const button = document.querySelector(
    ".presentation__up-contects-telephon > i"
  );
  const blockWithPhone = document.querySelector(".conteiner-phone");
  button.addEventListener("click", function () {
    blockWithPhone.classList.toggle("add-animation-conteiner-phone");
  });
}
//--------------
function closeModal (){
  const modal = document.querySelector(".modal-widnow")
  modal.addEventListener("click", function(event){
    if(event.target === this){
      document.body.style.overflow = 'visible';
      this.innerHTML = "";
      this.classList.toggle("none");
    }
  })
}

//----------------validation---------------
function validateName(name) {
  const nameRegex = /^[a-zA-Zа-яА-Я]{2,}$/;
  return nameRegex.test(name.trim()); 
}
function validatePhone(phone) {
  const phoneRegex = /^(\+?380|0)\d{9}$/;
  return phoneRegex.test(phone.replace(/[\s-]/g, ''));
}
// function validateEmail(telegram) {
//   return /(?:^|\s)(?:https?:\/\/)?(?:www\.)?t\.me\/\w+|@\w+(?:\s|$)/.test(telegram);
// }
function validateText(text) {
  var textRegex = /^\s*$/;
  return !textRegex.test(text.trim());
}
function validateForm() {
  var isValid = true;
  var name = $('[name="name"]').val();
  if (!validateName(name)) {
      $('[name="name"]').css('border-color', 'red');
      isValid = false;
  } else {
      $('[name="name"]').css('border-color', '');
  }
  var phone = $('[name="phone"]').val();
  if (!validatePhone(phone)) {
      $('[name="phone"]').css('border-color', 'red');
      isValid = false;
  } else {
      $('[name="phone"]').css('border-color', '');
  }
  // var telegram = $('[name="telegram"]').val();
  // if (!validateEmail(telegram)) {
  //     $('[name="telegram"]').css('border-color', 'red');
  //     isValid = false;
  // } else {
  //     $('[name="telegram"]').css('border-color', '');
  // }
  var text = $('[name="text"]').val();
  if (!validateText(text)) {
      $('[name="text"]').css('border-color', 'red');
      isValid = false;
  } else {
      $('[name="text"]').css('border-color', '');
  }
  return isValid;
}