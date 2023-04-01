import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form:FormGroup
  ht:number
  tva:number
  ttc:number
  showResults:boolean;
  constructor() {
    this.showResults=false;
    this.form=new FormGroup(
      {
        pu:new FormControl('',[Validators.required,Validators.pattern("^[0-9]|$")]),
        qte:new FormControl('',[Validators.required,Validators.pattern("^[0-9]|$")])
      }
    )
  }

  ngOnInit(): void {
  }

  onSubmit():void{
      this.ht=this.form.controls['qte'].value*this.form.controls['pu'].value;
      this.tva=this.ht*0.2;
      this.ttc=this.ht+this.tva;
      this.showResults=true;
  }

}
