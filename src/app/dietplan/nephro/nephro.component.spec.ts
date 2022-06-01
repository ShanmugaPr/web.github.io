import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NephroComponent } from './nephro.component';

describe('NephroComponent', () => {
  let component: NephroComponent;
  let fixture: ComponentFixture<NephroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NephroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NephroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
