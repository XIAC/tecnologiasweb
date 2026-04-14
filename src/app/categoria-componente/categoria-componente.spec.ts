import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaComponente } from './categoria-componente';

describe('CategoriaComponente', () => {
  let component: CategoriaComponente;
  let fixture: ComponentFixture<CategoriaComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
