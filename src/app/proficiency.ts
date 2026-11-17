export type Level = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Proficiency {
  tool: string;
  level: Level;
}

// One category (for example "Languages") and the items inside it.
export interface ProficiencyGroup {
  category: string;
  items: Proficiency[];
}
