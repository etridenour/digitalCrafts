var str = '1/2 cup mirin';



let word1 = 'cup';
let word2 = '1/2';

if (str.search(word1) >= 0 || str.search(word2) >= 0){
    '1/2 cup mirin'.replace('cup', '');
    console.log(str);
} else if (str.search(word1) >= 0) {

} else if (str.search(word2) >= 0) {

}


 var blah = str.replace('cup', '');



var myDick = ['1/2', 'cup']
var item = '1/2 cup mirin htt';
var yeah = ''

// function removeWord(ingredientItem){
//     var stringArray = item.split([' ']);
//     myDick.forEach(function (e){
//         if (ingredientItem.search(e) >= 0){
//             var ingredientSearch = ingredientItem.replace(e, '');
//             yeah += ingredientSearch;
//         }
        
//     })
// }
// console.log(yeah);

// var splits = item.split([' ']);
// console.log(splits);


var stringArray = item.split([' ']);
stringArray = stringArray.filter(val => !myDick.includes(val));
console.log(stringArray);
var final = stringArray.toString();
console.log(final);


