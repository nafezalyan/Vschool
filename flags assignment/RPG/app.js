const readline = require('readline-sync')

let gameOver = false

const player = {
    name: "",
    health: 100,
    attackDamage: 50,
    healthBoosterPills: 3, //each preovide 20 units of health

}

const enemies = ["Zombie", "Grim Reaper", "Martian"]
enemyHealth = 250;
enemyAttackDamage = 40;

console.log("Welcome to the cool game!")
player.name = readline.question("What is your name?: ")
console.log(`Hello ${player.name}`)

while (!gameOver) {
    const playerChoice = readline.keyInSelect(["walk"], "What would you like to do?")

    if (playerChoice === 0) {
        walk()

    } else if (playerChoice === -1) {
        console.log("You can't cancel!")
    }

    function walk() {
        console.log("I am walking")

        const randomNum = Math.floor(Math.random() * 3)
        console.log(randomNum)
        if (randomNum !== 0) {
            walk()
        }
        if (randomNum === 0) {

            const enemy = enemies[Math.floor(Math.random() * enemies.length)]
            // const presentEnemyHealth = Math.floor(Math.random() * (75-25) +25)
            // console.log(presentEnemyHealth)
            // console.log(enemy)
            console.log("" + enemy + " has appeared and has " + enemyHealth + " HP points.")
            console.log("Your HP balance is " + player.health + ".")

            while (enemyHealth > 0) {
                const playerFightingChoice = readline.keyInSelect(["Attack", "Take health booster", "run"], "What would you like to do NOW?")
                if (playerFightingChoice === 0) {
                    const incurredDamageEnemy = Math.floor(Math.random() * (50 - 5) + 5)
                    const incurredDamagePlayer = Math.floor(Math.random() * (40 - 5) + 5)
                    enemyHealth -= incurredDamageEnemy;
                    player.health -= incurredDamagePlayer;
                    player.health += 10;
                    console.log("You defeated " + enemy + " and incurred " + incurredDamagePlayer + " damage points, while he incurred " + incurredDamageEnemy + " damage points. Your have " + player.health + " HP left.");

                    if (player.health < 1) {

                        console.log("You are too weak to fight!");

                        break;
                    }
                    if (enemyHealth < 1) {
                        console.log("" + enemy + ",you have no HP units to fight, you lose!");
                        break;
                    }

                    walk()
                }
                else if (playerFightingChoice === 1) {
                    if (player.healthBoosterPills > 0) {
                        player.healthBoosterPills--;
                        player.health += 20;
                        console.log("You took a health booster, you now have " + player.health + " Health points; and you have " + player.healthBoosterPills + " booster pills left.")
                    } else {
                        console.log("No more health booster pills available! Defeat enemies to get one. ")
                    }
                    walk()
                }
                else if (playerFightingChoice === 2) {
                    if (player.health > 0) {
                        player.health -= 20;
                        console.log("You ran away from " + enemy + " and incurred a 20 health units of damage while escaping. Your have " + player.health + " HP left.")
                        walk()
                    } else {
                        console.log("You have no HP units to run away, make another choice! ")
                    }

                }
                else {
                    console.log("Invalid choice!")
                }
                
            }           
    }
}
if (player.health < 1) {
    console.log("Game over!");
    return;
}
if (enemyHealth < 1) {
    console.log("You have lost the fight, game over!");
    return;
}
console.log("Thank you for playing!")
}  
       
            // const playerContinueChoice = readline.keyInSelect(["Continue fighting", "Exit the game!"], "What would you like to do now?")

            // if (playerContinueChoice === 0) {

            //     console.log("Continue your challenge!");
            //     walk()
            // }
            // else if (playerContinueChoice === 1) {
            //     console.log("You exit the game!");
            //     // break;
            // }
            
    


 //Game//

// console.log("Welcome to the cool game!")
// player.name = readline.question("What is your name?: ")
// console.log(`Hello ${player.name}`)
// while(!gameOver ){
//     const playerChoice = readline.keyInSelect(["walk"], "What would you like to do?")

//     if (playerChoice === 0){
//             walk()

//     } else if (playerChoice=== -1){
//         console.log("You can't cancel!")
//     }
// }
