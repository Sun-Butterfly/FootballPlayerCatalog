import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFootballPlayerComponent } from './add-football-player.component';

describe('AddFootballPlayerComponent', () => {
  let component: AddFootballPlayerComponent;
  let fixture: ComponentFixture<AddFootballPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFootballPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFootballPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
