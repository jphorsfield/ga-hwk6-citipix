console.log("Main.js loaded - hello");

$(function() {

	// Remove Placeholder value on focus and also clear any text for subsequent retries
	$('#city-type').on('focus', function() {
		$('#city-type').removeAttr('placeholder');
		if ($(this).val().length > 0) {
			$(this).val("");
		}
	});

	// When the user clicks on the submit button prevent form from being submitted and
	// then call function to check the contents of the input box
	// finally if there is a vlaid value in there run the function to 
	// change the background image
	$('#submit-btn').on('click', function(a) {
		a.preventDefault();
		var cityName = checkTextBox();
		if (cityName !== 'false') {
			setBackgroundImage(cityName);
		}

	});

});

//This function validates the input box contents
// 1 - remove leading & trailing whitespace using the .trim() function
// 2 - Calculate length of entered value - use trimmed length not raw input
// 3 - Call RegEx function to check value is Alpha only (Internal whitespace allowed)
// 4 - Alert user is entered value fails validation
// 5 - If successful return trimmed string to calling function
function checkTextBox() {
		var retVal;
		var boxText = $.trim($('#city-type').val());
		var boxLength = boxText.length;
		var alphaCheck = isAlphaString(boxText);
		if (boxLength === 0 || alphaCheck === false)
		{
			alert('There must be a city name in the input box')
			retVal = 'false';
			return retVal;
		}
		else {
			return boxText;
		}
	}

//RegEx for determining if Alpha characters used or whitespace
function isAlphaString(inputStr) {
  return /^[a-zA-Z ]+$/.test(inputStr);
}

//This function runs a switch statement to check the users input, wanted to try this 
//instead of if else if - not much of a performance difference at this scale
//just think it looks cleaner to read
//When matched to the input value (Have set to lowercase at the outset to handle odd input)
//the body background image is changed
function setBackgroundImage(inputVal) {
	inputVal = inputVal.toLowerCase();
	switch (inputVal) {
		case 'new york':
		case 'new york city':
		case 'nyc':
			$('body').css("background", "url(./images/nyc.jpg) no-repeat center center fixed");
			$('body').css("-webkit-background-size", "cover");
			$('body').css("-moz-background-size", "cover");
			$('body').css("-o-background-size", "cover");
			break;
		case 'san francisco':
		case 'sf':
		case 'bay area':
			$('body').css("background", "url(./images/sf.jpg) no-repeat center center fixed");
			$('body').css("-webkit-background-size", "cover");
			$('body').css("-moz-background-size", "cover");
			$('body').css("-o-background-size", "cover");
			break;
		case 'los angeles':
		case 'lax':
		case 'la':
			$('body').css("background", "url(./images/la.jpg) no-repeat center center fixed");
			$('body').css("-webkit-background-size", "cover");
			$('body').css("-moz-background-size", "cover");
			$('body').css("-o-background-size", "cover");
			break;
		case 'austin':
		case 'atx':
			$('body').css("background", "url(./images/austin.jpg) no-repeat center center fixed");
			$('body').css("-webkit-background-size", "cover");
			$('body').css("-moz-background-size", "cover");
			$('body').css("-o-background-size", "cover");
			break;
		case 'sydney':
		case 'syd':
			$('body').css("background", "url(./images/sydney.jpg) no-repeat center center fixed");
			$('body').css("-webkit-background-size", "cover");
			$('body').css("-moz-background-size", "cover");
			$('body').css("-o-background-size", "cover");
			break;
		default:
			$('body').css("background", "url(./images/citipix_skyline.jpg");
			$('body').css("-webkit-background-size", "cover");
			$('body').css("-moz-background-size", "cover");
			$('body').css("-o-background-size", "cover");
			break;

	}
}

