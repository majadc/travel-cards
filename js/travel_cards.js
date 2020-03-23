let travelCardsItems = document.getElementsByClassName('travel-cards__scene-flip');
for ( var i of travelCardsItems ) {
	i.active = false;
	
}

for ( let item of travelCardsItems ) {
	var handler = function() {
		
		
		if ( item.classList.contains('travel-cards__item--is-inactive') ) {
			item.classList.remove('travel-cards__item--is-inactive');
			console.log('if1');
		}
		
		
		if ( item.classList.contains('travel-cards__tiem--is-flipped') ) {	
			item.active = false;
			console.log(i);
		} else {
			item.active = true;
		
		}
		item.classList.toggle('travel-cards__tiem--is-flipped');

			let travelCardsItemsInactive = document.getElementsByClassName('travel-cards__scene-flip');
			
			for ( let card of  travelCardsItemsInactive ) {
				//console.log(card);
				if ( card.classList.contains('travel-cards__tiem--is-flipped') && card.active === false   ) {
					card.classList.add('travel-cards__item--is-inactive');
					console.log('card');
					
				}
			}
			
		
		
	
	};
	item.addEventListener('click', handler);
}//for






