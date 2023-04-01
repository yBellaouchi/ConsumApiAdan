import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeAPiComponent } from './consume-api.component';

describe('ConsumeAPiComponent', () => {
  let component: ConsumeAPiComponent;
  let fixture: ComponentFixture<ConsumeAPiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumeAPiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumeAPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
