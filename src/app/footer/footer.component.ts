import { Component, OnInit } from '@angular/core';

import { ChallengeService } from '../shared/challenge.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	creator: { name: string; link: string };
	coder: { name: string; gitHubLink: string };

	constructor(private challengeService: ChallengeService) {}

	ngOnInit() {
		this.creator = this.challengeService.creator;
		this.coder = this.challengeService.coder;
	}
}
