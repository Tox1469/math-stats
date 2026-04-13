function assertNonEmpty(values: readonly number[]): void {
  if (!values.length) throw new Error("values must be non-empty");
}

export function sum(values: readonly number[]): number {
  let s = 0;
  for (const v of values) s += v;
  return s;
}

export function mean(values: readonly number[]): number {
  assertNonEmpty(values);
  return sum(values) / values.length;
}

export function median(values: readonly number[]): number {
  assertNonEmpty(values);
  const s = [...values].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? (s[m - 1] + s[m]) / 2 : s[m];
}

export function mode(values: readonly number[]): number[] {
  assertNonEmpty(values);
  const counts = new Map<number, number>();
  for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1);
  const max = Math.max(...counts.values());
  return [...counts.entries()].filter(([, c]) => c === max).map(([v]) => v);
}

export function variance(values: readonly number[], sample = false): number {
  assertNonEmpty(values);
  const m = mean(values);
  let acc = 0;
  for (const v of values) acc += (v - m) ** 2;
  const n = sample ? values.length - 1 : values.length;
  if (n <= 0) return 0;
  return acc / n;
}

export function stdDev(values: readonly number[], sample = false): number {
  return Math.sqrt(variance(values, sample));
}

export function min(values: readonly number[]): number {
  assertNonEmpty(values);
  return Math.min(...values);
}

export function max(values: readonly number[]): number {
  assertNonEmpty(values);
  return Math.max(...values);
}

export function range(values: readonly number[]): number {
  return max(values) - min(values);
}

/** Linear interpolation percentile (0 <= p <= 100). */
export function percentile(values: readonly number[], p: number): number {
  assertNonEmpty(values);
  if (p < 0 || p > 100) throw new Error("p must be in [0,100]");
  const s = [...values].sort((a, b) => a - b);
  if (s.length === 1) return s[0];
  const idx = (p / 100) * (s.length - 1);
  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  if (lo === hi) return s[lo];
  return s[lo] + (s[hi] - s[lo]) * (idx - lo);
}

export function quartiles(values: readonly number[]): { q1: number; q2: number; q3: number } {
  return {
    q1: percentile(values, 25),
    q2: percentile(values, 50),
    q3: percentile(values, 75),
  };
}
