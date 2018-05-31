window.onload = function() {
	var form = document.getElementById('singup');

	var pass = form[2];
	var rePass = form[3];
	var age = form[5];
	var discription = form[7];

	rePass.onchange = function(event) {

		if (rePass.value != pass.value) {
			var spanRePass = document.getElementById('invalidPass');

			if (!spanRePass)
			{
				var span = document.createElement('span');
				span.innerHTML = 'Пароли не совпадают';
				span.style.color = 'red';
				span.style.display = 'inline-block';
				span.style.paddingLeft = '20px';
				span.id = 'invalidPass';
				rePass.parentNode.insertBefore(span, rePass);
			}
		}
		else {
			var span = document.getElementById('invalidPass');
			if (span) {
				var parent = span.parentNode;
				parent.removeChild(span);
			}
		}
	}

	rePass.onblur = function(event) {
		var spanRePass = document.getElementById('invalidPass');

		if (rePass.value == '' && spanRePass)
		{
			spanRePass.parentNode.removeChild(spanRePass);
		}
	}

	age.onkeypress = function(event) {
		
		if ((event.keyCode < 48) || (event.keyCode > 57)) {
			return false;
		}
	}

	age.onchange = function(event) {

		if (age.value.length > 3) {
			alert('Да ты долгожитель ;)');
		}
	}
}