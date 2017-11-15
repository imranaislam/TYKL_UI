import { Component, Input, OnInit } from '@angular/core';
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
    public validateFirstName;
    public validateLastName;
    public validateUsername;
    public validatePassword;
    public validateConfirmPwd;
    public validationEmail;
    public validationRadioBtn;
    public validPassword;
    public radio1;

    @Input() regPassword;
    @Input() regConfirmPwd;

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

    public matchPwd(e){
        this.regConfirmPwd = this.regConfirmPwd;
        this.input.password = this.input.password;

        if (this.regConfirmPwd != this.input.password){
          this.validPassword = 'Password did not match';
            console.log(this.regConfirmPwd);
            console.log(this.input.password);
            return this.validPassword;
        }
    }

    public registrationSubmit(){
         // console.log( "Enter registrationSubmit" );

         const fName = (document.getElementById('firstName')) as HTMLInputElement;
         const fNameVal = fName.value;

         if (fNameVal === ''){
             console.log(fName)
             this.validateFirstName = 'Please Enter First Name';
             return;
         }

         const lName = (document.getElementById('lastName')) as HTMLInputElement;
         const lNameVal = lName.value;

         if (lNameVal === ''){
             console.log(lName)
             this.validateLastName = 'Please Enter Last Name';
             return;
         }

         const uName = (document.getElementById('userName')) as HTMLInputElement;
         const uNameVal = uName.value;

         if (uNameVal === ''){
             console.log(uName)
             this.validateUsername = 'Please Enter User Name';
             return;
         }

         const password = (document.getElementById('regPassword')) as HTMLInputElement;
         const passwordVal = password.value;

         if (passwordVal === ''){
             console.log(password)
             this.validatePassword = 'Please Enter Password';
             return;
         }

         const confirmpwd = (document.getElementById('regConfirmPwd')) as HTMLInputElement;
         const confirmPwdVal = confirmpwd.value;

         if (confirmPwdVal === ''){
             console.log(confirmpwd)
             this.validateConfirmPwd = 'Please Re-enter Password';
             return;
         }

         const email = (document.getElementById('email')) as HTMLInputElement;
         const emailVal = email.value;

         if (emailVal === ''){
             console.log(email)
            this.validationEmail = 'Please Enter email address';
            return;
        }
        // else {
        //     this.validationEmail = null;
        // }

        // const userRoleRadio = (document.getElementById('radio1')) as HTMLInputElement;
        // const userRoleRadioVal = userRoleRadio.checked;

        // console.log(userRoleRadioVal);
        // if (userRoleRadioVal === false){
        //     this.validationRadioBtn = 'Please select user type';
        //     return;
        // }
        // else {
        //     this.validationRadioBtn = null;
        // }


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

