import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ice-age',
  templateUrl: './ice-age.component.html',
  styleUrls: ['./ice-age.component.css']
})
export class IceAgeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  visible:boolean = true;

  toggle(){
    this.visible = !this.visible;
  }
}
