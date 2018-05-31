var loc = window.location.href;
loc = loc.slice(loc.indexOf('?') + 1);

if (loc == 'wrong_password=1')
{
	createTooltip('Пароль был введен неправильно', '#d82929');
}
else if (loc == 'successful_create_theme=1' && document.getElementsByClassName('tooltip')[0] === undefined)
{
	createTooltip('Тема создана успешно', '#26e03b');
}
else if (loc == 'success_create_news=1' && document.getElementsByClassName('tooltip')[0] === undefined)
{
	createTooltip('Новость создана успешно', '#26e03b');
}

var createTheme = document.getElementsByClassName('create-new-theme')[0];
var createDiss = document.getElementsByClassName('create-new-discuss')[0];

if (createDiss !== undefined)
{
	createDiss.onclick = function(event) {
		if (createDiss.dataset.user == '')
		{
			createTooltip('Вы не авторизированы на сайте, пожалуйста авторизируйтесь!', '#d82929');
			return false;
		}

		if (document.getElementsByClassName('new-disscussion-theme')[0])
		{
			return false;
		}
	}
}

if (createTheme !== undefined)
{
	createTheme.onclick = function(event) {
		event.preventDefault();
		if (createTheme.dataset.user == '')
		{
			createTooltip('Вы не авторизированы на сайте, пожалуйста авторизируйтесь!', '#d82929');
			return false;
		}

		if (document.getElementsByClassName('new-disscussion-theme')[0])
		{
			return false;
		}

		var label = document.createElement('label');
		var span = document.createElement('span');
		span.innerHTML = 'Название темы';

		var form = document.createElement('form');
		form.method = "POST";
		form.action = "../new/new_theme_discuss.php";
		form.classList.add('new-disscussion-theme');
		var title = document.createElement('input');
		title.type = 'text';
		title.name = 'title-discussion-theme';

		var submit = document.createElement('input');
		submit.type = 'submit';
		submit.value = 'Создать';

		label.append(span);
		label.append(title);
		form.append(label);
		form.append(submit);

		createTheme.parentNode.append(form);

		form.onsubmit = function(event) {
			if (form[0].value == '') 
			{
				createTooltip('Вы не заполнили поле темы', '#d82929');
				return false;
			}
		}
	}
}

var newComment = document.getElementsByClassName('new_comment')[0];

if (newComment !== undefined) {
	newComment.onsubmit = function(event) {
		if (newComment[2].dataset.user == '')
		{
			createTooltip('Вы не авторизированы на сайте, пожалуйста авторизируйтесь!', '#d82929');
			return false;
		}
		if (newComment[1].value == '')
		{
			createTooltip('Вы не заполнили поле комментария', '#d82929');
			return false;
		}
	}
}

var createDissFromNews = document.getElementsByClassName('new_discuss_from_news')[0];
console.dir(createDissFromNews);

if (createDissFromNews !== undefined) {
	createDissFromNews.onsubmit = function(event) {
		if (createDissFromNews[1].dataset.user == '')
		{
			createTooltip('Вы не авторизированы на сайте, пожалуйста авторизируйтесь!', '#d82929');
			return false;
		}
	}
}


function createTooltip(msg, color) {
	var containerTooltip = document.createElement('div');
	var tooltipText = document.createElement('p');
	var crIconCancel = document.createElement('i');

	containerTooltip.classList.add('tooltip');
	tooltipText.classList.add('tooltip-text');
	crIconCancel.classList.add('icon-cancel');

	containerTooltip.appendChild(tooltipText);
	containerTooltip.appendChild(crIconCancel);

	tooltipText.innerHTML = msg;
	tooltipText.style.color = color;
	crIconCancel.innerHTML = 'X';

	var content = document.getElementById('content');
	var container = document.getElementsByClassName('container')[0];

	container.insertBefore(containerTooltip, content);

	crIconCancel.onclick = function(event) {
		var tooltip = document.getElementsByClassName('tooltip')[0];
		tooltip.parentNode.removeChild(tooltip);
	}
}