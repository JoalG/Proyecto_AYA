import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFacturacionComponent } from './consultar-facturacion.component';

describe('ConsultarFacturacionComponent', () => {
  let component: ConsultarFacturacionComponent;
  let fixture: ComponentFixture<ConsultarFacturacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarFacturacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
