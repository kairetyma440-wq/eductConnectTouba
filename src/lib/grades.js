// Règle RM-03 : moyenne pondérée par coefficient.
// Matière : devoir + composition (coef 2). Générale : chaque matière pondérée par son coefficient.
export const subjectAverage = ([, , devoir, compo]) => (devoir + 2 * compo) / 3;

export function generalAverage(grades) {
  const total = grades.reduce((s, g) => s + g[1], 0);
  if (!total) return 0;
  return grades.reduce((s, g) => s + subjectAverage(g) * g[1], 0) / total;
}

// Moyenne d'une liste de notes avec coefficients ; ignore les cases vides.
export function weightedAverage(values, weights) {
  let sum = 0;
  let coef = 0;
  values.forEach((v, i) => {
    if (v !== '' && v != null) {
      sum += Number(v) * weights[i];
      coef += weights[i];
    }
  });
  return coef ? sum / coef : null;
}

export const isValidGrade = (v) => v === '' || (Number(v) >= 0 && Number(v) <= 20);
