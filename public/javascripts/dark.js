const btnSwitch = document.querySelector('#switch');
const btnSwitchm = document.querySelector('#switchm');
const btnSun = document.querySelector('#sun');
const btnSunm = document.querySelector('#sunm');

btnSwitch.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    document.getElementById('switch-li').style.display = "none";
    document.getElementById('switch').style.display = "none";
    document.getElementById('sun').style.display = "block";
    document.getElementById('sun-li').style.display = "block";

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

btnSun.addEventListener('click', function() {
    document.body.classList.remove('dark');
    document.getElementById('switch-li').style.display = "block";
    document.getElementById('switch').style.display = "block";
    document.getElementById('sun').style.display = "none";
    document.getElementById('sun-li').style.display = "none";

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});


btnSwitchm.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    document.getElementById('switch-lim').style.display = "none";
    document.getElementById('switchm').style.display = "none";
    document.getElementById('sunm').style.display = "block";
    document.getElementById('sun-lim').style.display = "block";

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

btnSunm.addEventListener('click', function() {
    document.body.classList.remove('dark');
    document.getElementById('switch-lim').style.display = "block";
    document.getElementById('switchm').style.display = "block";
    document.getElementById('sunm').style.display = "none";
    document.getElementById('sun-lim').style.display = "none";

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});


if (localStorage.getItem('dark-mode') === "true") {
    document.body.classList.add('dark');

    document.getElementById('switch-li').style.display = "none";
    document.getElementById('switch').style.display = "none";
    document.getElementById('sun').style.display = "block";
    document.getElementById('sun-li').style.display = "block";

    document.getElementById('switch-lim').style.display = "none";
    document.getElementById('switchm').style.display = "none";
    document.getElementById('sunm').style.display = "block";
    document.getElementById('sun-lim').style.display = "block";
} else {
    document.body.classList.remove('dark');

    document.getElementById('switch-li').style.display = "block";
    document.getElementById('switch').style.display = "block";
    document.getElementById('sun').style.display = "none";
    document.getElementById('sun-li').style.display = "none";

    document.getElementById('switch-lim').style.display = "block";
    document.getElementById('switchm').style.display = "block";
    document.getElementById('sunm').style.display = "none";
    document.getElementById('sun-lim').style.display = "none";
}