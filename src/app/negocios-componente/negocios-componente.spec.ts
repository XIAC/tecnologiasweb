import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociosComponente } from './negocios-componente';

describe('NegociosComponente', () => {
  let component: NegociosComponente;
  let fixture: ComponentFixture<NegociosComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegociosComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(NegociosComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
