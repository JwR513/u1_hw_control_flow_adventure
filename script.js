//obj for classes
const war = 'Warrior'
const mage = 'Mage'
const thief = 'Thief'
// init choice prompt and alert

const button = document.getElementById('btn')

const gamePlay = () => {
  let classChoice = prompt(`Choose your class; ${mage},${thief}, or ${war}`)
  alert(`You chose the ${classChoice} class`)
  //Mage path

  if (classChoice == `Mage`) {
    let workChoice = prompt(
      `You are a 6th circle mage in the capital who will you work for: The Tower, The Government ,The Merchant Guild?`
    )
    if (workChoice == 'The Tower') {
      let goalChoice = prompt(
        `You have chosen ${workChoice}, you will do research on magic for the tower and eventually become the Tower Master. As tower master you must choose to pursue 1 of 2 goals for The Tower Research or Making mages into soldiers.(1 for research and 2 for soldiers)`
      )
    } else if (goalChoice == 1) {
      alert(
        'The Tower pursues research into magic and creates advanced machines and potions using magic and the country enters a magical revolution.'
      )
    } else {
      alert(
        'The Tower pursues turning mages into soldiers and eventually begin a war with a rival country leading to the destruction of both countries'
      )
    }
    if (workChoice == 'The Government') {
      alert(
        'You join the government and become the highest rank a mage can achieve.'
      )
    }
  }
  //Warrior Path
  else if (classChoice == `Warrior`) {
    let workChoice = prompt(
      `You are ${classChoice} and a sword king level swordsman in the capital who will you work for: The Mercenary Guild, The Royal Guard, or The Merchant Guild?`
    )
  } else {
    let workChoice = prompt(
      `You are a High ranking member in the Theives Guild You can choose to stay in the Theives guild,work for the Government as a spy, or go out on you own as a lone Thief. What will you choose(Theives Guild, Spy, or Loner)`
    )
  }
}
button.addEventListener('click', gamePlay)
