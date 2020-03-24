let travelCardsScenes = document.getElementsByClassName('travel-cards__scene-flip');

for ( let item of travelCardsScenes ) {

	var handler = function() {
		if (item.classList.contains('travel-cards__tiem--is-flipped') )  {
			item.classList.remove('travel-cards__tiem--is-inactive');
			item.classList.remove('travel-cards__tiem--is-flipped');
		} 
		else {
			item.classList.add('travel-cards__tiem--is-flipped');
			let travelCardsItemsInactive = document.getElementsByClassName('travel-cards__tiem--is-flipped');
			for ( let card of  travelCardsItemsInactive ) {
				if (card.classList.contains('travel-cards__tiem--is-flipped') && item != card) {
					card.classList.add('travel-cards__tiem--is-inactive');
				}

			}
		}
	};
	item.addEventListener('click', handler);
}//for

let travelCardItems = document.getElementsByClassName('travel-cards__item');
let travelCardsAnimeOneCardDelayStep = 300;
let travelCardsAnimeOneCardDelay = travelCardsAnimeOneCardDelayStep;
for ( let item of travelCardItems ) {

	item.setAttribute('style', `animation-delay: ${travelCardsAnimeOneCardDelay}ms`);
	travelCardsAnimeOneCardDelay = travelCardsAnimeOneCardDelayStep + travelCardsAnimeOneCardDelay;
}





