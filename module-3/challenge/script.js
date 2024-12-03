var madepw = document.querySelector('#makepw')
madepw.addEventListener('click', function () {
    var ရရှိခဲ့တဲ့စကားဝှက် = generatePassword();
    var displaypw = document.querySelector('#password')
    displaypw.value = ရရှိခဲ့တဲ့စကားဝှက်;
})

function generatePassword() {
    let passwordLength = parseInt(
        prompt("Enter password length (between 9 and 128):")
    );

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert('Invalid input. Please enter a number between 8 and 128.')
        return "";
    }

    let inCludeUpperCase = confirm("Include uppercase letters?");
    let inCludeLowerCase = confirm("Include lowercase letters?");
    let includeNumber = confirm("Include numbers?");
    let includeSpecialCharacter = confirm('Include special characters?');

    if (
        !inCludeUpperCase &&
        !inCludeLowerCase &&
        !includeNumber &&
        !includeSpecialCharacter
    ) {
        alert('At least one character type must be selected.');
        return "";
    }

    let availableChar = "";
    if (inCludeUpperCase) {
        availableChar += "่ดพะไำนวพะร็้ร.้รพ้";
    }
    if (inCludeLowerCase) {
        availableChar += "abcdeကခကစတနမ";
    }
    if (includeNumber) {
        availableChar += "1234567890";
    }
    if (includeSpecialCharacter) {
         availableChar += "အ အာ ဗ  ျ  ိ  ‌ျေိ်ါ့ြုူး'";
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * availableChar.length)
        password += availableChar.charAt(randomIndex)
    }

    return password;
}