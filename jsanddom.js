     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
         var temp_str = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
         str = temp_str.split('').reverse().join('');
         return str;
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         // FILL THIS IN
         values = values.sort(funciton(a,b){
              return a-b;
         });
         return values[0];
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
         function unique(value, index, arr){
              return arr.indexOf(value)===index;
         }
         return values.filter(unique);
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
         for(var i=1;i<101;i++){
              if((i%3) == 0){
                    console.log('Fizz');
      
                    if((i%5) == 0){
                         console.log('FizzBuzz');
                    }
               }
               else if((i%5) == 0){
                    console.log('Buzz');
      
                    if((i%3) == 0){
                         console.log('FizzBuzz');
                    }
               }
               else{
                    console.log(i);
               }
         }
     }
     doFizzBuzz(); //Execute the function
     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
         var flen = fruits.length;
         var ftrlen = fruitsToRemove.length;
         var tmpfruits = fruits;
         for(var i=0;i<ftrlen;i++){
              for(var j=0;j<flen;i++){
               if(fruitsToRemove[i]==fruits[j]){
                tmpfruits.splice(j, 1);         
               }
              }
          }
          return fruits = tmpfruits;
     }
     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
         function isArr(myArr){
              return myArr.constructor.toString().indexOf("Array") > -1;
         }
         if(isArr(toPush)){
             for(var i=0;i<toPush.length;i++){
                  array.push(toPush[i]);
             }
         }
         else{
              array.push(toPush);
         }
         return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
         
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
         var sum = 0;
         for(var i=0; i<arguments.length;i++){
              sum += arguments[i];
         } 
         return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
          function usertrim(z) {
               return z.replace(/\s/g,'');
          }
          sourceStr = usertrim(sourceStr);
     
          if(!sourceStr.length){
               return true;
          }
     }

     // write an example of a javascript closure
     function showName (firstName, lastName){
          var nameIntro = "Your name is ";

          // this inner function has access to the outer function's variables, including the parameter
          function makeFullName (){         
            return nameIntro + firstName + " " + lastName;  
          }
          return makeFullName ();
     }
     showName ("Michael", "Jackson");



     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)

     people = [{"first name":" ABC", 
               "last name":" XYZ",
               "city":"New York", 
               "state":"NY", 
               "zip": 10001, 
               "phone":{"home": 1231231234, 
                        "work":2342343456,
                        "mobile": 6969565600
               }},
               {"first name":" ABC", 
               "last name":" XYZ",
               "city":"New York", 
               "state":"NY", 
               "zip": 10001, 
               "phone":{"home": 1231231234, 
                        "work":2342343456,
                        "mobile": 6969565600
               }}];


     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');



     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     var mydiv = document.getElementById("div1");
     var arr = ["Apple", "Samsung", "HTC", "Google", "Motorola"];
     var selectList = document.createElement("select");
     selectList.id = "mySelectID";
     mydiv.appendChild(selectList);
     for(var i=0;i<arr.length;i++){
          var option = document.createElement("option");
          option.value = arr[i];
          option.text = arr[i];
          selectList.appendChild(option);
     }
     var btn = document.createElement("button"); 
     btn.type = "button";
     btn.innerHTML = "Click and View Result in Console";
     btn.onclick = function(){
          var el = document.getElementById("mySelectID");
          console.log(el.options[el.selectedIndex].text, el.options[el.selectedIndex].value);
     };
     mydiv.appendChild(btn);

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
     $("a")
     $(".link")
     $("[href]")
     $("div.buzz")
     $("#fizz")
     
     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     var arr = ["Tea", "Coffee", "Hot Chocolate", "Milk", "Soda"];
     var ulelm = document.getElementById("list1");
     for(var i=0;i<arr.length;++i){
          var lielm = document.createElement("li");
          lielm.innerHTML = arr[i];
          ulelm.appendChild(lielm);
     }
     
     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     var fbdiv = document.getElementById("foobar");
     var arr1 = ["Cold Coffee", "Hot Chocolate", "Milk"];
     for(var i=0;i<arr1.length;++i){
          var chkbox = document.createElement("input");
          chkbox.type = "checkbox";
          chkbox.name = "Beverages";
          chkbox.value = arr1[i];
          chkbox.innerHTML = arr1[i];
          fbdiv.appendChild(chkbox);
     }




