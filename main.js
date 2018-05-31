window.onload = function()
{
	var btnDay = document.getElementsByClassName('popularity-day')[0];
	var btnWeek = document.getElementsByClassName('popularity-week')[0];
	var btnMonth = document.getElementsByClassName('popularity-month')[0];

	var allBtn = document.getElementsByClassName('pop');
	var allBlock = document.getElementsByClassName('block-pop');

	for(let i = 0; i < allBtn.length; i++)
		{
			allBtn[i].style.outline = "none";
		}

	function btnClick(event)
	{
		for(let i = 0; i < allBtn.length; i++)
		{
			if (allBtn[i].classList.contains('active'))
			{
				allBtn[i].classList.remove('active');
			}
		}

		for(let i = 0; i < allBlock.length; i++)
		{
			if (allBlock[i].classList.contains('active'))
			{
				allBlock[i].classList.remove('active');
			}
		}

		var target = event.target;
		target.classList.add('active');
		target.style.outline = "none";

		var num = target.dataset.num;

		var elemBlockPop = allBlock[num];

		elemBlockPop.classList.add('active');

	}


	btnDay.onclick = btnClick;
	btnWeek.onclick = btnClick;
	btnMonth.onclick = btnClick;
}