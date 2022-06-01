import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-silvan-component',
  templateUrl: './silvan-component.component.html',
  styleUrls: ['./silvan-component.component.css']
})
export class SilvanComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  visible:boolean = true;

  toggle(){
    this.visible = false;
  }

}
