import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTrackingComponent } from './my-tracking.component';

describe('MyTrackingComponent', () => {
  let component: MyTrackingComponent;
  let fixture: ComponentFixture<MyTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTrackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
