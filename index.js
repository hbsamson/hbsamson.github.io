// function for validating if 2 passwords match
function validatePassword(a, b) {
	if (a == b) { // passwords match
		if (a.length >= 8 && b.length >= 8) { // the password has at least 8 characters
			var upperFlag = false;
			var lowerFlag = false;
			var numFlag = false;

			for (let i = 0; i < a.length; i++) { 
				if(a[i].toUpperCase() === a[i] && typeof(a[i]) != 'number') { // contains uppercase
					var upperFlag = true;
					// console.log(a[i], "has uppercase");
				}

				if(a[i].toLowerCase() === a[i] && typeof(a[i]) != 'number') { // contains lowercase
					var lowerFlag = true;
					// console.log(a[i], "has lowercase");
					
				}

				let strToNum = parseInt(a[i])  // converts str to num
				if(typeof(strToNum) == 'number') { // contains numbers
					var numFlag = true;
					// console.log(a[i], "has number");
				} else {
					
				}
			}

			if (upperFlag == true && lowerFlag == true && numFlag == true) {
				return true;
			} else {
				return false;
			}
		}
	} else { // passwords doesnt match
		return false;
	}
	
}

// function for reversing the password
function reversePassword(x) {
	var reversed = x.charAt(x.length);
	for (let i = x.length - 1; i >= 0; i--) {
		var reversed = reversed + x[i]
	}
	return reversed;
}

// function for storing the password to the object
function storePassword(inputName, pass1, pass2) {
	if (validatePassword(pass1, pass2)) {
		var reversedPassword = reversePassword(pass2);
		const user = {
			name: inputName,
			newpassword: reversedPassword,
		}
		return user;
	} else {
		const user = {
			name: inputName,
			newpassword: pass1,
		}
		return user;
	}
}

var nameInputForm = document.getElementById('name').value
var passwordInputForm = document.getElementById('password').value
var password2InputForm = document.getElementById('confirm-password').value

console.log(validatePassword("helloThere10", "helloThere10"));
console.log(reversePassword("hello"));
console.log(storePassword("Hannah", "passWord1", "passWord1"));
console.log(storePassword("Hannah", "passWord1", "passWord2"));

console.log(validatePassword(passwordInputForm, helloThere10));
console.log(storePassword(nameInputForm, passwordInputForm, password2InputForm));