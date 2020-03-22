// let travelCardsItems = document.getElementsByClassName('travel-cards__item-flip__scene');

// for ( let item of travelCardsItems ) {
// 	var handler = function() {
// 		console.log(item);
// 		item.classList.toggle('is-flipped');
	
// 	};
// 	console.log(item.getElementsByTagName('h3'));
// 	item.addEventListener('click', handler);
// }


// document.addEventListener('click', function(e) {
// 	e = e || window.event;
// 	var target = e.target || e.srcElement,
// 		text = target.textContent || target.innerText;   
// 		console.log(target);
// }, false);





let travelCardsItems = document.getElementsByClassName('travel-cards__item-flip__scene');

for ( let item of travelCardsItems ) {
	var handler = function(e) {
		event.preventDefault();
		var target = e.target;
		if ( target.nodeName != 'IMG') {
			item.classList.toggle('is-flipped');
		} else {
			let itemImg = item.getElementsByClassName('travel-cards__image');
			item.getElementsByClassName('travel-cards__image')[0].classList.add('show-image');
			console.log(item.children[0].children[0].children[0]);
		}
	
	};
	item.addEventListener('click', handler);
}