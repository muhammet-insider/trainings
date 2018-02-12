/*
Part 1

const numbers = [10,20,30,40,50];
const slice1 = numbers.slice(1,4);
const slice2 = numbers.slice.call(numbers, 1, 4);
const slice3 = numbers.slice.apply(numbers, [1, 4]);

console.log(slice1);
console.log(slice2);
console.log(slice3);
*/
/*
Part 2
without use strict


function func() {
    console.log(this === global);
}

func.call(null);
func.call(undefined);

func.apply(null);
func.apply(undefined);

*/

/*
Part 3
with use strict
*/
"use strict";
function func() {
    console.log(this === global);
}

func.call(null);
func.call(undefined);

func.apply(null);
func.apply(undefined);

