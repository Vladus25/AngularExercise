import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponeneteOutputComponent } from './componenete-output.component';

describe('ComponeneteOutputComponent', () => {
  let component: ComponeneteOutputComponent;
  let fixture: ComponentFixture<ComponeneteOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponeneteOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponeneteOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
