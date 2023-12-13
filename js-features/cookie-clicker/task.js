document.addEventListener("DOMContentLoaded", function() {
   let score = 0;
   const clickerCounter = document.getElementById("clicker__counter");
   const cookie = document.getElementById("cookie");
 
   cookie.addEventListener("click", function() {
     score++;
     clickerCounter.textContent = score;
 
     if (score % 2 === 0) {
       cookie.width = 400;
     } else {
       cookie.width = 200;
     }
   });
 });