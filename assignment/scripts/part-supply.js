console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
let partsNeeded = 40;
console.log('1. Number of partsNeeded:', partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log('2. Array of supplyChanges:', supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
let removedItem = supplyChanges.pop();
console.log('4. Removed item:', removedItem);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
supplyChanges.push(25);
console.log('5. Adding 25 to supplyChanges. supplyChanges:', supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
for(let i = 0; i < supplyChanges.length; i++){
  if(supplyChanges[i] > 0) { //if the value is positive
    console.log('Added', supplyChanges[i], 'parts.');
  } else if (supplyChanges[i] === 0) { //if the value is zero
    console.log('No Change.');
  } else if (supplyChanges[i] < 0) { //if the value is negative 
    console.log('Removed', supplyChanges[i], 'parts.');
  } else {
      console.log('Error: supplyChanges[', i, '] is neither >, <, or === 0. Check value of supplyChanges[', i, ']');
  }
}
console.log('6. Showing supplyChanges...');


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');

for (const qty of supplyChanges){
  if(qty > 0) { //if the value is positive
    console.log('Added', qty, 'parts.');
  } else if (qty === 0) { //if the value is zero
    console.log('No Change.');
  } else if (qty < 0) { //if the value is negative 
    console.log('Removed', qty, 'parts.');
  } else {
    console.log('Error:', qty, 'is neither >, <, or === 0. Check value of' qty);
  }
}

// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');
let a = 0;
while (a < supplyChanges.length) {
  if(supplyChanges[a] > 0) { //if the value is positive
    console.log('Added', supplyChanges[a], 'parts.');
  } else if (supplyChanges[a] === 0) { //if the value is zero
    console.log('No Change.');
  } else if (supplyChanges[a] < 0) { //if the value is negative (the only other option)
    console.log('Removed', supplyChanges[a], 'parts.');
  } else {
    console.log('Error: supplyChanges[', a, '] is neither >, <, or === 0. Check value of supplyChanges[', a, ']');
  }

  a++;
}

// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
let suppliesSum = 0;
for (const qty of supplyChanges){
  suppliesSum += qty;
}
console.log('9. Total supplies available is:', suppliesSum);
