'use strict';






function one() {
let asking = prompt('Угадай число от 1 до 100');


      if (asking >= 100) {
            alert('Загаданное число меньше');
            
                        
                  function askOneMore() {
                  let asking = confirm('Введите новый вариант');
                        if (asking === true) {
                              return one();
                        }
                  }

                  askOneMore();
      }

         
      function two() {

            if (asking <= 1) {
                  alert('Загаданное число больше');
                 
                  function askOneMore() {
                        let asking = confirm('Введите новый вариант');
                              if (asking === true) {
                                    return one();
                              }
                  }

                  askOneMore();
                  
            }
            
            function three() {
                  
                  if (isNaN(parseFloat(asking)) || !isFinite(asking)) {
                        alert('Введи чиcло!');

                        function askOneMore() {
                              let asking = confirm('Введите новый вариант');
                                    if (asking === true) {
                                          return one();
                                    }
                        }
      
                        askOneMore();
                  }
            }

            three();
      }

      two();
}

one();
    

