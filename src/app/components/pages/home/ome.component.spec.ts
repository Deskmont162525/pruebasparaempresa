import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmeComponent } from './ome.component';

describe('OmeComponent', () => {
  let component: OmeComponent;
  let fixture: ComponentFixture<OmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
