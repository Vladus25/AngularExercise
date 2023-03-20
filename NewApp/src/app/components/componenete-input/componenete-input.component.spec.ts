import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponeneteInputComponent } from './componenete-input.component';

describe('ComponeneteInputComponent', () => {
  let component: ComponeneteInputComponent;
  let fixture: ComponentFixture<ComponeneteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponeneteInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponeneteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
