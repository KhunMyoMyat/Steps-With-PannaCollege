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
  //   ask players if they would like to fight or run
  var promptFight = window.prompt(
    "Would you like to fight or skip? enter FIGHT OR SKIP to choose. "
  );

  // if player chooses to fight, -- fight-
  if (promptFight === "fight" || promptFight === "FIGHT") {
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

    //   check player's health
    if (playerHealth <= 0) {
      window.alert(palyerName + " has died!");
    } else {
      window.alert(palyerName + " still has " + playerHealth + " health left.");
    }
    //   if player chooses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    //   confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //   if yes (true), leave fight
    if (confirmSkip) {
      window.alert(palyerName + " has decided to skip this fight. goodbye!");
      playerMoney -= -2;
      //   if no (false), ask question again by running fight() again
    } else {
      fight();
    }
    //   if player did not chose 1 or 2 in prompt
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }
  // end of fight function
};

// run fight function to start game
fight();
