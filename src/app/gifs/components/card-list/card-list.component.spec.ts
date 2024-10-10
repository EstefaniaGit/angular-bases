import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListComponent } from './card-list.component';

describe('CardsListComponent', () => {
  let component: CardsListComponent;
  let fixture: ComponentFixture<CardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
