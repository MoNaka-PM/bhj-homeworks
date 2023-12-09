const dead = document.getElementById("dead"); // передаем значение из класса dead (убито кротов)
const lost = document.getElementById("lost"); // передаем значение из класса lost(промахов)
let countDead = 0; // создаем переменную для количества убитых кротов, исходное значение 0
let countLost = 0; // создаем переменную для количества промахов, исходное значение 0

getHole = index => document.getElementById(`hole${index}`);// выбор дыры по index, файл base.js (строка 6)

for (holeIndex = 1; holeIndex < 10; holeIndex++) { //делаем цикл
   let hole = getHole(holeIndex); // функция, которая запустится по клику
  
   hole.onclick = function() { // обработчик события по клику
      if ( hole.classList.contains('hole_has-mole')) { // если крот в лунке
       countDead++; // увеличиваем число убитых кротов
       dead.textContent = countDead; //выводим число убитых в html
     } else { // если не в лунке 
       countLost++; //увеличиваем чило промахов 
       lost.textContent = countLost; //выводим число убитых в html
     }  
     checkGameStatus(); // ФУнкция проверки статуса выиграл или проиграл
   }
  }

  function checkGameStatus() {
    if (countDead === 10) { //задаем условие если в переменной убитых кротов значение 10,
   alert("Вы выиграли"); //выводит алерт что вы выиграли
   resetGame(); // запускаем функцию сброса значения
   } else if (countLost === 5) { //задаем условие если в переменной промахов значение 5,
   alert("Вы проиграли"); //выводит алерт что вы проиграли
   resetGame(); // запускаем функцию сброса значения
  }
}
function resetGame() {
   countDead = 0; //сбрасываем счетчик на ноль
   countLost = 0; //сбрасываем счетчик на ноль
   dead.textContent = countDead; //выводим число убитых в html
   lost.textContent = countLost; //выводим число промахов в html
}
