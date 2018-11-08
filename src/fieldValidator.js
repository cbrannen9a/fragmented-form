const validatorMessage = (valid, message) => {
	return valid ? '' : message;
};

const validateCvv = (number) => {
	var regex = new RegExp("^[0-9]{3}$");
	if (!regex.test(number)) { return false; }

	return true;
}

const validateExpDate = (expdate) => {
	var today, someday;
	var fields = expdate.split('/')
	var exMonth = fields[0]
	var exYear = '20' + fields[1]

	today = new Date();
	someday = new Date();
	someday.setFullYear(exYear, exMonth, 1);

	if (someday > today) {
		return true;
	}
	return false;
}

const validateCardNumber = (number) => {
	var regex = new RegExp("^[0-9]{16}$");
	if (!regex.test(number)) { return false; }

	return luhnCheck(number);
}

const luhnCheck = (val) => {
	var sum = 0;
	for (var i = 0; i < val.length; i++) {
		var intVal = parseInt(val.substr(i, 1));
		if (i % 2 === 0) {
			intVal *= 2;
			if (intVal > 9) {
				intVal = 1 + (intVal % 10);
			}
		}
		sum += intVal;
	}
	return (sum % 10) === 0;
}

export const fieldValidator = (name, value) => {

	let valid = false;
	let message = '';

	switch (name) {
		case 'firstName':
			valid = value.trim().length > 0;
			message = validatorMessage(
				valid,
				'Please enter a First Name');
			break;

		case 'lastName':
			valid = value.trim().length > 0;
			message = validatorMessage(
				valid,
				'Please enter a Last Name');
			break;

		case 'address1':
			valid = value.trim().length > 0;
			message = validatorMessage(
				valid,
				'Please enter an address Line');
			break;

		case 'city':
			valid = value.trim().length > 0;
			message = validatorMessage(
				valid,
				'Please enter a city');
			break;

		case 'country':
			valid = value.trim().length > 0;
			message = validatorMessage(
				valid,
				'Please enter a country');
			break;

		case 'zip':
			valid = value.trim().length > 0;
			message = validatorMessage(
				valid,
				'Please enter a Zip/Postal Code');
			break;

		case 'cardName':
			valid = value.trim().length > 0;
			message = validatorMessage(
				valid,
				'Please enter the name on the card');
			break;

		case 'cardNumber':
			valid = validateCardNumber(value.trim());
			message = validatorMessage(
				valid,
				'Please enter a valid card number');
			break;

		case 'cvv':
			valid = validateCvv(value.trim());
			message = validatorMessage(
				valid,
				'Please enter a valid cvv');
			break;

		case 'expDate':
			valid = validateExpDate(value.trim());
			message = validatorMessage(
				valid,
				'Please enter a valid Expiry Date');
			break;


		default:
			break;
	}

	return [valid, message];
};

export const formValidator = (validation, area) => {
	if (area === 'addressForm') {
		return !validation.firstName
			|| !validation.lastName
			|| !validation.address1
			|| !validation.city
			|| !validation.zip
			|| !validation.country
	}

	if (area === 'paymentForm') {
		return !validation.cardName
			|| !validation.cardNumber
			|| !validation.expDate
			|| !validation.cvv
	}

	return true;
}