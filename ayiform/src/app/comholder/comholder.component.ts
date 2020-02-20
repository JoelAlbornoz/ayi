import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comholder',
  templateUrl: './comholder.component.html',
  styleUrls: ['./comholder.component.css']
})
export class ComholderComponent implements OnInit {
  @Input() listaInputs: string[];
  constructor() { 
    
  }

  ngOnInit(): void {
    this.lista=this.listaInputs;
  }
  lista:string[];
}
