import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hubert-component',
  templateUrl: './hubert-component.component.html',
  styleUrls: ['./hubert-component.component.css']
})
export class HubertComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  visible: boolean = true;

  toggle() {
    this.visible = false;
  }

}
