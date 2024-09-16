import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFootballPlayerComponent } from './update-football-player.component';

describe('UpdateFootballPlayerComponent', () => {
  let component: UpdateFootballPlayerComponent;
  let fixture: ComponentFixture<UpdateFootballPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFootballPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFootballPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
