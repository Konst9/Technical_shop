let buy_form = document.querySelectorAll('.card_buy');
for (let i=0; i<buy_form.length; i++) {
    buy_form[i].onclick = function(){
        let form = document.querySelectorAll(".window_buy")[0];
        form.style.display = 'block';
        
    }
};

let buy_form_close = document.querySelectorAll('.btn_close');
for (let i=0; i<buy_form_close.length; i++) {
    buy_form_close[i].onclick = function() {
        let form = document.querySelectorAll(".window_buy")[0];
        form.style.display = 'none';
    }
}

let buy_form_buy = document.querySelectorAll('.btn_buy');
for (let i=0; i<buy_form_buy.length; i++) {
    buy_form_buy[i].onclick = function() {
        let form = document.querySelectorAll(".window_buy")[0];
        form.style.display = 'none';
        alert("Спасибо за покупку!");
    }

}