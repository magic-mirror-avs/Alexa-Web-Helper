import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { environment } from '../environments/environment';

const clientId = 'amzn1.application-oa2-client.81574bebfb25437595d7376f44b54f8e';
const secret = '87d49f998b3a6507b8e6a08760cda274e1d44a22a2bebade9433b1e7445d66a5';
const scope = 'alexa:all';
const scopeData = {
    [scope]: {
        productID: 'magic_mirror_alexa',
        productInstanceAttributes: {
            deviceSerialNumber: 234
        }
    }
};
const responseType = 'code';
const redirectUri = `${environment.url}/authresponse`;

@Injectable()
export class AmazonService {

    constructor(private http: Http) {
    }

    public login(): void {
        const url = `https://www.amazon.com/ap/oa?client_id=${clientId}&scope=${encodeURIComponent(scope)}&scope_data=${encodeURIComponent(JSON.stringify(scopeData))}&response_type=${responseType}&redirect_uri=${encodeURI(redirectUri)}`;
        window.location.href = url;
    }

    public getTokens(code: string) {
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = new RequestOptions({ headers: headers });
        const postData = `grant_type=authorization_code&code=${code}&client_id=${clientId}&client_secret=${secret}&redirect_uri=${encodeURIComponent(redirectUri)}`;

        return this.http.post('https://api.amazon.com/auth/o2/token', postData, options).map(res => {
            return res.json() as AmazonTokenGrant;
        });
    }
}
