import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevjegyComponent } from './nevjegy.component';

describe('NevjegyComponent', () => {
  let component: NevjegyComponent;
  let fixture: ComponentFixture<NevjegyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NevjegyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NevjegyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
