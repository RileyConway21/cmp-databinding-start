import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverElementComponent } from './sever-element.component';

describe('SeverElementComponent', () => {
  let component: SeverElementComponent;
  let fixture: ComponentFixture<SeverElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeverElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeverElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
