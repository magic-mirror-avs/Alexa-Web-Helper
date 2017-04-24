import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AmazonService } from '../amazon.service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-root',
    templateUrl: './auth-response.component.html',
    styleUrls: ['./auth-response.component.scss']
})
export class AuthResponseComponent implements OnInit {
    public config: any;
    private code: string;

    constructor(private amazonService: AmazonService, private activatedRoute: ActivatedRoute, private route: Router) {
        this.code = route.parseUrl(route.url).queryParams['code'];
    }

    public ngOnInit(): void {
        this.amazonService.getTokens(this.code).subscribe((res) => {
            console.log(res);
            const token = res.access_token;
            const refreshToken = res.refresh_token;

            this.config = {
                module: "MMM-awesome-alexa",
                config: {
                    refreshToken: refreshToken
                }
            };
        });
    }
}
