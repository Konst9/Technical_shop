
let date = new Date(2023, 4, 12);
function getDate(date) {
  let days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
  ];
  let month = [
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
  ];
  let result = days[date.getDay()] +
    ", " +
    Math.floor(31 / date.getDate()) +
    " неделя " +
    month[date.getMonth()] +
    " " +
    date.getFullYear() +
    " года";
    return result;
}

  let res = document.querySelector(".card_date");

  document.addEventListener("DOMContentLoaded", function () {
    for (let res of document.querySelectorAll(".card_date")) {
      res.innerHTML = getDate(date);
    }
  });