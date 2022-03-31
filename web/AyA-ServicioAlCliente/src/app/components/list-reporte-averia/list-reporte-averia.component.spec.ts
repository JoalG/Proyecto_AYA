import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReporteAveriaComponent } from './list-reporte-averia.component';

describe('ListReporteAveriaComponent', () => {
  let component: ListReporteAveriaComponent;
  let fixture: ComponentFixture<ListReporteAveriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReporteAveriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReporteAveriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
