var language = window.navigator.userLanguage || window.navigator.language;
language = language.toLowerCase();

function initLanguage()
{
	// English: begins with 'en'
	// Nederlands: 'nl' and not 'be' in it
	// Vlaams: 'nl' and 'be' in it
	// Deutsch: begins with 'de'
	if (language.indexOf('nl') === 0)
	{
		if (language.indexOf('be') > -1)
		{
			showForCountry('be');
		}
		else
		{
			showForCountry('nl');
		}
	}
	else if (language.indexOf('de') === 0)
	{
		showForCountry('de');
	}
	else
	{
		showForCountry('eu');
	}
}

function showForCountry(country)
{
	// Hide all containers
	var mainDivs = document.getElementById('content').getElementsByTagName('div');

	for (var i = 0, limitI = mainDivs.length; i < limitI; i++)
	{
		if (mainDivs[i].className.indexOf('country-content') > -1)
		{
			mainDivs[i].style.display = 'none';
		}
	}

	// Switch nl or be flags
	var flags = document.getElementById('header').getElementsByTagName('li');

	for (var j = 0, limitJ = flags.length; j < limitJ; j++)
	{
		if (
			(flags[j].className.indexOf('be') > -1 && language.indexOf('be') === -1) ||
			(flags[j].className.indexOf('nl') > -1 && language.indexOf('be') > -1))
		{
			flags[j].style.display = 'none';
		}
		else
		{

			flags[j].style.display = 'block';
		}
	}

	// Show one container
	var countryElement = document.getElementById('country-' + country);
	countryElement.style.display = 'block';
	var buttonElement = document.getElementById('country-button-' + country);
	buttonElement.style.display = 'block';

	document.title = document.getElementById('hidden-title-' + country).innerHTML;
}

function addEvent(el, ev, fn)
{
	if (el.addEventListener)
	{
		el.addEventListener(ev, fn, false);
	}
	else if (el.attachEvent)
	{
		el.attachEvent('on' + ev, fn);
	}
	else
	{
		el['on' + ev] = fn;
	}
}

initLanguage();
