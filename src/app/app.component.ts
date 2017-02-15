import { Component } from '@angular/core';
import { AmazonService } from './amazon.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';

    constructor(private amazonService: AmazonService) {
    }

    public login(): void {
        this.amazonService.login();
    }
}
