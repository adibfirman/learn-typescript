// learn static type
let firstname: string = 'adib'
let lastname: string = 'firman'
let myAge: number = 19
let isTest: boolean = false

function speak(food: string, energy: number): void {
  console.log(`My food is ${food} has ${energy} calories`)
}

speak('banana', 0)
// #--learn static type

// learn interfaces
interface MyFood {
  name: string,
  calories: number
}

function speakFood (food: MyFood): void {
  console.log(`The ingredients Food Is: ${food.name} and then have calories ${food.calories}`)
}

speakFood({ name: 'Banana', calories: 0 })
// #--learn interfaces
