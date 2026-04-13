[![CI](https://img.shields.io/github/actions/workflow/status/Tox1469/math-stats/ci.yml?style=flat-square&label=ci)](https://github.com/Tox1469/math-stats/actions)
[![License](https://img.shields.io/github/license/Tox1469/math-stats?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Tox1469/math-stats?style=flat-square)](https://github.com/Tox1469/math-stats/releases)
[![Stars](https://img.shields.io/github/stars/Tox1469/math-stats?style=flat-square)](https://github.com/Tox1469/math-stats/stargazers)

---

# math-stats

Funcoes estatisticas basicas em TypeScript puro, sem dependencias.

## Instalacao

```bash
npm install math-stats
```

## Uso

```ts
import { mean, median, stdDev, percentile } from "math-stats";

mean([1, 2, 3, 4]);
median([1, 2, 3, 4, 5]);
stdDev([2, 4, 4, 4, 5, 5, 7, 9]);
percentile([1, 2, 3, 4, 5], 90);
```

## API

- `sum`, `mean`, `median`, `mode`.
- `variance(values, sample?)`, `stdDev(values, sample?)`.
- `min`, `max`, `range`.
- `percentile(values, p)`, `quartiles(values)`.

## Licenca

MIT