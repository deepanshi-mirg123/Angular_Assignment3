import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ValidationErrors: any[string]
  title = 'form';
  reactiveForm: FormGroup;
  text: any;
  firstname: any;


  ngOnInit() {
    this.reactiveForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z]+$'),]],
      lastname: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z]+$')]],
      email: ['', [Validators.email]],
      country: ['India'],
      gender: []
    })
  }

  onSubmit() {
    console.log(this.reactiveForm);
    alert('Data sucessfully submitted');
  }

  constructor(private fb: FormBuilder) { }
}
