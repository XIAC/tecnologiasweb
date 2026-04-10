import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponente } from './item-componente';

describe('ItemComponente', () => {
  let component: ItemComponente;
  let fixture: ComponentFixture<ItemComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
