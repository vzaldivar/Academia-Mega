import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej2waybindingComponent } from './ej2waybinding.component';

describe('Ej2waybindingComponent', () => {
  let component: Ej2waybindingComponent;
  let fixture: ComponentFixture<Ej2waybindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ej2waybindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ej2waybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
