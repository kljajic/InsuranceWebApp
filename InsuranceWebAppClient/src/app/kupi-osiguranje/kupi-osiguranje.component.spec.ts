import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KupiOsiguranjeComponent } from './kupi-osiguranje.component';

describe('KupiOsiguranjeComponent', () => {
  let component: KupiOsiguranjeComponent;
  let fixture: ComponentFixture<KupiOsiguranjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KupiOsiguranjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KupiOsiguranjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
