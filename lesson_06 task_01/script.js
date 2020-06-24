'use strict';



function one() {
let asking = prompt('Угадай число от 1 до 100');


      if (asking >= 100) {
            alert('Загаданное число меньше');
            let asking2 = confirm('Введите новый вариант');
                        
                        if (asking2 === true) {
                              return one();
                        }
      }

      
      function two() {

            if (asking <= 1) {
                  alert('Загаданное число больше');
                  let asking2 = confirm('Введите новый вариант');
                        
                  if (asking2 === true) {
                        return one();
                  }
                  
            }
            
            function three() {

                  if (isNaN(parseFloat(asking)) && isFinite(asking)) {
                        alert('Введи чиcло!');
                        let asking2 = confirm('Введите новый вариант');
                        
                              if (asking2 === true) {
                                    return one();
                              }
                  }
            }

            three();
      }

      two();
}

one();

    

           

                  // function foor() {
                  //       if ()
                  // }


// two();

// three();

// if (asking > 100) {
//       console.log('"Загаданное число меньше"', '"Введите новый вариант"');
// } else if (asking < 1) {
//       console.log('"Загаданное число больше"', '"Введите новый вариант"');
// } else if (asking )