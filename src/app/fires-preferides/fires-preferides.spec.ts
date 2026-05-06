import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiresPreferides } from './fires-preferides';

describe('FiresPreferides', () => {
  let component: FiresPreferides;
  let fixture: ComponentFixture<FiresPreferides>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiresPreferides]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiresPreferides);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
