import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsiguravajucaKucaComponent } from './osiguravajuca-kuca.component';

describe('OsiguravajucaKucaComponent', () => {
  let component: OsiguravajucaKucaComponent;
  let fixture: ComponentFixture<OsiguravajucaKucaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsiguravajucaKucaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsiguravajucaKucaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
