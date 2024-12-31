const generateBt = document.querySelector(".generate-pw-bt");

generateBt.addEventListener("click", function () {
  // call generated pw here
  let password = generatePasswordProcess();
  // get id of show pw area
  let showPwArea = document.querySelector("#show-pw-area");
  // display pw we have generated
  showPwArea.value = password;
});

// let generatePasswordProcess = function () {
//   let passwordQuantity = parseInt(
//     prompt("Enter quantity of password between 12 and 100. ")
//   );

//   if (
//     isNaN(passwordQuantity) ||
//     passwordQuantity < 12 ||
//     passwordQuantity > 100
//   ) {
//     alert("Please enter only numbers between 12 and 100");
//     return "";
//   }

//   let inCludeUpperCase = confirm("Include Upper letters?");
//   let inCludeLowerCase = confirm("Include Lower letters?");
//   let includeNumber = confirm("Include Numbers?");
//   let includeSpecialCharacter = confirm("Include Special Characters?");

//   if (
//     !inCludeUpperCase &&
//     !inCludeLowerCase &&
//     !includeNumber &&
//     !includeSpecialCharacter
//   ) {
//     alert("at lease choose one type of characters");
//     return "";
//   }

//   let availableChar = " ";
//   if (inCludeUpperCase) {
//     availableChar += "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
//   }
//   if (inCludeLowerCase) {
//     availableChar += "abcdefghijklnmopqrstuvwxyz";
//   }
//   if (includeNumber) {
//     availableChar += "1234567890";
//   }
//   if (includeSpecialCharacter) {
//     availableChar += "!@#$%^&*()_+}{[]?/";
//   }

//   let randomPw = "";
//   for (let i = 0; i < passwordQuantity; i++) {
//     let randomIndex = Math.floor(Math.random() * availableChar.length);
//     randomPw += availableChar.charAt(randomIndex);
//   }

//   return randomPw;
// };

function generatePasswordProcess() {
  let passwordQuantity;

  do {
    passwordQuantity = parseInt(
      prompt("Enter quantity of password between 8 and 128")
    );

    if (
      isNaN(passwordQuantity) ||
      passwordQuantity < 8 ||
      passwordQuantity > 128
    ) {
      alert("Invalid input. please enter a number only between 8 and 128.");
    }
  } while (
    isNaN(passwordQuantity) ||
    passwordQuantity < 8 ||
    passwordQuantity > 128
  );

  let inCludeUpperCase = confirm("Include Uppercase letters?");
  let inCludeLowerCase = confirm("Include Lowercase letters?");
  let includeNumber = confirm("Include Numbers?");
  let includeSpecialCharacter = confirm("Include Special Characters?");
}
