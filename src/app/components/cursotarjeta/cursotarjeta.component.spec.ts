import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursotarjetaComponent } from './cursotarjeta.component';

describe('CursotarjetaComponent', () => {
  let component: CursotarjetaComponent;
  let fixture: ComponentFixture<CursotarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursotarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursotarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
