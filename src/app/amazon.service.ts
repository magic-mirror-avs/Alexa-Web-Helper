import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { environment } from '../environments/environment';

const CLIENT_ID = 'amzn1.application-oa2-client.81574bebfb25437595d7376f44b54f8e';
const CLIENT_SECRET = '87d49f998b3a6507b8e6a08760cda274e1d44a22a2bebade9433b1e7445d66a5';
const SCOPE = 'alexa:all';
const DEVICE_ID = 'magic_mirror_alexa';

const responseType = 'code';
const REDIRECT_URI = `${environment.url}/authresponse`;

@Injectable()
export class AmazonService {

    constructor(private http: Http) {
    }

    public login(clientId: string = CLIENT_ID, deviceId: string = DEVICE_ID): void {
        const SCOPE_DATA = {
            [SCOPE]: {
                productID: DEVICE_ID,
                productInstanceAttributes: {
                    deviceSerialNumber: 234
                }
            }
        };

        const url = `https://www.amazon.com/ap/oa?client_id=${clientId}&scope=${encodeURIComponent(SCOPE)}&scope_data=${encodeURIComponent(JSON.stringify(SCOPE_DATA))}&response_type=${responseType}&redirect_uri=${encodeURI(REDIRECT_URI)}`;
        window.location.href = url;
    }

    public getTokens(code: string, clientId: string = CLIENT_ID, clientSecret: string = CLIENT_SECRET) {
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = new RequestOptions({ headers: headers });
        const postData = `grant_type=authorization_code&code=${code}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

        return this.http.post('https://api.amazon.com/auth/o2/token', postData, options).map(res => {
            return res.json() as AmazonTokenGrant;
        });
    }
}
