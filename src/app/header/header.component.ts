import { Component, OnInit } from '@angular/core';

import { ChallengeService } from '../shared/challenge.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	title: string;

	constructor(private challengeService: ChallengeService) {}

	ngOnInit() {
		this.title = this.challengeService.name;
	}
}
