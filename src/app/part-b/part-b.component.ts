import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-part-b',
  templateUrl: './part-b.component.html',
  styleUrls: ['./part-b.component.css']
})
export class PartBComponent {

  constructor() { }

  stoneVal:number;
  poundVal:number;
  kilogramVal:number;

  feetVal:number;
  inchVal:number;
  metreVal:number;

  BMIVal:number;
  range:string;


  stoneAndPoundToKilogram()
  {
    this.kilogramVal = (this.stoneVal * 6.35029) + (this.poundVal * 0.453592);
  }

  kilogramToStoneAndPound(){
    this.stoneVal = (this.kilogramVal * 0.157473);
    this.poundVal = (this.kilogramVal * 2.20462);
  }

  feetAndInchToMetre()
  {
    this.metreVal = (this.feetVal * 0.3048) + (this.inchVal * 0.0254);
  }

  metreToFeetAndInch()
  {
    this.feetVal = (this.metreVal * 3.28084);
    this.inchVal = (this.metreVal * 39.3701);  
  }

  convert()
  {
    
    this.BMIVal = this.kilogramVal/(this.metreVal*this.metreVal);

    if(this.BMIVal >= 18.5 && this.BMIVal <= 25)
    {
      this.range = "Normal range";
    }
    else if(this.BMIVal > 25){
      this.range = "Overweight range";
    }
    else{
      this.range = "Underweight range";
    }

  }



}
