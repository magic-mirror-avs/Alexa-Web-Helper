import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmazonService } from '../amazon.service';
import { Observable } from 'rxjs/Rx';

interface Config {
    module: string;
    position: string;
    config: {
        refreshToken?: string;
        wakeWord: string;
        clientId?: string;
        clientSecret?: string;
        deviceId?: string;
    };
}

@Component({
    selector: 'app-root',
    templateUrl: './auth-response.component.html',
    styleUrls: ['./auth-response.component.scss']
})
export class AuthResponseComponent implements OnInit {
    public config: Config;
    public amazonResponse: AmazonTokenGrant;
    private code: string;

    constructor(private amazonService: AmazonService, private route: Router) {
        this.code = route.parseUrl(route.url).queryParams['code'];
        this.config = {
            module: 'MMM-awesome-alexa',
            position: 'bottom_bar',
            config: {
                wakeWord: 'Alexa'
            }
        };
    }

    public ngOnInit(): void {
        this.config.config.clientId = localStorage.getItem('clientId');
        this.config.config.clientSecret = localStorage.getItem('clientSecret');
        this.config.config.deviceId = localStorage.getItem('deviceId');

        this.amazonService.getTokens(this.code, this.config.config.clientId, this.config.config.clientSecret).subscribe((res) => {
            console.log(res);
            const token = res.access_token;
            this.config.config.refreshToken = res.refresh_token;
            this.amazonResponse = res;
        });
    }
}
