import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFootballPlayersComponent } from './all-football-players.component';

describe('AllFootballPlayersComponent', () => {
  let component: AllFootballPlayersComponent;
  let fixture: ComponentFixture<AllFootballPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllFootballPlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFootballPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
