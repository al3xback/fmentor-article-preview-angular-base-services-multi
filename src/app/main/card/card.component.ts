import { Component, OnInit } from '@angular/core';

import { Card } from '../../shared/card';
import { CardService } from '../../shared/card.service';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
	providers: [CardService]
})
export class CardComponent implements OnInit {
	card: Card;

	constructor(private cardService: CardService) {}

	ngOnInit() {
		this.card = this.cardService.getCard();
	}

	getAuthorPostDate() {
		const date = this.card.author.postDate;
		const day = date.getDate();
		const month = date.toLocaleString('en-US', {
			month: 'short'
		});
		const year = date.getFullYear();
		return `${day} ${month} ${year}`;
	}
}
