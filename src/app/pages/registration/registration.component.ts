import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { PagesRoutingModule } from '../pages-routing.module';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component ({
    selector: 'ngx-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit { 

    public input: any;

    public ngOnInit(){
    }

    public constructor(private router: Router, private http: Http) {
        this.input = {
            'firstName': '',
            'lastName': '',
            'userName': '',
            'password': '',
            'email': '',
            'roleId': '',
        };
    }

    public registrationSubmit(){
         // console.log( "Enter registrationSubmit" );
        if ( this.input.firstName && 
                this.input.lastName && 
                this.input.userName && 
                this.input.roleId && 
                this.input.email && 
                this.input.password){
            const headers = new Headers({ 'content-type': 'application/json' });
            const options = new RequestOptions({ headers: headers});
            this.http.post('http://localhost:8080/test-your-knowledge/insertUserOrAdmin', 
                JSON.stringify(this.input), options)
            .subscribe(result => {
                this.router.navigate(['/auth/login']);
            });
        }
        


    }
 
}

