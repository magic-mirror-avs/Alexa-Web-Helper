import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AmazonService } from '../amazon.service';

interface AvsForm {
    clientId: string;
    clientSecret: string;
    deviceId: string;
}

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
    public formGroup: FormGroup;

    constructor(private amazonService: AmazonService, private formBuilder: FormBuilder) {
    }

    public login(): void {
        this.amazonService.login();
    }

    public ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            clientId: [
                '',
                Validators.required
            ],
            clientSecret: [
                '',
                Validators.required
            ],
            deviceId: [
                '',
                Validators.required
            ]
        });
    }

    public submitForm(value: AvsForm): void {
        localStorage.setItem('clientId', value.clientId);
        localStorage.setItem('clientSecret', value.clientSecret);
        localStorage.setItem('deviceId', value.deviceId);

        this.amazonService.login(value.clientId, value.deviceId);
    }
}
