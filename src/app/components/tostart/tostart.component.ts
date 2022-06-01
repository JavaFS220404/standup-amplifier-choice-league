import { Component, OnInit } from '@angular/core';
import { Start } from 'app/models/start';


@Component({
  selector: 'app-tostart',
  templateUrl: './tostart.component.html',
  styleUrls: ['./tostart.component.css']
})
export class TostartComponent implements OnInit {
start:Start= new Start("Fa77","revature");
visibility:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  tostart(){
    this.visibility = !this.visibility;
  }

}
