function fib() {
  var sum = 1;
  var num1 = 0;
  var num2 = 0;
 
  function nacci() {
    
    console.log(sum);
    num1 = num2;
    num2 = sum;
    sum = num1 + num2;
    
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"