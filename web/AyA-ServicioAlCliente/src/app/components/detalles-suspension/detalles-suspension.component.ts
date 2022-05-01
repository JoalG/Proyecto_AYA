import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles-suspension',
  templateUrl: './detalles-suspension.component.html',
  styleUrls: ['./detalles-suspension.component.css']
})
export class DetallesSuspensionComponent implements OnInit {

  @Input() id!: string;
  @Input() suspension!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
