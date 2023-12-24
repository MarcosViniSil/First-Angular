import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  weight:number=0
  tall:number=0
  imc:string=""
  constructor(){}

  calculateIMC(){
    if(this.tall!==0){
      this.imc=(this.weight/(Math.pow(this.tall,2))).toFixed(5)
    }
    
  }
}
