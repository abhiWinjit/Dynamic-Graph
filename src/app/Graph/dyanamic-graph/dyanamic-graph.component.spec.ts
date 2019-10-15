import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyanamicGraphComponent } from './dyanamic-graph.component';

describe('DyanamicGraphComponent', () => {
  let component: DyanamicGraphComponent;
  let fixture: ComponentFixture<DyanamicGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyanamicGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyanamicGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
