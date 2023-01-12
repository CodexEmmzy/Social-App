var settingsmenu = document.querySelector('.setiting-menu')
var darkBtn = document.getElementById('dark-btn')
var darkScheame = document.getElementById('dark-schem')

function settingsMenuToggle() {
    settingsmenu.classList.toggle('setiting-menu-height')
}
darkBtn.onclick = function () {
    darkBtn.classList.toggle('dark-btn-on')
    document.body.classList.toggle('dark-theme')
    darkScheame.classList.toggle('dark-md')

    if(localStorage.getItem('theme') == 'light'){
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.setItem('theme', 'light')
    }
}

if(localStorage.getItem('theme') == 'light') {
    darkBtn.classList.remove('dark-btn-on')
    darkScheame.classList.remove('dark-md')
    document.body.classList.remove('dark-theme')
} else if(localStorage.getItem('theme') == 'dark'){
    darkBtn.classList.add('dark-btn-on')
    document.body.classList.add('dark-theme')
    darkScheame.classList.add('dark-md')
} else {
    localStorage.setItem('theme', 'light')
}

localStorage.setItem('theme', 'dark')
localStorage.getItem('theme')