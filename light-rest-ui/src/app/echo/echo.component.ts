import { Component } from '@angular/core';
import { EchoService } from '../service/echo.service';
import{Datos} from './interface/datos'

@Component({
  selector: 'app-echo',
  templateUrl: './echo.component.html',
  styleUrls: ['./echo.component.scss']
})
export class EchoComponent {
  constructor(private readonly _echoService:EchoService){
  }
  dato:Datos={
    word:''
  };
  aniadir(){
    this._echoService.create(this.dato).subscribe(res=>console.log(res))
  }
}
