
// write a function that takes 2 arguments (only objects or primitive values) and compares them. If they are equal, log true. else log false

var object1 = {name: 'billy', 'number': 3};
var object2 = {name: 'billy', 'number': 3};

function equality(a,b){
    
    // checks if inputs are objects
    if(typeof a === 'object' && typeof b === 'object'){

    // takes the keys and values of the objects and puts them in 2 arrays
    var aKeys = Object.keys(a);
    var aValues = Object.values(a);
    var bKeys = Object.keys(b);
    var bValues = Object.values(b);

    // combines the two arrays and makes them strings to compare
    var sumArrayA = (aKeys + aValues);
    var sumArrayAString = sumArrayA.toString();
    var sumArrayB = (bKeys + bValues);
    var sumArrayBString = sumArrayB.toString();

        // compares 2 strings
        if(sumArrayAString === sumArrayBString){
            console.log(true)
        } else {
            console.log(false);
        }
    } else {
        // if inputs are not objects
        if(a === b){
            console.log(true);
        } else{
            console.log(false);
        }
    }
}

equality(object1, object2);

equality(3, 7);
