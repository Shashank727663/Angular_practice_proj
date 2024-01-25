import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeakyBlindersComponent } from './peaky-blinders.component';

describe('PeakyBlindersComponent', () => {
  let component: PeakyBlindersComponent;
  let fixture: ComponentFixture<PeakyBlindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeakyBlindersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeakyBlindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
