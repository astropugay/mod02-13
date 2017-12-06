/*Toggle button hide sidebar*/

var toggleIcon = document.querySelector('#toggleIcon');

toggleIcon.addEventListener('click', function() {

	console.log('toggleIcon is working'); /*for debugging*/

	var nav = document.querySelector('div.sidebar');
	nav.style.left = '-25%';

	var main = document.querySelector('div.content');
	main.style.width = '100%';
	
	var main = document.querySelector('div.content');
	main.style.marginLeft = '0';

	var toggleIcon = document.querySelector('#toggleIcon');
	toggleIcon.setAttribute('hidden', 'hidden');

	var toggleIcon1 = document.querySelector('#toggleIcon1');
	toggleIcon1.removeAttribute('hidden');

});


var toggleIcon1 = document.querySelector('#toggleIcon1');

toggleIcon1.addEventListener('click', function() {

	console.log('toggleIcon1 is working'); /*for debugging*/

	var nav = document.querySelector('div.sidebar');
	nav.style.left = '0%';

	var main = document.querySelector('div.content');
	main.style.width = '75%';
	
	var main = document.querySelector('div.content');
	main.style.marginLeft = '25%';

	var toggleIcon = document.querySelector('#toggleIcon');
	toggleIcon.removeAttribute('hidden');

	var toggleIcon1 = document.querySelector('#toggleIcon1');
	toggleIcon1.setAttribute('hidden', 'hidden');
	

});