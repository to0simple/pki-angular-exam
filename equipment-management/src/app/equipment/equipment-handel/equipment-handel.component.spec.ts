import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentHandelComponent } from './equipment-handel.component';

describe('EquipmentHandelComponent', () => {
  let component: EquipmentHandelComponent;
  let fixture: ComponentFixture<EquipmentHandelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentHandelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentHandelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
