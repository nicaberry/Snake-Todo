// создаём поле для Тодо
let ground = document.querySelector(".ground");

let matrica = [];
let divH;
let divV;
for (let i = 0; i < 50; i++) {
    divH = document.createElement("div");
    divH.className = "blockH";
    ground.appendChild(divH);
    matrica.push([]);
   
    for (let j = 0; j < 50; j++) {
      divV = document.createElement("div");
      divV.className = "blockV";
      divH.appendChild(divV);
      matrica[i].push(divV)
    }
    
}

// создаём тодо
let h = 25;
let v = 25;
let todo = [];
todo.push(matrica[h][v]);
todo[0].className = "todo";

// создаём части Тодо
function random() {
      return Math.floor(Math.random()*50);
   } 
   
   let todoPart;
   let hor;
   let ver;
   function part() {
       hor = random();
       ver = random();
      
      todoPart = matrica[hor][ver];
      todoPart.className = "todo1";
   }
   part();

// "Тодо - ЖИВ!!!"
let timer;
function life(trend) {
   
   timer = setInterval(function() {
      
      switch(trend) {
         case "right": v++;
         if ( v >= 50) {
            v = 0
           }; break;
         case "left": v--;
         if ( v < 0) {
            v = 49
           }; break;
         case "up": h--;
         if ( h < 0) {
            h = 49
           }; break;
         case "down": h++;
         if ( h >= 50) {
            h = 0
           }; break;
      }
     
      todo.unshift(matrica[h][v]);
      todo[0].className = "todo";
      let partNon = todo.splice(-1, 1);
      partNon[0].className = "blockV";
     
      // однородный Todo
      for (let i = 0; i < todo.length; i++) {
         todo[i].className = "todo";
      }
   
   // объединяем Тодо и его части
    if ( h == hor && v == ver) {
      part();
      todo.push(todo[0]);
   }
   
   }, 300);
}
life("right");  

// заставляем тодо менять направления по нажатию
window.addEventListener("keydown", run);
function run(event) {
   clearInterval(timer);
   switch(event.code) {
      case "ArrowDown" : life("down"); break;
      case "ArrowUp" : life("up"); break;
      case "ArrowRight": life("right");  break;
      case "ArrowLeft" : life("left"); break;
   }
};
