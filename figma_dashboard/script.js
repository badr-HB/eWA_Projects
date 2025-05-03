changed = false

function ChangeColor() {

    if (changed) {
        location.reload()
    }
    else {
        document.body.style.backgroundColor = '#2A2A2A';
        document.querySelector('.ImgLogo').src = './images/SnowUI Logo (1).png'
        const img = document.querySelectorAll('.IconImages')
        img.forEach(function (photo) {
            photo.src = './images/Icon (2).png';
        });
        document.documentElement.style.setProperty('--text-color-light-mode', 'white');
        document.documentElement.style.setProperty('--darker-border-color', '#2A2A2A');
        document.documentElement.style.setProperty('--lighter-border-color', '#FFFFFF1A');
        document.documentElement.style.setProperty('--every-border-backgroundColor', '#FFFFFF66')
        document.documentElement.style.setProperty('--whole-section-color', '#0000001A')
        document.documentElement.style.setProperty('--project-section-title-colors', '#FFFFFF66')
        const text = document.querySelector('.text_png')
        text.src = './images/Text (1).png'
        const Vector = document.getElementById('VectorIcon');
        Vector.src = './images/Icon (3).png'
        const icons = document.querySelectorAll('#ManagersIcons');
        icons.forEach(function (pics) {
            pics.src = './images/Icon (4).png'
        });
        document.querySelector('.SnowUI').style.color = '#FFFFFF66';
        document.documentElement.style.setProperty('--inprogress', '#4B0082');
        document.documentElement.style.setProperty('--complete', '#006400')
        document.documentElement.style.setProperty('--pending', '#00008B')
        document.documentElement.style.setProperty('--Approved', '#B8860B')
        document.documentElement.style.setProperty('--Rejected', 'black')
        document.documentElement.style.setProperty('--blue-countaine', 'linear-gradient(180deg,#3399FF,#5DADE2)')
        document.documentElement.style.setProperty('--black-countainer', 'linear-gradient(180deg,#2B2B2B,#555555)')
        document.getElementById('icon1').src = './images/Cellular Connection (1).png'
        document.getElementById('icon2').src = './images/Wifi (1).png'
        document.getElementById('icon3').src = './images/Battery (1).png'
        changed = true
    }
}