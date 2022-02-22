      import { Component } from '@angular/core';
      import {MatInputModule} from '@angular/material/input';
      @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
      })
      export class AppComponent {
      title = 'blog';
      result:any=0;
      name='samehulhaq '
      getTitle(){

      return this.title

      }

      alertFunc(name:string,age:Number){
      console.log(name +" is "+ age +" Year Old");
      }


      formatLabel(value: number) {
        if (value >= 1000) {
          return Math.round(value / 1000) + 'k';
        }
    
        return value;
      }
      sumFunc(num1:any,num2:any){
      this.result="Sum = "+(parseInt(num1)+parseInt(num2));
      }

      minFunc(num1:any,num2:any){
      this.result= "Subtraction = "+(num1-num2);


      }
      mulFunc(num1:any,num2:any){
      this.result="Multiplication = "+(num1*num2);


      }
      divFunc(num1:any,num2:any){
      this.result="Division = "+(num1/num2);


          }

      
      }
