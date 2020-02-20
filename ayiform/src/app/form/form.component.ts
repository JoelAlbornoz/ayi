import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 @Input() recLista: string[];
  constructor() {
    
   }

  ngOnInit(): void {
    this.listaCampos = this.recLista;
  }
  listaCampos : string[];
 
}
