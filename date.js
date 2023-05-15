let p = document.querySelector(".card_date").textContent;
let time = new Date(p);
let res = document.querySelectorAll(".card_date");

function addLeadingZero(d) {
    return d<10 ? "0" + d : d;
}

const days = [        
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
];
const month = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря"
]


function getUserTime(t=time) {
        let Y = t.getFullYear();
        let M = month[t.getMonth()];
        let D = addLeadingZero(t.getDate());
        let W = Math.floor((D/7)+1);
        let d= days[t.getDay()]
        return `${d}, ${W} неделя ${M} ${Y} года`;
}

document.addEventListener("DOMContentLoaded", function () {
    for (let elem of res) {  
      elem.innerHTML = getUserTime();
    }
  });