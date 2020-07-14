import { Horas } from 'src/app/_models/horas';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { first } from 'rxjs/operators';
import {User} from 'src/app/_models/user';
import { AlertService, UserService, AuthenticationService } from '../_services';

@Component({ selector: 'agendar',templateUrl: 'agendar.component.html' })
export class AgendarComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    cliente: string; 
    lugar:string;
    numpersonas: string;
    descripcion: string;
    fecha: string;
   
    
    

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
      
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            cliente: ['', Validators.required],
            lugar: ['', Validators.required],
            numpersonas: ['', Validators.required],
            descripcion: ['', [Validators.required, Validators.minLength(6)]],
            fecha: ['', Validators.required]
            
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        

        this.loading = true;
        this.userService.crearHora(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Hora Agendada', true);
                    this.router.navigate(['/logged/agendadas']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    


        

        




    
}
