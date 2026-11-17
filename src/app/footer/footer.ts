import { Component, input } from '@angular/core';
import { Level, ProficiencyGroup } from '../proficiency';

const LEVEL_SCORE: Record<Level, number> = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3
};

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  fullName = input.required<string>();
  proficiencies = input.required<ProficiencyGroup[]>();

  year = new Date().getFullYear();

  // Three bars per level meter.
  bars = [1, 2, 3];

  score(level: Level) {
    return LEVEL_SCORE[level];
  }
}
