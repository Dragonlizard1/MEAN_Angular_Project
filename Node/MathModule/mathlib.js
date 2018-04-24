module.exports = function (){
  return {
    add: function(num1, num2) { 
         return (num1 + num2);
    },
    multiply: function(num1, num2) {
        return (num1 * num2);
    },
    square: function(num) {
         return (num * num);
    },
    random: function(num1, num2) {
         let data = [num1,num2];
         return data[Math.floor(2 * Math.random())];
         
    }
  }
};
