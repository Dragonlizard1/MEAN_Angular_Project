var _ = {
   map: function() {
     //code here;
   },
   reduce: function() { 
     // code here;
   },
   find: function() {   
     // code here;
   },
   filter: function(arr, callback) 
   { 
		var newarr = [];
		var num1;
		for(var i = 0; i < arr.length; i++)
		{

			if (callback(arr[i]))
			{
				newarr.push(arr[i]);
			}
			
			// invoking the callback many times... delegation!
    }
		return newarr;
   },
   reject: function() { 
     // code here;
   }
 }
//  function each(arr, callback) {
//     // loop through the array
//     for(var i = 0; i < arr.length; i++) {
//       callback(arr[i]); // invoking the callback many times... delegation!
//     }
//   }


var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].