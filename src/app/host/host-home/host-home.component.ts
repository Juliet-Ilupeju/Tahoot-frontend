import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-host-home',
  templateUrl: './host-home.component.html',
  styleUrls: ['./host-home.component.css']
})
export class HostHomeComponent implements OnInit {

  @Input() public name: string = "John Gyamfi Doe";
  @Output() public nameEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.nameEmitter.emit(this.name);
  }


}
