import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit{

  public formLogin!: FormGroup;

  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit(): void{
    this.formLogin = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
          Validators.minLength(10)
        ]

      ],
      
      email:['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      mensaje:['', 
        [
          Validators.required,
        ]
      ]
    })
  }
  CamposCorrectos = false
  send():any{
    this.CamposCorrectos = this.formLogin.valid;
  }

}
