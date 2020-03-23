let travelCardsItems = document.getElementsByClassName('travel-cards__scene-flip');

for ( let item of travelCardsItems ) {
	var handler = function() {
		console.log(item);
		item.classList.toggle('travel-cards__tiem--is-flipped');
	
	};
	item.addEventListener('click', handler);
}






