var maleNames = ['Krzysztof', 'Ignacy', 'Wiktor'];
var femaleNames = ['Maria', 'Stefania', 'Katarzyna'];
var allNames = maleNames.concat(femaleNames);
var newName1 = 'Marian';
var newName2 = 'Maria';
if (allNames.indexOf(newName1) === -1) {
    allNames.push(newName1); 
}
if (allNames.indexOf(newName2) === -1) {
    allNames.push(newName2); 
}
console.log(allNames);