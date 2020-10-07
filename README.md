## qclone

the fastest function for deep clone js objects compatible with es6

*according to the author, this cloning script is the fastest in the industry(watch benchmarks)

### Install

npm install --save qclone

### Usage

const { qclone } = require('qclone');

or connect separate modules:

const qclone = require('qclone/src/qcloneStrictCircular');

```javascript
const newCloneObj = qclone({ foo: 1 });
```

### Features

- support for all new classes ES6;
- very quickly clone(qclone);
- correctly clone(qcloneStrict / qcloneStrictCircular);
- support circular objects(qcloneCircular / qcloneStrictCircular);
- library has no dependencies;

For more than 90% of cases, the algorithm is suitable - qclone.
If you lack it, for example, for cyclic objects or strict copying, you can use the following algorithms:

- qcloneStrict - for strict cloning(non-enumerable and Symbol properties);
- qcloneCircular - for cyclic objects (without strict cloning);
- qcloneStrictCircular - for strict cloning of cyclic objects;

### Benchmarks

For more balanced testing of performance, tests of other projects were used

```
Nodejs - v13.3.0
Date - 22.01.2020
```

[rfdc](https://github.com/davidmarkclements/rfdc) project test result

```
benchDeepCopy*100: 7776.478ms
benchLodashCloneDeep*100: 20040.199ms
benchFastCopy*100: 10990.298ms
benchRfdc*100: 4435.846ms
benchQclone*100: 3481.686ms
benchQcloneCircular*100: 5113.696ms
benchQcloneStrict*100: 47226.868ms
benchQcloneStrictCircular*100: 48079.723ms
benchRfdcProto*100: 4354.412ms
benchRfdcCircles*100: 5461.455ms
benchRfdcCirclesProto*100: 5541.977ms
```

[fast-copy](https://github.com/planttheidea/fast-copy) project test result

| Name                 | Ops / sec |
| -------------------- | --------- |
| qclone               | 2,069.919 |
| qcloneCircular       | 1,092.98  |
| fast-copy            | 674.629   |
| lodash.cloneDeep     | 323.661   |
| clone                | 323.007   |
| ramda                | 206.035   |
| deepclone            | 175.292   |
| qcloneStrictCircular | 156.258   |
| fast-copy (strict)   | 151.173   |
| fast-clone           | 125.238   |
| qcloneStrict         | 121.703   |


```
Nodejs - v14.9.0
Date - 01.10.2020
```

[klona](https://github.com/lukeed/klona) project test result

```
Benchmark :: json
  JSON.stringify         x 18,355 ops/sec ±0.68% (83 runs sampled)
  lodash                 x 19,501 ops/sec ±0.53% (87 runs sampled)
  rfdc                   x 90,519 ops/sec ±0.57% (88 runs sampled)
  clone                  x 16,963 ops/sec ±0.33% (88 runs sampled)
  clone/include          x 9,343 ops/sec ±0.70% (90 runs sampled)
  clone-deep             x 52,055 ops/sec ±0.79% (89 runs sampled)
  deep-copy              x 51,496 ops/sec ±0.22% (87 runs sampled)
  klona/full             x 21,732 ops/sec ±0.24% (92 runs sampled)
  klona                  x 114,363 ops/sec ±0.57% (89 runs sampled)
  klona/lite             x 127,689 ops/sec ±0.57% (88 runs sampled)
  klona/json             x 136,417 ops/sec ±0.23% (92 runs sampled)
  qclone                 x 141,203 ops/sec ±0.41% (90 runs sampled)

  Benchmark :: lite
  lodash                 x 14,211 ops/sec ±0.36% (92 runs sampled)
  clone                  x 14,738 ops/sec ±1.38% (87 runs sampled)
  clone/include          x 7,970 ops/sec ±0.67% (89 runs sampled)
  clone-deep             x 41,739 ops/sec ±0.47% (90 runs sampled)
  klona/full             x 18,371 ops/sec ±0.34% (89 runs sampled)
  klona                  x 89,160 ops/sec ±0.42% (91 runs sampled)
  klona/lite             x 97,288 ops/sec ±0.65% (90 runs sampled)
  qclone                 x 109,539 ops/sec ±0.27% (90 runs sampled)

*The next two tests below clone the keys for the Map class if those are objects. I do not consider this behavior to be correct, since the work for such keys is based on references and not values (most cloning libraries support my opinion).

  Benchmark :: default
  lodash                 x 14,529 ops/sec ±2.64% (82 runs sampled)
  clone                  x 31,979 ops/sec ±0.35% (88 runs sampled)
  clone/include          x 18,751 ops/sec ±0.50% (87 runs sampled)
  klona/full             x 30,788 ops/sec ±1.00% (88 runs sampled)
  klona                  x 77,617 ops/sec ±0.34% (91 runs sampled)
  qclone                 x 169,658 ops/sec ±0.59% (90 runs sampled)

  Benchmark :: full
  lBenchmark :: full
  lodash                 x 15,230 ops/sec ±3.17% (89 runs sampled)
  clone/include          x 13,651 ops/sec ±0.43% (86 runs sampled)
  klona/full             x 26,493 ops/sec ±2.05% (92 runs sampled)
  qclone(qcloneStrict)   x 39,462 ops/sec ±1.05% (90 runs sampled)
```

### License

MIT Yuriy Khomenko
