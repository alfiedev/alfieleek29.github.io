// Navigation
function openNav() {
    document.getElementById("sidepanel").style.width = "320px";
}

function closeNav() {
    document.getElementById("sidepanel").style.width = "0";
}

// Theme Switcher
const body = document.querySelector('body');
const toggle = document.querySelector('#toggle');

toggle.addEventListener('change', () => {
    body.classList.toggle('dark');
});

// Sticky Header
window.onscroll = function() {
    stickyHeader()
};

function stickyHeader() {
    var header = document.getElementById("header");
    var sticky = header.offsetTop;
    
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Billing Duration
function switchBillingDuration() {
    var checkBox = document.getElementById("checkbox");
    var month = document.getElementsByClassName("month");
    var year = document.getElementsByClassName("year");

    for (var i = 0; i < month.length; i++) {
        if (checkBox.checked == true) {
            month[i].style.display = "none";
            year[i].style.display = "block";
        } else if (checkBox.checked == false) {
            month[i].style.display = "block";
            year[i].style.display = "none";
        }
    }
}
switchBillingDuration();

function disableToggle() {
    document.getElementById("billing-period").style.display = "none";
}