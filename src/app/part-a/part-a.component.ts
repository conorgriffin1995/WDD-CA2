import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.css']
})
export class PartAComponent {

  constructor() { }

  fahrenheitVal:number;
  celciusVal:number;
  counter:number = 0;

  convert()
  {
    if(this.celciusVal && this.fahrenheitVal )
    {
      this.celciusToFar();
    }
    else if(this.celciusVal && !this.fahrenheitVal )
    {
      this.celciusToFar();
    }
    else{
      this.fahrenheitToCel();
    }
    this.counter++;
  }

  celciusToFar()
  {
    this.fahrenheitVal = (this.celciusVal * 9/5) + 32;
  }

  fahrenheitToCel()
  {
    this.celciusVal = (this.fahrenheitVal - 32) * 5/9;
  }


}
