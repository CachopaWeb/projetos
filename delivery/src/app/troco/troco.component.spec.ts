import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocoComponent } from './troco.component';

describe('TrocoComponent', () => {
  let component: TrocoComponent;
  let fixture: ComponentFixture<TrocoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrocoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
