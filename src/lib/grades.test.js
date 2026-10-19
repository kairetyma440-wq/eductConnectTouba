import { describe, it, expect } from 'vitest';
import { subjectAverage, generalAverage, weightedAverage, isValidGrade } from './grades.js';

describe('moyennes', () => {
  it('calcule la moyenne d’une matière (devoir + composition coef 2)', () => {
    expect(subjectAverage(['Maths', 4, 15, 18])).toBeCloseTo(17, 5);
  });
  it('pondère la moyenne générale par coefficient', () => {
    const g = [['Maths', 4, 16, 16], ['Anglais', 2, 10, 10]];
    expect(generalAverage(g)).toBeCloseTo((16 * 4 + 10 * 2) / 6, 5);
  });
  it('ignore les notes vides', () => {
    expect(weightedAverage(['12', '', '16'], [1, 1, 2])).toBeCloseTo((12 + 32) / 3, 5);
    expect(weightedAverage(['', '', ''], [1, 1, 2])).toBeNull();
  });
  it('refuse les notes hors de 0 à 20', () => {
    expect(isValidGrade('21')).toBe(false);
    expect(isValidGrade('-1')).toBe(false);
    expect(isValidGrade('14.5')).toBe(true);
    expect(isValidGrade('')).toBe(true);
  });
});
