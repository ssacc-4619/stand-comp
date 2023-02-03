import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickerButtonComponent } from './clicker-button.component';

describe('ClickerButtonComponent', () => {
  let component: ClickerButtonComponent;
  let fixture: ComponentFixture<ClickerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ClickerButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
