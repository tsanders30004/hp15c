var currentNumber;
var operator;

$(function(){
	$('.number').click(function(){
		var number = $(this).text();
		var currentDisplay = $('#display').val();
		var newDisplay = currentDisplay + number;
		$('#display').val(newDisplay);
	});

	$('.operator').click(function(){
		operator = $(this).text();
		currentNumber = Number($('#display').val());
		$('#display').val('');
	});

	$('.evaluate').click(function(){
		var newNumber = Number($('#display').val());
		var result;
		if (operator && currentNumber) {
			if (operator === '+') {
				result = currentNumber + newNumber;
			} else if (operator === '-') {
				result = currentNumber - newNumber;
			} else if (operator === '*') {
				result = currentNumber * newNumber;
			} else if (operator === '/') {
				result = currentNumber / newNumber;
			}
			$('#display').val(result);
		}
	});
});




