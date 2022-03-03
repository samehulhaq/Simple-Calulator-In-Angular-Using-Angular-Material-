      import { Component } from '@angular/core';
      import {MatInputModule} from '@angular/material/input';

      @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
      })
      export class AppComponent {
      title = 'blog';
      result:any;
      meter:any;
      ft:any;
      message:any;
      lbs:any;
      name='samehulhaq '
      store1:number=0;
      store2:number=0;
      temp1:any;
      temp2:any;
      isShown: boolean = false ;

      getTitle(){

      return this.title

      }
      formatLabel(value: number) {
        if (value >= 1000) {
          return Math.round(value / 1000) ;
        }
    
        return value+'lb';
      }
      sumFunc(num1:any,num2:any){
        this.isShown = ! this.isShown;

      this.lbs =(num2 * 0.454);
      this.ft =(num1 * 0.3046);
      this.store2=(this.lbs/(this.ft*this.ft));
      this.ft =(num1*0.3046);
      if(this.store2<16){
        this.result="Severely Underweight";
      }else if(this.store2>16.0 && this.store2<18.4){
        this.result="Underweight";
      }
      else if(this.store2>18.5 && this.store2<24.9){
        this.result="Normal";

      } else if(this.store2>30.0 && this.store2<34.9){
        this.result="Moderately Obese";
      }	
      else if(this.store2>35.0 && this.store2<39.9){
        this.result="Severely Obese";

      }else if(this.store2> 40.0){
        this.result="Morbidly Obese";
       }  
     }
   }
