export class CardService {
	private card = {
		title: 'Shift the overall look and feel by adding these wonderful touches to furniture in your home',
		description:
			"Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.",
		imageSrc: '/assets/images/drawers.jpg',
		author: {
			name: 'Michelle Appleton',
			imageSrc: '/assets/images/avatar.jpg',
			postDate: new Date(2020, 5, 28)
		}
	};

	getCard() {
		return this.card;
	}
}
