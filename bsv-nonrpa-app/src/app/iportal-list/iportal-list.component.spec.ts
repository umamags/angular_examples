import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IportalListComponent } from './iportal-list.component';

describe('IportalListComponent', () => {
  let component: IportalListComponent;
  let fixture: ComponentFixture<IportalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IportalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IportalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
