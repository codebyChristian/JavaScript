
var numbers = [1,2,3,4,5,6,7,8,9,10];

total = 0;

for(var i = 0; i < numbers.length; i++ ){
    total += numbers[i];
}
console.log(total);

// reduce

var tot = numbers.reduce(function(total, number) {
    return total + number;
}, 0);

console.log(tot);

