let travelCardsItems = document.getElementsByClassName('travel-cards__item-flip__scene');

for ( let item of travelCardsItems ) {
	var handler = function() {
		console.log(item);
		item.classList.toggle('is-flipped');
	
	};
	console.log(item.getElementsByTagName('h3'));
	item.addEventListener('click', handler);
}






