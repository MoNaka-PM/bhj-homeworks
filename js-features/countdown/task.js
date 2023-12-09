let countDown = function () {
   const timer = document.getElementById("timer"); //подключаем класс таймер для передачи значения
   timer.textContent -- ; // уменьшаем на 1 таймер

      if (timer.textContent <= 0) { // условие при нуле выводить сообщение о завершении игры 
         alert("Вы победили в конкурсе!");
         clearInterval(timerId); //сбрасываем таймер
         };
}
let timerId = setInterval(countDown, 500);