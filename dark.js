let dark  = false;
let a = document.body;

function darkLight() {
    if (!dark) {
        a.className = "theme-dark";
    } else {
        a.className = "theme-light";
    }
    dark = !dark;
}