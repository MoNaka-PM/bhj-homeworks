let counter = function () {
   const clickerCounter = document.getElementById("clicker__counter");
   clickerCounter.textContent ++ ;
   
      if (clickerCounter.textContent % 2 == 0) {
         let cookie = document.getElementById("cookie");
         cookie.width = 400;
      } else {
         cookie.width = 200;
      }
}
setInterval(counter, 300);