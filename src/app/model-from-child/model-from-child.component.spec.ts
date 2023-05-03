import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFromChildComponent } from './model-from-child.component';

describe('ModelFromChildComponent', () => {
  let component: ModelFromChildComponent;
  let fixture: ComponentFixture<ModelFromChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelFromChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelFromChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
