import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-labinp',
  templateUrl: './labinp.component.html',
  styleUrls: ['./labinp.component.css']
})
export class LabinpComponent implements OnInit {
 @Input() valor:string;
  constructor() { }

  ngOnInit(): void {
  }

}
