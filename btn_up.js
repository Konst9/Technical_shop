let btn = document.querySelector('.btnUp');

function btnHide() {
    if (window.pageYOffset > 1) {
        btn.style.opacity = '1';
    } else {
        btn.style.opacity = '0'
    }
}
 window.onscroll = btnHide;

document.querySelector('.btnUp').onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

