export type MilestoneState = 'done' | 'active' | 'locked';

export type Milestone = {
  /** Successful pickups in a row needed to claim it. */
  goal: number;
  /** Baht off the next order. */
  reward: number;
  state: MilestoneState;
};

/** Where the demo buyer currently stands. */
export const CURRENT_STREAK = 2;

export const MILESTONES: readonly Milestone[] = [
  { goal: 3, reward: 30, state: 'done' },
  { goal: 5, reward: 50, state: 'active' },
  { goal: 10, reward: 100, state: 'locked' },
];
