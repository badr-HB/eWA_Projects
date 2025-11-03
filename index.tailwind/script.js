function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
}

function check() {
    const email = document.getElementById('email').value;
    const changecolor = document.getElementById('email');
    const Password = document.getElementById('Password').value;
    const changecolorpass = document.getElementById('Password');
    if (isValidEmail(email) == false) {
        changecolor.style.borderColor = 'red';
        changecolor.style.backgroundColor = 'red';
    }
    else {
        changecolor.removeAttribute('style');
    }

    if (Password.length != 8) {
        changecolorpass.style.borderColor = 'red';
        changecolorpass.style.backgroundColor = 'red';
    }
    else {
        changecolorpass.removeAttribute('style');        
    }

}