import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsiguravajuceKuceComponent } from './osiguravajuce-kuce.component';

describe('OsiguravajuceKuceComponent', () => {
  let component: OsiguravajuceKuceComponent;
  let fixture: ComponentFixture<OsiguravajuceKuceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsiguravajuceKuceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsiguravajuceKuceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
