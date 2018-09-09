// Given a list of numbers find the number of pairs that add to 0. Numbers are unique and will not repeat.
// Example: [-2, 1, 0, 2] => 1 pair since only -2 + 2 = 0

pairArray = [-1, 1, -3, 3, -4, 5, -6, 6, 0];
var counter = 0;
var sum;

pairArray.forEach(function(e){
    if (e === 0){
        counter -= 1;
    }
})

pairArray.forEach(function(e){
    for (let x = 0; x < pairArray.length; x++){
        sum = (pairArray[x] + e);
        if (sum === 0){
            counter += 1;
        }
    }
})

console.log(counter/2);



// Are they anagrams

function isAnagram(string1, string2){
    var newStr1 = removeStuff(string1);
    var newStr2 = removeStuff(string2);
    if(newStr1 === newStr2){
        console.log('This be anagram')
    } else {
        console.log('Trash');
    }
}

function removeStuff(str){
    str = str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join().replace(/,/g, '');
    return str;
}

isAnagram('donald trump', 'Lord Dampnut');


