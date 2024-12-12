// var playerName = get from user input
var palyerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// default enemy's name
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// fiht function
var fight = function () {
  // alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

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
    window.confirm("Are you sure you'd like to quit?");
  }
};

fight();
