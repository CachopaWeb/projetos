import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormasPagtoComponent } from './formas-pagto.component';

describe('FormasPagtoComponent', () => {
  let component: FormasPagtoComponent;
  let fixture: ComponentFixture<FormasPagtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormasPagtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormasPagtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
