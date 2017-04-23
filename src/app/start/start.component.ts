import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent {

    constructor(private amazonService: AmazonService) {
    }

    public login(): void {
        this.amazonService.login();
    }
}
