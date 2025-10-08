function validation() {
    const pass = document.getElementById('password').value;
    const changecolor = document.getElementById('password');
    const email = document.getElementById('email').value;
    const changecoloremail = document.getElementById('email');
    if (pass == "") {
        changecolor.style.borderColor = 'red';
    }
    else
        changecolor.removeAttribute('style');

    if(validateEmail(email)){
        changecoloremail.removeAttribute('style');
    }
    else{
        changecoloremail.style.borderColor = 'red';
    }

}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}