console.log("Main.js loaded - hello");

$(function() {

	$('#city-type').on('focus', function() {
		$('#city-type').removeAttr('placeholder');
		if ($(this).val().length > 0) {
			$(this).val("");
		}
	});

	$('#submit-btn').on('click', function(a) {
		a.preventDefault();
		var cityName = checkTextBox();
		if (cityName !== 'false') {
			setBackgroundImage(cityName);
		}

	});

});

function checkTextBox() {
		var retVal;
		var boxText = $.trim($('#city-type').val());
		var boxLength = ($('#city-type').val()).length;
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

function isAlphaString(inputStr) {
  return /^[a-zA-Z ]+$/.test(inputStr);
}

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

