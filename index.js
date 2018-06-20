// learn static type
var firstname = 'adib';
var lastname = 'firman';
var myAge = 19;
var isTest = false;
function speak(food, energy) {
    console.log("My food is " + food + " has " + energy + " calories");
}
speak('banana', 0);
function speakFood(food) {
    console.log("The ingredients Food Is: " + food.name + " and then have calories " + food.calories);
}
speakFood({ name: 'Banana', calories: 0 });
// #--learn interfaces
