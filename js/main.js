let travelCardsItems = document.getElementsByClassName('travel-cards__scene-flip');

for ( let item of travelCardsItems ) {
	var handler = function() {
		console.log(item);
		item.classList.toggle('is-flipped');
	
	};
	item.addEventListener('click', handler);
}






