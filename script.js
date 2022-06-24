//obj for classes
const war = 'Warrior'
const mage = 'Mage'
const thief = 'Thief'
// init choice prompt and alert
let classChoice = prompt(`Choose your class; ${mage},${thief}, or ${war}`)
alert(`You chose the ${classChoice} class`)
//Mage path
if (classChoice === `Mage`) {
  let workChoice = prompt(
    `You are a 6th circle mage in the capital who will you work for: The Tower, The Government ,The Merchant Guild?`
  )
  if (workChoice === 'The Tower') {
    alert(
      `You have chosen ${workChoice}, you will do research on magic for the tower and eventually become the Tower Master.`
    )
  }
}
//Warrior Path
else if (classChoice === `Warrior`) {
  let workChoice = prompt(
    `You are a sword king in the capital who will you work for: The Mercenary Guild, The Royal Guard, or The Merchant Guild?`
  )
} else {
  let workChoice = prompt(
    `You are a High ranking member in the Theives Guild You can choose to stay in the Theives guild,work for the Government as a spy, or go out on you own as a lone Thief. What will you choose(Theives Guild, Spy, or Loner)`
  )
}

// let characterChoice = prompt(
//   `Choose your character: The mage, The Warrior ,or The thief`
// )
