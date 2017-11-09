import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HTTPTestService {

    constructor (private myhttp: Http) {}

    getCurrentTime() {
        return this.myhttp.get("http://localhost:8080/ERS/all")
            .map(Response => Response.json());
    }
    

}