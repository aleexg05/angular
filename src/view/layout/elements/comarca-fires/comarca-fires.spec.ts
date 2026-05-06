import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComarcaFires } from './comarca-fires';

describe('ComarcaFires', () => {
  let component: ComarcaFires;
  let fixture: ComponentFixture<ComarcaFires>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComarcaFires]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComarcaFires);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
