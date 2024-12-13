// var playerName = get from user input
var palyerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// will loop enemy's name to make 3 round
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// fiht function (now with parameter for enemy's name)
var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    //   ask players if they would like to fight or run
    var promptFight = window.prompt(
      "Would you like to fight or skip? enter FIGHT OR SKIP to choose. "
    );

    // if player picks skip, confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "FIGHT") {
      // confirm player wants to skip
      var confirmSkip = confirm(
        "Are you sure you'd like to quit from this fight?"
      );

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(palyerName + " has decided to skip this fight. goodbye!");

        playerMoney -= playerAttack;
        window.alert("playerMoney - ", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth -= playerAttack;
    window.alert(
      palyerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player money for winning
      playerMoney += 20;
      // leave while loop when enemy dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  } // end of while loop
}; // end of fight function

// fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
  // if player is still alive, keep fighting
  if (playerHealth > 0) {
    // let player know what round they are in, remember that array's index start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  } else {
    // if player isn't alive, stop the game
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
}
