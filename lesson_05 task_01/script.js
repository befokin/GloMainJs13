const doNum = function(a, b, callback) {
      if(typeof a === 'number' && typeof b === 'number' ) {
            callback(a, b);
      }
}

doNum(5, 10, function(a, b) {
      console.log(a + b);
});

function mult (a, b) {
      console.log(a * b);
}

doNum(10, 5, mult);